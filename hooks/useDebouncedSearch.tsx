import { useState, useEffect, useMemo } from "react";
import { Patient } from "../types/patientTypes";

type Props = {
  searchText: string;
  delay: number;
  data: Patient[];
};

function useDebouncedSearch({ searchText, delay, data }: Props): Patient[] {
  const [debouncedSearchText, setDebouncedSearchText] =
    useState<string>(searchText);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchText, delay]);

  const filteredData = useMemo(() => {
    return data.filter(
      (item: any) =>
        item.name.toLowerCase().startsWith(debouncedSearchText.toLowerCase()) ||
        item.lastName
          .toLowerCase()
          .startsWith(debouncedSearchText.toLowerCase()) ||
        item.diagnosis
          .toLowerCase()
          .startsWith(debouncedSearchText.toLowerCase()) ||
        (item.bedNumber &&
          item.bedNumber
            .toLowerCase()
            .startsWith(debouncedSearchText.toLowerCase()))
    );
  }, [data, debouncedSearchText]);

  return filteredData;
}

export default useDebouncedSearch;
