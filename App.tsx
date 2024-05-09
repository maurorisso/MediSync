import { Text, SafeAreaView, FlatList, ScrollView } from "react-native";

import { useMemo, useState, useEffect } from "react";
import PatientItem from "./components/PatientItem";
import mockList from "./data/patients";
import SearchInput from "./components/SearchInput";
import Header from "./components/Header";

const App = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [debouncedSearchText, setDebouncedSearchText] = useState<string>("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 200);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchText]);

  const filteredPatients = useMemo(() => {
    return mockList.filter((patient) =>
      patient.name.toLowerCase().includes(debouncedSearchText.toLowerCase())
    );
  }, [debouncedSearchText]);

  return (
    <SafeAreaView className=" bg-blue-50 h-full items-center justify-center">
      <ScrollView className="w-full px-4 ">
        <Header />
        <SearchInput searchText={searchText} setSearchText={setSearchText} />

        <FlatList
          data={filteredPatients}
          keyExtractor={(item) => item.id.toString()}
          className=" flex-col  "
          renderItem={({ item }) => <PatientItem item={item} />}
        />
        {filteredPatients.length === 0 && (
          <Text className="text-2xl    text-blue-800  pt-10 text-center ">
            No results found for "{debouncedSearchText}"
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
