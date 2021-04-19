import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

export default function SearchButton() {
    const dispatch = useDispatch();
    const getNewResults = () => {
        dispatch({
            
        })
    }


    return (
        <div>
            <button>Search</button>
        </div>
    )
}
