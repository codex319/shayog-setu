import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ShieldAlert,
  Home,
} from "lucide-react";
import { useAuth, homeRouteForRole } from "../context/AuthContext.jsx";

export default function Unauthorized() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const dashboardPath = user
    ? homeRouteForRole(user.role)
    : "/";

  return (
    <div className="min-h-screen bg-[#F8F6EE] px-4 py-8 sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center">
        <div className="w-full rounded-3xl border border-[#E6E1D3] bg-white px-6 py-12 text-center shadow-[0_20px_60px_rgba(30,77,56,0.07)] sm:px-12 sm:py-16">

          {/* Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF3E8] text-[#C85A32]">
            <ShieldAlert size={38} strokeWidth={1.7} />
          </div>

          {/* Label */}
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#C85A32]">
            Access restricted
          </p>

          {/* Heading */}
          <h1 className="mx-auto mt-3 max-w-xl font-editorial text-3xl font-bold text-[#1C241E] sm:text-4xl">
            You don't have permission to view this page.
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#68736B] sm:text-base">
            This section of Samadhan Setu is available only to specific user
            roles. Please return to your designated portal to continue.
          </p>

          {/* Current role */}
          {user && (
            <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-[#E6E1D3] bg-[#F8F6EE] px-4 py-2 text-sm text-[#55685A]">
              <span>Your role:</span>

              <span className="font-bold capitalize text-[#1E4D38]">
                {user.role}
              </span>
            </div>
          )}

          {/* Actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#DDD6C5] bg-white px-5 py-3 text-sm font-semibold text-[#35423A] transition hover:bg-[#F4F1E8] sm:w-auto"
            >
              <ArrowLeft size={17} />
              Go back
            </button>

            {user ? (
              <Link
                to={dashboardPath}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1E4D38] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#163B2A] sm:w-auto"
              >
                <Home size={17} />
                My dashboard

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            ) : (
              <Link
                to="/"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1E4D38] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#163B2A] sm:w-auto"
              >
                <Home size={17} />
                Back to home

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            )}
          </div>

          {/* Brand */}
          <div className="mt-12 border-t border-[#EEEADF] pt-6">
            <p className="font-editorial text-lg font-bold text-[#1E4D38]">
              Samadhan Setu
            </p>

            <p className="mt-1 text-xs text-[#8A938D]">
              Connecting people, ideas and solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}