import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { parseHtmlEnteties } from "../helpers/parseHtmlEnteties";
import Moment from "moment";

const WIDTH = Dimensions.get("window").width;

export default function VideoCard({ videos }) {
  const { videoId } = videos.id;
  const { title, channelId, publishTime, channelTitle } = videos.snippet;

  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate("VideoDetail", { videoId, channelId, title })
        }
      >
        <Image
          style={styles.imageVideo}
          source={{
            uri: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
          }}
        />
      </TouchableOpacity>
      <View style={styles.containerInfoVideo}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
          }}
          style={styles.avatar}
          resizeMode="contain"
        />
        <View style={styles.contentText}>
          <Text style={styles.title} numberOfLines={2}>
            {parseHtmlEnteties(title)}
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={styles.titleChannel}>{channelTitle}</Text>
            <Text style={[styles.titleChannel, { marginLeft: 10 }]}>
              - {Moment(publishTime).endOf("day").fromNow()}
            </Text>
          </View>
        </View>
        <Ionicons name="ellipsis-vertical" size={18} color="#333" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageVideo: {
    width: WIDTH,
    height: 215,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
  },
  containerInfoVideo: {
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingTop: 10,
  },
  contentText: {
    flex: 1,
    paddingLeft: 8,
  },
  title: {
    backgroundColor: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.5,
    lineHeight: 20,
    color: "#191919",
  },
  titleChannel: {
    paddingTop: 4,
    paddingBottom: 18,
    letterSpacing: 0.4,
    color: "#000000",
    opacity: 0.8,
    textTransform: "capitalize",
  },
});
