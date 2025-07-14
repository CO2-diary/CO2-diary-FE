import React from "react";
import { TouchableOpacity, Text, ViewStyle, TextStyle } from "react-native";

// 버튼 컴포넌트 모든 화면에서 공통으로 쓰는 버튼 - props 타입 정의
interface ButtonProps {
  title: string;                // 버튼에 표시할 텍스트
  onPress: () => void;          // 버튼 클릭 시 실행될 함수
  style?: ViewStyle;            // 버튼 스타일 커스텀
  textStyle?: TextStyle;        // 텍스트 스타일 커스텀
}

// 공통 버튼 컴포넌트 정의
export default function Button({ title, onPress, style, textStyle }: ButtonProps) {
  return (
    //터치 가능한 버튼 역할
    <TouchableOpacity
      onPress={onPress}                                // 클릭 이벤트 연결
      className="bg-black rounded-xl py-3 px-8 my-1"   // 테일윈드 스타일
      style={style}                                    // 외부에서 스타일 덮어쓰기 허용
    >
      <Text
        className="text-white text-center font-bold text-lg" // 기본 텍스트 스타일
        style={textStyle}                                    // 외부에서 텍스트 스타일 덮어쓰기 허용
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
