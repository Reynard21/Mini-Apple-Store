import React, { useState } from "react";
import Controls from "./components/Controls";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import IPhone from "./components/iPhone";
import Macbook from "./components/Macbook";
import Watch from "./components/Watch";
import PageTransition from "./components/PageTransition";
import IMac from "./components/iMac";
const App = () => {
  const [frameZoom, setFrameZoom] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const handleNavClick = (pageIndex) => {
    setActivePage(pageIndex);
  };

  const handleZoom = () => {
    setFrameZoom(!frameZoom);
  };

  const resetPage = () => {
    setActivePage(0);
  };
  return (
    <>
      <div className="w-full h-screen grid place-items-center">
        <div
          className={`${
            frameZoom ? "min-w-[97vw] min-h-[97vh]" : ""
          } w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh] border border-gray-300 rounded-2xl resize overflow-hidden relative transition-all duration-100 flex`}
        >
          <Navbar activePage={activePage} handleNavClick={handleNavClick} />
          <Controls
            handleZoom={handleZoom}
            frameZoom={frameZoom}
            resetPage={resetPage}
            activePage={activePage}
          />
          <div className="flex-grow">
            <PageTransition activePage={activePage}>
              <Home onNavigate={handleNavClick} />
              <IPhone />
              <Macbook />
              <Watch />
              <IMac />
            </PageTransition>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
