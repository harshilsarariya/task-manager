import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/home/Header";
import ProgressCategory from "../components/projectDetails/ProgressCategory";
import TaskList from "../components/projectDetails/TaskList";

const ProjectDetails = () => {
  return (
    <View style={styles.container}>
      <Header title={"Sam's Project"} />
      <ProgressCategory />
      <TaskList />
    </View>
  );
};

export default ProjectDetails;

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 30,
  },
});
