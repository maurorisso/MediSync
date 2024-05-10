import { View, Text, Platform } from "react-native";
import React from "react";
import { Hospital } from "lucide-react-native";

type Props = {};

const Header = (props: Props) => {
  return (
    <View
      style={{
        marginTop: Platform.OS === "android" ? 20 : 0,
      }}
      className="flex     justify-center flex-row items-center pt-4 mb-5 gap-1"
    >
      <Hospital size={32} className=" text-blue-800  " />
      <Text className="text-2xl font-semibold   ">MediSync</Text>
    </View>
  );
};

export default Header;
