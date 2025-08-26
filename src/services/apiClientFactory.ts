import { Client } from "../apiClient";

let currentToken = "";

export const setToken = (token: string) => {
  currentToken = token;
};

export const createAuthClient = (): Client => {
  const baseUrl = process.env.REACT_APP_API_URL;// || "https://localhost:7057";

  return new Client(baseUrl, {
    fetch: async (url: RequestInfo, init?: RequestInit) => {
      init = init ?? {};
      init.headers = {
        ...init.headers,
        Authorization: `Bearer ${currentToken}`,
        "Content-Type": "application/json",
      };

      const response = await fetch(url, init);

      // Token expired or invalid
      if (response.status === 401) {
        // Clear local storage/session
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");

        // Optional: redirect to login
        window.location.href = "/login"; 

        // Reject promise so caller knows it failed
        throw new Error("Unauthorized - token expired");
      }

      return response;
    },
  });
};
