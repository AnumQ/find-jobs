// app/components/JobList.tsx
import React from "react";
import { JSearchJob } from "~/types/Job";
import { Link } from "@remix-run/react";
import { HStack, Table, VStack, Pagination } from "@navikt/ds-react";
import { useGlobalContext } from "~/contexts/GlobalContext";
interface JobListProps {
  isLoading: boolean;
  jobs: JSearchJob[];
  pageState: number;
  setPageState: React.Dispatch<React.SetStateAction<number>>;
  onPageChange: (page: number) => void;
}

const JobList: React.FC<JobListProps> = ({ jobs, pageState, onPageChange }) => {
  const { isLiveMode } = useGlobalContext();
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
        <Table.Body data-cy="job-list">
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
                    <Link to={`jobdetail/${job_id}?isLiveMode=${isLiveMode}`}>
                      {job_title}
                    </Link>
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
      <HStack justify="center">
        <Pagination
          size="small"
          page={pageState}
          onPageChange={(page) => onPageChange(page)}
          count={3} // hard coded since we don't know the total number of result and  this is only a test project
          boundaryCount={1}
          siblingCount={1}
        />
      </HStack>
    </VStack>
  );
};

export default JobList;
