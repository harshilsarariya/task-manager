import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { db } from "../../firebase";

const ProjectCard = ({ navigation }) => {
  const [info, setInfo] = useState([]);

  useLayoutEffect(() => {
    const unsubscribe = db
      .collection("Projects")
      .orderBy("createdAt")
      .onSnapshot((snapshot) =>
        setInfo(
          snapshot.docs.map((doc) => ({
            data: doc.data(),
          }))
        )
      );
    return unsubscribe;
  });
  return (
    <ScrollView style={{ height: 670 }} showsVerticalScrollIndicator={false}>
      {info.map((data, index) => (
        <TouchableOpacity
          key={index}
          style={styles.container}
          onPress={() => navigation.navigate("ProjectDetails")}
          activeOpacity={0.8}
        >
          <View style={styles.cardContainer}>
            <Image
              source={require("../../assets/images/avtar.jpg")}
              style={styles.userImage}
            />
            <View style={styles.card}>
              <View>
                <Text style={styles.taskCount}>12/12tasks • 100%</Text>
                <Text style={styles.name}>{data.data.Name}</Text>
              </View>
              <Image
                source={require("../../assets/images/task.png")}
                style={styles.image}
              />
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ProjectCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6F4BFF",
    height: 180,
    borderRadius: 20,
    marginBottom: 20,
  },
  cardContainer: {},
  userImage: {
    height: 25,
    width: 25,
    borderRadius: 50,
    marginLeft: 20,
    marginTop: 20,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskCount: {
    paddingLeft: 15,
    color: "#F0DEFF",
    fontWeight: "bold",
  },
  name: {
    paddingTop: 10,
    paddingLeft: 15,
    fontSize: 23,
    color: "#FFF5FF",
    fontWeight: "bold",
  },
  image: {
    height: 100,
    width: 100,
    marginRight: 30,
    marginTop: 20,
  },
});
