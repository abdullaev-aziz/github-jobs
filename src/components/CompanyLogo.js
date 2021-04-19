import React from "react";

const companyLogoStyle = {
  background: "white",
  height: "40px",
  width: "40px",
  borderRadius: "10px",
  position: "relative",
  left: "20px",
  top: "-20px",
  backgroundPosition: "center" /* Center the image */,
  backgroundSize: "contain" /*  fit entire img into container, preserving aspect ratio */,
  backgroundColor: "white",
  backgroundRepeat: "no-repeat",
};
export default function CompanyLogo({ logo }) {
  const renderImg = logo && logo.indexOf("jobs.github.com") > -1 && (
    <div
      className="companyLogo"
      src=""
      style={{ ...companyLogoStyle, backgroundImage: `url("${logo}")` }}
    />
  );
  return <div>{renderImg}</div>;
}
