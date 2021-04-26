import React, { useState } from "react";
import JobCard from "../components/JobCard";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import NoJobsFound from "../components/NoJobsFound";

export default function Jobs() {
  const store = useSelector((store) => store);
  const { jobs, resultsPerPage, isLoading, isDark } = store;
  const [resultsShown, setResultsShown] = useState(12);

  const loadMoreResults = () => {
    setResultsShown((prev) => prev + resultsPerPage);
  };


  return isLoading ? (
    <Spinner />
  ) : jobs.length > 0 ? (
    <>
      <div className={`JobContainer ${isDark ? "darkTheme" : "lightTheme"}`}>
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
    <NoJobsFound />
  );
}
