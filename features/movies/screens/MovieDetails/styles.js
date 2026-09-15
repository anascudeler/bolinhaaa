import { StyleSheet } from "react-native";

const COLORS = {
  background: "#f9fafb",
  surface: "#ffffff",
  textPrimary: "#111827",
  textSecondary: "#6b7280",
  chipBg: "#e5e7eb",
  chipText: "#374151",
  badgeStatusBg: "#d1fae5",
  badgeStatusText: "#065f46",
  badgeAdultBg: "#fee2e2",
  badgeAdultText: "#991b1b",
  badgeVideoBg: "#dbeafe",
  badgeVideoText: "#1e40af",
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  bgImage: {
    width: "100%",
    height: 220,
  },
 
  /* Header: poster + bloco de título */
  headerRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: -40,
    marginBottom: 16,
    alignItems: "flex-end",
  },
  poster: {
    width: 90,
    height: 134,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: COLORS.surface,
  },
  titleBlock: {
    flex: 1,
    paddingBottom: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.textPrimary,
  },
  titleOriginal: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  tagline: {
    fontSize: 13,
    fontStyle: "italic",
    color: COLORS.textSecondary,
    marginTop: 4,
  },

  /* Badges */
  badgeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  badge: {
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
  },
  badgeStatus: { backgroundColor: COLORS.badgeStatusBg },
  badgeStatusText: { color: COLORS.badgeStatusText },
  badgeAdult: { backgroundColor: COLORS.badgeAdultBg },
  badgeAdultText: { color: COLORS.badgeAdultText },
  badgeVideo: { backgroundColor: COLORS.badgeVideoBg },
  badgeVideoText: { color: COLORS.badgeVideoText },

  /* Cards de info rápida */
  infoRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 4,
  },
  infoCard: {
    minWidth: 60,
    maxWidth: 190,
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    padding: 10,
    marginTop: 30,
    marginRight: 15
  },
  infoLabel: {
    fontSize: 10,
    color: COLORS.textSecondary,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.textPrimary,
  },

  /* Seções genéricas */
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: COLORS.textPrimary,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 22,
  },

  /* Chips (gêneros, países, línguas) */
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
  },
  chip: {
    backgroundColor: COLORS.chipBg,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  chipText: {
    fontSize: 13,
    color: COLORS.chipText,
  },

  noElenco: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
});

