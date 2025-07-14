// 로그인 화면 
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <View className="flex-1 justify-center items-center bg-white px-8">
      <TextInput
        placeholder="아이디를 작성해주세요."
        value={id}
        onChangeText={setId}
        className="border-b w-full mb-4 py-2"
        placeholderTextColor="#aaa"
      />
      <TextInput
        placeholder="비밀번호를 작성해주세요."
        value={pw}
        onChangeText={setPw}
        secureTextEntry
        className="border-b w-full mb-8 py-2"
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity
        className="bg-black px-8 py-3 rounded-xl"
        onPress={() => navigation.navigate("MainTab")}
      >
        <Text className="text-white font-bold text-lg">로그인하기</Text>
      </TouchableOpacity>
    </View>
  );
}
