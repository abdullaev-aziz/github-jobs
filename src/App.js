import './App.css';
import Header from './components/Header';
import Jobs from './components/Jobs';
import useFetch from './hooks/useFetch'
import useGeolocation from "./hooks/useGeolocation";
import {useEffect} from 'react'

function App() {

  const jobs = useFetch('/positions.json?page=1')
  useGeolocation();
  return (
    <div className="App">
      <Header />
      {/* <Jobs jobs={jobs}/> */}
    </div>
  );
}

export default App;
