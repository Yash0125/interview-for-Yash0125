// // TimeRangeModal.js
// import React from "react";
// import Modal from "react-modal";
// import "./TimeRangeModal.css";

// Modal.setAppElement("#root");

// const TimeRangeModal = ({ isOpen, onRequestClose, onTimeRangeSelect }) => {
//   const handleTimeRangeSelect = (range) => {
//     onRequestClose();
//     onTimeRangeSelect(range);
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       className="time-range-modal"
//     >
//       <div className="time-range-options">
//         <div onClick={() => handleTimeRangeSelect("past_week")}>Past Week</div>
//         <div onClick={() => handleTimeRangeSelect("past_month")}>Past Month</div>
//         <div onClick={() => handleTimeRangeSelect("past_3_months")}>Past 3 Months</div>
//         <div onClick={() => handleTimeRangeSelect("past_6_months")}>Past 6 Months</div>
//         <div onClick={() => handleTimeRangeSelect("past_year")}>Past Year</div>
//         <div onClick={() => handleTimeRangeSelect("past_2_years")}>Past 2 Years</div>
//         <div onClick={() => handleTimeRangeSelect("past_5_years")}>Past 5 Years</div>
//       </div>
//     </Modal>
//   );
// };

// export default TimeRangeModal;

// TimeRangeModal.js
// TimeRangeModal.js
import React from "react";
import Modal from "react-modal";
import "./TimeRangeModal.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoMdClose } from "react-icons/io";

Modal.setAppElement("#root");

const TimeRangeModal = ({
  isOpen,
  onRequestClose,
  onTimeRangeSelect,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  setShowTimeRangeModal,
}) => {
  const closeModal = () => {
    setShowTimeRangeModal(false);
  };

  const handleTimeRangeSelect = (range) => {
    onRequestClose();
    onTimeRangeSelect(range, startDate, endDate);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="time-range-modal"
    >
      <div className="time-range-modal-header">
        <IoMdClose onClick={closeModal} className="close-icon" />
      </div>
      <div className="date-select-container">
        <div className="time-range-options">
          <p onClick={() => handleTimeRangeSelect("past_week")}>
            Past Week
          </p>
          <p onClick={() => handleTimeRangeSelect("past_month")}>
            Past Month
          </p>
          <p onClick={() => handleTimeRangeSelect("past_3_months")}>
            Past 3 Months
          </p>
          <p onClick={() => handleTimeRangeSelect("past_6_months")}>
            Past 6 Months
          </p>
          <p onClick={() => handleTimeRangeSelect("past_year")}>
            Past Year
          </p>
          <p onClick={() => handleTimeRangeSelect("past_2_years")}>
            Past 2 Years
          </p>
          <p onClick={() => handleTimeRangeSelect("past_5_years")}>
            Past 5 Years
          </p>
        </div>
        <div className="date-picker-container">
          <div className="date-picker">
            <label>Start Date:</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              isClearable
              placeholderText="Select start date"
            />
          </div>
          <div className="date-picker">
            <label>End Date:</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              isClearable
              placeholderText="Select end date"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TimeRangeModal;
