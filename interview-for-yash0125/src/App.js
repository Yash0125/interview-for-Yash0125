import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LaunchList from "./components/LaunchList/LaunchList";
import axios from "axios";

function App() {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLaunch, setSelectedLaunch] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => {
        setLaunches(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  const filteredLaunches = launches.filter((launch) => {
    if (filter === "upcoming") {
      return new Date(launch.launch_date_utc) > new Date();
    } else if (filter === "past") {
      return new Date(launch.launch_date_utc) <= new Date();
    }
    return true;
  });
  return (
    <div className="App">
      <Header />
      <div className="body-container">
        <div className="filter-container">
          <div className="filters-left-container">Last 6 Months</div>
          <div className="filters-right-container">all Launches</div>
        </div>
        <LaunchList 
        launches={filteredLaunches}
        
         onLaunchSelect={setSelectedLaunch}
         />
      </div>
    </div>
  );
}

export default App;
