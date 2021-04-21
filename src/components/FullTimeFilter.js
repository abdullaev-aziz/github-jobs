import React from "react";
import actions from "../app/actionTypes";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

export default function FullTimeFilter() {
  const dispatch = useDispatch();
  const updateFulltime = debounce(
    (e) =>
      dispatch({
        type: actions.QUERY_URL,
        payload: { full_time: e.target.checked },
      }),
    300
  );
  return (
    <div className="FullTimeFilter">
        <input type="checkbox" onChange={updateFulltime} id="fulltime-chk" />
        <label for="fulltime-chk">Full Time Only</label>
      </div>
  );
}
