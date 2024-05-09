import {
  View,
  Text,
  Button,
  Pressable,
  Modal,
  Image,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
} from "react-native";

import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Patient } from "./types/patientTypes";
import PatientItem from "./components/PatientItem";
import patients from "./data/patients";

const App = () => {
  return (
    <SafeAreaView className=" bg-blue-50  items-center justify-center   ">
      <FlatList
        data={patients}
        keyExtractor={(item) => item.id.toString()}
        className="w-full px-4 flex-col  "
        renderItem={({ item }) => <PatientItem item={item} />}
      />
    </SafeAreaView>
  );
};

export default App;
