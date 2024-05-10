import { View, Text } from "react-native";
import React from "react";

type Props = {
  gender: string;
  name: string;
  lastName: string;
};

const PatientName = ({ gender, name, lastName }: Props) => {
  const title = gender === "male" ? "Mr." : "Ms.";

  return (
    <View className="flex flex-row  items-center  ">
      <Text className=" text-xl "> {title}</Text>
      <Text className=" ml-1  text-xl  font-bold text-gray-900">
        {name} {lastName}
      </Text>
    </View>
  );
};

export default PatientName;
