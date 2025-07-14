//메인화면 오늘도 환경을 위해 함께해요!
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useNavigation } from "@react-navigation/native"; 

const activityData = [
  { id: 1, date: "2025.07.02", distance: "2.1km", gp: "+5 GP", auth: "+3 GP" },
  { id: 2, date: "2025.07.01", distance: "1.8km", gp: "+4 GP", auth: "+2 GP" },
  
];

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const [showSlider, setShowSlider] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const maxIdx = activityData.length - 1;

  const [modalVisible, setModalVisible] = useState(false);
  const prev = () => setCurrentIdx(i => Math.max(i - 1, 0));
  const next = () => setCurrentIdx(i => Math.min(i + 1, maxIdx));

  return (
    <View className="flex-1 bg-white px-6 py-12">
      <Text className="text-base font-bold mb-6">
        OO님, 오늘도 환경을 위해 함께해요!
      </Text>

      <View className="border border-gray-300 rounded-xl p-5 mb-6">
        <Text className="text-base mb-1">
          오늘 감량 CO₂: <Text className="font-bold">1.2kg</Text>
        </Text>
        <Text className="text-base mb-1">
          보유 <Text className="font-bold">GreenPoint: 102 GP</Text>
        </Text>
        <View className="bg-gray-200 rounded-md w-24 h-8 mt-3 items-center justify-center">
          <Text className="text-xs">이번달 NFT: 이미지</Text>
        </View>
      </View>

      <Button
        title="오늘의 활동 인증하기"
        onPress={() => navigation.navigate("ActivityAuth")}
      />

      //기록 박스
      <View className="border border-dashed border-gray-400 rounded-xl mt-6 p-5">
        {!showSlider ? (
          <>
            // 슬라이드 비활성 활동 보기 버튼만
            <Text className="mb-2">이번주 활동 요약</Text>
            <Text className="mb-4">
              총 절감: <Text className="font-bold">1.85kg CO₂</Text>{"\n"}
              획득 GP: <Text className="font-bold">+5 GP</Text>
            </Text>
            <TouchableOpacity
              className="bg-white border border-gray-300 px-4 py-2 rounded-lg w-28 items-center"
              onPress={() => setShowSlider(true)}
            >
              <Text className="text-black font-semibold">활동 보기</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
         // 활동 내역 슬라이드 임시로
            <Text className="mb-2">{activityData[currentIdx].date}</Text>
            <Text>
              거리: <Text className="font-bold">{activityData[currentIdx].distance}</Text>
            </Text>
            <Text>
              획득 GP: <Text className="font-bold">{activityData[currentIdx].gp}</Text>
            </Text>
            <Text>
              인증: <Text className="font-bold">{activityData[currentIdx].auth}</Text>
            </Text>
            <View className="flex-row justify-between mt-4">
              <TouchableOpacity onPress={prev} disabled={currentIdx === 0}>
                <Text className={`text-2xl ${currentIdx === 0 ? "text-gray-300" : "text-black"}`}>{"<"}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowSlider(false)}>
                <Text className="text-blue-500 font-bold text-lg">닫기</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={next} disabled={currentIdx === maxIdx}>
                <Text className={`text-2xl ${currentIdx === maxIdx ? "text-gray-300" : "text-black"}`}>{">"}</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>

    //예시 성공 모달
      <Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        type="success"
        text="활동 인증 완료!"
      />
    </View>
  );
}

