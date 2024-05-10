import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import useDebouncedSearch from "../../hooks/useDebouncedSearch";
import mockList from "../../data/patients";
import PatientListView from "./components/PatientListView";
import { AppStackParameterList } from "../../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type Props = {
  navigation: NativeStackNavigationProp<AppStackParameterList>;
};

const HomeScreen = ({ navigation }: Props) => {
  const [searchText, setSearchText] = useState<string>("");
  const filteredPatients = useDebouncedSearch({
    searchText,
    delay: 200,
    data: mockList,
  });

  return (
    <SafeAreaView className="bg-blue-50 h-full  flex  items-center justify-center">
      <View className="px-4">
        <Header />
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
        {/* <HeaderList filteredPatients={filteredPatients} /> */}
        <PatientListView
          filteredPatients={filteredPatients}
          searchText={searchText}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
