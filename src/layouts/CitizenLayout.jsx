import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function CitizenLayout() {
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
            onClick={() => navigate("/citizen/dashboard")}
            className="flex items-center gap-2.5 cursor-pointer shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1E4D38] border border-[#2D6A50] flex items-center justify-center text-white shadow-sm">

              <svg
                viewBox="0 0 28 28"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 6,9 L 14,4 L 21,7 L 24,14 L 20,23 L 13,24 L 6,19 Z"
                  fill="#2E694E"
                />

                <circle cx="14" cy="9" r="2.2" fill="#FCD34D" />
                <circle cx="19" cy="15" r="2" fill="#6EE7B7" />
                <circle cx="10" cy="17" r="2" fill="#93C5FD" />

                <line
                  x1="14"
                  y1="9"
                  x2="19"
                  y2="15"
                  stroke="#F6F4EB"
                  strokeWidth="1.2"
                  strokeDasharray="1.5 1.5"
                />

                <line
                  x1="14"
                  y1="9"
                  x2="10"
                  y2="17"
                  stroke="#F6F4EB"
                  strokeWidth="1.2"
                  strokeDasharray="1.5 1.5"
                />

                <line
                  x1="10"
                  y1="17"
                  x2="19"
                  y2="15"
                  stroke="#F6F4EB"
                  strokeWidth="1.2"
                  strokeDasharray="1.5 1.5"
                />
              </svg>

            </div>

            <div className="leading-tight text-left">
              <div className="font-bold text-[#1C241E] text-base tracking-tight">
                Jharkhand Samadhan Setu
              </div>

              <div className="text-[11px] text-[#5F7062] font-semibold">
                झारखंड समाधान सेतु
              </div>
            </div>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1 text-[13px] font-medium text-[#4B594E]">

            <button
              onClick={() => navigate("/citizen/dashboard")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                isActive("/citizen/dashboard")
                  ? "text-[#1E4D38] bg-[#EBF3EE] font-bold border border-[#C5DACD]"
                  : "hover:text-[#1C241E] hover:bg-[#F2EFE5]"
              }`}
            >
              Dashboard
            </button>

            <button
              onClick={() => navigate("/citizen/mychallenges")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                isActive("/citizen/mychallenges")
                  ? "text-[#1E4D38] bg-[#EBF3EE] font-bold border border-[#C5DACD]"
                  : "hover:text-[#1C241E] hover:bg-[#F2EFE5]"
              }`}
            >
             My Challenges
            </button>

             <button
              onClick={() => navigate("/citizen/challenges")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                isActive("/citizen/challenges")
                  ? "text-[#1E4D38] bg-[#EBF3EE] font-bold border border-[#C5DACD]"
                  : "hover:text-[#1C241E] hover:bg-[#F2EFE5]"
              }`}
            >
            Challenges
            </button>

            <button
              onClick={() => navigate("/citizen/challenges/new")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                isActive("/citizen/challenges/new")
                  ? "text-[#1E4D38] bg-[#EBF3EE] font-bold border border-[#C5DACD]"
                  : "hover:text-[#1C241E] hover:bg-[#F2EFE5]"
              }`}
            >
              Report Problem
            </button>

          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">

            {/* User */}
            <div className="hidden sm:block text-right mr-1">
              <div className="text-xs font-bold text-[#1C241E]">
                {user?.name || "Citizen"}
              </div>

              <div className="text-[10px] text-[#556B59] capitalize">
                {user?.role || "citizen"}
              </div>
            </div>

            {/* Profile */}
            <div className="w-8 h-8 rounded-full bg-[#1E4D38] text-white flex items-center justify-center text-xs font-bold">
              {(user?.name || "C").charAt(0).toUpperCase()}
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="text-xs font-semibold text-[#7F1D1D] px-3 py-1.5 rounded-lg border border-[#E5CACA] hover:bg-[#FEF2F2] transition-colors"
            >
              Logout
            </button>

          </div>

        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E5E0D2] mt-12 py-8 px-4 sm:px-6">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

            <div>
              <div className="font-bold text-[#1E4D38] text-sm">
                Jharkhand Samadhan Setu
              </div>

              <div className="text-xs text-[#68756B] mt-1">
                Connecting citizens, government, universities and industry.
              </div>
            </div>

            <div className="text-xs text-[#68756B]">
              Toll-Free Helpline: 1800-345-6789
            </div>

          </div>

        </div>

      </footer>

    </div>
  );
}