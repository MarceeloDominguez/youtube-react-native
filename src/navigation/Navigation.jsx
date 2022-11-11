import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screen/Home";
import Shorts from "../screen/Shorts";
import VideoDetail from "../components/VideoDetail";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerTransparent: true, headerTitle: "" }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Shorts" component={Shorts} />
    </Tab.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerTransparent: true, headerTitle: "" }}
      >
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen
          name="VideoDetail"
          component={VideoDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
