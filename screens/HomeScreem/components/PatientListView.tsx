import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParameterList } from "../../../types/navigation";
import { Patient } from "../../../types/patientTypes";
import PatientItem from "./PatientItem";

type Props = {
  filteredPatients: Patient[];
  searchText: string;
};

const PatientListView = ({ filteredPatients, searchText }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParameterList>>();
  return (
    <FlatList
      data={filteredPatients}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Pressable
          onPress={() =>
            navigation.navigate("DetailedScreen", {
              user: item,
            })
          }
        >
          <PatientItem user={item} />
        </Pressable>
      )}
      ListEmptyComponent={
        <Text className="text-2xl text-blue-800 pt-5 text-center">
          No results found for '{searchText}'
        </Text>
      }
    />
  );
};

export default PatientListView;
