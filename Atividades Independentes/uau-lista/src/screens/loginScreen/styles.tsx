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
    flex: 1,
    backgroundColor: "#fdf6ee",
    paddingHorizontal: 20,
    justifyContent: "center",
  },

  background: {
    ...StyleSheet.absoluteFillObject,
  },

  blob: {
    position: "absolute",
    borderRadius: 999,
    opacity: 0.35,
  },

  blobOne: {
    width: 280,
    height: 280,
    backgroundColor: "#f2cc8f",
    top: -140,
    left: -120,
  },

  blobTwo: {
    width: 240,
    height: 240,
    backgroundColor: "#f4a261",
    bottom: -120,
    right: -80,
  },

  header: {
    marginBottom: 24,
  },

  brand: {
    fontSize: 30,
    fontFamily: headingFont,
    color: "#2d221b",
  },

  tagline: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: bodyFont,
    color: "#6f5646",
  },

  card: {
    backgroundColor: "#fffaf5",
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: "#f1e4d6",

    // sombra Android
    elevation: 6,

    // sombra iOS
    shadowColor: "#3a2a20",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
  },

  form: {
    gap: 12,
  },

  label: {
    fontSize: 12,
    fontFamily: headingFont,
    color: "#6f5646",
    letterSpacing: 0.4,
  },

  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  input: {
    flex: 1,
    height: 46,
    borderWidth: 1,
    paddingHorizontal: 12,
    borderColor: "#ead9c6",
    borderRadius: 14,
    color: "#2d221b",
    fontSize: 15,
    fontFamily: bodyFont,
    backgroundColor: "#fff7ec",
  },

  toggleButton: {
    backgroundColor: "#efe2d4",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
  },

  toggleButtonText: {
    fontSize: 12,
    fontFamily: headingFont,
    color: "#6f5646",
  },

  submitButton: {
    marginTop: 12,
    backgroundColor: "#2a9d8f",
    paddingVertical: 12,
    borderRadius: 999,
    alignItems: "center",
  },

  submitButtonText: {
    fontSize: 13,
    fontFamily: headingFont,
    color: "#fffaf5",
    letterSpacing: 0.5,
  },
});
