import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CardItem from "./src/components/CardItem";
import NumberBtn from "./src/components/NumberBtn";
import { useState } from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
export default function App() {
	const [result, setResult] = useState(0);
	const [calculation, setCalculation] = useState("");
	const [firstNumber, setFirstNumber] = useState(0);
	const handleAddNumber = (n: any) => {
		if (isNaN(result)) setResult(0);
		else setResult(result * 10 + n);
	};
	const handleCalculationPress = (calc: any) => {
		setFirstNumber(result);
		setCalculation(calc);
		setResult(0);
	};
	const handleEuqualPress = () => {
		switch (calculation) {
			case "+":
				setResult(firstNumber + result);
				break;
			case "-":
				setResult(firstNumber - result);
				break;
			case "*":
				setResult(firstNumber * result);
				break;
			case "/":
				if (result == 0) setResult(0);
				else setResult(firstNumber / result);
				break;
		}
		setCalculation("");
		setFirstNumber(0);
	};
	return (
		<View style={styles.container}>
			{/* result */}
			<Text>{result}</Text>
			<View style={{ flexDirection: "row", flexWrap: "wrap", width: "100%" }}>
				{numbers.map((item, index) => (
					<NumberBtn
						key={index}
						item={item}
						handleAddNumber={handleAddNumber}
					/>
				))}
				<NumberBtn
					item="+"
					handleAddNumber={handleCalculationPress}
				/>
				<NumberBtn
					item="-"
					handleAddNumber={handleCalculationPress}
				/>
				<NumberBtn
					item="*"
					handleAddNumber={handleCalculationPress}
				/>
				<NumberBtn
					item="/"
					handleAddNumber={handleCalculationPress}
				/>
				<NumberBtn
					item="="
					handleAddNumber={handleEuqualPress}
				/>
				<NumberBtn
					item="C"
					handleAddNumber={(n: number | string) => {
						setResult(0);
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 24,
	},
});
