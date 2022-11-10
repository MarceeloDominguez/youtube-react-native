import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { categories } from "../helpers/constants";

export default function ListCategory({
  setSelectedCategory,
  selectedCategory,
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    >
      <Ionicons
        name="compass-outline"
        size={24}
        color="#333"
        style={styles.iconCompass}
      />
      {categories.map((category, index) => (
        <View key={index} style={styles.containerCategory}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSelectedCategory(category.name)}
            style={[
              styles.itemCategory,
              {
                backgroundColor:
                  category.name === selectedCategory ? "#191919" : "#f1f1f1",
                borderColor:
                  category.name === selectedCategory ? "#191919" : "#ccc",
              },
            ]}
          >
            <Text
              style={[
                styles.nameCategory,
                {
                  color: category.name === selectedCategory ? "#fff" : "#000",
                },
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 15,
  },
  iconCompass: {
    textAlignVertical: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingLeft: 12,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: 2,
  },
  containerCategory: {
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  itemCategory: {
    borderRadius: 100,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderWidth: 1,
  },
  nameCategory: {
    letterSpacing: 0.5,
  },
});
