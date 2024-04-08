import { JSearchJob, JSearchJobDetail } from "../types/Job";
import jsearch_mock_jobs_list from "../data/jsearch_jobs_list.json";
import jsearch_mock_job_detail from "../data/jsearch_job_detail.json";

// J_SEARCH API Config
const J_SEARCH_API_CONFIG = {
  BASE_URL: "https://jsearch.p.rapidapi.com",
  // This API_KEY is only put here because this is a test project.
  API_KEY: "0666f6bd42msh58dd9c41b68f1f6p1d3559jsnfb15cd9037e2",
  API_HOST: "jsearch.p.rapidapi.com",
};

const headers = {
  "x-rapidapi-key": J_SEARCH_API_CONFIG.API_KEY,
  "x-rapidapi-host": J_SEARCH_API_CONFIG.API_HOST,
};
// Returns a prmise that resolves into a list of jobs
const fetchJobsFromLive = async (query: string, page: number) => {
  const apiUrl = `${J_SEARCH_API_CONFIG.BASE_URL}/search`;

  try {
    const encodedQuery = encodeURIComponent(query);
    const encodedPage = encodeURIComponent(page);

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
    return data || [];
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
      throw new Error("Failed to fetch jobs");
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
): Promise<JSearchJob[]> => {
  console.log(
    `Fetching jobs from backend. Returning ${isLiveMode ? "live" : "mock"}`
  );
  if (!isLiveMode) {
    return await fetchJobsFromMock();
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
