//주간 그래프 페이지
import React from "react";
import { View, Text } from "react-native";

export default function WeeklyGraphScreen() {
  return (
    <View className="flex-1 bg-white px-8 py-12">
      <Text className="text-base mt-4">주간 그래프</Text>
      <Text className="text-gray-400 mt-4">이번주는 ookg를 절감하였습니다!</Text>
    </View>
  );
}
