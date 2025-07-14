//첫 진입 화면 앱 소개 일단 슬라이드로 로그인하기 나오게 넣어둠
import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";

export default function IntroSwiperScreen() {
  const navigation = useNavigation<any>();

  return (
    <Swiper loop={false} showsPagination={true}>
      <View className="flex-1 justify-center items-center bg-white">
        <View className="w-32 h-32 bg-yellow-300 rounded-2xl justify-center items-center mb-6">
          <Text className="text-3xl font-bold">1</Text>
        </View>
        <Text className="text-3xl font-bold">탄소 일지</Text>
      </View>

      <View className="flex-1 justify-center items-center bg-white">
        <View className="w-32 h-32 bg-yellow-300 rounded-2xl justify-center items-center mb-10">
          <Text className="text-3xl font-bold">1</Text>
        </View>
        <TouchableOpacity
          className="w-10/12 bg-black py-3 rounded-xl mb-4"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-white text-center text-lg font-bold">로그인하기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text className="text-gray-500 underline text-base">아직 아이디가 없다면</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
}
