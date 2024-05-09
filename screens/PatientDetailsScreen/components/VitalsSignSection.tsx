import { View, Text } from "react-native";
import React from "react";
import VitalSign from "./VitalSignItem";

type Props = {
  heartRate: number;
  temperature: number;
  bloodPressure: string;
  respiratoryRate: number;
};

const VitalsSignSection = ({
  heartRate,
  temperature,
  bloodPressure,
  respiratoryRate,
}: Props) => {
  return (
    <View>
      <Text className="text-xl mt-10 mb-2 text-blue-800 font-semibold ">
        Vital Signs{" "}
      </Text>
      <View className="p-4 bg-white rounded-xl items-center justify-center">
        <View className="flex flex-row justify-between w-full">
          <VitalSign value={heartRate} unit="BPM" label="Heart Rate" />
          <VitalSign value={temperature} unit="°C" label="Temperature" />
        </View>
        <View className="flex flex-row justify-between w-full">
          <VitalSign value={bloodPressure} unit="" label="Blood Pressure" />
          <VitalSign
            value={respiratoryRate}
            unit="RPM"
            label="Respiratory Rate"
          />
        </View>
      </View>
    </View>
  );
};

export default VitalsSignSection;
