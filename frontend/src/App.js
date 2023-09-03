// General Imports
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";
import "./App.css";
import React from "react";

// Pages Imports
import LoginHomePage from "./pages/LoginHomePage/LoginHomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import VideoDetailPage from "./pages/VideoDetailPage/VideoDetailPage";
import SearchPage from "./pages/SearchPage/SearchPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<PrivateRoute> <LoginHomePage />  </PrivateRoute>}/>
        <Route path="video/:videoId" element={<VideoDetailPage />} />
        <Route path="/video/results/:searchTerm/" element={<SearchPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
