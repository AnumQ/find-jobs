import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchJob } from "~/api";

// TODO:
// add meta function

export const loader = ({ params }: LoaderFunctionArgs) => {
  if (!params || !params.id) {
    throw new Response("Not Found", { status: 404 });
  }

  const res = fetchJob(params.id);
  if (!res) {
    throw new Response("Not Found", { status: 404 });
  }

  return json(res);
};

export default function JobDetail() {
  const job = useLoaderData<typeof loader>();
  console.log(job);
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">Job Detail</h1>
      <p>{job.role}</p>
    </main>
  );
}
