import Header from "./components/Header";
import Jobs from "./components/Jobs";
import useFetch from "./hooks/useFetch";
import useGeolocation from "./hooks/useGeolocation";
import React from "react";
import { useSelector } from "react-redux";

function App() {
  const jobs = useFetch("/positions.json?page=1");
  useGeolocation();

  const themeStyle = useSelector((store) => store.currentTheme);

  return (
    <div className="App" style={themeStyle}>
      <Header />
      <Jobs jobs={jobs} />
    </div>
  );
}

export default App;
