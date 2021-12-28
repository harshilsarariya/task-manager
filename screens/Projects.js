import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/home/Header";
import NewProject from "../components/projects/NewProject";
import ProjectCard from "../components/projects/ProjectCard";

let title, icon;

const createProject = () => {};

const Projects = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title={"Projects"} icon={"search"} />
      <ProjectCard navigation={navigation} />
      <NewProject />
    </View>
  );
};

export default Projects;

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 30,
  },
});
