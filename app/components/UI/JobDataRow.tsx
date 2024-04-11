import { Job } from "~/types/Job";
import { HStack, Table, Link } from "@navikt/ds-react";
import { Link as RemixLink } from "@remix-run/react";
import { Image } from "./Image";

export const JobDataRow = ({
  job,
  rowIndex,
  isLiveMode,
}: {
  job: Job;
  rowIndex: number;
  isLiveMode: boolean;
}) => {
  const {
    job_id,
    job_title,
    employer_name,
    employer_logo,
    employer_website,
    job_city,
    job_employment_type,
    job_publisher,
  } = job;

  return (
    <Table.Row key={rowIndex + job_id}>
      <Table.HeaderCell scope="row">
        <RemixLink
          data-cy={`job-link-${job_id}`}
          to={`job/${job_id}?isLiveMode=${isLiveMode}`}
        >
          {job_title}
        </RemixLink>
      </Table.HeaderCell>

      <Table.DataCell>
        <HStack gap="2">
          {employer_website ? (
            <Link href={employer_website}>{employer_name}</Link>
          ) : (
            employer_name
          )}
          {employer_logo && <Image imageUrl={employer_logo} />}
        </HStack>
      </Table.DataCell>
      <Table.DataCell>{job_city}</Table.DataCell>
      <Table.DataCell>{job_employment_type}</Table.DataCell>
      <Table.DataCell>{job_publisher}</Table.DataCell>
    </Table.Row>
  );
};
