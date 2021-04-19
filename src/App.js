import Header from "./containers/Header";
import Jobs from "./containers/Jobs";
import useGeolocation from "./hooks/useGeolocation";
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultJobs from "./components/DefaultJobs";
import isDarkTheme from './utils/isDarkTheme'
import JobDescription from './components/JobDescription'
import { Link, BrowserRouter as Router, Route } from "react-router-dom";


function App() {

  useGeolocation();
  const store = useSelector((store) => store);
  const {App} = store.currentTheme.styles
  const {showJobs} = store;
  const {showDesc, descHtml} = store.description;
  console.log('showDesc', showDesc)

  return (
    <div className="App" style={App}>
      <DefaultJobs />
      <Header />
      {showDesc && <JobDescription description={descHtml} />}
      <Jobs />
    </div>
  );
}

export default App;