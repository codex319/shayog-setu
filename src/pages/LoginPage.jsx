import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  User,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { useAuth, homeRouteForRole } from "../context/AuthContext.jsx";

const roles = [
  { value: "citizen", label: "Citizen" },
  { value: "government", label: "Government Officer" },
  { value: "university", label: "University Admin" },
  { value: "faculty", label: "Faculty" },
  { value: "student", label: "Student" },
  { value: "industry", label: "Industry / Startup / CSR" },
  { value: "admin", label: "System Admin" },
];

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "citizen",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    const user = login({
      name: form.name,
      email: form.email.trim(),
      role: form.role,
    });

    navigate(homeRouteForRole(user.role), { replace: true });
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
                  Samadhan Setu
                </p>

                <h1 className="font-editorial text-4xl font-bold leading-tight xl:text-5xl">
                  One platform.
                  <br />
                  Many hands.
                  <br />
                  Better communities.
                </h1>

                <p className="mt-6 text-base leading-7 text-white/75">
                  Connect citizens, government, universities and industry to
                  identify problems and turn community ideas into meaningful
                  solutions.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-white/65">
              <ShieldCheck size={18} />
              <span>Secure role-based access</span>
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
                  Welcome back
                </p>

                <h2 className="mt-2 font-editorial text-3xl font-bold text-[#1C241E] sm:text-4xl">
                  Log in
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#68736B]">
                  Choose your role and enter your details to explore the
                  Samadhan Setu portal.
                </p>
              </div>

              {/* Demo notice */}
              <div className="mt-6 rounded-xl border border-[#E6E1D3] bg-[#F8F6EE] p-4">
                <div className="flex gap-3">
                  <ShieldCheck
                    size={19}
                    className="mt-0.5 shrink-0 text-[#1E4D38]"
                  />

                  <div>
                    <p className="text-sm font-semibold text-[#1C241E]">
                      Demo login
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#6D776F]">
                      No password is required. Select any role below to explore
                      that portal.
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                {/* Name */}
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
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Anaya Kumari"
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

                {/* Role */}
                <div>
                  <label
                    htmlFor="role"
                    className="mb-2 block text-sm font-semibold text-[#35423A]"
                  >
                    Log in as
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
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#1E4D38] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#163B2A] focus:outline-none focus:ring-2 focus:ring-[#1E4D38] focus:ring-offset-2"
                >
                  Continue

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </form>

              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-[#E6E1D3]" />
                <span className="text-xs text-[#8A938D]">OR</span>
                <div className="h-px flex-1 bg-[#E6E1D3]" />
              </div>

              <p className="text-center text-sm text-[#68736B]">
                New to Samadhan Setu?{" "}
                <Link
                  to="/register"
                  className="font-bold text-[#1E4D38] hover:text-[#163B2A] hover:underline"
                >
                  Register instead
                </Link>
              </p>

              <p className="mt-8 text-center text-xs leading-5 text-[#8A938D]">
                By continuing, you are using the demonstration version of
                Samadhan Setu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}