import Header from "./containers/Header";
import Jobs from "./containers/Jobs";
import useGeolocation from "./hooks/useGeolocation";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultJobs from "./components/DefaultJobs";
import JobDescription from "./components/JobDescription";
<<<<<<< Updated upstream

function App() {
  useGeolocation();
  const store = useSelector((store) => store);
  const { App } = store.currentTheme.styles;
  const { showDesc, descHtml, url } = store.description;

  return (
    <div className="App" style={App}>
      <DefaultJobs />
      <Header />
      {showDesc && <JobDescription url={url} description={descHtml} />}
      <Jobs />
    </div>
  );
=======
import SearchBar from "./containers/SearchBar";
import SearchButton from "./components/SearchButton";
import { getUserLocation } from "./utils/getUserLocation";
import actionTypes from "./app/actionTypes";

function App() {
  return <div className="App"><DefaultJobs/></div>;
>>>>>>> Stashed changes
}

export default App;
