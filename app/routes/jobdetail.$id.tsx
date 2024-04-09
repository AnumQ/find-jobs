import { Heading } from "@navikt/ds-react";
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
    <main className="">
      <Heading size="medium" level="1">
        Job Detail
      </Heading>
      <p>{job.employer_name}</p>
      {/* change to image */}
      <p>{job.employer_website}</p>
    </main>
  );
}
