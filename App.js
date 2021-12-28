import React from "react";
import TabNavigator from "./TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import ProjectState from "./context/projects/projectState";

const App = () => {
  return (
    <ProjectState>
      <NavigationContainer>
        {/* bottom tab navigation */}
        <TabNavigator />
      </NavigationContainer>
    </ProjectState>
  );
};

export default App;
