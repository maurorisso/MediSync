import { View, Text } from "react-native";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <View>
      <Text className="text-2xl font-semibold  text-center p-4  ">
        MediSync
      </Text>
    </View>
  );
};

export default Header;
