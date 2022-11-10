import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import YoutubeLogo from "../../assets/youtube.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import ListCategory from "./ListCategory";

export default function Header({ setSelectedCategory, selectedCategory }) {
  return (
    <>
      <View style={styles.container}>
        <Image source={YoutubeLogo} style={styles.image} resizeMode="contain" />
        <View style={styles.containerIcons}>
          <Ionicons
            name="tv-outline"
            size={22}
            color="#333"
            style={styles.icon}
          />
          <Ionicons
            name="notifications-outline"
            size={22}
            color="#333"
            style={styles.icon}
          />
          <Ionicons
            name="search-outline"
            size={22}
            color="#333"
            style={styles.icon}
          />
          <View style={styles.circleUser}>
            <Text style={styles.textCircle}>M</Text>
          </View>
        </View>
      </View>
      <ListCategory
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
  },
  image: {
    width: 100,
    height: 50,
  },
  containerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    paddingRight: 16,
  },
  circleUser: {
    backgroundColor: "#FF5B00",
    height: 26,
    width: 26,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  textCircle: {
    color: "#fff",
    fontWeight: "700",
  },
});
