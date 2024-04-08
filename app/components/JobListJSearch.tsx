// app/components/JobList.tsx
import React from "react";
import { JSearchJob } from "~/types/Job";
import { Link } from "@remix-run/react";
import { HStack, Table, VStack, Pagination } from "@navikt/ds-react";
import "@styles/joblist.css";
interface JobListProps {
  jobs: JSearchJob[];
  pageState: number;
  setPageState: React.Dispatch<React.SetStateAction<number>>;
  fetchPageResults: (page: number) => void;
}

const JobListJSearch: React.FC<JobListProps> = ({
  jobs,
  pageState,
  setPageState,
  fetchPageResults,
}) => {
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
          {jobs.map(
            (
              {
                job_id,
                job_title,
                employer_name,
                job_employment_type,
                job_city,
                job_publisher,
              },
              i
            ) => {
              return (
                <Table.Row key={i + job_id}>
                  <Table.HeaderCell scope="row">
                    <Link to={`jobdetail/${job_id}`}>{job_title}</Link>
                  </Table.HeaderCell>

                  <Table.DataCell>{employer_name}</Table.DataCell>
                  <Table.DataCell>{job_employment_type}</Table.DataCell>
                  <Table.DataCell>{job_city}</Table.DataCell>
                  <Table.DataCell>{job_publisher}</Table.DataCell>
                </Table.Row>
              );
            }
          )}
        </Table.Body>
      </Table>
      <HStack justify={"center"}>
        <Pagination
          page={pageState}
          onPageChange={(page) => {
            setPageState(page);
            fetchPageResults(page);
          }}
          count={10} // hard coded since we don't know the total number of result
          boundaryCount={1}
          siblingCount={1}
        />
      </HStack>
    </VStack>
  );
};

export default JobListJSearch;