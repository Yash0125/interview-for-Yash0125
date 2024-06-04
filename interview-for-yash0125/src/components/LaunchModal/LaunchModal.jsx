import React from "react";
import Modal from "react-modal";
import "./LaunchModal.css";

Modal.setAppElement("#root");

function LaunchModal({ launch, onRequestClose }) {
  return (
    <Modal
      isOpen={!!launch}
      onRequestClose={onRequestClose}
      className="launch-modal"
    >
      <h2>{launch.mission_name}</h2>
      <p>Launch Date: {new Date(launch.launch_date_utc).toLocaleString()}</p>
      <p>Rocket: {launch.rocket.rocket_name}</p>
      <p>Launch Site: {launch.launch_site.site_name}</p>
      <p>Details: {launch.details}</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
}

export default LaunchModal;
