import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { db } from "../../firebase";

const ToDoList = () => {
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
    <View style={styles.container}>
      <Text style={styles.heading}>To Do</Text>
      <ScrollView horizontal>
        {info.map((data, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            style={styles.boxContainer}
          >
            <Text style={styles.category}>SuperApp</Text>
            <Text style={styles.title}> {data.data.taskName}</Text>
            <Text style={styles.date}>
              {data.data.dueDate.toDate().toDateString()}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity activeOpacity={0.8} style={styles.boxContainer}>
          <Text style={styles.category}>SuperApp</Text>
          <Text style={styles.title}>Redesign home screen</Text>
          <Text style={styles.date}>till 10 May 2021</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  boxContainer: {
    fontSize: 20,
    width: 140,
    backgroundColor: "#EFF0FB",
    height: 130,
    borderRadius: 20,
    padding: 15,
    margin: 10,
    marginTop: 20,
    elevation: 0.5,
    shadowColor: "#000000",
  },
  category: {
    fontSize: 15,
    color: "#a1a2b3",
    fontWeight: "100",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#47405B",
    paddingTop: 10,
  },
  date: {
    fontSize: 12,
    fontWeight: "600",
    color: "#82838f",
    paddingTop: 10,
  },
});
