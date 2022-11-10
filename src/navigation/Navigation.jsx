import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home";
import Shorts from "../screen/Shorts";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerTransparent: true, headerTitle: "" }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Shorts" component={Shorts} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
