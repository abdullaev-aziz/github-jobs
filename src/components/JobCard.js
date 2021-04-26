import getTimeAgo from "../utils/getTimeAgo";
import CompanyLogo from "./CompanyLogo";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "../app/actionTypes";
import {Link} from 'react-router-dom'

export default function JobCard({ job }) {
  const { created_at, type, title, company, location, company_logo, id } = job;
  const isDark = useSelector(store => store.isDark)

  //get utc string to use getTimeAgo fn
  const curDate = new Date().toISOString();
  const timeAgo = getTimeAgo(curDate, created_at);

  const dispatch = useDispatch();

  const viewDesc = () => {
    dispatch({
      type: actionTypes.CURRENT_JOB,
      payload: job,
    });
  };

  return (
    <Link to={`/job/${id}`}>
      <div
        className={`JobCard ${isDark ? "darkTheme" : "lightTheme"}`}
        onClick={viewDesc}
      >
        <CompanyLogo logo={company_logo} />
        <div className="jobAge">
          {timeAgo} - {type}
        </div>
        <div className="jobTitle">{title}</div>
        <div className="company"> {company}</div>
        <div className="location"> {location}</div>
        <hr />
      </div>
    </Link>
  );
}
