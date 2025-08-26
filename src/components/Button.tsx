import React from "react";

interface ButtonProps {
  onClick: () => void;
  color?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, color = "#1976d2", children }) => (
  <button
    onClick={onClick}
    style={{
      padding: "0.4rem 0.8rem",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      color: "white",
      backgroundColor: color,
      fontWeight: "bold",
    }}
  >
    {children}
  </button>
);
