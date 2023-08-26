import {
	StyleSheet,
	Text,
	View,
	Vibration,
	SafeAreaView,
	FlatList,
	TouchableOpacity,
	TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import Color from "../../Shared/Color";

const CategoryTextSlider = ({category,setCategory}) => {
	const [active, setActive] = useState(1);
	const onCategoryClick = (id) => {
		// Vibration.vibrate(15);
		setActive(id);
	};
	const categoryList = [
		{
			id: 1,
			name: "Latest",
		},
		{
			id: 2,
			name: "World",
		},
		{
			id: 3,
			name: "Business",
		},
		{
			id: 4,
			name: "Sports",
		},
		{
			id: 5,
			name: "Life",
		},
		{
			id: 6,
			name: "Movie",
		},
	];
	return (
		<View style={{ marginTop: 10 }}>
			<FlatList
				data={categoryList}
				horizontal
				showsHorizontalScrollIndicator={false}
				renderItem={({ item, index }) => (
					<TouchableOpacity onPress={() => {
                        Vibration.vibrate(15);
                        setCategory(item.name);
                        onCategoryClick(item.id);
                    }}>
						<Text
							style={
								item.id === active
									? styles.selectText
									: styles.unselectText
							}
						>
							{item.name}
						</Text>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

export default CategoryTextSlider;

const styles = StyleSheet.create({
	unselectText: {
		marginRight: 15,
		fontSize: 20,
		fontWeight: "800",
		color: Color.gray,
	},
	selectText: {
		marginRight: 15,
		fontSize: 20,
		fontWeight: "900",
		color: Color.primary,
	},
});
