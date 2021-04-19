import React from "react";
import JobCard from './JobCard'

export default function Jobs({ jobs }) {
  return (
    <div className="JobContainer">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
