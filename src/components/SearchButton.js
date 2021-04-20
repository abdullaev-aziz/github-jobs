import React from 'react'
<<<<<<< Updated upstream
import {useDispatch, useSelector} from 'react-redux'
=======
import { useDispatch, useSelector } from 'react-redux'
import fetchGitApi from '../adapters/fetchGitApi';
import actionTypes from '../app/actionTypes';
import { BASE_URL } from '../app/constants';
>>>>>>> Stashed changes
import useFetch from '../hooks/useFetch';
import gitHubJobsQuery from '../utils/gitHubJobsQuery';

export default function SearchButton() {
    const query = useSelector(store => store.queryURL);
    const dispatch = useDispatch();
<<<<<<< Updated upstream
    const getNewResults = () => {
        dispatch({
            
        })
=======

    const getNewResults = async () => {
        console.log(query)
        const request = gitHubJobsQuery(BASE_URL, query)
        console.log(request)
        const newJobs = await fetchGitApi(request);
        await dispatch({ type: actionTypes.NEW_JOBS,
        payload: newJobs})
>>>>>>> Stashed changes
    }


    return (
<<<<<<< Updated upstream
        <div>
            <button onClick={()=> {
                useFetch(store.query)
            }}>Search</button>
        </div>
=======
        <><button onClick={getNewResults} className="SearchButton actionBtn">Search</button>
        </>
>>>>>>> Stashed changes
    )
}
