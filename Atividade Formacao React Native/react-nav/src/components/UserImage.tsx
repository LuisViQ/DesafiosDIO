import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { gitHubImageLink } from "../constants/externalsLinks";

export function UserImage() {
  const [hasError, setHasError] = useState(false);
  const [uri, setUri] = useState("");

  useEffect(() => {
    const cacheBuster = Date.now();
    setUri(`${gitHubImageLink}${cacheBuster}`);
  }, []);

  return (
    <View>
      <Image
        source={hasError ? require("../../assets/defaultImage.jpg") : { uri }}
        onError={() => setHasError(true)}
        style={{ width: 80, height: 80, borderRadius: 40 }}
      />
    </View>
  );
}
