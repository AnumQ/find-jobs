import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchJobDetail } from "~/api/jsearch";
import { JSearchJob } from "~/types/Job";

// TODO:
// add meta function

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params || !params.id) {
    throw new Response("Not Found", { status: 404 });
  }
  const res = await fetchJobDetail(params.id);
  if (!res) {
    throw new Response("Not Found", { status: 404 });
  }
  console.log("res is ");
  console.log(res);
  return json({ job: res as unknown as JSearchJob });
};

export default function JSearchJobDetail() {
  const { job } = useLoaderData<typeof loader>();
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">Job Detail</h1>
      <p>{job.employer_name}</p>
      {/* change to image */}
      <p>{job.employer_logo}</p>
      <p>{job.employer_website}</p>
    </main>
  );
}
