import { JSearchJob, JSearchJobDetail } from "../types/Job";
import jsearch_mock_jobs_list from "../data/jsearch_jobs_list.json";
import jsearch_mock_job_detail from "../data/jsearch_job_detail.json";

// J_SEARCH API Config
const J_SEARCH_API_CONFIG = {
  BASE_URL: "https://jsearch.p.rapidapi.com",
  // API KEY is only put here because it is a test project
  // In real project this API_KEY is stored securely on a server
  API_KEY: "5e85830115msha85693e71c0ecddp1c2381jsn3c44ca65b630",
  API_HOST: "jsearch.p.rapidapi.com",
};

const headers = {
  "x-rapidapi-key": J_SEARCH_API_CONFIG.API_KEY,
  "x-rapidapi-host": J_SEARCH_API_CONFIG.API_HOST,
};

export type FETCH_JOBS_RESULT = {
  data: JSearchJob[];
  //The RapidAPI JSearch API has limit on maximum requests on the FREE version
  //We wish to display this number on screen so we have an idea.
  numReq: string; // number of remaining requests
};

const fetchJobsFromLive = async (
  query: string,
  page: number
): Promise<FETCH_JOBS_RESULT> => {
  const apiUrl = `${J_SEARCH_API_CONFIG.BASE_URL}/search`;

  try {
    const encodedQuery = encodeURIComponent(query);
    const encodedPage = encodeURIComponent(page);

    console.log(
      `Fetching: ${apiUrl}?query=${encodedQuery}&page=${encodedPage}`
    );
    const response = await fetch(
      `${apiUrl}?query=${encodedQuery}&page=${encodedPage}`,
      {
        method: "GET",
        headers: headers,
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        throw new Error("Too many requests - exceeded limit");
      }
      throw new Error("Failed to fetch jobs");
    }

    const json = await response.json();
    const data = json.data;
    const numOfReqRemaining =
      response.headers.get("x-ratelimit-requests-remaining") || "";

    return {
      numReq: numOfReqRemaining,
      data: data || [],
    } as FETCH_JOBS_RESULT;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

export const fetchJobDetailLive = async (
  job_id: string
): Promise<JSearchJobDetail | undefined> => {
  const apiUrl = `${J_SEARCH_API_CONFIG.BASE_URL}/job-details`;

  try {
    const response = await fetch(`${apiUrl}?job_id=${job_id}`, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      if (response.status === 429) {
        throw new Error("Too many requests - exceeded limit");
      }
      throw new Error("Failed to fetch job detail");
    }

    const json = await response.json();
    const data = json.data;
    return data.length > 0 ? data[0] : undefined;
  } catch (error) {
    console.error("Error fetching job detail:", error);
    throw error;
  }
};

const fetchJobDetailMock = async (): Promise<JSearchJobDetail | undefined> => {
  return new Promise((resolve) => {
    // To simulate a real call, we return the mock with 200 ms delay
    setTimeout(() => {
      const jobDetailMock = jsearch_mock_job_detail as unknown;
      resolve(jobDetailMock as JSearchJobDetail);
    }, 200);
  });
};

export const fetchJobDetail = async (
  job_id: string,
  isLiveMode = false
): Promise<JSearchJobDetail | undefined> => {
  console.log(
    `Fetching job details from backend. Fetching ${
      isLiveMode ? "live" : "mock"
    }`
  );
  if (!isLiveMode) {
    return await fetchJobDetailMock();
  } else {
    return await fetchJobDetailLive(job_id);
  }
};

export const fetchJobs = async (
  query: string,
  page: number,
  isLiveMode = false
): Promise<FETCH_JOBS_RESULT> => {
  console.log(
    `Fetching jobs from backend. Returning ${isLiveMode ? "live" : "mock"}`
  );
  if (!isLiveMode) {
    const data = await fetchJobsFromMock();
    return { numReq: "", data: data };
  } else {
    return await fetchJobsFromLive(query, page);
  }
};

const fetchJobsFromMock = async (): Promise<JSearchJob[]> => {
  return new Promise((resolve) => {
    const jobL = jsearch_mock_jobs_list;
    const jobs: JSearchJob[] = jobL as unknown as JSearchJob[];
    setTimeout(() => {
      resolve(jobs);
    }, 200);
  });
};
