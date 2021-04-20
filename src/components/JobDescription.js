import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "../app/actionTypes";

export default function JobDescription({ description, url }) {
  const dispatch = useDispatch();

  const toggleJobs = () => {
    dispatch({
      type: actionTypes.TOGGLE_JOBS,
    });
    dispatch({
      type: actionTypes.SHOW_DESCRIPTION,
      payload: {
        showDesc: false,
        descHtml: "",
      },
    });
  };

  return (
    <div className="JobDescription">
      <div className="buttonContainer">
        <a href={url} target="_blank">
          <button className="actionBtn">Apply Now</button>
        </a>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      ></div>
      <div className="buttonContainer">
        <button className="actionBtn" onClick={toggleJobs}>
          Close
        </button>
      </div>
    </div>
  );
}
