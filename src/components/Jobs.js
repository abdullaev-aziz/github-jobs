import React from 'react'

export default function Jobs({jobs}) {
    return (
        <div>
            {jobs.map(job => <h5 key={job?.id}>{job?.title}</h5>)}
        </div>
    )
}
