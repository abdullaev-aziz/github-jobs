import React from "react";
import { useSelector } from "react-redux";

export default function UseLocation() {
  const { lat, long } = useSelector((store) => store.queryURL);
  const allowedLocation = lat || long;

  const toggleLocation = () => {};

  return (
    <div>
      <input
        onChange={toggleLocation}
        id="allowedLocation"
        type="checkbox"
        checked={allowedLocation ? true : false}
      />
      <label for="allowedLocation">Use your location</label>
    </div>
  );
}
