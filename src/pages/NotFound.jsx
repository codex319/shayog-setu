import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F6EE] px-4 py-8 sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center">
        <div className="w-full rounded-3xl border border-[#E6E1D3] bg-white px-6 py-12 text-center shadow-[0_20px_60px_rgba(30,77,56,0.07)] sm:px-12 sm:py-16">
          
          {/* Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F4F1E8] text-[#1E4D38]">
            <Compass size={38} strokeWidth={1.7} />
          </div>

          {/* 404 */}
          <p className="mt-8 font-editorial text-7xl font-bold tracking-tight text-[#1E4D38] sm:text-8xl">
            404
          </p>

          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#C85A32]">
            Page not found
          </p>

          <h1 className="mx-auto mt-3 max-w-xl font-editorial text-3xl font-bold text-[#1C241E] sm:text-4xl">
            Looks like this path leads nowhere.
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#68736B] sm:text-base">
            The page you're looking for may have been moved, removed, or the
            address you entered might be incorrect.
          </p>

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

            <Link
              to="/"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1E4D38] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#163B2A] sm:w-auto"
            >
              Back to home

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
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