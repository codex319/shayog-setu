import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <h1 className="text-6xl font-bold text-slate-800">404</h1>

      <p className="mt-3 text-lg text-slate-600">
        Page not found
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}