import type { MetaFunction } from "@remix-run/node";
import { LoaderFunction, json } from "@remix-run/node";
import { fetchJobs } from "~/api/jsearch";
import { useLoaderData } from "@remix-run/react";
import {
  HStack,
  Switch,
  VStack,
  Skeleton,
  Detail,
  HelpText,
} from "@navikt/ds-react";
import JobList from "~/components/UI/JobList";
import { useCallback, useState } from "react";
import { JSearchJob } from "~/types/Job";
import { useGlobalContext } from "~/contexts/GlobalContext";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | Find Your Next Job Easily" },
    {
      name: "description",
      content: "Find job listings fast from google, linkedln etc.",
    },
  ];
};

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
      <Skeleton variant="rectangle" width="100%" height={30} />
      <Skeleton variant="rectangle" width="100%" height={30} />
      <Skeleton variant="rectangle" width="100%" height={30} />
      <Skeleton variant="rectangle" width="100%" height={30} />
      <Skeleton variant="rectangle" width="100%" height={30} />
      <Skeleton variant="rectangle" width="100%" height={30} />
      <Skeleton variant="rectangle" width="100%" height={30} />
      <Skeleton variant="rectangle" width="100%" height={30} />
      <Skeleton variant="rectangle" width="100%" height={30} />
      <Skeleton variant="rectangle" width="100%" height={30} />
      <Skeleton variant="rectangle" width="100%" height={30} />
      <Skeleton variant="rectangle" width="100%" height={30} />
      <Skeleton variant="rectangle" width="100%" height={30} />
      <Skeleton variant="rectangle" width="100%" height={30} />
    </VStack>
  );
};

const JobListView = ({ jobs }: { jobs: JSearchJob[] }) => {
  const [pageResults, setPageResults] = useState<JSearchJob[]>(jobs);
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
      <HStack align="center" justify={"space-between"}>
        <HStack align={"center"} gap="2">
          <Switch
            checked={isLiveMode}
            loading={isSwitchLoading}
            onChange={async (e) => {
              if (e.target.checked) {
                setIsSwitchLoading(true);
                // setTimeout(() => {
                //   setIsSwitchLoading(false);
                // }, 1000);
                fetchPageResults(pageState, true);
              }
              toggleLiveMode();
            }}
          >
            Use live data{" "}
          </Switch>
          <HelpText title="Use live data">
            When turned on, the page gets real data from the JSearch API. This
            is turned off by default to avoid exceeding the maximum request
            limit.
          </HelpText>
        </HStack>
        {isLiveMode && numReqState.length > 0 && (
          <Detail>Number of requests remaining: {numReqState}</Detail>
        )}
      </HStack>
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
