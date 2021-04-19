import actions from "./actionTypes";
import themes from "../styles/themes";
import updateStore from "./updateStore";

export default function reducer(
  store = { currentTheme: {}, query: "", jobs: [] },
  action
) {
  switch (action.type) {
    case actions.TOGGLE_THEME: {
      console.log(store.currentTheme);
      return store.currentTheme === themes.lightTheme
        ? updateStore(store, "currentTheme", themes.darkTheme)
        : updateStore(store, "currentTheme", themes.lightTheme);
    }
    case actions.SEARCH_QUERY:
      return updateStore(store, "query", action.payload.query);
    case actions.SET_JOBS:
      return updateStore(store, "jobs", action.payload.jobs);
    default:
      return store;
  }
}
