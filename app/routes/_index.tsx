import type { MetaFunction } from "@remix-run/node";
import { LoaderFunction, json } from "@remix-run/node";
import { fetchJobs } from "~/api/J_SEARCH/jobsApi";
import { useLoaderData } from "@remix-run/react";
import { getMeta } from "~/utils/utils";
import { JobListComponent } from "../components/JobListComponent";

export const meta: MetaFunction = () => getMeta("Home");

export const DEFAULT_QUERY = "frontend norway";

export const loader: LoaderFunction = async () => {
  const result = await fetchJobs(DEFAULT_QUERY, 1);
  const { numReq, data } = result;
  return json({
    numReq: numReq,
    jobs: data,
  });
};

export default function Index() {
  const { jobs } = useLoaderData<typeof loader>();
  return <JobListComponent jobs={jobs} />;
}
