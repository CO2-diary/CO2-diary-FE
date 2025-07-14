//성공 페이지 
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function SuccessScreen({ navigation }) {
  return (
    <View className="flex-1 justify-between bg-white px-8 py-12">
      <View>
        <Text className="text-xl font-bold text-center mb-4">성공</Text>
        <Text className="text-base text-center mb-2">절감량 자동 계산</Text>
        <Text className="text-base text-center text-gray-500">그거에 대한 GP 지급 얼마나 되었는지</Text>
      </View>
      <TouchableOpacity
        className="border border-gray-400 rounded-lg px-4 py-3 mb-8 self-center w-1/2 items-center"
        onPress={() => navigation.goBack()}
      >
        <Text className="text-base text-center">완료</Text>
      </TouchableOpacity>
    </View>
  );
}
