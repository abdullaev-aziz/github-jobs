import React, { useRef, useEffect } from "react";
import JobCard from "../components/JobCard";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";

import actionTypes from '../app/actionTypes'


export default function Jobs() {
  const jobsRef = useRef();
  const store = useSelector((store) => store);
  const { jobs, resultsNow, showJobs } = store;
  const dispatch = useDispatch();

  useEffect(() => {
    if (jobsRef.current) {
      jobsRef.current.style.display = showJobs ? 'flex' : 'none'
    }
  }, [showJobs])

  return jobs.length > 0 ? (
    <>
      <div ref={jobsRef} className="JobContainer">
        {store.jobs
          .map((job) => <JobCard key={job.id} job={job} />)
          .slice(0, resultsNow)}

        <div className="LoadMore">
          <button
            className="actionBtn"
            onClick={() => {
              dispatch({
                type: actionTypes.LOAD_MORE,
              });
            }}
          >
            Load More
          </button>
        </div>
      </div>
    </>
  ) : (
    <Spinner />
  );
}
