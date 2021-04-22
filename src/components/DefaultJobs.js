import actions from "../app/actionTypes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import gitHubJobsQuery from "../utils/gitHubJobsQuery";
import { BASE_URL } from "../app/constants";
import fetchGitApi from "../adapters/fetchGitApi";
import { getUserLocation } from "../utils/getUserLocation";
import isDarkTheme from "../utils/isDarkTheme";

/**
 * First Time Load
 * Asking for Geolocation
 * Retrieving jobs based on location permission
 */

export default function DefaultJobs({ children }) {
  const dispatch = useDispatch();
  const urlParams = useSelector((store) => store.queryURL);
  const [permission, setPermission] = useState(false);

  const setDefaultJobs = async (url) => {
    dispatch({ type: actions.LOADING_JOBS, payload: true });
    const jobs = await fetchGitApi(url);
    dispatch({ type: actions.LOADING_JOBS, payload: false });
    console.log(jobs);
    dispatch({
      type: actions.NEW_JOBS,
      payload: jobs,
    });
  };

  //CHECK IF DARK MODE IS DEFAULT ON THE DEVICE
  useEffect(() => {
    if (isDarkTheme()) {
      dispatch({ type: actions.DARK_THEME, payload: true });
    }
  }, []);

  //USER LOCATION

  useEffect(() => {
    getUserLocation(
      //on success
      ({ coords }) => {
        const payload = { lat: coords.latitude, long: coords.longitude };
        dispatch({ type: actions.QUERY_URL, payload });
        setPermission(true);
      },
      //user denied location
      //set permission to true, will load default location
      () => setPermission(true)
    );
  }, []);

  //JOBS RETRIEVE

  if (permission) {
    //prevent future fetches
    const url = gitHubJobsQuery(BASE_URL, urlParams);
    dispatch({
      type: actions.QUERY_URL,
      payload: { lat: "", long: "" },
    });

    setDefaultJobs(url);
    setPermission(false);
  }

  return <>{children}</>;
}
