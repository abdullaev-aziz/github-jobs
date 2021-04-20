import React, { useRef } from "react";

export default function CompanyLogo({ logo }) {
  const logoRef = useRef();

  if (!logo || logo.indexOf("jobs.github.com") === -1) return <></>;

  if (logoRef.current) {
    logoRef.current.style.backgroundImage = `url("${logo}")`;
  }
  return (
    <div>
      <div className="CompanyLogo" ref={logoRef} src="" />
    </div>
  );
}
