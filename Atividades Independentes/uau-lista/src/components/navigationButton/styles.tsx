import { Platform, StyleSheet } from "react-native";

const headingFont = Platform.select({
  ios: "AvenirNext-DemiBold",
  android: "sans-serif-condensed",
  default: "serif",
});

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#e6d6c6",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    alignSelf: "center",
  },
  textButton: {
    color: "#6f5646",
    fontSize: 12,
    fontFamily: headingFont,
    letterSpacing: 0.4,
  },
});
