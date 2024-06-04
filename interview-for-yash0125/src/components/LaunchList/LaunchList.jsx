import React from "react";
import "./LaunchList.css";

const LaunchList = ({ launches, onLaunchSelect, loading ,filter}) => {
  console.log("launches", launches);

  return (
    <div className="launchlist-container">
      <div className="launch-list">
        <table className="launch-table-container">
          <thead>
            <tr>
              <th>No.</th>
              <th>Launches (UTC)</th>
              <th>Location</th>
              <th>Mission</th>
              <th>Orbit</th>
              <th>Launch Status</th>
              <th>Rocket</th>
            </tr>
          </thead>
          {loading ? (
            <div className="loading-overlay">
              <div className="spinner"></div>
            </div>
          ) : (
            <tbody>
              {launches.map((launch, index) => (
                <tr
                  key={launch.flight_number}
                  onClick={() => onLaunchSelect(launch)}
                  className="data-container"
                >
                  <td>{launch.flight_number}</td>
                  <td className="launch-date">
                    {new Date(launch.launch_date_utc).toLocaleString()}
                  </td>
                  <td>{launch.launch_site.site_name_long}</td>
                  <td>{launch.mission_name}</td>
                  <td>{launch.rocket.second_stage.payloads[0].orbit}</td>
                  <td>
                    <span
                      className={filter === "upcoming" ? "upcoming":launch.launch_success ? "success" : "failure"}
                    >
                      {filter ==="upcoming" ? "Upcoming":launch.launch_success ? "Success" : "Failure"}
                    </span>
                  </td>
                  <td>{launch.rocket.rocket_name}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default LaunchList;
