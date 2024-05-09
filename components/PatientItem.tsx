import { View, Text, Image } from "react-native";
import React from "react";
import { Patient } from "../types/patientTypes";

type Props = {
  user: Patient;
};

const Patientuser = ({ user }: Props) => {
  const statusColor =
    user.status === "critical"
      ? "#F87171"
      : user.status === "stable"
      ? "#4ADE80"
      : "#F9CC16";

  const title = user.gender === "male" ? "Mr." : "Ms.";

  return (
    <View className="w-full bg-white  rounded-md  transition-opacity  shado p-2 justify-between items-center  flex-row mt-4    ">
      <Image
        source={{ uri: user.picture }}
        className="h-20 w-20 rounded-full "
        resizeMode="cover"
      />
      <View className="flex-1 p-2">
        <View className="flex flex-row  items-center  ">
          <Text className=" text-xl "> {title}</Text>
          <Text className=" ml-1  text-xl  font-bold text-gray-900">
            {user.name} {user.lastName}
          </Text>
        </View>
        <Text className="text-lg text-gray-800">{user.diagnosis}</Text>
        <View className={`flex flex-row  justify-between `}>
          <View className={`flex flex-row items-center justify-center  w-fit`}>
            <View
              style={{ backgroundColor: statusColor }}
              className={`h-2.5 w-2.5 rounded-full  bg-${statusColor}-400  mr-1 `}
            ></View>
            <Text className={`text-base capitalize  bg-${statusColor}-500 `}>
              {user.status}{" "}
            </Text>
          </View>
          <View className=" bg-gray-100  font-base  px-2 py-1 rounded-md   ">
            <Text> Room {user.bedNumber}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Patientuser;
