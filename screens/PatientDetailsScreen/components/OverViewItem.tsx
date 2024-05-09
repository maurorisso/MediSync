import React from "react";
import { View, Text } from "react-native";
type Props = {
  value: number | string;
  label: string;
};
const OverviewItem = ({ value, label }: Props) => {
  return (
    <View className="flex flex-col justify-center items-center">
      <Text className="text-2xl font-bold">{value}</Text>
      <Text>{label}</Text>
    </View>
  );
};

export default OverviewItem;
