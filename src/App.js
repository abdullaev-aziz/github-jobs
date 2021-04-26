import Jobs from "./containers/Jobs";
import React from "react";
import DefaultJobs from "./components/DefaultJobs";
import JobDescription from "./components/JobDescription";
import useDarkTheme from "./hooks/useDarkTheme";
import SearchBar from "./containers/SearchBar";
import Header from "./containers/Header";
import {Route, Switch} from 'react-router-dom'

function App() {
  const appRef = useDarkTheme();
  return (
    <div className="App" ref={appRef}>
      <DefaultJobs />
      <Header />
      <SearchBar />

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
