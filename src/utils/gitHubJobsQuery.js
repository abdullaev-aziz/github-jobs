function isValidStr(str) {
  return typeof search === "string" && search.length > 0;
}

function sanitizeString(str) {
  return (str = str.replace(/[^a-z0-9\.,_-]/gim, "")).toLowerCase();
}

export default function gitHubJobsQuery(params) {
  let baseUrl = "/positions.json";
  let query = "";

  for (const [key, value] of Object.entries(params)) {
      if(isValidStr(val))
  }
  arguments.forEach((arg) => {
    if (isValidStr(arg)) {
      query += sanitizeString(arg);
    }
  });

  baseUrl += query.length > 0 && `?${query}`;
  return baseUrl;
}
