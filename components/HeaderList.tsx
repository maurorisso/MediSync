import { View, Text, Pressable } from "react-native";
import React from "react";
import { UserPlus } from "lucide-react-native";
import { Patient } from "../types/patientTypes";

type Props = {
  filteredPatients: Patient[];
};

const HeaderList = ({ filteredPatients }: Props) => {
  const headerText = filteredPatients.length > 0 ? ` Patients ` : ``;
  return (
    <View className=" pt-5  p-4  w-full flex  flex-row   items-center  justify-between  ">
      <Text className="text-xl font-semibold text-blue-800 ">{headerText}</Text>
      <Pressable className=" flex items-center justify-center   ">
        <UserPlus size={26} color={"#2D5282"} />
      </Pressable>
    </View>
  );
};

export default HeaderList;
