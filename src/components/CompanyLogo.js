import React from "react";
import companyLogoStyle from "../styles/companyLogoStyle";

export default function CompanyLogo({ logo }) {
  if (!logo || logo.indexOf("jobs.github.com") === -1) return <></>;

  return (
    <div
      className="CompanyLogo"
      style={{ ...companyLogoStyle, backgroundImage: `url("${logo}")` }}
    />
  );
}
