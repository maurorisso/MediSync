import { View, Text, Image } from "react-native";
import React from "react";
import { Patient } from "../types/patientTypes";

type Props = {
  item: Patient;
};

const PatientItem = ({ item }: Props) => {
  const status =
    item.status === "critical"
      ? "red"
      : item.status === "stable"
      ? "green"
      : "yellow";
  const title = item.gender === "male" ? "Mr." : "Ms.";

  return (
    <View className="w-full bg-white  rounded-lg   p-2 justify-between items-center  flex-row mt-4 ">
      <Image
        source={{ uri: item.picture }}
        className="h-20 w-20 rounded-full "
        resizeMode="cover"
      />
      <View className="flex-1  p-2 here">
        <View className="flex flex-row  items-center  ">
          <Text className=" text-xl "> {title}</Text>
          <Text className=" ml-1  text-xl  font-bold text-gray-900">
            {item.name}
          </Text>
        </View>
        <Text className="text-lg text-gray-800">{item.diagnosis}</Text>
        <View className={`flex flex-row  justify-between`}>
          <View className={`flex flex-row items-center justify-center  w-fit`}>
            <View
              className={`h-2.5 w-2.5 rounded-full  bg-${status}-400 mr-1 `}
            ></View>
            <Text className={`text-base capitalize`}>{item.status} </Text>
          </View>
          <View className=" bg-gray-50  font-base  px-2 py-1 rounded-md   ">
            <Text> Room {item.bedNumber}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PatientItem;
