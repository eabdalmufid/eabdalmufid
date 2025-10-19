// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <iframe
      src={`${process.env.PUBLIC_URL}/root/portofolio.html`}
      title="Portfolio"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
}

function Links() {
  return (
    <iframe
      src={`${process.env.PUBLIC_URL}/links/biolink.html`}
      title="Bio Link"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </Router>
  );
}

export default App;