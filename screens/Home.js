import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import Header from "../components/home/Header";
import Progress from "../components/home/Progress";
import TaskBox from "../components/home/TaskBox";
import ToDoList from "../components/home/ToDoList";

const Home = () => {
  let title, icon;
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Hello, Harshil"} icon={"bell"} />
      <TaskBox />
      <ToDoList />
      <Progress />
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 30,
    backgroundColor: "#F9F9F9",
  },
});
