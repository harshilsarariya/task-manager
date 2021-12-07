import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const ToDoList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To Do</Text>
      <ScrollView horizontal>
        <View style={styles.boxContainer}>
          <Text style={styles.category}>SuperApp</Text>
          <Text style={styles.title}>Redesign home screen</Text>
          <Text style={styles.date}>till 10 May 2021</Text>
        </View>
        <View style={styles.boxContainer}>
          <Text style={styles.category}>SuperApp</Text>
          <Text style={styles.title}>Redesign home screen</Text>
          <Text style={styles.date}>till 10 May 2021</Text>
        </View>
        <View style={styles.boxContainer}>
          <Text style={styles.category}>SuperApp</Text>
          <Text style={styles.title}>Redesign home screen</Text>
          <Text style={styles.date}>till 10 May 2021</Text>
        </View>
        <View style={styles.boxContainer}>
          <Text style={styles.category}>SuperApp</Text>
          <Text style={styles.title}>Redesign home screen</Text>
          <Text style={styles.date}>till 10 May 2021</Text>
        </View>
        <View style={styles.boxContainer}>
          <Text style={styles.category}>SuperApp</Text>
          <Text style={styles.title}>Redesign home screen</Text>
          <Text style={styles.date}>till 10 May 2021</Text>
        </View>
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
