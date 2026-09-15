import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  User,
  ShieldCheck,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

import { useAuth, homeRouteForRole } from "../context/AuthContext.jsx";

const roles = [
  { value: "citizen", label: "Citizen" },
  { value: "government", label: "Government Officer" },
  { value: "student", label: "Student/Faculty" },
   { value: "university", label: "University" },
  { value: "industry", label: "Industry / Startup / CSR" },
];

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "citizen",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    if (!form.name.trim()) {
      setError("Please enter your full name.");
      setLoading(false);
      return;
    }

    if (!form.email.trim()) {
      setError("Please enter your email address.");
      setLoading(false);
      return;
    }

    if (!form.password) {
      setError("Please enter a password.");
      setLoading(false);
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const user = await register(
        form.name.trim(),
        form.email.trim(),
        form.password,
        form.role
      );

      navigate(homeRouteForRole(user.role), {
        replace: true,
      });
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6EE] px-4 py-8 sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl border border-[#E6E1D3] bg-white shadow-[0_20px_60px_rgba(30,77,56,0.08)] lg:grid-cols-2">

          {/* Left panel */}
          <div className="hidden bg-[#1E4D38] p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
              >
                <ArrowLeft size={17} />
                Back to home
              </Link>

              <div className="mt-20 max-w-md">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#E9B44C]">
                  Join Samadhan Setu
                </p>

                <h1 className="font-editorial text-4xl font-bold leading-tight xl:text-5xl">
                  Your voice.
                  <br />
                  Your ideas.
                  <br />
                  Your community.
                </h1>

                <p className="mt-6 text-base leading-7 text-white/75">
                  Become part of a collaborative platform where people and
                  institutions work together to identify local challenges and
                  create meaningful solutions.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <CheckCircle2 size={18} />
                Report and track community problems
              </div>

              <div className="flex items-center gap-3 text-sm text-white/70">
                <CheckCircle2 size={18} />
                Collaborate across different sectors
              </div>

              <div className="flex items-center gap-3 text-sm text-white/70">
                <CheckCircle2 size={18} />
                Turn ideas into measurable impact
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="p-6 sm:p-10 xl:p-14">

            {/* Mobile back button */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#647067] hover:text-[#1E4D38] lg:hidden"
            >
              <ArrowLeft size={17} />
              Back to home
            </Link>

            <div className="mx-auto max-w-md">
              <div className="mt-8 lg:mt-0">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C85A32]">
                  Get started
                </p>

                <h2 className="mt-2 font-editorial text-3xl font-bold text-[#1C241E] sm:text-4xl">
                  Create your account
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#68736B]">
                  Choose how you want to participate in the Samadhan Setu
                  ecosystem.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">

                {/* Full name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-[#35423A]"
                  >
                    Full name
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A938D]"
                    />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Priyanshu Yadav"
                      className="w-full rounded-xl border border-[#DDD6C5] bg-[#FCFBF7] py-3 pl-11 pr-4 text-sm text-[#1C241E] outline-none transition placeholder:text-[#9AA19B] focus:border-[#1E4D38] focus:ring-2 focus:ring-[#1E4D38]/10"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#35423A]"
                  >
                    Email address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A938D]"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#DDD6C5] bg-[#FCFBF7] py-3 pl-11 pr-4 text-sm text-[#1C241E] outline-none transition placeholder:text-[#9AA19B] focus:border-[#1E4D38] focus:ring-2 focus:ring-[#1E4D38]/10"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-semibold text-[#35423A]"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-[#DDD6C5] bg-[#FCFBF7] px-4 py-3 text-sm text-[#1C241E] outline-none transition placeholder:text-[#9AA19B] focus:border-[#1E4D38] focus:ring-2 focus:ring-[#1E4D38]/10"
                  />
                </div>

                {/* Confirm password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-semibold text-[#35423A]"
                  >
                    Confirm password
                  </label>

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
                    className="w-full rounded-xl border border-[#DDD6C5] bg-[#FCFBF7] px-4 py-3 text-sm text-[#1C241E] outline-none transition placeholder:text-[#9AA19B] focus:border-[#1E4D38] focus:ring-2 focus:ring-[#1E4D38]/10"
                  />
                </div>

                {/* Role */}
                <div>
                  <label
                    htmlFor="role"
                    className="mb-2 block text-sm font-semibold text-[#35423A]"
                  >
                    I am joining as
                  </label>

                  <div className="relative">
                    <select
                      id="role"
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-[#DDD6C5] bg-[#FCFBF7] px-4 py-3 pr-11 text-sm text-[#1C241E] outline-none transition focus:border-[#1E4D38] focus:ring-2 focus:ring-[#1E4D38]/10"
                    >
                      {roles.map((role) => (
                        <option key={role.value} value={role.value}>
                          {role.label}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#7A847D]"
                    />
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#1E4D38] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#163B2A] focus:outline-none focus:ring-2 focus:ring-[#1E4D38] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Creating account..." : "Create account"}

                  {!loading && (
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  )}
                </button>
              </form>

              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-[#E6E1D3]" />
                <span className="text-xs text-[#8A938D]">OR</span>
                <div className="h-px flex-1 bg-[#E6E1D3]" />
              </div>

              <p className="text-center text-sm text-[#68736B]">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-bold text-[#1E4D38] hover:text-[#163B2A] hover:underline"
                >
                  Log in
                </Link>
              </p>

              <p className="mt-8 text-center text-xs leading-5 text-[#8A938D]">
                By creating an account, you agree to use Samadhan Setu
                securely and responsibly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}