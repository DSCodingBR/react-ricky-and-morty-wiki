import React from "react";
import { BrowserRouter,Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import CharacterInfo from "./pages/CharacterInfo";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
