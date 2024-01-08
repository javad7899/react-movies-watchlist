import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./App.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router basename="/react-movies-watchlist">
        <Header />
        <Routes>
          <Route index element={<Watchlist />} />
          <Route path="/react-movies-watchlist/add" element={<Add />} />
          <Route path="/react-movies-watchlist/watched" element={<Watched />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
