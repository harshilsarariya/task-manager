import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

const TaskList = () => {
  return (
    <ScrollView style={{ height: 620 }} showsVerticalScrollIndicator={false}>
      <GestureRecognizer
        swipeDirections="SWIPE_LEFT"
        onSwipeLeft={() => console.log("swipe lefted")}
      >
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "black", fontSize: 20, fontWeight: "800" }}>
              Create new blog post
            </Text>
            <Text style={{ color: "#1DC2A3", fontSize: 20 }}>•</Text>
          </View>
          <View style={styles.dateAndUser}>
            <View style={styles.date}>
              <Entypo name={"calendar"} style={{ marginRight: 10 }} size={20} />
              <Text>till 10 May 2021</Text>
            </View>
            <Image
              source={require("../../assets/images/avtar.jpg")}
              style={styles.userImage}
            />
          </View>
        </View>
      </GestureRecognizer>

      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black", fontSize: 20, fontWeight: "800" }}>
            Create new blog post
          </Text>
          <Text style={{ color: "#1DC2A3", fontSize: 20 }}>•</Text>
        </View>
        <View style={styles.dateAndUser}>
          <View style={styles.date}>
            <Entypo name={"calendar"} style={{ marginRight: 10 }} size={20} />
            <Text>till 10 May 2021</Text>
          </View>
          <Image
            source={require("../../assets/images/avtar.jpg")}
            style={styles.userImage}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black", fontSize: 20, fontWeight: "800" }}>
            Create new blog post
          </Text>
          <Text style={{ color: "#1DC2A3", fontSize: 20 }}>•</Text>
        </View>
        <View style={styles.dateAndUser}>
          <View style={styles.date}>
            <Entypo name={"calendar"} style={{ marginRight: 10 }} size={20} />
            <Text>till 10 May 2021</Text>
          </View>
          <Image
            source={require("../../assets/images/avtar.jpg")}
            style={styles.userImage}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black", fontSize: 20, fontWeight: "800" }}>
            Create new blog post
          </Text>
          <Text style={{ color: "#1DC2A3", fontSize: 20 }}>•</Text>
        </View>
        <View style={styles.dateAndUser}>
          <View style={styles.date}>
            <Entypo name={"calendar"} style={{ marginRight: 10 }} size={20} />
            <Text>till 10 May 2021</Text>
          </View>
          <Image
            source={require("../../assets/images/avtar.jpg")}
            style={styles.userImage}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black", fontSize: 20, fontWeight: "800" }}>
            Create new blog post
          </Text>
          <Text style={{ color: "#1DC2A3", fontSize: 20 }}>•</Text>
        </View>
        <View style={styles.dateAndUser}>
          <View style={styles.date}>
            <Entypo name={"calendar"} style={{ marginRight: 10 }} size={20} />
            <Text>till 10 May 2021</Text>
          </View>
          <Image
            source={require("../../assets/images/avtar.jpg")}
            style={styles.userImage}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black", fontSize: 20, fontWeight: "800" }}>
            Create new blog post
          </Text>
          <Text style={{ color: "#1DC2A3", fontSize: 20 }}>•</Text>
        </View>
        <View style={styles.dateAndUser}>
          <View style={styles.date}>
            <Entypo name={"calendar"} style={{ marginRight: 10 }} size={20} />
            <Text>till 10 May 2021</Text>
          </View>
          <Image
            source={require("../../assets/images/avtar.jpg")}
            style={styles.userImage}
          />
        </View>
      </View>
    </ScrollView>
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
});
