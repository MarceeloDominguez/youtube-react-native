import React from "react";
import { FlatList } from "react-native";
import Header from "./Header";
import ListVideos from "./ListVideos";

export default function Videos({
  videos,
  setSelectedCategory,
  selectedCategory,
  header = true,
}) {
  return (
    <FlatList
      data={videos}
      keyExtractor={(_, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        header && (
          <Header
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        )
      }
      renderItem={({ item }) => <ListVideos videos={item} />}
    />
  );
}
