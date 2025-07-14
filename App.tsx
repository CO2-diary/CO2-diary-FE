import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroSwiperScreen from "./screens/IntroSwiperScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import MyPageScreen from "./screens/MyPageScreen";
import ActivityAuthScreen from "./screens/ActivityAuthScreen";
import WalkAuthScreen from "./screens/WalkAuthScreen";
import TumblerAuthScreen from "./screens/TumblerAuthScreen";
import TransportAuthScreen from "./screens/TransportAuthScreen";
import ReuseAuthScreen from "./screens/ReuseAuthScreen";
import SuccessScreen from "./screens/SuccessScreen";
import GPMallScreen from "./screens/GPMallScreen";
import WeeklyGraphScreen from "./screens/WeeklyGraphScreen";
import NFTScreen from "./screens/NFTScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
//네비바 일단 홈이랑 마이페이지만 
function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName = "home-outline";
          if (route.name === "홈") iconName = "home-outline";
          else if (route.name === "마이페이지") iconName = "person-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="마이페이지" component={MyPageScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroSwiper" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="IntroSwiper" component={IntroSwiperScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="ActivityAuth" component={ActivityAuthScreen} />
        <Stack.Screen name="WalkAuth" component={WalkAuthScreen} />
        <Stack.Screen name="TumblerAuth" component={TumblerAuthScreen} />
        <Stack.Screen name="TransportAuth" component={TransportAuthScreen} />
        <Stack.Screen name="ReuseAuth" component={ReuseAuthScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="GPMall" component={GPMallScreen} />
        <Stack.Screen name="WeeklyGraph" component={WeeklyGraphScreen} />
        <Stack.Screen name="NFT" component={NFTScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
