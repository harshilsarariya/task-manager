import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Entypo from "react-native-vector-icons/Entypo";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Navigation from "./Navigation";
import ProjectDetails from "./screens/ProjectDetails";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{ paddingBottom: 48 }}
      screenOptions={{
        tabBarActiveTintColor: "#6033E1",
        tabBarInactiveTintColor: "#BEABF4",
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={28} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Projects"
        component={Navigation}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Octicons name="project" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="ProjectDetails"
        component={ProjectDetails}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="alarm-outline" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Projects2"
        component={Projects}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
