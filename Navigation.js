import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Projects from "./screens/Projects";
import ProjectDetails from "./screens/ProjectDetails";

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName={Projects}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Projects"
        component={Projects}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ProjectDetails"
        component={ProjectDetails}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
