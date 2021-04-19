import Header from "./components/Header";
import Jobs from "./components/Jobs";
import useGeolocation from "./hooks/useGeolocation";
import React from "react";
import { useSelector } from "react-redux";
import DefaultJobs from './components/DefaultJobs'

function App() {
  useGeolocation();

  const themeStyle = useSelector((store) => store.currentTheme);

  return (
    <div className="App" style={themeStyle.App}>
      <DefaultJobs/>
      <Header />
      <Jobs />
    </div>
  );
}

export default App;
