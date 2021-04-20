import Header from "./containers/Header";
import Jobs from "./containers/Jobs";
import useGeolocation from "./hooks/useGeolocation";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultJobs from "./components/DefaultJobs";
import JobDescription from "./components/JobDescription";
import SearchBar from "./containers/SearchBar";
import SearchButton from "./components/SearchButton";
import { getUserLocation } from "./utils/getUserLocation";
import actionTypes from "./app/actionTypes";

function App() {
  return <div className="App"><DefaultJobs/></div>;
}

export default App;
