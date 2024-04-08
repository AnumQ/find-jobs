import type { MetaFunction } from "@remix-run/node";
import { LoaderFunction, json } from "@remix-run/node";
import { fetchJobs } from "~/api";
import { useLoaderData } from "@remix-run/react";
import JobList from "~/components/JobList";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | Find Your Next Job Easily" },
    {
      name: "description",
      content: "Find job listings fast from google, linkedln etc.",
    },
  ];
};

export const loader: LoaderFunction = async () => {
  const jobs = await fetchJobs("react");
  return json(jobs);
};

export default function Index() {
  const jobs = useLoaderData<typeof loader>();

  // Check if jobs data is not loaded yet, show skeleton UI in that case
  if (!jobs) {
    return <div>loading ...</div>;
  }
  return (
    <div>
      <h1>Welcome to a list of amazing jobs in React</h1>
      <JobList jobs={jobs} />
    </div>
  );
}
