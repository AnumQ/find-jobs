import type { MetaFunction } from "@remix-run/node";
import { LoaderFunction, json } from "@remix-run/node";
import { fetchJobs } from "~/api/jsearch";
import { useLoaderData } from "@remix-run/react";
import { HStack, Heading, Loader, Switch } from "@navikt/ds-react";
import JobListJSearch from "~/components/JobListJSearch";
import { useState } from "react";
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

const DEFAULT_QUERY = "react";

export const loader: LoaderFunction = async () => {
  const jobs = await fetchJobs(DEFAULT_QUERY, 1);
  return json(jobs);
};

const JSearchView = ({ jobs }: { jobs: JSearchJob[] }) => {
  const [pageResults, setPageResults] = useState<JSearchJob[]>(jobs);
  const [pageState, setPageState] = useState(1); // initial page state
  const [isLoading, setIsLoading] = useState(false);
  const { isLiveMode, toggleLiveMode } = useGlobalContext();

  const fetchPageResults = async (page: number) => {
    setIsLoading(true);
    setTimeout(async () => {
      async function fetchPage(page: number) {
        const res = await fetchJobs(DEFAULT_QUERY, page, isLiveMode);
        setPageResults(res);
        setIsLoading(false);
      }
      fetchPage(page);
    }, 1000);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <HStack
            justify={"space-between"}
            // style={{ backgroundColor: "red" }}
            align={"center"}
          >
            <Heading
              // style={{ backgroundColor: "blue", height: "100%" }}
              level="1"
              size="medium"
              spacing
              className="title"
            >
              Welcome to a list of amazing jobs
            </Heading>
            <Switch
              style={{ backgroundColor: "green", height: "100%" }}
              checked={isLiveMode}
              onChange={toggleLiveMode}
            >
              Use live data
            </Switch>
          </HStack>
          <JobListJSearch
            jobs={pageResults}
            pageState={pageState}
            setPageState={setPageState}
            fetchPageResults={fetchPageResults}
          />
        </>
      )}
    </>
  );
};

export default function Index() {
  const jobs = useLoaderData<typeof loader>();

  return (
    <div>
      <JSearchView jobs={jobs} />
    </div>
  );
}
