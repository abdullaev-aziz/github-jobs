import actions from "./actionTypes";
import themes from "../styles/themes";
import updateStore from "./updateStore";
import defaultState from "./defaultState";

export default function reducer(store = updateStore(defaultState), action) {
  switch (action.type) {
    case actions.TOGGLE_THEME: {
      return store.currentTheme.name === themes.lightTheme.name
        ? updateStore(store, "currentTheme", themes.darkTheme)
        : updateStore(store, "currentTheme", themes.lightTheme);
    }
    case actions.SEARCH_QUERY:
      return updateStore(store, "query", action.payload.query);
    case actions.SET_JOBS:
      return updateStore(store, "jobs", action.payload.jobs);

    case actions.SHOW_DESCRIPTION: {
      const {showDesc, descHtml, url} = action.payload
      const description = {
        showDesc,
        descHtml,
        url
      }
      return updateStore(store, "description", description)
    }

    case actions.TOGGLE_JOBS: {
      return updateStore(store, 'showJobs', !store.showJobs)
    }

    case actions.LOAD_MORE: {
      const { resultsNow, resultsPerPage, jobs } = store;
      const shownResults = resultsNow + resultsPerPage;
      if (shownResults < jobs.length)
        return updateStore(store, "resultsNow", shownResults);
      else {
        // need to load more from api and add to  the store
      }
      }

    default:
      return store;
  }
}
