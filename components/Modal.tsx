import React from "react";
import { Modal as RNModal, View, Text, TouchableOpacity } from "react-native";

// 공통 성공 or 실패 모달
interface ModalProps {
  visible: boolean;           // 모달 표시 여부 
  onClose: () => void;        // 닫기(확인) 버튼 클릭 시 실행 함수
  type: "success" | "fail";   // 모달 타입  성공 or 실패
  text: string;               // 안내 문구 
}

export default function Modal({ visible, onClose, type, text }: ModalProps) {
  const isSuccess = type === "success"; // 성공 실패 구분

  return (
    <RNModal visible={visible} transparent animationType="fade">
      <View className="flex-1 bg-black/40 justify-center items-center">
        <View className="bg-white rounded-xl p-8 items-center w-4/5">
          <Text
            className={`text-2xl font-bold mb-4 ${
              isSuccess ? "text-green-600" : "text-red-600"
            }`}
          >
            {isSuccess ? "성공" : "실패"}
          </Text>
          <Text className="text-base text-center mb-8">{text}</Text>
          <TouchableOpacity
            className={`w-full py-3 rounded-lg ${
              isSuccess ? "bg-green-600" : "bg-red-500"
            }`}
            onPress={onClose}
          >
            <Text className="text-white text-lg font-bold text-center">
              확인
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </RNModal>
  );
}
