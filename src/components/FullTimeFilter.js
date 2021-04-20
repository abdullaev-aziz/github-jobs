import React from "react";
import actions from "../app/actionTypes";
import { useDispatch } from "react-redux";

export default function FullTimeFilter() {
<<<<<<< Updated upstream
    return (
        <div>
            
        </div>
    )
=======
  const dispatch = useDispatch();
  const updateCheck = (e) =>
    dispatch({
      type: actions.FULLTIME_QUERY,
      payload: e.target.checked,
    });
  return (
    <span className="FullTimeFilter">
      <input type="checkbox" onChange={updateCheck} id="fulltime-chk" />
      <label for="fulltime-chk">Full Time Only</label>
    </span>
  );
>>>>>>> Stashed changes
}
