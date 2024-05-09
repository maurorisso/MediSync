import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { Filter } from "lucide-react-native";

type Props = {
  searchText: string;
  setSearchText: (text: string) => void;
};

const SearchInput = ({ searchText, setSearchText }: Props) => {
  return (
    <View className="w-full flex flex-row justify-center items-center px-4">
      <TextInput
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
        className="flex-1  p-4 h-15 border-gray-200 border rounded-md mx-2 bg-white"
      />
      <Pressable className="bg-blue-800 p-2 rounded-md items-center justify-center">
        <Filter size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default SearchInput;
