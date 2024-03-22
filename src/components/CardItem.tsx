import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type Props = {
	avatar: any;
	name: string;
	location: string;
	yoe: string;
	rate: number;
	price: string;
	desc: string;
};

const CardItem = (props: Props) => {
	return (
		<TouchableOpacity style={{ borderRadius: 8, padding: 8 }}>
			<View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 8 }}>
				<View style={{ flexDirection: "row" }}>
					<Image
						source={props.avatar}
						style={{ width: 60, height: 60, borderRadius: 999 }}
					/>
					<View>
						<Text style={{ fontWeight: "bold", fontSize: 18 }}>{props.name}</Text>
						<Text style={{ fontWeight: "bold", fontSize: 18 }}>{props.location}</Text>
						<Text style={{ fontWeight: "bold", fontSize: 18 }}>{props.yoe}</Text>
					</View>
				</View>
				<View>
					{/* rating box */}
					<View style={{ paddingHorizontal: 2, paddingVertical: 4 }}>
						<Text>{props.rate}/5*</Text>
					</View>
					<Text>{props.price}</Text>
				</View>
			</View>
			<Text>{props.desc}</Text>
		</TouchableOpacity>
	);
};

export default CardItem;

const styles = StyleSheet.create({});
