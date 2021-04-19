import Header from "./containers/Header";
import Jobs from "./containers/Jobs";
import useGeolocation from "./hooks/useGeolocation";
import React from "react";
import { useSelector } from "react-redux";
import DefaultJobs from "./components/DefaultJobs";
import JobDescription from "./components/JobDescription";
import SearchBar from "./containers/SearchBar";

function App() {
  useGeolocation();
  const store = useSelector((store) => store);
  const { App } = store.currentTheme.styles;
  const { showDesc, descHtml, url } = store.description;

  return (
    <div className="App" style={App}>
      <DefaultJobs />
      <Header />
      <SearchBar/>
      {showDesc && <JobDescription url={url} description={descHtml} />}
      <Jobs />
    </div>
  );
}

export default App;
