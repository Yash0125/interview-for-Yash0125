import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LaunchList from "./components/LaunchList/LaunchList";
import axios from "axios";
import LaunchModal from "./components/LaunchModal/LaunchModal";
import Pagination from "./components/Pagination/Pagination";
import { CiFilter } from "react-icons/ci";

const ITEMS_PER_PAGE = 12;

function App() {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLaunch, setSelectedLaunch] = useState(null);
  const [filter, setFilter] = useState("all");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchLaunches();
  }, [filter, startDate, endDate]);

  const fetchLaunches = async () => {
    setLoading(true);
    try {
      let url = "https://api.spacexdata.com/v3/launches";
      if (filter === "past") {
        url = "https://api.spacexdata.com/v3/launches/past";
      } else if (filter === "upcoming") {
        url = "https://api.spacexdata.com/v3/launches/upcoming";
      }

      const response = await axios.get(url);
      const filteredLaunches = response.data.filter((launch) => {
        const launchDate = new Date(launch.launch_date_utc);
        const inDateRange =
          (!startDate || launchDate >= startDate) &&
          (!endDate || launchDate <= endDate);
        const matchesFilter =
          filter === "all" ||
          (filter === "success" && launch.launch_success) ||
          (filter === "failure" && !launch.launch_success) ||
          filter === "past" ||
          filter === "upcoming";
        return inDateRange && matchesFilter;
      });
      setLaunches(filteredLaunches);
      setCurrentPage(1); // Reset to first page when filters change
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginatedLaunches = launches.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="App">
      <Header />
      <div className="body-container">
        <div className="filter-container">
          <div className="filters-left-container">Last 6 Months</div>
          <div className="filters-right-container">
          <div className="filter-select-container">
              <CiFilter className="filter-icon" />
              <select className="select" onChange={(e) => setFilter(e.target.value)} value={filter}>
                <option value="all">All Launches</option>
                <option value="upcoming">Upcoming Launches</option>
                <option value="past">Past Launches</option>
                <option value="success">Success Launches</option>
                <option value="failure">Failure Launches</option>
              </select>
            </div>
          </div>
        </div>
        <LaunchList
          launches={paginatedLaunches}
          onLaunchSelect={setSelectedLaunch}
          loading={loading}
          filter={filter}
        />
        {paginatedLaunches.length && (
          <Pagination
            currentPage={currentPage}
            totalItems={launches.length}
            itemsPerPage={ITEMS_PER_PAGE}
            onPageChange={handlePageChange}
            setCurrentPage={setCurrentPage}
          />
        )}
        {selectedLaunch && (
          <LaunchModal
            launch={selectedLaunch}
            onRequestClose={() => setSelectedLaunch(null)}
            filter={filter}
          />
        )}
      </div>
    </div>
  );
}

export default App;
