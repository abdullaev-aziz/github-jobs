import actions from "../app/actionTypes";
import {useEffect} from 'react'
import useFetch from "../hooks/useFetch";
import {useDispatch} from 'react-redux'

export default function DefaultJobs({ children }) {
  const dispatch = useDispatch();
  const jobs = useFetch("/positions.json?page=1");

  useEffect(() => {
    dispatch({
      type: actions.SET_JOBS,
      payload: {
        jobs,
      },
    });
  }, [jobs]);

  return <>{children}</>;
}
