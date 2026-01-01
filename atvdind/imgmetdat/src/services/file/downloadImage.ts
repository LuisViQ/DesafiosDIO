import * as FileSystem from "expo-file-system/legacy";
import { Platform } from "react-native";

export async function downloadImage(url: string): Promise<string | null> {
  const tempUri =
    (FileSystem.cacheDirectory ?? FileSystem.documentDirectory) + "file.png";
  if (!tempUri) {
    console.log("No temp directory available.");
    return null;
  }

  const download = await FileSystem.downloadAsync(url, tempUri);

  if (Platform.OS === "android") {
    const perm =
      await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

    if (!perm.granted) {
      console.log("Permission denied");
      return null;
    }

    const destUri = await FileSystem.StorageAccessFramework.createFileAsync(
      perm.directoryUri,
      "file.png",
      "image/png"
    );

    const base64 = await FileSystem.readAsStringAsync(download.uri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    await FileSystem.writeAsStringAsync(destUri, base64, {
      encoding: FileSystem.EncodingType.Base64,
    });
  }

  return download.uri;
}
