import React from 'react'
import FullTimeFilter from '../components/FullTimeFilter'
import GeolocationFilter from '../components/GeolocationFilter'
import SearchButton from '../components/SearchButton'
import SearchInput from '../components/SearchInput'

export default function SearchBar() {
    return (
        <div className="SearchBar">
            <div className="filtersContainer">

                <SearchInput />
                <GeolocationFilter />
                <FullTimeFilter />
                <SearchButton />
            </div>
        </div>
    )
}
