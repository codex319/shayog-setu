
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
  if (!selectedRole) return;

  const user = {
    name: "Demo User",
    role: selectedRole,
  };

  localStorage.setItem("user", JSON.stringify(user));

  const routes = {
    citizen: "/citizen/dashboard",
    government: "/government/dashboard",
    university: "/university/dashboard",
    faculty: "/university/dashboard",
    student: "/university/dashboard",
    industry: "/industry/dashboard",
    admin: "/admin/dashboard",
  };

  navigate(routes[selectedRole]);
};

    

  return (
    <div className="min-h-screen bg-[#FAFAF7] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <Link to="/" className="text-sm text-ink/60 hover:text-ink">
          ← Back to home
        </Link>

        <div className="mt-6 bg-white border border-ink/10 rounded-2xl shadow-panel p-8">
          <h1 className="font-display text-2xl font-semibold text-ink">
            Create an account
          </h1>

          <p className="mt-1.5 text-sm text-ink/60">
            Select your category to continue to the appropriate portal.
          </p>

          <div className="mt-6 space-y-3">
            <button
              type="button"
              onClick={() => setSelectedRole("citizen")}
              className={`w-full text-left rounded-lg border px-4 py-3 transition ${
                selectedRole === "citizen"
                  ? "border-blue-600 bg-blue-50"
                  : "border-ink/15 hover:bg-slate-50"
              }`}
            >
              <p className="font-semibold text-ink">Citizen</p>
              <p className="text-xs text-ink/60 mt-1">
                Report and track public challenges.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setSelectedRole("government")}
              className={`w-full text-left rounded-lg border px-4 py-3 transition ${
                selectedRole === "government"
                  ? "border-blue-600 bg-blue-50"
                  : "border-ink/15 hover:bg-slate-50"
              }`}
            >
              <p className="font-semibold text-ink">Government</p>
              <p className="text-xs text-ink/60 mt-1">
                Review and manage public challenges.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setSelectedRole("student")}
              className={`w-full text-left rounded-lg border px-4 py-3 transition ${
                selectedRole === "student"
                  ? "border-blue-600 bg-blue-50"
                  : "border-ink/15 hover:bg-slate-50"
              }`}
            >
              <p className="font-semibold text-ink">University / Student</p>
              <p className="text-xs text-ink/60 mt-1">
                Participate in challenges and solutions.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setSelectedRole("industry")}
              className={`w-full text-left rounded-lg border px-4 py-3 transition ${
                selectedRole === "industry"
                  ? "border-blue-600 bg-blue-50"
                  : "border-ink/15 hover:bg-slate-50"
              }`}
            >
              <p className="font-semibold text-ink">Industry</p>
              <p className="text-xs text-ink/60 mt-1">
                Collaborate on challenges and solutions.
              </p>
            </button>
          </div>

          <button
            type="button"
            onClick={handleContinue}
            disabled={!selectedRole}
            className="mt-6 w-full bg-ink text-white font-semibold rounded-lg py-3 disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition"
          >
            Continue
          </button>

          <p className="mt-5 text-center text-sm text-ink/60">
            Already exploring?{" "}
            <Link
              to="/login"
              className="font-medium text-ink hover:underline"
            >
              Use the demo login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

