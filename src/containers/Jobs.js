import React, { useRef, useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";

export default function Jobs() {
  const jobsRef = useRef();
  const store = useSelector((store) => store);
  const { jobs, jobsVisible, resultsPerPage } = store;
  const [resultsShown, setResultsShown] = useState(12);

  const loadMoreResults = () => {
    setResultsShown((prev) => prev + resultsPerPage);
  };

  useEffect(() => {
    if (jobsRef.current) {
      jobsRef.current.style.display = jobsVisible ? "flex" : "none";
    }
  }, [jobsVisible]);

  return jobs.length > 0 ? (
    <>
      <div ref={jobsRef} className="JobContainer">
        {jobs
          .map((job) => <JobCard job={job} key={job && job.id} />)
          .slice(0, resultsShown)}

        {jobs.length > resultsShown && (
          <div className="LoadMore">
            <button className="actionBtn" onClick={loadMoreResults}>
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  ) : (
    <Spinner />
  );
}
