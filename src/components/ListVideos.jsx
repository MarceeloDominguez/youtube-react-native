import React from "react";
import { View } from "react-native";
import VideoCard from "./VideoCard";

export default function ListVideos({ videos }) {
  return <View>{videos.id.videoId && <VideoCard videos={videos} />}</View>;
}
