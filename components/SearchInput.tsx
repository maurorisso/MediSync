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
      className=" p-4   w-[300]  m-auto h-15  mb-2.5  border-gray-200 border rounded-md bg-white"
    />
  );
};

export default SearchInput;
