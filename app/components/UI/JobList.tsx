// app/components/JobList.tsx
import React from "react";
import { Job } from "~/types/Job";
import { HStack, Table, VStack, Pagination, Box } from "@navikt/ds-react";
import { useGlobalContext } from "~/contexts/GlobalContext";
import "@styles/joblist.scss";
import { JobDataRow } from "./JobDataRow";
interface JobListProps {
  isLoading: boolean;
  jobs: Job[];
  pageState: number;
  setPageState: React.Dispatch<React.SetStateAction<number>>;
  onPageChange: (page: number) => void;
}

const JobList: React.FC<JobListProps> = ({ jobs, pageState, onPageChange }) => {
  const { isLiveMode } = useGlobalContext();
  return (
    <VStack className="job-list" gap="5">
      <Box>
        <Table className="job-result">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col">Role</Table.HeaderCell>
              <Table.HeaderCell scope="col">Company</Table.HeaderCell>
              <Table.HeaderCell scope="col">Location</Table.HeaderCell>
              <Table.HeaderCell scope="col">Employment Type</Table.HeaderCell>
              <Table.HeaderCell scope="col">Source</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body data-cy="job-list">
            {jobs.map((job, i) => (
              <JobDataRow
                key={i}
                job={job}
                isLiveMode={isLiveMode}
                rowIndex={i}
              />
            ))}
          </Table.Body>
        </Table>
      </Box>
      <HStack justify="center">
        <Pagination
          size="small"
          page={pageState}
          onPageChange={(page) => onPageChange(page)}
          count={4} // hard coded since we don't know the total number of result and this is only a test project
          boundaryCount={1}
          siblingCount={1}
        />
      </HStack>
    </VStack>
  );
};

export default JobList;
