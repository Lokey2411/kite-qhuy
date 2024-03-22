import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type Props = {
	item: number | string;
	handleAddNumber: (n: number | string) => void;
};

const NumberBtn = ({ item, handleAddNumber }: Props) => {
	return (
		<TouchableOpacity
			onPress={() => handleAddNumber(item)}
			style={{
				width: 50,
				height: 50,
				borderRadius: 50,
				backgroundColor: "lightgray",
				margin: 10,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text>{item}</Text>
		</TouchableOpacity>
	);
};

export default NumberBtn;

const styles = StyleSheet.create({});
