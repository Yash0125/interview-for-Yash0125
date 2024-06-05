import React from "react";
import "./LaunchList.css";

const LaunchList = ({ launches, onLaunchSelect, loading, filter }) => {
  console.log("launches", launches.lenght);

  return (
    <div className="launchlist-container">
      <div className="launch-list">
        <table className="launch-table-container">
          <thead>
            <tr>
              <th className="launch-table-data-title">No.</th>
              <th className="launch-table-data-title">Launches (UTC)</th>
              <th className="launch-table-data-title">Location</th>
              <th className="launch-table-data-title">Mission</th>
              <th className="launch-table-data-title">Orbit</th>
              <th className="launch-table-data-title">Launch Status</th>
              <th className="launch-table-data-title">Rocket</th>
            </tr>
          </thead>
          {loading ? (
            <div className="loading-overlay">
              <div className="spinner"></div>
            </div>
          ) : launches.length > 0 ? (
            <tbody>
              {launches.map((launch, index) => (
                <tr
                  key={launch.flight_number}
                  onClick={() => onLaunchSelect(launch)}
                  className="data-container"
                >
                  <td  className="launch-table-value">{launch.flight_number}</td>
                  <td className="launch-date launch-table-value">
                    {new Date(launch.launch_date_utc).toLocaleString()}
                  </td>
                  <td className="launch-table-value">{launch.launch_site.site_name_long}</td>
                  <td className="launch-table-value">{launch.mission_name}</td>
                  <td className="launch-table-value">{launch.rocket.second_stage.payloads[0].orbit}</td>
                  <td className="launch-table-value">
                    <span
                      className={
                        filter === "upcoming"
                          ? "upcoming"
                          : launch.launch_success
                          ? "success"
                          : "failure"
                      }
                    >
                      {filter === "upcoming"
                        ? "Upcoming"
                        : launch.launch_success
                        ? "Success"
                        : "Failure"}
                    </span>
                  </td>
                  <td className="launch-table-value">{launch.rocket.rocket_name}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tr className="launchlist-not-found-container">
              <p className="launchlist-not-found-title">No results found for the specified filter</p>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
};

export default LaunchList;
