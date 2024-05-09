import { View, Text } from "react-native";
import React from "react";

type Props = {
  children: React.ReactNode;
  isVitalSignSection?: boolean;
};

const DetailsSection = ({ children, isVitalSignSection }: Props) => {
  return (
    <View
      className={`flex w-full flex-row  bg-white rounded-xl  px-4 items-center   p-4 justify-between `}
    >
      {children}
    </View>
  );
};

export default DetailsSection;
