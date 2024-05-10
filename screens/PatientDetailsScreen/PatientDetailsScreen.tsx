import React from "react";
import { View, Text, SafeAreaView, Pressable, Button } from "react-native";
import { Patient } from "../../types/patientTypes";
import { ArrowLeft } from "lucide-react-native";
import Header from "../../components/Header";

import OverViewSection from "./components/OverviewSection";
import BasicInfoSection from "./components/BasicInfoSection";
import VitalsSignSection from "./components/VitalsSignSection";

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

  const statusColor =
    status === "critical"
      ? "#F87171"
      : status === "stable"
      ? "#4ADE80"
      : "#F9CC16";

  return (
    <SafeAreaView className=" flex-1 bg-blue-50 ">
      <View className="p-4">
        <Header />

        <BasicInfoSection
          diagnosis={diagnosis}
          lastName={lastName}
          name={name}
          picture={picture}
          status={status}
        />

        <OverViewSection
          age={age}
          bloodType={bloodType}
          bedNumber={bedNumber}
        />

        <VitalsSignSection
          heartRate={heartRate}
          temperature={temperature}
          bloodPressure={bloodPressure}
          respiratoryRate={respiratoryRate}
        />
        <Pressable
          onPress={() => navigation.goBack()}
          className="bg-blue-800 p-4 rounded-md mt-8    w-1/6 flex-1 justify-center  items-center  text-center  "
        >
          <ArrowLeft size={24} color="white" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default PatientDetailsScreen;
