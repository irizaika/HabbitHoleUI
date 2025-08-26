import { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Auth from "./components/Auth";
import Habits from "./components/Habits";
import TrackHabits from "./components/TrackHabits";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  if (!token) {
    return <Auth onLogin={setToken} />;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Habbit Hole</h1>

      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#1976d2",
          padding: "0.75rem 1.5rem",
          borderRadius: "6px",
          marginBottom: "1.5rem",
          color: "white",
        }}
      >
        <div>
          <Link
            to="/"
            style={{
              marginRight: "1rem",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Habits
          </Link>
          <Link
            to="/track"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Track Habits
          </Link>
        </div>
        <button
          style={{
            background: "white",
            color: "#1976d2",
            border: "none",
            borderRadius: "4px",
            padding: "0.4rem 0.8rem",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={() => {
            localStorage.removeItem("token");
            sessionStorage.removeItem("token");
            localStorage.removeItem("userId"); 
            sessionStorage.removeItem("userId");
            setToken("");
          }}
        >
          Logout
        </button>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Habits />} />
        <Route path="/track" element={<TrackHabits />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
