import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Projects from "./screens/Projects";
import ProjectDetails from "./screens/ProjectDetails";

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName={Projects}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Projects1"
        component={Projects}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ProjectDetails1"
        component={ProjectDetails}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
