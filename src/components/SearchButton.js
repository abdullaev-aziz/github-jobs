import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch';

export default function SearchButton() {
    const query = useSelector(store => store.query);
    const dispatch = useDispatch();
    const getNewResults = () => {
        dispatch({

        })
    }


    return (
        <><button className="SearchButton actionBtn">Search</button>
        </>
    )
}
