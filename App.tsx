import { Text, SafeAreaView, FlatList, ScrollView, View } from "react-native";

import { useMemo, useState, useEffect } from "react";
import mockList from "./data/patients";
import SearchInput from "./components/SearchInput";
import Header from "./components/Header";
import PatientListView from "./components/PatientListView";

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
      <Header />
      <SearchInput searchText={searchText} setSearchText={setSearchText} />
      <ScrollView className="w-full px-4 mt-2 ">
        <PatientListView
          debouncedSearchText={debouncedSearchText}
          filteredPatients={filteredPatients}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
