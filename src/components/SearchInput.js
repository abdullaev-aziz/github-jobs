import React from "react";
import { useDispatch } from "react-redux";
import actions from "../app/actionTypes";
import { debounce } from "lodash";

export default function SearchInput() {
  const dispatch = useDispatch();
  const updateSearch = debounce(
    (e) =>
      dispatch({
        type: actions.QUERY_URL,
        payload: { search: e.target.value },
      }),
    300
  );

  return (
    <div className="SearchInput">
      <input
        type="text"
        onChange={updateSearch}
        placeholder="Filter by title, companies, expertise"
      />
    </div>
  );
}
