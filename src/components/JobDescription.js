import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "../app/actionTypes";
import useDarkTheme from "../hooks/useDarkTheme";
import CompanyLogo from "./CompanyLogo";
import getTimeAgo from '../utils/getTimeAgo'

export default function JobDescription() {
  const dispatch = useDispatch();
  const descriptionRef = useDarkTheme();

  const { currentJob, showJobDescription } = useSelector((store) => store);
  const {
    url,
    description,
    title,
    company,
    company_url,
    company_logo,
    location,
  } = currentJob;

  const toggleJobs = () => {
    dispatch({
      type: actionTypes.TOGGLE_JOBS,
      payload: true,
    });
    dispatch({
      type: actionTypes.SHOW_DESCRIPTION,
      payload: false,
    });
  };

  const curDate = new Date().toISOString();
  const timeAgo = getTimeAgo(curDate, currentJob.created_at);

  useEffect(()=>{
    const description = descriptionRef.current
    if(description) {
      if(showJobDescription) description.style.display = 'block'
      else description.style.display = "none";
    }

  },[showJobDescription])

  return (
    <div className="backDesc">
      <div className="JobDescription" ref={descriptionRef}>
        <div className="descTop">
          <CompanyLogo logo={company_logo} />
          <div>
            <div className="jobTitle">{company}</div>
            <div>{company_url}</div>
          </div>
          <div className="descBtnGroup">
            <a href={company_url} target="_blank">
              <button className="actionBtn">Company Site</button>
            </a>
            <div className="buttonContainer">
              <a href={url} target="_blank" rel="noreferrer">
                <button className="actionBtn">Apply Now</button>
              </a>
            </div>
            <div className="buttonContainer">
              <button className="actionBtn" onClick={toggleJobs}>
                Close
              </button>
            </div>
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
  );
}
