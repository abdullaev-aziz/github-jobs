import React from "react";
import actions from "../app/actionTypes";
import { useDispatch } from "react-redux";

export default function GeolocationFilter() {
<<<<<<< Updated upstream
    return (
        <div>
            
        </div>
    )
}
=======
  const dispatch = useDispatch();
  const updateGeo = (e) =>
    dispatch({
      type: actions.GEO_QUERY,
      payload: e.target.value,
    });
  return (
    <>
      <input
        className="GeolocationFilter"
        type="text"
        onChange={updateGeo}
        placeholder="Filter by location"
      />
    </>
  );
}
>>>>>>> Stashed changes
