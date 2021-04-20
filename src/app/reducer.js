import types from "./actionTypes";
import defaultState from "./defaultState";

export default function reducer(store = defaultState, action) {
  switch (action.type) {
    //search related actions
    case types.QUERY_URL: {
      const oldQuery = {...store.queryURL}
      return {
        ...store,
        queryURL: {...oldQuery, ...action.payload}
    }
  }

    //theme related actions
    case types.DARK_THEME:
      return { ...store, isDark: action.payload };
    case types.SHOW_DESCRIPTION:
      return { ...store, showJobDescription: action.payload };
    case types.TOGGLE_JOBS:
      return { ...store, jobsVisible: action.payload };

    //data related actions
    case types.NEW_JOBS:
      return { ...store, jobs: action.payload };
    case types.LOAD_MORE:
      return { ...store, jobs: store.jobs.concat(action.payload) };

    default:
      return store;
  }
}
