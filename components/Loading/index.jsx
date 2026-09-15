import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import styles from "./styles";

export default function Loading({
	fullScreen = true,
	size = "large",
	color = "#111827",
	label,
}) {
	return (
		<View style={[styles.container, fullScreen && styles.fullScreen]}>
			<ActivityIndicator size={size} color={color} />
			{label ? <Text style={styles.label}>{label}</Text> : null}
		</View>
	);
}
