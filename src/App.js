import React from "react";
import SearchBar from "./containers/SearchBar";
import Header from "./containers/Header";
import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";

//lazy load
const DefaultJobs = loadable(() =>
  import(/* webpackChunkName: "default-jobs" */ "./components/DefaultJobs")
);
const JobDescription = loadable(() =>
  import(/* webpackChunkName: "job-desc" */ "./components/JobDescription"), {fallback: <Spinner/>})

const Jobs = loadable(() =>
  import(/* webpackChunkName: "jobs" */ "./containers/Jobs"), {
    fallback: <Spinner />})

function App() {
  const isDark = useSelector(store => store.isDark)
  return (
    <div className={`App ${isDark ? "darkTheme" : "lightTheme"}`}>
      <Header />
      <SearchBar />
      <DefaultJobs />

      <Switch>
        <Route path={`/job/:id`}>
          <JobDescription />
        </Route>

        <Route path="/">
          <Jobs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
