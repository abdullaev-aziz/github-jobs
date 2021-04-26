import React from "react";
import SearchButton from "../components/SearchButton";
import SearchInput from "../components/SearchInput";
import GeolocationFilter from "../components/GeolocationFilter";
import FullTimeFilter from "../components/FullTimeFilter";
import { useSelector } from "react-redux";

export default function SearchBar() {
  const isDark = useSelector((store) => store.isDark);
  return (
    <div className={`SearchBar ${isDark ? "darkTheme" : "lightTheme"}`}>
      <SearchInput />
      <GeolocationFilter />
      <FullTimeFilter />
      <SearchButton />
    </div>
  );
}
