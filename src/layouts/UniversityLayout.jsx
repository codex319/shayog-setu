import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Search,
  LogOut,
  GraduationCap,
} from "lucide-react";
import { useAuth } from "../context/AuthContext.jsx";

export default function UniversityLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#1C241E] flex flex-col font-sans">

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#E5E0D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <button
            onClick={() => navigate("/university/dashboard")}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-[#1E4D38] flex items-center justify-center shadow-sm">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>

            <div className="text-left">
              <div className="text-sm font-bold text-[#1E4D38] leading-tight">
                Jharkhand
              </div>

              <div className="text-[11px] font-semibold text-[#64748B] leading-tight">
                Samadhan Setu
              </div>
            </div>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">

            <button
              onClick={() => navigate("/university/dashboard")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                isActive("/university/dashboard")
                  ? "bg-[#EBF3EE] text-[#1E4D38]"
                  : "text-[#556458] hover:bg-[#F4F1E8] hover:text-[#1E4D38]"
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              Dashboard
            </button>

            <button
              onClick={() => navigate("/university/challenges")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                isActive("/university/challenges")
                  ? "bg-[#EBF3EE] text-[#1E4D38]"
                  : "text-[#556458] hover:bg-[#F4F1E8] hover:text-[#1E4D38]"
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              Explore Challenges
            </button>

          </nav>

          {/* User */}
          <div className="flex items-center gap-3">

            <div className="hidden sm:block text-right">
              <div className="text-xs font-bold text-[#1C241E]">
                {user?.name || "University User"}
              </div>

              <div className="text-[10px] text-[#64748B] capitalize">
                {user?.role || "university"}
              </div>
            </div>

            <div className="w-9 h-9 rounded-full bg-[#EBF3EE] border border-[#C5DACD] flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-[#1E4D38]" />
            </div>

            <button
              onClick={handleLogout}
              title="Logout"
              className="p-2 rounded-xl text-[#64748B] hover:bg-[#F4F1E8] hover:text-[#B84F2A] transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </button>

          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E5E0D2] bg-white mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">

          <div className="text-[11px] text-[#64748B]">
            © 2026 Jharkhand Samadhan Setu
          </div>

          <div className="text-[11px] text-[#64748B]">
            University & Research Collaboration Portal
          </div>

        </div>
      </footer>

    </div>
  );
}