import { FindWorkJob } from "../types/Job";

// FIND WORK API IMPL
const FIND_WORK = {
  BASE_URL: "https://findwork.dev/api/jobs?",
  API_KEY: "5443501c70c958703a3fa740971fd1681cef9f58", // This is only put here because this is a test project.
};
let jobList: FindWorkJob[] = [];
const fetchJobsfromFindWork = async (query: string) => {
  const apiUrl = `${FIND_WORK}/search`;

  try {
    const response = await fetch(
      `${apiUrl}?search=${query}&sort_by=relevance`,
      {
        method: "GET",
        headers: {
          Authorization: `Token ${FIND_WORK.API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch jobs");
    }

    const json = await response.json();
    const data = json.results;
    jobList = data;
    return data || [];
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

export const fetchJob = (id: string): FindWorkJob | undefined => {
  // The API I am using does not support /jobs/id search so we are
  // filtering through the existing list of jobs from the initial search
  const filtered = jobList.filter((job) => job.id === id);
  return filtered.length > 0 ? filtered[0] : undefined;
};
