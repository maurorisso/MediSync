import { View, Text, Image } from "react-native";
import React from "react";
import { Patient } from "../../../types/patientTypes";
import StatusIndicator from "../../../components/StatusIndicator";
import PatientName from "../../../components/PatientName";

type Props = {
  user: Patient;
};

const PatientItem = ({ user }: Props) => {
  return (
    <View className="w-full bg-white  rounded-xl p-4   shadow-sm  justify-between items-center  flex-row mt-4    ">
      <Image
        source={{ uri: user.picture }}
        className="h-20 w-20 rounded-full "
        resizeMode="cover"
      />
      <View className="flex-1 p-2">
        <PatientName
          gender={user.gender}
          name={user.name}
          lastName={user.lastName}
        />
        <Text className="text-lg text-gray-800">{user.diagnosis}</Text>
        <View className={`flex flex-row  justify-between `}>
          <StatusIndicator status={user.status} />
          <View className=" bg-blue-50  font-base  px-2 py-1 rounded-md   ">
            <Text> Room {user.bedNumber}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PatientItem;
