import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const TaskBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Text style={styles.day}>Today</Text>
          <Text style={styles.taskCount}>2/10 Tasks</Text>
        </View>
        <Image
          source={require("../../assets/images/task.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default TaskBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5f33e1",
    height: 130,
    borderRadius: 20,
  },
  day: {
    // paddingTop: 15,
    paddingLeft: 15,
    color: "#B094FF",
    fontWeight: "bold",
  },
  taskCount: {
    paddingTop: 20,
    paddingLeft: 15,
    fontSize: 23,
    color: "white",
    fontWeight: "bold",
  },
  image: {
    height: 100,
    width: 100,
    marginRight: 30,
    marginTop: 20,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
