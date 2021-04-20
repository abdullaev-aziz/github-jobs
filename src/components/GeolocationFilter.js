import React from "react";
import actions from "../app/actionTypes";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

export default function GeolocationFilter() {
  const dispatch = useDispatch();
  const updateGeo = debounce(
    (e) =>
      dispatch({
        type: actions.QUERY_URL,
        payload: { location: e.target.value, lat: "", long: "" },
      }),
    300
  );
  return (
    <div className="GeolocationFilter">
      <input
        type="text"
        onChange={updateGeo}
        placeholder="Filter by location"
      />
    </div>
  );
}
