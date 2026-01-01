import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

type ImagePreviewProps = {
  uri: string;
  caption: string;
};

export function ImagePreview({ uri, caption }: ImagePreviewProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} />
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
}
