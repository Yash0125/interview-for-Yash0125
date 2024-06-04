import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "./Pagination.css";

function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const newPageNumbers = [];
    const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
    const endPage = Math.min(startPage + 9, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      newPageNumbers.push(i);
    }

    setPageNumbers(newPageNumbers);
  }, [currentPage, totalPages]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      {/* <button onClick={handlePrevious} disabled={currentPage === 1}>
      <FaAngleLeft/>
      </button> */}
      {/* <span>
        Page {currentPage} of {totalPages}
      </span> */}
      <div style={{ display: "flex", flexDirection: "row", margin: 0 }}>
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          <FaAngleLeft />
        </button>
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          <FaAngleRight />
        </button>
      </div>
      {/* <button onClick={handleNext} disabled={currentPage === totalPages}>
      
      <FaAngleRight/>
      </button> */}
    </div>
  );
}

export default Pagination;
