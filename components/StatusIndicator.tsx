import { View, Text } from "react-native";
import { Status } from "../types/patientTypes";

type Props = {
  status: Status;
};

const StatusIndicator = ({ status }: Props) => {
  const statusColor =
    status === "critical"
      ? "#F87171"
      : status === "stable"
      ? "#4ADE80"
      : "#F9CC16";

  return (
    <View className="flex flex-row items-center  w-fit">
      <View
        style={{ backgroundColor: statusColor }}
        className="h-2.5 w-2.5 rounded-full mr-1"
      ></View>
      <Text className="text-base capitalize">{status}</Text>
    </View>
  );
};
export default StatusIndicator;
