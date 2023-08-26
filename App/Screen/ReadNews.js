import {
	Image,
	ScrollView,
	Share,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Color from "../Shared/Color";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser"

const ReadNews = () => {
	const news = useRoute().params.news;
	const navigation = useNavigation();

	const shareNews = () => {
		Share.share({
			message: news.title + "\nRead More" + news.description,
		});
	};

	useEffect(() => {});
	return (
		<ScrollView style={{ backgroundColor: Color.white, flex: 1 }}>
			<View
				style={{
					marginTop: 10,
					marginBottom: 10,
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Ionicons
						name="arrow-back"
						size={31}
						color={Color.primary}
					/>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => shareNews()}>
					<Feather name="share-2" size={28} color={Color.primary} />
				</TouchableOpacity>
			</View>
			<Image
				source={{ uri: news.urlToImage }}
				style={{ width: "100%", height: 300, borderRadius: 16 }}
			/>

			<Text style={{ marginTop: 10, fontSize: 22, fontWeight: "bold" }}>
				{news?.title}
			</Text>

			<Text style={{ marginTop: 10, color: Color.primary, fontSize: 16 }}>
				{news?.source?.name}
			</Text>

			<Text
				style={{
					marginTop: 10,
					fontSize: 18,
					color: Color.gray,
					lineHeight: 26,
				}}
			>
				{news?.description}
			</Text>

			<TouchableOpacity onPress={()=> WebBrowser.openBrowserAsync(news.url)}>
				<Text
					style={{
						marginTop: 10,
						color: Color.primary,
						fontSize: 16,
						fontWeight: "bold",
					}}
				>
					Read More
				</Text>
			</TouchableOpacity>
		</ScrollView>
	);
};

export default ReadNews;

const styles = StyleSheet.create({});
