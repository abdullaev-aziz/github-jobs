import React from "react";

export default function JobDescription({ description }) {
  console.log("desc", description);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    ></div>
  );
}
