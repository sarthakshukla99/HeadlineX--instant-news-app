import { Dimensions, ScrollView, StyleSheet, Text, Vibration, View } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryTextSlider from "../Components/Home/CategoryTextSlider";
import Color from "../Shared/Color";
import { Ionicons } from "@expo/vector-icons";
import TopHeadlineSlider from "../Components/Home/TopHeadlineSlider";
import HeadlineList from "../Components/Home/HeadlineList";
import GlobalApi from "../Services/GlobalApi";
import { ActivityIndicator } from "react-native";

const Home = () => {
	const [newsList, setNewsList] = useState([]);
	const [category, setCategory] = useState("latest");
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		// getTopHeadlineResult();        setLoading(true)
		getNewsByCategory(category);
	}, [category]);

	const getTopHeadlineResult = async () => {
		const result = (await GlobalApi.getTopHeadline).data;
		setNewsList(result?.articles);
	};

	const getNewsByCategory = async (category) => {
		setLoading(true);
		const result = (await GlobalApi.getByCategory(category)).data;
		console.log("----->", result);
		setNewsList(result?.articles);
		setLoading(false);
	};
	return (
		<ScrollView style={{ backgroundColor: Color.white }}>
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							backgroundColor: "#ffffff",
						}}
					>
						<Text style={styles.appName}>
							Headline<Text style={{ color: "#d90000" }}>X</Text>
						</Text>
						<Ionicons
							name="notifications-outline"
							size={25}
							color="black"
						/>
					</View>
					<CategoryTextSlider
						setCategory={setCategory}
						category={category}
					/>

					{loading && (
						<ActivityIndicator
							size={65}
							color={Color.primary}
                            style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:Dimensions.get('screen').height*0.37}}
						/>
					)}
					{!loading &&
                     <View>
                         <TopHeadlineSlider newsList={newsList} />
    					<HeadlineList newsList={newsList} />
                     </View>
                    }
		</ScrollView>
	);
};

export default Home;

const styles = StyleSheet.create({
	appName: {
		fontSize: 25,
		fontWeight: "bold",
		// color: '#e50914'
		color: Color.primary,
	},
});
