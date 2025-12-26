import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { openExternalLink } from "../utils/openExternalLink";

import { OutLineButton } from "./OutLineButton";
import { gitHubLink } from "../constants/externalsLinks";
export function HighlightsCard() {
  return (
    <>
      <Text style={styles.sectionTitle}>Em destaque</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Projetos e estudos</Text>
        <Text style={styles.text}>
          Aplicações mobile, sistemas web e projetos acadêmicos.
        </Text>

        <OutLineButton
          onPress={() => openExternalLink(gitHubLink)}
          text="Explorar projetos"
        />
      </View>
    </>
  );
}
