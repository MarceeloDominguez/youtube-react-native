import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import { WebView } from "react-native-webview";
import { fetchApi } from "../helpers/fetchApi";
import { parseHtmlEnteties } from "../helpers/parseHtmlEnteties";
import Videos from "./Videos";

const WIDTH = Dimensions.get("window").width;

export default function VideoDetail({ route }) {
  const [channelDetails, setChannelDetails] = useState();
  const [videos, setVideos] = useState(null);
  const { videoId, channelId, title } = route.params;

  useEffect(() => {
    const fetchChannel = async () => {
      const data = await fetchApi(`channels?part=snippet&id=${channelId}`);
      setChannelDetails(data?.items[0]);

      const listVideo = await fetchApi(
        `search?channelId=${channelId}&part=snippet%2Cid&order=date`
      );
      setVideos(listVideo?.items);
    };

    fetchChannel();
  }, [channelId]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.video}>
        <WebView
          source={{
            uri: `https://www.youtube.com/embed/${videoId}`,
          }}
        />
      </View>
      <Text numberOfLines={3} style={styles.titleVideo}>
        {parseHtmlEnteties(title)}
      </Text>
      <View style={styles.containerInfoChannel}>
        <View style={styles.contentInfoChannel}>
          <Image
            source={{ uri: channelDetails?.snippet?.thumbnails?.high?.url }}
            style={styles.avatarChannel}
          />
          <Text numberOfLines={1} style={styles.nameChannel}>
            {channelDetails?.snippet.title.slice(0, 50)}
          </Text>
        </View>
        <View style={styles.buttonSuscribe}>
          <Text style={styles.nameButtonSuscribe}>to subscribe</Text>
        </View>
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.description} numberOfLines={4}>
          {channelDetails?.snippet.description}
        </Text>
      </View>
      <Videos videos={videos} header={false} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  video: {
    width: WIDTH,
    height: 215,
  },
  titleVideo: {
    fontSize: 18,
    paddingHorizontal: 14,
    fontWeight: "bold",
    letterSpacing: 0.5,
    lineHeight: 22,
    color: "#191919",
    paddingTop: 10,
  },
  avatarChannel: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginRight: 12,
  },
  nameChannel: {
    textTransform: "capitalize",
    fontWeight: "700",
    letterSpacing: 0.4,
    fontSize: 15,
  },
  buttonSuscribe: {
    backgroundColor: "#191919",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 100,
  },
  nameButtonSuscribe: {
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 0.4,
    textTransform: "capitalize",
    fontSize: 12,
  },
  containerInfoChannel: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    marginVertical: 12,
  },
  contentInfoChannel: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  containerDescription: {
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  description: {
    backgroundColor: "#f1f1f1",
    padding: 4,
    borderRadius: 8,
    letterSpacing: 0.5,
    fontSize: 13,
    fontWeight: "600",
    opacity: 0.8,
  },
});
