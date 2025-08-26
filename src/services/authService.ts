import { LoginDto, RegisterDto } from "../apiClient";
import { AuthResponse } from "../types";

const baseUrl = process.env.REACT_APP_API_URL;// || "https://localhost:7057";

const API_URL = `${baseUrl}/api/auth`;

export const authService = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    const data = new LoginDto({ email, password });
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(await res.text() || "Login failed");
    return res.json();
  },

  register: async (username: string, email: string, password: string): Promise<AuthResponse> => {
    const data = new RegisterDto({ username, email, password });
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(await res.text() || "Registration failed");
    return res.json();
  },
};
