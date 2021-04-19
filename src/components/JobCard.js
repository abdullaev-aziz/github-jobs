import getTimeAgo from "../utils/getTimeAgo";
import JobDescription from "./JobDescription";
import "./JobCard.css";
import CompanyLogo from "./CompanyLogo";

export default function JobCard({ job }) {
  const { created_at, type, title, company, location, company_logo } = job;

  //get utc string to use getTimeAgo fn
  const curDate = new Date().toISOString();
  const timeAgo = getTimeAgo(curDate, created_at);
  return (
    <div className="JobCard" onClick={() => {}}>
      <CompanyLogo logo={company_logo} />
      <br />
      {timeAgo}-{type}
      <br />
      {title}
      <br />
      {company}
      <br />
      {location}
      <hr />
    </div>
  );
}
