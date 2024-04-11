import { fetchJobs } from "~/api/J_SEARCH/jobsApi";
import { HStack, VStack, Detail, Heading, Box } from "@navikt/ds-react";
import JobList from "~/components/UI/JobList";
import { useCallback, useState } from "react";
import { Job } from "~/types/Job";
import { useGlobalContext } from "~/contexts/GlobalContext";
import { SkeletonView } from "../routes/SkeletonView";
import { LiveDataSwitch, LiveDataHelpText } from "./LiveDataSwitch";
import { DEFAULT_QUERY } from "../routes/_index";

export const JobListComponent = ({ jobs }: { jobs: Job[] }) => {
  const [pageResults, setPageResults] = useState<Job[]>(jobs);
  const [pageState, setPageState] = useState(1); // initial page state
  const [isLoading, setIsLoading] = useState(false);
  const { isLiveMode, toggleLiveMode } = useGlobalContext();
  const [numReqState, setNumReq] = useState("");

  const [isSwitchLoading, setIsSwitchLoading] = useState(false);

  const fetchPageResults = useCallback(
    async (page: number, isLiveMode: boolean) => {
      setIsLoading(true);
      async function fetchPage(page: number) {
        const res = await fetchJobs(DEFAULT_QUERY, page, isLiveMode);
        const { numReq, data } = res;
        setNumReq(numReq);
        setPageResults(data);
        setIsLoading(false);
        setIsSwitchLoading(false);
      }
      fetchPage(page);
    },
    []
  );

  return (
    <>
      <VStack>
        <Box padding={{ xs: "2", sm: "3", md: "4", lg: "6" }}>
          <HStack justify={"center"}>
            <Heading size="small">
              Displaying search results for:{" "}
              <span style={{ fontStyle: "italic" }}>{DEFAULT_QUERY}</span>
            </Heading>
          </HStack>
        </Box>
        <Box padding={{ xs: "2", sm: "0" }}>
          <HStack align="center" justify={"space-between"}>
            <HStack align={"center"} gap="2">
              <LiveDataSwitch
                isLiveMode={isLiveMode}
                isSwitchLoading={isSwitchLoading}
                onChange={(checked) => {
                  if (checked) {
                    setIsSwitchLoading(true);
                    fetchPageResults(pageState, true);
                  }
                  toggleLiveMode();
                }}
              ></LiveDataSwitch>
              <LiveDataHelpText></LiveDataHelpText>
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
