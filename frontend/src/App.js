import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./Components/HeroSection/HeroSection";
import Header from "./Components/Header/Header";

import ServiceAI from "./Components/Service/service_ai";
import ChatAssistantAI from "./Components/Service/AsistantAI";

function App() {
  return (
    <div>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/service_ai" element={<ServiceAI />} />
            <Route path="/AsistantAI" element={<ChatAssistantAI />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
