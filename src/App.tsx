import { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Auth from "./components/Auth";
import Habits from "./components/Habits";
import TrackHabits from "./components/TrackHabits";
import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    setToken("");
  };

  if (!token) {
    return <Auth onLogin={setToken} />;
  }

  return (
    <div className="app-container">
      <h1>Habbit Hole</h1>

      {/* Navigation */}
      <nav className="navbar">
        <div>
          <Link to="/">
            Habits
          </Link>
          <Link to="/track">
            Track Habits
          </Link>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Habits />} />
        <Route path="/track" element={<TrackHabits />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
