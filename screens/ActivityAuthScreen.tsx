//활동 인증하기 페이지
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ActivityAuthScreen() {
  const navigation = useNavigation<any>();

  return (
    <View className="flex-1 bg-white px-8 py-16">
      <Text className="text-lg font-bold mb-8 text-center underline">활동 인증하기</Text>

      <View className="gap-y-5">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-base">도보/자전거 인증하기</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("WalkAuth")}
            className="border border-gray-400 rounded-lg px-4 py-2 items-center"
            style={{ width: 90, marginLeft: 8 }}
          >
            <Text className="text-black text-center">Button</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-base">텀블러 사용 인증하기</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("TumblerAuth")}
            className="border border-gray-400 rounded-lg px-4 py-2 items-center"
            style={{ width: 90, marginLeft: 8 }}
          >
            <Text className="text-black text-center">Button</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-base">대중교통 이용 인증하기</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("TransportAuth")}
            className="border border-gray-400 rounded-lg px-4 py-2 items-center"
            style={{ width: 90, marginLeft: 8 }}
          >
            <Text className="text-black text-center">Button</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-base">중고/리필 구매 인증하기</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("ReuseAuth")}
            className="border border-gray-400 rounded-lg px-4 py-2 items-center"
            style={{ width: 90, marginLeft: 8 }}
          >
            <Text className="text-black text-center">Button</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
