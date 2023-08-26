import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";
import Color from "../../Shared/Color";
import { useNavigation } from "@react-navigation/native";

const HeadlineList = ({ newsList }) => {
	const navigation = useNavigation();
	return (
		<View>
			<FlatList
				data={newsList}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<View>
						<View
							style={{
								height: 1,
								backgroundColor: Color.lightGray,
								marginTop: 10,
							}}
						></View>
						<TouchableOpacity
                        onPress={()=>navigation.navigate('read-news', {news:item})}
							style={{
								marginTop: 15,
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<Image
								source={{ uri: item.urlToImage }}
								style={{
									width: 130,
									height: 130,
									borderRadius: 10,
								}}
							/>

							<View style={{ marginRight: 130, marginLeft: 10 }}>
								<Text
									numberOfLines={4}
									style={{ fontSize: 17, fontWeight: "bold" }}
								>
									{item.title}
								</Text>
								<Text
									style={{
										color: Color.primary,
										marginTop: 6,
									}}
								>
									{item?.source?.name}
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
};

export default HeadlineList;

const styles = StyleSheet.create({});
