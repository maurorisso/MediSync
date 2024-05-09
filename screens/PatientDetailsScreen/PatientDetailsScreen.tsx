import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import { Patient } from "../../types/patientTypes";
import Header from "../../components/Header";
import { HeartPulse, Thermometer, Gauge, Wind } from "lucide-react-native";
import DetailsSection from "./components/DetailsSection";
import VitalSign from "./components/VitalSignItem";
import OverviewItem from "./components/OverViewItem";
import OverViewSection from "./components/OverviewSection";
import BasicInfoSection from "./components/BasicInfoSection";
import VitalsSignSection from "./components/VitalsSignSection";
import { useNavigation } from "@react-navigation/native";

type Props = {
  route: {
    params: {
      user: Patient;
    };
  };
  navigation: any;
};
const PatientDetailsScreen = ({ route }: Props) => {
  const navigation = useNavigation();
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
      </View>
    </SafeAreaView>
  );
};

export default PatientDetailsScreen;
