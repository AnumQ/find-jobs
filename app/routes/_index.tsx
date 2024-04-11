import type { MetaFunction } from "@remix-run/node";
import { LoaderFunction, json } from "@remix-run/node";
import { fetchJobs } from "~/api/J_SEARCH/jobsApi";
import { useLoaderData } from "@remix-run/react";
import {
  HStack,
  Switch,
  VStack,
  Skeleton,
  Detail,
  HelpText,
  Heading,
  Box,
} from "@navikt/ds-react";
import JobList from "~/components/UI/JobList";
import { useCallback, useState } from "react";
import { Job } from "~/types/Job";
import { useGlobalContext } from "~/contexts/GlobalContext";
import { getMeta } from "~/utils/utils";

export const meta: MetaFunction = () => getMeta("Home");

const DEFAULT_QUERY = "frontend norway";

export const loader: LoaderFunction = async () => {
  const result = await fetchJobs(DEFAULT_QUERY, 1);
  const { numReq, data } = result;
  return json({
    numReq: numReq,
    jobs: data,
  });
};

const SkeletonView = () => {
  return (
    <VStack gap="2" className="w-100">
      {Array.from({ length: 15 }).map((_, index) => (
        <Skeleton key={index} variant="rectangle" width="100%" height={30} />
      ))}
    </VStack>
  );
};

const JobListView = ({ jobs }: { jobs: Job[] }) => {
  const [pageResults, setPageResults] = useState<Job[]>(jobs);
  const [pageState, setPageState] = useState(1); // initial page state
  const [isLoading, setIsLoading] = useState(false);
  const { isLiveMode, toggleLiveMode } = useGlobalContext();
  const [numReqState, setNumReq] = useState("");

  const [isSwitchLoading, setIsSwitchLoading] = useState(false);

  const fetchPageResults = useCallback(
    async (page: number, isLiveMode: boolean) => {
      setIsLoading(true);
      setTimeout(async () => {
        async function fetchPage(page: number) {
          const res = await fetchJobs(DEFAULT_QUERY, page, isLiveMode);
          const { numReq, data } = res;
          setNumReq(numReq);
          setPageResults(data);
          setIsLoading(false);
          setIsSwitchLoading(false);
        }
        fetchPage(page);
      }, 1000);
    },
    []
  );

  return (
    <>
      <VStack>
        <Box padding={{ xs: "2", sm: "3", md: "4" }}>
          <HStack justify={"center"}>
            <Heading size="small">
              Displaying search results for:{" "}
              <span style={{ fontStyle: "italic" }}>{DEFAULT_QUERY}</span>
            </Heading>
          </HStack>
        </Box>
        <Box>
          <HStack align="center" justify={"space-between"}>
            <HStack align={"center"} gap="2">
              <Switch
                checked={isLiveMode}
                loading={isSwitchLoading}
                onChange={async (e) => {
                  if (e.target.checked) {
                    setIsSwitchLoading(true);
                    fetchPageResults(pageState, true);
                  }
                  toggleLiveMode();
                }}
              >
                Use live data{" "}
              </Switch>
              <HelpText title="Use live data">
                When turned on, the page gets real data from the JSearch API.
                This is turned off by default to avoid exceeding the maximum
                request limit.
              </HelpText>
            </HStack>
            {isLiveMode && numReqState.length > 0 && (
              <Detail>Number of requests remaining: {numReqState}</Detail>
            )}
          </HStack>
        </Box>
        <Box padding={{ xs: "2", sm: "0" }}>
          {isLoading ? (
            <SkeletonView />
          ) : (
            <JobList
              isLoading={isLoading}
              jobs={pageResults}
              pageState={pageState}
              setPageState={setPageState}
              onPageChange={(newPage: number) => {
                setPageState(newPage);
                fetchPageResults(newPage, isLiveMode);
              }}
            />
          )}
        </Box>
      </VStack>
    </>
  );
};

export default function Index() {
  const { jobs } = useLoaderData<typeof loader>();
  return (
    <div>
      <JobListView jobs={jobs} />
    </div>
  );
}
