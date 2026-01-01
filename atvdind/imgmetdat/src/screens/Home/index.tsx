import React, { useEffect, useState } from "react";
import {
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Device from "expo-device";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { PrimaryButton } from "../../components/PrimaryButton";
import { ImagePreview } from "../../components/ImagePreview";
import { LocationMap } from "../../components/LocationMap";
import { downloadImage } from "../../services/file/downloadImage";
import { pickImage } from "../../services/media/pickImage";
import { getCurrentLocation } from "../../services/location/getCurrentLocation";
import { validateUrl } from "../../utils/validateUrl";
import type { Local } from "../../types/location";

export function Home() {
  const [changeColor, setChangeColor] = useState(true);
  const [linkValue, setLinkValue] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [imgLink, setImgLink] = useState<string | null>(null);
  const [local, setLocal] = useState<Local | null>(null);
  const [viewMap, setViewMap] = useState(false);

  const changeVisibilityMap = () => {
    setViewMap((prev) => !prev);
  };

  const handleLinkValue = (text: string) => {
    setLinkValue(text);
  };

  const saveFile = async () => {
    try {
      if (!validateUrl(linkValue)) {
        console.log("Invalid link");
        return;
      }

      const downloadedUri = await downloadImage(linkValue.trim());
      if (downloadedUri) {
        setImgLink(downloadedUri);
      }
    } catch (error) {
      console.log("Erro:", error);
    }
  };

  const handleChangeColorAndSave = async () => {
    setChangeColor((prev) => !prev);
    await saveFile();
  };

  const handlePickImage = async () => {
    const uri = await pickImage();
    if (uri) {
      setImage(uri);
    }
  };

  useEffect(() => {
    getCurrentLocation().then((coords) => {
      if (coords) {
        setLocal(coords);
      }
    });
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <Text>
        Seu dispositivo e um: {Device.modelName} e o nome dele e:{" "}
        {Device.deviceName ?? "desconhecido"}
      </Text>

      <TextInput
        placeholder="Digite o link do arquivo que deseja baixar"
        style={styles.input}
        placeholderTextColor="black"
        value={linkValue}
        onChangeText={handleLinkValue}
      />

      <Text>SO: {Platform.OS}</Text>

      <TouchableOpacity onPress={handleChangeColorAndSave}>
        {changeColor ? (
          <Ionicons name="checkmark-circle" size={32} color="green" />
        ) : (
          <Ionicons name="checkmark-circle-outline" size={32} color="#000" />
        )}
      </TouchableOpacity>

      <PrimaryButton
        title="Mostrar imagem da sua galeria"
        onPress={handlePickImage}
      />

      {image && <ImagePreview uri={image} caption="Imagem da galeria" />}
      {imgLink && (
        <ImagePreview uri={imgLink} caption="Imagem baixada pelo link" />
      )}

      <PrimaryButton
        title={viewMap ? "Esconder mapa" : "Ver localizacao"}
        onPress={changeVisibilityMap}
        disabled={!local}
      />

      <Text>local: {local ? "OK" : "NAO"}</Text>

      {viewMap && local && <LocationMap location={local} />}
    </ScrollView>
  );
}
