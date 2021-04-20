function sanitizeString(str) {
  return (str = str.replace(/[^a-zA-Z0-9&?=/\.,_-]/gim, ""));
}

export default function gitHubJobsQuery(baseUrl, params={}) {
  let queries = [];

  for (const [key, value] of Object.entries(params)) {
    if(value) {
      queries.push(key, value)
    }
  }

  queries = queries.map((query,ind) => {
    if(ind ===0) return `?${query}=`
    if(ind ===queries.length) return;
    if(ind%2===0) return `&${query}=`
    return query;
  })

  const newUrl = baseUrl + queries.join('')
  return sanitizeString(newUrl);
}
