import StyleSheet from "react-native-media-query";

export const { styles } = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		gap: 19,
	},
	quadrado: {
		width: 384,
		height: 112,
		backgroundColor: "#EBEFEF",
		flexDirection: "row",
		justifyContent: "space-between",
		borderRadius: 15,
		margin: 10,
		cursor: "pointer",
		fill: "#EBEFEF",
		filter: "drop-shadow(2px 4px 17.299999237060547px rgba(0, 0, 0, 0.25))",
	},
	nome: {
		alignSelf: "center",
		textAlign: "center",
		fontSize: 25,
		marginLeft: 100,
	},
});

export default styles