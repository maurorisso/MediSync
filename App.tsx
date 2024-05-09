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
  TextInput,
  ScrollView,
} from "react-native";

import { useMemo, useState } from "react";
import PatientItem from "./components/PatientItem";
import mockList from "./data/patients";

const App = () => {
  const [searchText, setSearchText] = useState<string>("");

  const filteredPatients = useMemo(() => {
    return mockList.filter((patient) =>
      patient.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);

  return (
    <SafeAreaView className=" bg-blue-50  items-center justify-center">
      <ScrollView className="w-full">
        <Text className="text-2xl font-bold text-center p-4">MediSync</Text>
        <TextInput
          placeholder="Search..."
          value={searchText}
          onChangeText={(text) => {
            setSearchText(text);
          }}
          className="w-ful m-auto  text-black w-3/4 p-2 rounded-lg bg-white"
        />
        <FlatList
          data={filteredPatients}
          keyExtractor={(item) => item.id.toString()}
          className="w-full px-4 flex-col  "
          renderItem={({ item }) => <PatientItem item={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
