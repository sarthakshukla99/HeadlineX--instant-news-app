import {
	Dimensions,
	FlatList,
	Image,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";
import { TouchableOpacity } from "react-native";
import Color from "../../Shared/Color";
import { useNavigation } from "@react-navigation/native";

const TopHeadlineSlider = ({newsList}) => {
    const navigation = useNavigation()
	return (
		<View style={{marginTop: 20}}>
			<FlatList
				data={newsList}
                showsHorizontalScrollIndicator={false}
                horizontal
				renderItem={({ item }) => (
					<TouchableOpacity
                    onPress={()=>navigation.navigate('read-news', {news:item})}
						style={{ width: Dimensions.get("screen").width * 0.80, marginRight: 15 }}
					>
						<Image
							source={{ uri: item.urlToImage }}
							style={{ height: Dimensions.get("screen").width * 0.77, borderRadius: 10 }}
						/>
                        <Text numberOfLines={3} style={{marginTop:10, fontSize:23, fontWeight:'800'}}>{item.title}</Text>

                        <Text style={{marginTop:5, color: Color.primary,}}>{item?.source?.name}</Text>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

export default TopHeadlineSlider;

const styles = StyleSheet.create({});
