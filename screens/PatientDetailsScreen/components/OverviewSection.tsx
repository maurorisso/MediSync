import { View, Text } from "react-native";
import DetailsSection from "./DetailsSection";
import OverviewItem from "./OverViewItem";

type Props = {
  age: number;
  bloodType: string;
  bedNumber: string;
};

const OverViewSection = ({ age, bloodType, bedNumber }: Props) => {
  return (
    <View>
      <Text className="text-xl mt-10 mb-2 text-blue-800 font-semibold ">
        Overview
      </Text>
      <DetailsSection>
        <OverviewItem value={age} label="years old" />
        <OverviewItem value={bloodType} label="Blood type" />
        <OverviewItem value={bedNumber} label="Bed Number" />
      </DetailsSection>
    </View>
  );
};

export default OverViewSection;
