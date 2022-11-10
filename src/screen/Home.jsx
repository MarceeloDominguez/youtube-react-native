import React, { useEffect, useState } from "react";
import { View, StyleSheet, StatusBar, Text, FlatList } from "react-native";
import Header from "../components/Header";
import { fetchApi } from "../helpers/fetchApi";

export default function Home() {
  const [videos, setVideos] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <FlatList
        data={videos}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Header
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        }
        contentContainerStyle={
          {
            //paddingHorizontal: 20,
            //paddingVertical: 5,
            //paddingTop: 105,
          }
        }
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: item.color,
                height: 120,
                marginBottom: 20,
              }}
            >
              <Text>{item.snippet.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
