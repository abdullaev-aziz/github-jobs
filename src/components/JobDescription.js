import React, { useEffect, useState } from "react";
import CompanyLogo from "./CompanyLogo";
import getTimeAgo from "../utils/getTimeAgo";
import { Link, useParams } from "react-router-dom";
import fetchGitApi from "../adapters/fetchGitApi";
import { useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";


export default function JobDescription() {
  const isDark = useSelector(store => store.isDark)

  const { id } = useParams();

  const [currentJob, setCurrentJob] = useState({loading:true});

  useEffect(() => {
    fetchGitApi(`/positions/${id}.json`)
      .then((job) => setCurrentJob({...job, loading:false}))
      .catch((err) => console.log("err", err));
  },[id]);

  console.log("current job", currentJob);
  const {
    url,
    description,
    title,
    company,
    company_url,
    company_logo,
    location,
  } = currentJob;

  const curDate = new Date().toISOString();
  const timeAgo = getTimeAgo(curDate, currentJob.created_at);

  return (
    !currentJob.loading && (
      <div className="backDesc">
        <div
          className={`JobDescription ${isDark ? "darkTheme" : "lightTheme"}`}
        >
          <div className="descTop">
            <CompanyLogo logo={company_logo} />
            <div>
              <div className="jobTitle">{company}</div>
              <div>{company_url}</div>
              <div>{location}</div>
            </div>
            <div className="descBtnGroup">
              <a href={company_url} target="_blank">
                <Button colorScheme="teal" variant="solid">
                  Company Site
                </Button>
              </a>
              <div className="buttonContainer">
                <a href={url} target="_blank" rel="noreferrer">
                  <Button colorScheme="teal" variant="solid">
                    Apply Now
                  </Button>
                </a>
              </div>
              <Link to="/">
                <div className="buttonContainer">
                  <Button colorScheme="red" variant="solid" size="md">
                    x
                  </Button>
                </div>
              </Link>
            </div>
          </div>

          <div className="jobAge">
            {timeAgo} - {currentJob.type}
          </div>
          <div className="jobTitle">{title}</div>

          <div
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          ></div>
        </div>
      </div>
    )
  ); 
}
