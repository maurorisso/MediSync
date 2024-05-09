import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Patient } from "../types/patientTypes";

type Props = {
  route: {
    params: {
      user: Patient;
    };
  };
  navigation: any;
};
const PatientDetailsScreen = ({ route, navigation }: Props) => {
  const {
    picture,
    name,
    lastName,
    gender,
    diagnosis,
    status,
    bloodType,
    vitalSigns: { heartRate, temperature, bloodPressure, respiratoryRate },
    age,
    bedNumber,
  } = route.params.user;

  return (
    <ScrollView className="bg-white p-4 flex-1">
      <View className="items-center mt-6">
        <Image source={{ uri: picture }} className="h-24 w-24 rounded-full" />
        <Text className="text-2xl font-bold mt-2">
          {name} {lastName}
        </Text>
        <Text className="text-lg">{gender === "male" ? "Mr." : "Ms."}</Text>
      </View>
      <View className="mt-4 px-4">
        <Text className="text-lg text-gray-800">Diagnosis: {diagnosis}</Text>
        <Text className="text-lg text-gray-800">Status: {status}</Text>
        <Text className="text-lg text-gray-800">Blood Type: {bloodType}</Text>
        <Text className="text-lg text-gray-800">
          Heart Rate: {heartRate} BPM
        </Text>
        <Text className="text-lg text-gray-800">
          Temperature: {temperature}°C
        </Text>
        <Text className="text-lg text-gray-800">
          Blood Pressure: {bloodPressure}
        </Text>
        <Text className="text-lg text-gray-800">
          Respiratory Rate: {respiratoryRate}
        </Text>
        <Text className="text-lg text-gray-800">Age: {age}</Text>
        <Text className="text-lg text-gray-800">Bed Number: {bedNumber}</Text>
      </View>
    </ScrollView>
  );
};

export default PatientDetailsScreen;
