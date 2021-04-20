import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const jobsArray = await res.json();
      setData(jobsArray);
    };
    fetchData();
  }, [url]);

  return data;
};

export default useFetch;
