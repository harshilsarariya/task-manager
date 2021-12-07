import React from "react";
import TabNavigator from "./TabNavigator";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      {/* bottom tab navigation */}
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
