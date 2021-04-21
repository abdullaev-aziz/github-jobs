import getTimeAgo from "../utils/getTimeAgo";
import CompanyLogo from "./CompanyLogo";
import { useDispatch } from "react-redux";
import actionTypes from "../app/actionTypes";
import useDarkTheme from "../hooks/useDarkTheme";

export default function JobCard({ job }) {
  const { created_at, type, title, company, location, company_logo } = job;
  const jobCardRef = useDarkTheme()

  //get utc string to use getTimeAgo fn
  const curDate = new Date().toISOString();
  const timeAgo = getTimeAgo(curDate, created_at);

  const dispatch = useDispatch();

  const viewDesc = () => {
    dispatch({
      type: actionTypes.SHOW_DESCRIPTION,
      payload: true,
    });

    dispatch({
      type: actionTypes.TOGGLE_JOBS,
      payload: false,
    });

    dispatch({
      type: actionTypes.CURRENT_JOB,
      payload: job,
    });
  };

  return (
    <div className="JobCard" onClick={viewDesc} ref={jobCardRef}>
      <CompanyLogo logo={company_logo} />
      <div className="jobAge">
        {timeAgo} - {type}
      </div>
      <div className="jobTitle">{title}</div>
      <div className="company"> {company}</div>
      <div className="location"> {location}</div>
      <hr />
    </div>
  );
}
