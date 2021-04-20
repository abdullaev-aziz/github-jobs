import React from 'react'
import SearchButton from "../components/SearchButton";
import SearchInput from "../components/SearchInput";
import GeolocationFilter from "../components/GeolocationFilter";
import FullTimeFilter from "../components/FullTimeFilter";
import useDarkTheme from '../hooks/useDarkTheme';


export default function SearchBar() {
    const searchBarRef = useDarkTheme();
    return (
      <div className="SearchBar" ref={searchBarRef}>
        <SearchInput />
        <GeolocationFilter />
        <FullTimeFilter />
        <SearchButton />
      </div>
    );
}
