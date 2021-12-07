import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

const Progress = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>In Progress</Text>
      <ScrollView style={{ height: 280 }} showsVerticalScrollIndicator={false}>
        <View style={[styles.progressCard]}>
          <View style={styles.boxContainer}>
            <Text style={styles.category}>Sam's Project</Text>
            <Text style={styles.title}>Create two ad banners</Text>
            <Text style={styles.time}>2 hours</Text>
          </View>
          <View style={styles.progressPrecentage}>
            <CircularProgress
              value={85}
              inActiveStrokeColor={"#dbd5d5"}
              activeStrokeColor={"#AF9DE4"}
              inActiveStrokeOpacity={0.2}
              textColor={"#807B8C"}
              valueSuffix={"%"}
              duration={2000}
              radius={40}
              activeStrokeWidth={5}
              inActiveStrokeWidth={5}
            />
          </View>
        </View>
        <View style={styles.progressCard}>
          <View style={styles.boxContainer}>
            <Text style={styles.category}>Sam's Project</Text>
            <Text style={styles.title}>Create two ad banners</Text>
            <Text style={styles.time}>2 hours</Text>
          </View>
          <View>
            <CircularProgress
              value={85}
              inActiveStrokeColor={"#dbd5d5"}
              activeStrokeColor={"#AF9DE4"}
              inActiveStrokeOpacity={0.2}
              textColor={"#807B8C"}
              valueSuffix={"%"}
              duration={2000}
              radius={40}
              activeStrokeWidth={5}
              inActiveStrokeWidth={5}
            />
          </View>
        </View>
        <View style={styles.progressCard}>
          <View style={styles.boxContainer}>
            <Text style={styles.category}>Sam's Project</Text>
            <Text style={styles.title}>Create two ad banners</Text>
            <Text style={styles.time}>2 hours</Text>
          </View>
          <View>
            <CircularProgress
              value={85}
              inActiveStrokeColor={"#dbd5d5"}
              activeStrokeColor={"#AF9DE4"}
              inActiveStrokeOpacity={0.2}
              textColor={"#807B8C"}
              valueSuffix={"%"}
              duration={2000}
              radius={40}
              activeStrokeWidth={5}
              inActiveStrokeWidth={5}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  progressCard: {
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "white",
    padding: 15,
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 0.5,
    shadowColor: "#000000",
  },
  boxContainer: {
    minHeight: 80,
    maxWidth: 250,
  },
  category: {
    fontSize: 15,
    color: "#a1a2b3",
    fontWeight: "100",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#453E52",
    paddingTop: 10,
  },
  time: {
    fontSize: 12,
    fontWeight: "600",
    color: "#82838f",
    paddingTop: 10,
  },
  progressPrecentage: {},
});
