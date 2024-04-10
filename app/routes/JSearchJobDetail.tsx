import {
  BodyShort,
  Box,
  Detail,
  HStack,
  Heading,
  Label,
  Page,
  VStack,
} from "@navikt/ds-react";
import { useLoaderData } from "@remix-run/react";
import { loader } from "./jobdetail.$id";

export default function JSearchJobDetail() {
  const { job } = useLoaderData<typeof loader>();
  console.log(job);
  return (
    <Page.Block as="main" className="about" width="md">
      <Box padding="8">
        <HStack justify={"space-between"}>
          <Heading size="medium" level="1">
            {job.job_title}
          </Heading>

          <Box>
            <img
              width="20%"
              height="auto"
              src={job.employer_logo}
              alt="employer"
            />
          </Box>
        </HStack>
        <VStack gap={{ xs: "1", sm: "2", md: "3" }}>
          <HStack>
            <Label>Employer: </Label>
            <Detail>{job.employer_name}</Detail>
          </HStack>
          <BodyShort></BodyShort>
        </VStack>
      </Box>
    </Page.Block>
  );
}
