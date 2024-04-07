// app/components/JobList.tsx
import React from "react";
import { Job } from "~/types/Job";
import { Link } from "@remix-run/react";
import { Table } from "@navikt/ds-react";

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <div className="job-list">
      <h3>Job results</h3>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">Role</Table.HeaderCell>
            <Table.HeaderCell scope="col">Company</Table.HeaderCell>
            <Table.HeaderCell scope="col">Employment Type</Table.HeaderCell>
            <Table.HeaderCell scope="col">Location</Table.HeaderCell>
            <Table.HeaderCell scope="col">Source</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {jobs.map(
            (
              { id, role, company_name, employment_type, location, source },
              i
            ) => {
              return (
                <Table.Row key={i + id}>
                  <Table.HeaderCell scope="row">
                    <Link to={`job/${id}`}>{role} </Link>
                  </Table.HeaderCell>

                  <Table.DataCell>{company_name}</Table.DataCell>
                  <Table.DataCell>{employment_type}</Table.DataCell>
                  <Table.DataCell>{location}</Table.DataCell>
                  <Table.DataCell>{source}</Table.DataCell>
                </Table.Row>
              );
            }
          )}
        </Table.Body>
      </Table>

      {/* <ul>
        {jobs.map((job: Job) => (
          <li key={job.id}>
            <Link to={`job/${job.id}`}>{job.role}</Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default JobList;
