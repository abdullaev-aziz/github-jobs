import React from "react";
import companyLogoStyle from '../styles/companyLogoStyle'

export default function CompanyLogo({ logo }) {
  const renderImg = logo && logo.indexOf("jobs.github.com") > -1 && (
    <div
      className="CompanyLogo"
      src=""
      style={{ ...companyLogoStyle, backgroundImage: `url("${logo}")` }}
    />
  );
  return <div>{renderImg}</div>;
}
