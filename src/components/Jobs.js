import React from "react";
import JobCard from "./JobCard";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";

export default function Jobs() {
  const jobs = useSelector((store) => store.jobs);

  return jobs.length > 0 ? (
    <div className="JobContainer">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  ) : (
    <Spinner />
  );
}
