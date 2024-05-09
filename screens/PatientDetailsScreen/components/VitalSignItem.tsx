import React from "react";
import { View, Text } from "react-native";

type Props = {
  value: number | string;
  unit: string;
  label: string;
};

const VitalSign = ({ value, unit, label }: Props) => {
  return (
    <View className="flex-1 items-center p-2">
      <Text className="text-2xl font-bold">
        {value} <Text className="text-base font-medium">{unit}</Text>
      </Text>
      <Text className="text-lg text-gray-800">{label}</Text>
    </View>
  );
};

export default VitalSign;
