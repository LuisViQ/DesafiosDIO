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
    width: 320,
    height: 320,
    backgroundColor: "#f2cc8f",
    top: -150,
    right: -120,
  },

  blobTwo: {
    width: 260,
    height: 260,
    backgroundColor: "#f4a261",
    bottom: -120,
    left: -90,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },

  titleBlock: {
    flex: 1,
    paddingRight: 8,
  },

  title: {
    fontSize: 26,
    fontFamily: headingFont,
    color: "#2d221b",
  },

  subtitle: {
    marginTop: 6,
    fontSize: 14,
    fontFamily: bodyFont,
    color: "#6f5646",
  },

  cartButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#2a9d8f",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.6)",

    // sombra Android
    elevation: 4,

    // sombra iOS
    shadowColor: "#2d221b",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 8,
  },

  cartText: {
    fontSize: 12,
    fontFamily: headingFont,
    color: "#fffaf5",
    letterSpacing: 0.4,
  },

  cartBadge: {
    backgroundColor: "#f4a261",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },

  cartBadgeText: {
    fontSize: 12,
    fontFamily: headingFont,
    color: "#2d221b",
  },

  listContent: {
    paddingBottom: 28,
    paddingTop: 4,
  },

  stateCard: {
    backgroundColor: "#fff7ec",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#f1e4d6",
    padding: 16,
    marginHorizontal: 16,
    marginTop: 12,
  },

  stateText: {
    fontSize: 14,
    fontFamily: bodyFont,
    color: "#8b6b5a",
  },
});
