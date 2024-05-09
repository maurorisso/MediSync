import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import PatientItem from "./PatientItem";
import { Patient } from "../types/patientTypes";
import { UserPlus } from "lucide-react-native";

type Props = {
  filteredPatients: Patient[];
  searchText: string;
};

const PatientListView = ({ filteredPatients, searchText }: Props) => {
  return (
    <FlatList
      data={filteredPatients}
      keyExtractor={(item) => item.id.toString()}
      className=" flex-col w-full   px-4 "
      renderItem={({ item }) => <PatientItem user={item} />}
      ListEmptyComponent={
        <Text className="text-2xl    text-blue-800  pt-5 text-center   ">
          No results found for '{searchText}''
        </Text>
      }
    />
  );
};

export default PatientListView;
