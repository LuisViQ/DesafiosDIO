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
  },

  background: {
    ...StyleSheet.absoluteFillObject,
  },

  blob: {
    position: "absolute",
    borderRadius: 999,
    opacity: 0.4,
  },

  blobOne: {
    width: 340,
    height: 340,
    backgroundColor: "#f2cc8f",
    top: -180,
    right: -140,
  },

  blobTwo: {
    width: 280,
    height: 280,
    backgroundColor: "#f4a261",
    bottom: -140,
    left: -90,
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 32,
  },

  card: {
    width: "100%",
    maxWidth: 440,
    alignSelf: "center",
    backgroundColor: "#fffaf5",
    borderRadius: 26,
    borderWidth: 1,
    borderColor: "#f1e4d6",
    overflow: "hidden",

    // sombra Android
    elevation: 8,

    // sombra iOS
    shadowColor: "#3a2a20",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    gap: 12,
  },

  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: "#efe2d4",
  },

  backText: {
    fontFamily: headingFont,
    fontSize: 12,
    color: "#6f5646",
    letterSpacing: 0.4,
  },

  cartButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#2a9d8f",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 999,
  },

  cartText: {
    fontFamily: headingFont,
    fontSize: 12,
    color: "#fffaf5",
  },

  cartBadge: {
    backgroundColor: "#f4a261",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },

  cartBadgeText: {
    fontFamily: headingFont,
    fontSize: 12,
    color: "#2d221b",
  },

  imageWrapper: {
    width: "100%",
    height: 240,
    backgroundColor: "#f6efe6",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontFamily: headingFont,
    color: "#2d221b",
    marginBottom: 10,
  },

  description: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: bodyFont,
    color: "#6f5646",
    marginBottom: 18,
  },

  divider: {
    height: 1,
    backgroundColor: "#f1e4d6",
    marginBottom: 16,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    fontSize: 22,
    fontFamily: headingFont,
    color: "#2a9d8f",
  },

  stock: {
    fontSize: 13,
    fontFamily: bodyFont,
    color: "#8b6b5a",
    marginTop: 4,
  },

  addButton: {
    backgroundColor: "#e07a5f",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 999,
  },

  addButtonText: {
    fontFamily: headingFont,
    fontSize: 12,
    color: "#fffaf5",
    letterSpacing: 0.4,
  },

  loadingText: {
    fontFamily: headingFont,
    color: "#6f5646",
    fontSize: 16,
  },

  errorText: {
    fontFamily: headingFont,
    color: "#b86f5c",
    fontSize: 16,
  },
});
