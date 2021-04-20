import actions from "../app/actionTypes";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import isDarkTheme from "../utils/isDarkTheme";
import useGeolocation from "../hooks/useGeolocation";
import gitHubJobsQuery from "../utils/gitHubJobsQuery";
import { BASE_URL } from "../app/constants";
import fetchGitApi from "../adapters/fetchGitApi";
import { getUserLocation } from "../utils/getUserLocation";

export default function DefaultJobs({ children }) {
  const dispatch = useDispatch();
  const urlParams = useSelector((store) => store.queryURL);
  const query = gitHubJobsQuery(BASE_URL, urlParams);
  const jobs = useFetch(query);
  // const coordinates = useGeolocation();

  //first time load
  //don't put async callbacks in use effects

  useEffect(() => {
    //updating coordinates in store if permission is granted
    getUserLocation(({ coords }) => {
      const payload = { lat: coords.latitude, long: coords.longitude };
      dispatch({ type: actions.QUERY_URL, payload });
    })

    //updating jobs
    console.log('urlParams', urlParams)
    fetchGitApi(gitHubJobsQuery(BASE_URL, urlParams)).then((jobs) => {
      console.log(jobs)
      dispatch({
        type: actions.NEW_JOBS,
        payload: jobs,
      });
    });
  }, []);

  return <>{children}</>;
}
