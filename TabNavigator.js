import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import ProjectDetails from "./screens/ProjectDetails";
import Entypo from "react-native-vector-icons/Entypo";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Navigation from "./Navigation";
import AccountNavigation from "./components/account/AccountNavigation";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="AccountNavigation"
      barStyle={{ paddingBottom: 48 }}
      screenOptions={{
        tabBarActiveTintColor: "#6033E1",
        tabBarInactiveTintColor: "#BEABF4",
        tabBarHideOnKeyboard: true,
        tabBarStyle: [{ display: "flex" }, null],
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
        name="ProjectsHome"
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
        name="AccountNavigation"
        component={AccountNavigation}
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
