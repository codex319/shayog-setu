import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
const STORAGE_KEY = "samadhan_setu_user";

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

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setLoading(false);
  }, []);

  const login = ({ name, email, role }) => {
    const mockUser = {
      id: `usr_${Date.now()}`,
      name: name?.trim() || defaultNameForRole(role),
      email,
      role,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser));
    setUser(mockUser);
    return mockUser;
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

function defaultNameForRole(role) {
  const map = {
    citizen: "Anaya Kumari",
    government: "Officer R. Prasad",
    university: "Dr. Meera Singh",
    faculty: "Dr. Meera Singh",
    student: "Rohan Verma",
    industry: "Priya Mehta",
    admin: "System Admin",
  };
  return map[role] || "Demo User";
}

export function homeRouteForRole(role) {
  return roleHomeMap[role] || "/";
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
