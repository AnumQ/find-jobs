// J_SEARCH API Config
export const J_SEARCH_API_CONFIG = {
  BASE_URL: "https://jsearch.p.rapidapi.com",
  // API KEY is only put here because it is a test project
  // In real project this API_KEY must be stored securely on a server
  API_KEY: "2df5147389msh33af5ef6d15e924p1fee1djsn1d5fd582a2df",
  API_HOST: "jsearch.p.rapidapi.com",
};

const headers = {
  "x-rapidapi-key": J_SEARCH_API_CONFIG.API_KEY,
  "x-rapidapi-host": J_SEARCH_API_CONFIG.API_HOST,
};
export const options = {
  method: "GET",
  headers: headers,
};
