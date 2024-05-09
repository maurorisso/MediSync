import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { UserPlus, Search } from "lucide-react-native";

type Props = {
  searchText: string;
  setSearchText: (text: string) => void;
};

const SearchInput = ({ searchText, setSearchText }: Props) => {
  return (
    <TextInput
      placeholder="Search.."
      value={searchText}
      onChangeText={setSearchText}
      className=" w-3/4 p-4 h-15 mt-5  mb-2.5  border-gray-200 border rounded-md bg-white"
    />
  );
};

export default SearchInput;
