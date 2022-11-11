import React, { useEffect, useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import Videos from "../components/Videos";
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
      <Videos
        videos={videos}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
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
