import React from "react";
import { TextInput, ViewStyle, TextStyle } from "react-native";

// 앱에서 사용하는 입력창 -공통 컴포넌트
// 로그인, 회원가입, 인증 등에서 재사용 가능
interface InputProps {
  value: string;                               // 입력창에 표시할 값 
  onChangeText: (text: string) => void;        // 값이 변경될 때 실행되는 함수 
  placeholder?: string;                        // 입력창에 표시할 안내문구 
  style?: ViewStyle;                           // 외부에서 전체 스타일 커스텀
  inputStyle?: TextStyle;                      // 외부에서 텍스트 스타일 커스텀
  secureTextEntry?: boolean;                   // 비밀번호 입력 등 텍스트 가리기
  keyboardType?:                              // 키보드 타입 지정
    | "default"
    | "numeric"
    | "email-address"
    | "phone-pad";
  autoCapitalize?:                            //자동 대문자 설정
    | "none"
    | "sentences"
    | "words"
    | "characters";
}

// 공통 인풋 컴포넌트 정의
export default function Input({
  value,
  onChangeText,
  placeholder,
  style,
  inputStyle,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "none",
}: InputProps) {
  return (
    <TextInput
      value={value}                                  // 입력창의 값 상태
      onChangeText={onChangeText}                    // 입력 시 값 변경 함수 연결
      placeholder={placeholder}                      // 안내문구
      className="border border-gray-300 rounded-lg px-4 py-3 text-base my-1 bg-white" // 테일윈드 스타일
      style={inputStyle || style}                    // 외부 스타일 덮어쓰기 허용
      secureTextEntry={secureTextEntry}              // 비밀번호 입력 여부
      keyboardType={keyboardType}                    // 키보드 타입 지정
      autoCapitalize={autoCapitalize}                // 자동 대문자 설정
      placeholderTextColor="#b0b0b0"                 // 안내문구 색상 
    />
  );
}
