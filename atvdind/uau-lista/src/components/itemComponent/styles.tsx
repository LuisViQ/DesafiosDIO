import { Platform, StyleSheet } from "react-native";

const headingFont = Platform.select({
  ios: "AvenirNext-DemiBold",
  android: "sans-serif-condensed",
  default: "serif",
});

const bodyFont = Platform.select({
  ios: "AvenirNext-Regular",
  android: "sans-serif",
  default: "serif",
});

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffaf5",
    borderRadius: 20,
    padding: 14,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#f1e4d6",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,

    // sombra Android
    elevation: 5,

    // sombra iOS
    shadowColor: "#3a2a20",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.16,
    shadowRadius: 10,
  },

  image: {
    width: 72,
    height: 72,
    borderRadius: 12,
    backgroundColor: "#f6efe6",
  },

  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  details: {
    flex: 1,
  },

  title: {
    fontSize: 15,
    fontFamily: headingFont,
    color: "#2d221b",
    marginBottom: 6,
  },

  price: {
    fontSize: 14,
    fontFamily: bodyFont,
    color: "#2a9d8f",
  },

  button: {
    backgroundColor: "#e07a5f",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
  },

  buttonText: {
    color: "#fffaf5",
    fontSize: 12,
    fontFamily: headingFont,
    letterSpacing: 0.4,
  },
});
