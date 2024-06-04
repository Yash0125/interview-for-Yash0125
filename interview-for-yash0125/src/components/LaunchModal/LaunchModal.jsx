import React from "react";
import Modal from "react-modal";
import "./LaunchModal.css";
import { SiNasa } from "react-icons/si";
import { BsWikipedia } from "react-icons/bs";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

Modal.setAppElement("#root");

function LaunchModal({ launch, onRequestClose, filter }) {
  console.log("modal", launch);
  return (
    <Modal
      isOpen={!!launch}
      onRequestClose={onRequestClose}
      className="launch-modal"
    >
      <div className="launch-modal-header">
        <div className="launch-modal-header-left">
          <img
            className="launch-modal-img"
            src={launch.links.mission_patch_small}
            alt=""
          />
          <div className="launch-modal-header-details">
            <h2>{launch.mission_name}</h2>
            <h3>{launch.rocket.rocket_name}</h3>
            <div className="launch-header-icon-container">
              <a
                href={launch.links.article_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiNasa className="launch-icon" />
              </a>
              <a
                href={launch.links.wikipedia}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsWikipedia className="launch-icon" />
              </a>
              <a
                href={launch.links.video_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiYoutubeLogoThin className="launch-icon" />
              </a>
            </div>
          </div>
          <div className="">
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
          </div>
        </div>
        <div className="launch-modal-header-right">
          <IoMdClose onClick={onRequestClose} className="close-icon" />
        </div>
      </div>
      <div className="launch-modal-desc">
        <p className="launch-modal-desc-text">
          {launch.details}
          <a
            href={launch.links.wikipedia}
            target="_blank"
            rel="noopener noreferrer"
            className="wikipedia-link"
          >
            <span className="launch-modal-desc-wiki-text">Wikipedia</span>
          </a>
        </p>
      </div>

      <div className="launch-modal-bottom-details-container">
        <div className="launch-modal-bottom-details">
          <div className="launch-modal-bottom-details-left">
            <p className="launch-modal-bottom-details-left-text">
              Flight Number
            </p>
          </div>
          <div className="launch-modal-bottom-details-right">
            <p className="launch-modal-bottom-details-right-text">
              {launch.flight_number}
            </p>
          </div>
        </div>
        <hr className="line" />
        <div className="launch-modal-bottom-details">
          <div className="launch-modal-bottom-details-left">
            <p className="launch-modal-bottom-details-left-text">Misson Name</p>
          </div>
          <div className="launch-modal-bottom-details-right">
            <p className="launch-modal-bottom-details-right-text">
              {launch.mission_name}
            </p>
          </div>
        </div>
        <hr className="line" />
        <div className="launch-modal-bottom-details">
          <div className="launch-modal-bottom-details-left">
            <p className="launch-modal-bottom-details-left-text">Rocket Type</p>
          </div>
          <div className="launch-modal-bottom-details-right">
            <p className="launch-modal-bottom-details-right-text">
              {launch.rocket.rocket_type}
            </p>
          </div>
        </div>
        <hr className="line" />
        <div className="launch-modal-bottom-details">
          <div className="launch-modal-bottom-details-left">
            <p className="launch-modal-bottom-details-left-text">
              Manufacturer
            </p>
          </div>
          <div className="launch-modal-bottom-details-right">
            <p className="launch-modal-bottom-details-right-text">
              {launch.rocket.second_stage.payloads[0].manufacturer}
            </p>
          </div>
        </div>
        <hr className="line" />
        <div className="launch-modal-bottom-details">
          <div className="launch-modal-bottom-details-left">
            <p className="launch-modal-bottom-details-left-text">Nationality</p>
          </div>
          <div className="launch-modal-bottom-details-right">
            <p className="launch-modal-bottom-details-right-text">
              {launch.rocket.second_stage.payloads[0].nationality}
            </p>
          </div>
        </div>
        <hr className="line" />
        <div className="launch-modal-bottom-details">
          <div className="launch-modal-bottom-details-left">
            <p className="launch-modal-bottom-details-left-text">Launch Date</p>
          </div>
          <div className="launch-modal-bottom-details-right">
            <p className="launch-modal-bottom-details-right-text">
              {new Date(launch.launch_date_utc).toLocaleString()}
            </p>
          </div>
        </div>
        <hr className="line" />
        <div className="launch-modal-bottom-details">
          <div className="launch-modal-bottom-details-left">
            <p className="launch-modal-bottom-details-left-text">
              Payload Type
            </p>
          </div>
          <div className="launch-modal-bottom-details-right">
            <p className="launch-modal-bottom-details-right-text">
              {launch.rocket.second_stage.payloads[0].payload_type}
            </p>
          </div>
        </div>
        <hr className="line" />
        <div className="launch-modal-bottom-details">
          <div className="launch-modal-bottom-details-left">
            <p className="launch-modal-bottom-details-left-text">Orbit</p>
          </div>
          <div className="launch-modal-bottom-details-right">
            <p className="launch-modal-bottom-details-right-text">
              {launch.rocket.second_stage.payloads[0].orbit}
            </p>
          </div>
        </div>
        <hr className="line" />
        <div className="launch-modal-bottom-details">
          <div className="launch-modal-bottom-details-left">
            <p className="launch-modal-bottom-details-left-text">Launch Site</p>
          </div>
          <div className="launch-modal-bottom-details-right">
            <p className="launch-modal-bottom-details-right-text">
              {launch.launch_site.site_name}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default LaunchModal;
