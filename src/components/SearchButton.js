import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import fetchGitApi from "../adapters/fetchGitApi";
import actionTypes from "../app/actionTypes";
import { BASE_URL } from "../app/constants";
import gitHubJobsQuery from "../utils/gitHubJobsQuery";
import { IconButton } from "@chakra-ui/react";
import SearchIcon from "./SearchIcon";


export default function SearchButton() {
  const query = useSelector((store) => store.queryURL);
  const dispatch = useDispatch();

  const getNewJobs = async () => {

    dispatch({ type: actionTypes.LOADING_JOBS, payload: true });
    const request = gitHubJobsQuery(BASE_URL, query);
    console.log(request);
    const newJobs = await fetchGitApi(request);
    dispatch({ type: actionTypes.LOADING_JOBS, payload: false });
    
    dispatch({ type: actionTypes.NEW_JOBS, payload: newJobs });
  };

  return (
    <Link to="/">
      <div className="SearchButton">
        <IconButton
          colorScheme="teal"
          onClick={getNewJobs}
          aria-label="Search database"
          icon={<SearchIcon />}
        />
      </div>
    </Link>
  );
}
