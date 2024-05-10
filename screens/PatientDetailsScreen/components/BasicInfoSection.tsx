import { View, Text, Image } from "react-native";
import React from "react";
import DetailsSection from "./DetailsSection";
import StatusIndicator from "../../../components/StatusIndicator";
import { Status } from "../../../types/patientTypes";
import PatientName from "../../../components/PatientName";

type Props = {
  name: string;
  gender: string;
  lastName: string;
  diagnosis: string;
  status: Status;
  picture: string;
};

const BasicInfoSection = ({
  name,
  lastName,
  diagnosis,
  status,
  gender,
  picture,
}: Props) => {
  return (
    <DetailsSection>
      <Image source={{ uri: picture }} className="h-24 w-24 rounded-xl" />
      <View className="flex-1 ml-4">
        <PatientName gender={gender} name={name} lastName={lastName} />

        <View className="flex flex-c flex-wrap gap-1">
          <Text className="text-xl text-gray-800">{diagnosis}</Text>

          <StatusIndicator status={status} />
        </View>
      </View>
    </DetailsSection>
  );
};

export default BasicInfoSection;
