import { useState } from "react";
import { authService } from "../services/authService";
import { AuthResponse } from "../types";
import { setToken } from "../services/apiClientFactory";

export function useAuth(onLogin: (token: string) => void) {
  const [error, setError] = useState<string>("");

  const login = async (email: string, password: string) => {
    try {
      setError("");
      const auth: AuthResponse = await authService.login(email, password);
      saveAuth(auth);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const register = async (username: string, email: string, password: string) => {
    try {
      setError("");
      const auth: AuthResponse = await authService.register(username, email, password);
      saveAuth(auth);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const saveAuth = (auth: AuthResponse) => {
    localStorage.setItem("token", auth.token);
    localStorage.setItem("userId", auth.userId.toString());
    setToken(auth.token);
    onLogin(auth.token);
  };

  return { login, register, error, setError };
}
