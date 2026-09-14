import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Users,
  CalendarDays,
  CheckCircle2,
  Clock,
  AlertCircle,
  Tag,
  ShieldCheck,
  ThumbsUp,
} from "lucide-react";

import { useProblems } from "../../context/ProblemsContext.jsx";

export default function ChallengeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getProblemById, upvoteProblem, upvotedIds } = useProblems();

  const problem = getProblemById(id);

  // Challenge not found
  if (!problem) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-4xl items-center justify-center px-4 py-12">
        <div className="w-full rounded-3xl border border-[#E5E0D2] bg-white p-10 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F4F1E8]">
            <AlertCircle className="h-6 w-6 text-[#C85A32]" />
          </div>

          <h1 className="mt-5 font-editorial text-2xl font-bold text-[#1C241E]">
            Challenge not found
          </h1>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#64748B]">
            The challenge you are looking for may have been removed or the
            link may be incorrect.
          </p>

          <Link
            to="/citizen/challenges"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1E4D38] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#163B2A]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to challenges
          </Link>
        </div>
      </div>
    );
  }

  const problemId = problem.id || problem._id;
  const isUpvoted = upvotedIds?.has(problemId);

  const status = problem.status || "Open";

  const getStatusStyle = () => {
    if (status === "Resolved") {
      return "bg-[#ECFDF5] text-[#047857] border-[#A7F3D0]";
    }

    if (status === "In Progress" || status === "Under Review") {
      return "bg-[#FFFBEB] text-[#B45309] border-[#FDE68A]";
    }

    return "bg-[#FEF2F2] text-[#B91C1C] border-[#FECACA]";
  };

  const getStatusIcon = () => {
    if (status === "Resolved") {
      return <CheckCircle2 className="h-4 w-4" />;
    }

    if (status === "In Progress" || status === "Under Review") {
      return <Clock className="h-4 w-4" />;
    }

    return <AlertCircle className="h-4 w-4" />;
  };

  const affectedPopulation =
    problem.affectedPopulation || problem.votes || "Community";

  const location =
    problem.district || problem.location || "Jharkhand";

  const reportedDate =
    problem.createdAt || problem.date || problem.reportedDate;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">

      {/* ================= BACK ================= */}
      <button
        onClick={() => navigate("/citizen/challenges")}
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#64748B] transition hover:text-[#1E4D38]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to challenges
      </button>

      {/* ================= MAIN ================= */}
      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">

        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-6">

          {/* Hero / Image */}
          <div className="overflow-hidden rounded-3xl border border-[#E5E0D2] bg-white shadow-sm">
            {problem.evidenceImages?.[0] ? (
              <div className="h-64 overflow-hidden bg-[#F4F1E8] sm:h-80 lg:h-[390px]">
                <img
                  src={problem.evidenceImages[0]}
                  alt={problem.title || "Community challenge"}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              <div className="flex h-56 items-center justify-center bg-[#F4F1E8] sm:h-72">
                <AlertCircle className="h-12 w-12 text-[#B8B1A1]" />
              </div>
            )}

            <div className="p-6 sm:p-8">

              {/* Status + category */}
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold ${getStatusStyle()}`}
                >
                  {getStatusIcon()}
                  {status}
                </span>

                {problem.category && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E0D2] bg-[#F8F6EE] px-3 py-1.5 text-xs font-semibold text-[#64748B]">
                    <Tag className="h-3.5 w-3.5" />
                    {problem.category}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="mt-5 font-editorial text-3xl font-bold leading-tight text-[#1C241E] sm:text-4xl">
                {problem.title || "Untitled Challenge"}
              </h1>

              {/* Description */}
              <p className="mt-5 whitespace-pre-line text-sm leading-7 text-[#59665D] sm:text-base">
                {problem.description ||
                  "A community problem that needs attention and a practical solution."}
              </p>

              {/* Meta */}
              <div className="mt-7 grid gap-3 border-t border-[#F0EBE0] pt-6 sm:grid-cols-2">

                <div className="flex items-start gap-3 rounded-xl bg-[#FAF8F2] p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFF4E5] text-[#B45309]">
                    <MapPin className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#1C241E]">
                      {location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-[#FAF8F2] p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E8EFEA] text-[#1E4D38]">
                    <Users className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                      People affected
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#1C241E]">
                      {affectedPopulation}
                    </p>
                  </div>
                </div>

                {reportedDate && (
                  <div className="flex items-start gap-3 rounded-xl bg-[#FAF8F2] p-4 sm:col-span-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F0ECF8] text-[#6D4CA5]">
                      <CalendarDays className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                        Reported
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#1C241E]">
                        {reportedDate}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ================= COMMUNITY SUPPORT ================= */}
          <div className="rounded-3xl border border-[#E5E0D2] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
                  Community support
                </p>

                <h2 className="mt-1 font-editorial text-2xl font-bold text-[#1C241E]">
                  Help bring attention to this challenge
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-[#64748B]">
                  Support challenges that matter to your community. Your
                  support helps highlight issues that need attention.
                </p>
              </div>

              <button
                onClick={() => upvoteProblem(problemId)}
                className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-bold transition ${
                  isUpvoted
                    ? "border-[#1E4D38] bg-[#1E4D38] text-white hover:bg-[#163B2A]"
                    : "border-[#DDD6C5] bg-[#FAF8F2] text-[#1E4D38] hover:bg-[#F2ECE1]"
                }`}
              >
                <ThumbsUp
                  className="h-4 w-4"
                  fill={isUpvoted ? "currentColor" : "none"}
                />

                {isUpvoted ? "Supported" : "Support challenge"}
              </button>
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-[#F0EBE0] pt-5">
              <div className="flex -space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#DCE8DF] text-[10px] font-bold text-[#1E4D38]">
                  A
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#F5DFC9] text-[10px] font-bold text-[#A35A20]">
                  R
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E5DFF0] text-[10px] font-bold text-[#654A8D]">
                  P
                </div>
              </div>

              <p className="text-xs text-[#64748B]">
                {problem.votes || 12} people have supported this challenge
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div className="space-y-5">

          {/* Status card */}
          <div className="rounded-3xl border border-[#E5E0D2] bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
              Challenge status
            </p>

            <div className="mt-4 flex items-center gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                  status === "Resolved"
                    ? "bg-[#ECFDF5] text-[#047857]"
                    : status === "In Progress" ||
                      status === "Under Review"
                    ? "bg-[#FFFBEB] text-[#B45309]"
                    : "bg-[#FEF2F2] text-[#B91C1C]"
                }`}
              >
                {getStatusIcon()}
              </div>

              <div>
                <p className="font-editorial text-xl font-bold text-[#1C241E]">
                  {status}
                </p>

                <p className="mt-0.5 text-xs text-[#64748B]">
                  Current challenge stage
                </p>
              </div>
            </div>

            <div className="mt-5 border-t border-[#F0EBE0] pt-5">
              <div className="flex items-center gap-2 text-xs text-[#64748B]">
                <ShieldCheck className="h-4 w-4 text-[#1E4D38]" />
                Community challenge tracking enabled
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="rounded-3xl border border-[#E5E0D2] bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
              Challenge details
            </p>

            <div className="mt-5 space-y-4">

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                  Category
                </p>

                <p className="mt-1 text-sm font-semibold text-[#1C241E]">
                  {problem.category || "General"}
                </p>
              </div>

              <div className="border-t border-[#F0EBE0] pt-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                  Location
                </p>

                <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-[#1C241E]">
                  <MapPin className="h-3.5 w-3.5 text-[#B45309]" />
                  {location}
                </p>
              </div>

              <div className="border-t border-[#F0EBE0] pt-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                  Community reach
                </p>

                <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-[#1C241E]">
                  <Users className="h-3.5 w-3.5 text-[#1E4D38]" />
                  {affectedPopulation}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-3xl bg-[#1E4D38] p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-wider text-[#E9B44C]">
              Take action
            </p>

            <h3 className="mt-2 font-editorial text-2xl font-bold">
              Know a solution?
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/70">
              Connect with the community and help turn this challenge into a
              practical solution.
            </p>

            <button
              onClick={() => navigate("/citizen/challenges")}
              className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-white"
            >
              Explore more challenges

              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}