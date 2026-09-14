import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import api from "../api/axios.js";

const AuthContext = createContext(null);

const TOKEN_KEY = "samadhan_setu_token";

const roleHomeMap = {
  citizen: "/citizen/dashboard",
  government: "/government/dashboard",
  university: "/university/dashboard",
  faculty: "/university/dashboard",
  student: "/university/dashboard",
  industry: "/industry/dashboard",
  admin: "/admin/dashboard",
};


export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);


  // ===============================
  // RESTORE LOGIN
  // ===============================

  useEffect(() => {

    const token = localStorage.getItem(TOKEN_KEY);

    if (!token) {
      setLoading(false);
      return;
    }

    api
      .get("/auth/me")
      .then((res) => {
        setUser(res.data.user);
      })
      .catch(() => {
        localStorage.removeItem(TOKEN_KEY);
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);


  // ===============================
  // LOGIN
  // ===============================

  const login = async (email, password) => {

    const res = await api.post("/auth/login", {
      email,
      password,
    });

    const { token, user } = res.data;

    localStorage.setItem(TOKEN_KEY, token);

    setUser(user);

    return user;
  };


  // ===============================
  // REGISTER
  // ===============================

  const register = async (
    name,
    email,
    password,
    role
  ) => {

    const res = await api.post("/auth/register", {
      name,
      email,
      password,
      role,
    });

    const { token, user } = res.data;

    localStorage.setItem(TOKEN_KEY, token);

    setUser(user);

    return user;
  };


  // ===============================
  // LOGOUT
  // ===============================

  const logout = () => {

    localStorage.removeItem(TOKEN_KEY);

    setUser(null);
  };


  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}


export function homeRouteForRole(role) {
  return roleHomeMap[role] || "/";
}


export function useAuth() {

  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error(
      "useAuth must be used within AuthProvider"
    );
  }

  return ctx;
}