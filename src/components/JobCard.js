import getTimeAgo from "../utils/getTimeAgo";
import CompanyLogo from "./CompanyLogo";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "../app/actionTypes";


export default function JobCard({ job }) {
  const {
    created_at,
    type,
    title,
    company,
    location,
    company_logo,
    url,
    description,
  } = job;
  const dispatch = useDispatch();

  const viewDesc = () => {
    dispatch({
      type: actionTypes.SHOW_DESCRIPTION,
      payload: {
        showDesc: true,
        descHtml: description,
        url: url
      },
    });

    dispatch({
      type: actionTypes.TOGGLE_JOBS,
    });
  };

  //get utc string to use getTimeAgo fn
  const curDate = new Date().toISOString();
  const timeAgo = getTimeAgo(curDate, created_at);

  const cardStyle = useSelector(store => store.currentTheme.styles.JobCard)
  return (
    <div className="JobCard" onClick={viewDesc} style={cardStyle}>
      <CompanyLogo logo={company_logo} />
      <div className="jobAge">{timeAgo}-{type}</div>
      <div className="jobTitle">{title}</div>
      <div className="company"> {company}</div>
      <div className="location"> {location}</div>
      <hr />
    </div>
  );
}
