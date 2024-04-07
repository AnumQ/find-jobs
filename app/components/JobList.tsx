// app/components/JobList.tsx
import React from "react";
import { Job } from "~/types/Job";
import { Link } from "@remix-run/react";
interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <div className="job-list">
      <h3>Job results</h3>
      <ul>
        {jobs.map((job: Job) => (
          <li key={job.id}>
            <Link to={`job/${job.id}`}>{job.role}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
