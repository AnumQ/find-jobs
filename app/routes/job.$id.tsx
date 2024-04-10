import {
  BodyShort,
  Box,
  Detail,
  HStack,
  Heading,
  Label,
  Page,
  VStack,
  Link,
  Button,
  BodyLong,
  List,
} from "@navikt/ds-react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchJobDetail } from "~/api/jsearch";
import { JSearchJob } from "~/types/Job";

// TODO:
// add meta function

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const isLiveMode = url.searchParams.get("isLiveMode") === "true";

  if (!params || !params.id) {
    throw new Response("Not Found", { status: 404 });
  }

  const res = await fetchJobDetail(params.id, isLiveMode);
  if (!res) {
    throw new Response("Not Found", { status: 404 });
  }
  
  return json({ job: res as unknown as JSearchJob });
};

export default function JSearchJobDetail() {
  const { job } = useLoaderData<typeof loader>();
  // console.log(job);
  return (
    <Page.Block as="main" className="about" width="md">
      <Box padding={{ xs: "2", sm: "4", md: "6", lg: "5" }}>
        <VStack gap="8">
          <VStack>
            <Box>
              <HStack gap="3" justify={"space-between"}>
                <Heading size="medium" level="1">
                  {job.job_title}
                </Heading>
                {/* <img
                  width="40%"
                  height="auto"
                  src={job.employer_logo}
                  alt="employer"
                /> */}
              </HStack>
            </Box>
          </VStack>
          <VStack gap="5">
            <HStack gap="2">
              <Label>Employer: </Label>
              <BodyShort>{job.employer_name}</BodyShort>
            </HStack>
            <HStack gap="2">
              <Label>Employer Website </Label>
              <Link href={job.employer_website}>{job.employer_website}</Link>
            </HStack>
            <HStack gap="2">
              <Label>Source: </Label>
              <Link href={job.job_google_link}>Google</Link>
            </HStack>

            {/* <HStack>
              <img
                width="40%"
                height="auto"
                src={job.employer_logo}
                alt="employer"
              />
            </HStack> */}
            <HStack gap="2">
              <Label>Description: </Label>
              <BodyLong>
                {truncateText(job.job_description)}{" "}
                <Link href="#" inlineText variant="neutral">
                  read more
                </Link>
              </BodyLong>
            </HStack>
            <HStack gap="2">
              <List as="ul" title="Qualifications">
                {job.job_highlights?.Qualifications.map((q, index) => {
                  return <List.Item key={index}>{q}</List.Item>;
                })}
              </List>
            </HStack>
            <HStack gap="2" justify={"start"}>
              <Link href={job.job_apply_link} legacyBehavior>
                <Button as="a">Apply here</Button>
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </Page.Block>
  );
}

function truncateText(text: string, limit = 670): string {
  return text.length > limit ? text.substring(0, limit) + "..." : text;
}
