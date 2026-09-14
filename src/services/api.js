import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
});

// attach JWT automatically if present (wired for real once auth module is connected)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// unwrap response, normalize errors to a single message
api.interceptors.response.use(
  (res) => res.data,
  (err) => {
    const message = err.response?.data?.message || "Something went wrong";
    return Promise.reject(new Error(message));
  }
);

export default api;
