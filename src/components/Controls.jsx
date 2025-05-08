import React from "react";

const Controls = ({ handleZoom, frameZoom, resetPage, activePage }) => {
  return (
    <div className="absolute top-3 right-3 space-x-2 z-10">
      <button
        className="text-2xl text-shadow-amber-700 cursor-pointer"
        onClick={handleZoom}
      >
        <i className={frameZoom ? "bx bxs-zoom-out" : "bx bxs-zoom-in"}></i>
      </button>
      <button
        className={`text-2xl ${
          activePage === 0
            ? "text-shadow-black cursor-not-allowed"
            : "text-gray-600 cursor-pointer"
        }`}
        onClick={resetPage}
      >
        <i className="bx bx-x-circle"></i>
      </button>
    </div>
  );
};

export default Controls;
