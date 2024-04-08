// app/components/JobList.tsx
import React, { useState } from "react";
import { JSearchJob } from "~/types/Job";
import { Link } from "@remix-run/react";
import { HStack, Table, VStack, Pagination } from "@navikt/ds-react";
import { chunkArray } from "../utils/utils";
import "@styles/joblist.css";
interface JobListProps {
  jobs: JSearchJob[];
}

const JobListFindWork: React.FC<JobListProps> = ({ jobs }) => {
  const paginationChunks = chunkArray(jobs, 10);
  const [pageState, setPageState] = useState(1);
  const filteredJobs = paginationChunks[pageState - 1];

  return (
    <VStack className="job-list" gap="5">
      <Table className="job-result">
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
          {filteredJobs.map(
            (
              { id, role, company_name, employment_type, location, source },
              i
            ) => {
              return (
                <Table.Row key={i + id}>
                  <Table.HeaderCell scope="row">
                    <Link to={`job/${id}`}>{role}</Link>
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
      <HStack justify={"center"}>
        <Pagination
          page={pageState}
          onPageChange={(x) => setPageState(x)}
          count={paginationChunks.length}
          boundaryCount={1}
          siblingCount={1}
        />
      </HStack>
    </VStack>
  );
};

export default JobListFindWork;
