// J_SEARCH API Config
export const J_SEARCH_API_CONFIG = {
  BASE_URL: "https://jsearch.p.rapidapi.com",
  // API KEY is only put here because it is a test project
  // In real project this API_KEY must be stored securely on a server
  API_KEY: "3efbc7d6fcmsh42365eb191482d7p18ae70jsn372ed5b56584",
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
