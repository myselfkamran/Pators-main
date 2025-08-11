import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import ModalA from "../../components/ModalA";
import ModalB from "../../components/ModalB";

const MainRoutes = () => {
  return (
    <>
      <Router>
        <Home />
        <Routes>
          <Route path="/all-contacts" element={<ModalA />} />
          <Route path="/US-contacts" element={<ModalB />} />
        </Routes>
      </Router>
    </>
  );
};

export default MainRoutes;
