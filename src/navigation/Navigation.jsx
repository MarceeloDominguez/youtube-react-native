import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screen/Home";
import Shorts from "../screen/Shorts";
import VideoDetail from "../components/VideoDetail";
import Ionicons from "@expo/vector-icons/Ionicons";
import Subscriptions from "../screen/Subscriptions";
import Librery from "../screen/Librery";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTransparent: true,
        headerTitle: "",
        tabBarActiveTintColor: "#191919",
        tabBarStyle: styles.barStyles,
        tabBarLabelStyle: styles.barLabelStyles,

        tabBarIcon: ({ color }) => {
          let iconName = "";
          switch (route.name) {
            case "Home":
              iconName = "home-sharp";
              break;
            case "Shorts":
              iconName = "flash-outline";
              break;
            case "Subscriptions":
              iconName = "albums-outline";
              break;
            case "Librery":
              iconName = "caret-forward-circle-outline";
              break;
          }
          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Shorts" component={Shorts} />
      <Tab.Screen name="Subscriptions" component={Subscriptions} />
      <Tab.Screen name="Librery" component={Librery} />
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

const styles = StyleSheet.create({
  barStyles: {
    backgroundColor: "#fff",
    height: 60,
    elevation: 0,
    borderTopWidth: 0,
  },
  barLabelStyles: {
    color: "#191919",
    marginBottom: 10,
  },
});
