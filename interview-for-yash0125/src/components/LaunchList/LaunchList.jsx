import React from 'react';
import './LaunchList.css';

const LaunchList = ({ launches, onLaunchSelect} ) => {
  return (
    <div className='launchlist-container'>
      <div className="launch-list">
      <table>
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
        <tbody>
          {launches.map((launch, index) => (
            <tr
              key={launch.flight_number}
              onClick={() => onLaunchSelect(launch)}
            >
              <td>{launch.flight_number}</td>
              <td>{new Date(launch.launch_date_utc).toLocaleString()}</td>
              <td>{launch.launch_site.site_name_long}</td>
              <td>{launch.mission_name}</td>
              <td>{launch.rocket.second_stage.payloads[0].orbit}</td>
              <td>{launch.launch_success ? "Success" : "Failure"}</td>
              <td>{launch.rocket.rocket_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default LaunchList
