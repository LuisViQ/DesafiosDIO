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
    opacity: 0.35,
  },

  blobOne: {
    width: 320,
    height: 320,
    backgroundColor: "#f2cc8f",
    top: -160,
    right: -120,
  },

  blobTwo: {
    width: 260,
    height: 260,
    backgroundColor: "#f4a261",
    bottom: -120,
    left: -90,
  },

  listContent: {
    padding: 20,
    paddingBottom: 32,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  title: {
    fontSize: 24,
    fontFamily: headingFont,
    color: "#2d221b",
  },

  subtitle: {
    marginTop: 4,
    fontSize: 13,
    fontFamily: bodyFont,
    color: "#6f5646",
  },

  clearButton: {
    backgroundColor: "#efe2d4",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
  },

  clearButtonText: {
    fontSize: 12,
    fontFamily: headingFont,
    color: "#6f5646",
  },

  emptyCard: {
    backgroundColor: "#fff7ec",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#f1e4d6",
    padding: 18,
  },

  emptyText: {
    fontSize: 14,
    fontFamily: bodyFont,
    color: "#8b6b5a",
  },

  itemCard: {
    backgroundColor: "#fffaf5",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#f1e4d6",
    padding: 12,
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,

    // sombra Android
    elevation: 4,

    // sombra iOS
    shadowColor: "#3a2a20",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.16,
    shadowRadius: 10,
  },

  itemImage: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: "#f6efe6",
  },

  itemInfo: {
    flex: 1,
  },

  itemTitle: {
    fontSize: 14,
    fontFamily: headingFont,
    color: "#2d221b",
  },

  itemPrice: {
    marginTop: 6,
    fontSize: 13,
    fontFamily: bodyFont,
    color: "#2a9d8f",
  },

  qtyRow: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  qtyButton: {
    width: 30,
    height: 30,
    borderRadius: 999,
    backgroundColor: "#efe2d4",
    alignItems: "center",
    justifyContent: "center",
  },

  qtyButtonText: {
    fontSize: 16,
    fontFamily: headingFont,
    color: "#6f5646",
  },

  qtyValue: {
    fontSize: 14,
    fontFamily: headingFont,
    color: "#2d221b",
    minWidth: 20,
    textAlign: "center",
  },

  removeButton: {
    marginLeft: "auto",
    backgroundColor: "#e07a5f",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
  },

  removeButtonText: {
    fontSize: 11,
    fontFamily: headingFont,
    color: "#fffaf5",
    letterSpacing: 0.4,
  },

  summary: {
    marginTop: 12,
    backgroundColor: "#fff7ec",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#f1e4d6",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  summaryLabel: {
    fontSize: 13,
    fontFamily: bodyFont,
    color: "#6f5646",
  },

  summaryValue: {
    fontSize: 18,
    fontFamily: headingFont,
    color: "#2a9d8f",
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
});
