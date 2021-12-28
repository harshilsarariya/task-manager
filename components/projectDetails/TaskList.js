import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { SwipeListView } from "react-native-swipe-list-view";
import { db } from "../../firebase";

const LeftAction = () => (
  <View style={styles.leftAction}>
    <Text style={styles.textAction}>Done</Text>
  </View>
);

const TaskList = () => {
  const [info, setInfo] = useState([]);

  useLayoutEffect(() => {
    const unsubscribe = db
      .collection("Projects")
      .doc("M4xAO9WxbyF2Umu95W6V")
      .collection("task")
      .onSnapshot((snapshot) =>
        setInfo(
          snapshot.docs.map((doc) => ({
            data: doc.data(),
          }))
        )
      );
    return unsubscribe;
  });
  // console.log(info);
  return (
    <SwipeListView
      style={{ height: 620 }}
      showsVerticalScrollIndicator={false}
      data={info}
      renderItem={(data) => (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={{ color: "black", fontSize: 20, fontWeight: "800" }}>
              {data.item.data.taskName}
            </Text>
            <Text style={{ color: "#1DC2A3", fontSize: 20 }}>•</Text>
          </View>
          <View style={styles.dateAndUser}>
            <View style={styles.date}>
              <Entypo name={"calendar"} style={{ marginRight: 10 }} size={20} />
              <Text>{data.item.data.dueDate.toDate().toDateString()}</Text>
            </View>
            <Image
              source={require("../../assets/images/avtar.jpg")}
              style={styles.userImage}
            />
          </View>
        </View>
      )}
      keyExtractor={(data, index) => index.toString()}
      renderHiddenItem={LeftAction}
      disableRightSwipe
      // leftOpenValue={100}
      rightOpenValue={-100}
    />
  );
};

export default TaskList;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateAndUser: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  date: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    color: "#D0D0D0",
  },
  userImage: {
    height: 25,
    width: 25,
    borderRadius: 50,
    marginLeft: 20,
    marginTop: 20,
  },
  leftAction: {
    backgroundColor: "#AB96ED",
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
    height: 105,
    borderRadius: 20,
  },
  textAction: {
    color: "#fff",
    fontSize: 25,
    left: 220,
    marginTop: 17,
  },
});
