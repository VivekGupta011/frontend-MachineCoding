import React, { useState } from "react";
import { useEffect } from "react";

const PaginationComponent = () => {
  // Dummy data: an array of objects
  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
  }));

  const DATA_TO_DISPLAY = 10; // Default number of items per page
  const [currentPage, setCurrentPage] = useState(0); // Using index-based pages
  const [pageSize, setPageSize] = useState(DATA_TO_DISPLAY);
  const [activeData, setActiveData] = useState(
    dummyData.slice(0, DATA_TO_DISPLAY)
  ); // Initialize with the first page's data

  const totalPages = Math.ceil(dummyData.length / pageSize);

  // Update active data when the page changes
  const updateActiveData = (index) => {
    const tempData = dummyData.slice(
      index * pageSize,
      index * pageSize + pageSize
    );
    setActiveData(tempData);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      updateActiveData(newPage);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      updateActiveData(newPage);
    }
  };

  const handlePageSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setPageSize(newSize);
    setCurrentPage(0); // Reset to the first page
    updateActiveData(0);
  };

  const handleFirst = () => {
    setCurrentPage(0);
    updateActiveData(0);
  };

  const handleLast = () => {
    setCurrentPage(totalPages - 1);
    updateActiveData(totalPages - 1);
  };


  useEffect(()=>{
    updateActiveData(0);
  },[pageSize])
  

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", textAlign: "center" }}>
      <h2>Pagination</h2>
      <div style={{ marginBottom: "10px" }}>
        <strong>Total Items: </strong> {dummyData.length}
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="pageSize">Page Size: </label>
        <select
          id="pageSize"
          value={pageSize}
          onChange={handlePageSizeChange}
        >
          {[5, 10, 20, 50].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={handleFirst} disabled={currentPage === 0}>
          First
        </button>
        <button onClick={handlePrev} disabled={currentPage === 0}>
          Prev
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages - 1}>
          Next
        </button>
        <button onClick={handleLast} disabled={currentPage === totalPages - 1}>
          Last
        </button>
      </div>
      <div style={{ marginTop: "20px", textAlign: "left" }}>
        <strong>Current Page Data:</strong>
        <ul>
          {activeData.map((item) => (
            <li key={item.id}>
              {item.id}. {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PaginationComponent;
