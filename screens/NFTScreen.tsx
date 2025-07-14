//NFT 페이지
import React from "react";
import { View, Text, Image } from "react-native";

export default function NFTScreen() {
  return (
    <View className="flex-1 bg-white px-8 py-12 items-center">
      <Text className="text-base mt-4 mb-8">고민중인 NFT 페이지</Text>
      //임시 이미지
      <View className="border border-gray-300 rounded-xl p-6">
        <Image
          source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/024/475/463/small/monthly-carbon-reduction-label-eco-friendly-emblem-icon-badge-png.png" }}
          style={{ width: 160, height: 160, resizeMode: "contain" }}
        />
      </View>
    </View>
  );
}
