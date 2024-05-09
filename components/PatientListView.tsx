import { View, Text, FlatList } from "react-native";
import React from "react";
import PatientItem from "./PatientItem";
import { Patient } from "../types/patientTypes";

type Props = {
  filteredPatients: Patient[];
  debouncedSearchText: string;
};

const PatientListView = ({ filteredPatients, debouncedSearchText }: Props) => {
  return (
    <FlatList
      data={filteredPatients}
      keyExtractor={(item) => item.id.toString()}
      className=" flex-col  "
      renderItem={({ item }) => <PatientItem item={item} />}
      ListHeaderComponent={
        <Text className="text-xl font-semibold text-blue-800 pt-5">
          {filteredPatients.length > 0 ? ` Patients ` : ``}
        </Text>
      }
      ListEmptyComponent={
        <Text className="text-2xl    text-blue-800  pt-5 text-center ">
          No results found for "{debouncedSearchText}"
        </Text>
      }
    />
  );
};

export default PatientListView;
