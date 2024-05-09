import { View, Text, Image } from "react-native";
import React from "react";
import DetailsSection from "./DetailsSection";

type Props = {
  name: string;
  lastName: string;
  diagnosis: string;
  status: string;
  picture: string;
};

const BasicInfoSection = ({
  name,
  lastName,
  diagnosis,
  status,
  picture,
}: Props) => {
  const statusColor =
    status === "critical"
      ? "#F87171"
      : status === "stable"
      ? "#4ADE80"
      : "#F9CC16";
  return (
    <DetailsSection>
      <Image source={{ uri: picture }} className="h-24 w-24 rounded-xl" />
      <View className="flex-1 ml-4">
        <Text className="text-2xl font-bold">
          {name} {lastName}
        </Text>

        <View className="flex flex-c flex-wrap gap-1">
          <Text className="text-xl text-gray-800">{diagnosis}</Text>

          <View className={`flex flex-row items-center   w-fit`}>
            <View
              style={{ backgroundColor: statusColor }}
              className={`h-2.5 w-2.5 rounded-full  bg-${statusColor}-400  mr-1 indicator`}
            ></View>
            <Text className={`text-base capitalize  bg-${statusColor}-500 `}>
              {status}{" "}
            </Text>
          </View>
        </View>
      </View>
    </DetailsSection>
  );
};

export default BasicInfoSection;
