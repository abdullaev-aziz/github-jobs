import React from "react";
import { useDispatch } from "react-redux";
import actions from "../app/actionTypes";

export default function SearchInput() {
<<<<<<< Updated upstream
    return (
        <div>
            
        </div>
    )
}
=======
  const dispatch = useDispatch();
  const updateSearch = (e) =>
    dispatch({
      type: actions.SEARCH_QUERY,
      payload: e.target.value,
    });

  return (
    <>
      <input
        className="SearchInput"
        type="text"
        onChange={updateSearch}
        placeholder="Filter by title, companies, expertise"
      />
    </>
  );
}
>>>>>>> Stashed changes
