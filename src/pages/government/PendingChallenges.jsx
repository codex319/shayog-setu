
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Filter,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Clock,
  AlertTriangle,
} from "lucide-react";

import { MOCK_PROBLEMS } from "../../data/problemsMockData";

export default function PendingChallenges() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [severity, setSeverity] = useState("All");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(
        MOCK_PROBLEMS
          .map((problem) => problem.category)
          .filter(Boolean)
      ),
    ];
  }, []);

  const filteredProblems = useMemo(() => {
    return MOCK_PROBLEMS.filter((problem) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        !searchText ||
        problem.title?.toLowerCase().includes(searchText) ||
        problem.description?.toLowerCase().includes(searchText) ||
        problem.id?.toLowerCase().includes(searchText);

      const matchesSeverity =
        severity === "All" ||
        problem.severity === severity;

      const matchesCategory =
        category === "All" ||
        problem.category === category;

      return (
        matchesSearch &&
        matchesSeverity &&
        matchesCategory
      );
    });
  }, [search, severity, category]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">

      {/* ================= HEADER ================= */}
      <div className="bg-white rounded-3xl border border-[#E5E0D2] p-6 shadow-xs">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">

          <div>

            <span className="text-xs font-bold uppercase tracking-wider text-[#1E4D38]">
              Government Portal
            </span>

            <h1 className="text-2xl sm:text-3xl font-bold text-[#1C241E] font-editorial mt-1">
              Pending Challenges
            </h1>

            <p className="text-sm text-[#64748B] mt-1 max-w-2xl">
              Review community problems that require administrative
              verification before they can move to the solution-matching
              stage.
            </p>

          </div>

          <div className="px-3 py-2 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-xs font-bold text-[#92400E]">
            {filteredProblems.length} Pending Records
          </div>

        </div>


        {/* ================= FILTERS ================= */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">

          {/* Search */}
          <div className="relative">

            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title or problem ID..."
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] text-xs outline-none focus:ring-2 focus:ring-[#1E4D38]/20"
            />

          </div>


          {/* Category */}
          <div className="relative">

            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#94A3B8]" />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] text-xs font-semibold outline-none cursor-pointer"
            >

              {categories.map((item) => (
                <option key={item} value={item}>
                  {item === "All"
                    ? "All Categories"
                    : item}
                </option>
              ))}

            </select>

          </div>


          {/* Severity */}
          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] text-xs font-semibold outline-none cursor-pointer"
          >

            <option value="All">
              All Severity Levels
            </option>

            <option value="Critical">
              Critical
            </option>

            <option value="High">
              High
            </option>

            <option value="Medium">
              Medium
            </option>

            <option value="Low">
              Low
            </option>

          </select>

        </div>

      </div>


      {/* ================= INFORMATION ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl border border-[#E5E0D2] p-4">

          <div className="flex items-center gap-2">

            <div className="w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-rose-700" />
            </div>

            <div>

              <div className="text-lg font-bold text-[#1C241E]">
                {
                  MOCK_PROBLEMS.filter(
                    (p) => p.severity === "Critical"
                  ).length
                }
              </div>

              <div className="text-[10px] font-semibold text-[#64748B]">
                Critical Problems
              </div>

            </div>

          </div>

        </div>


        <div className="bg-white rounded-2xl border border-[#E5E0D2] p-4">

          <div className="flex items-center gap-2">

            <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center">
              <Clock className="w-4 h-4 text-amber-700" />
            </div>

            <div>

              <div className="text-lg font-bold text-[#1C241E]">
                {
                  MOCK_PROBLEMS.filter(
                    (p) => p.severity === "High"
                  ).length
                }
              </div>

              <div className="text-[10px] font-semibold text-[#64748B]">
                High Priority
              </div>

            </div>

          </div>

        </div>


        <div className="bg-white rounded-2xl border border-[#E5E0D2] p-4">

          <div className="flex items-center gap-2">

            <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            </div>

            <div>

              <div className="text-lg font-bold text-[#1C241E]">
                Ready
              </div>

              <div className="text-[10px] font-semibold text-[#64748B]">
                For Verification
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= PROBLEM LIST ================= */}
      <div className="bg-white rounded-3xl border border-[#E5E0D2] shadow-xs overflow-hidden">

        <div className="px-6 py-4 border-b border-[#F0EBE0] flex items-center justify-between">

          <div>

            <h2 className="text-base font-bold text-[#1C241E] font-editorial">
              Verification Queue
            </h2>

            <p className="text-xs text-[#64748B] mt-0.5">
              Inspect each record before administrative verification.
            </p>

          </div>

        </div>


        {filteredProblems.length === 0 ? (

          <div className="p-12 text-center">

            <Search className="w-8 h-8 text-[#B8B1A1] mx-auto mb-3" />

            <h3 className="text-sm font-bold text-[#1C241E]">
              No matching challenges
            </h3>

            <p className="text-xs text-[#64748B] mt-1">
              Try changing your search or filters.
            </p>

          </div>

        ) : (

          <div className="divide-y divide-[#F0EBE0]">

            {filteredProblems.map((problem) => (

              <div
                key={problem.id}
                className="p-5 hover:bg-[#FAF8F2] transition-colors"
              >

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">

                  {/* LEFT */}
                  <div className="min-w-0">

                    <div className="flex items-center gap-2 flex-wrap mb-2">

                      <span className="font-mono text-[10px] text-[#64748B]">
                        {problem.id}
                      </span>

                      <span className="px-2 py-0.5 rounded-lg bg-[#EBF3EE] text-[#1E4D38] text-[10px] font-bold">
                        {problem.category}
                      </span>

                      <span
                        className={`px-2 py-0.5 rounded-lg text-[10px] font-bold ${
                          problem.severity === "Critical"
                            ? "bg-rose-100 text-rose-800"
                            : problem.severity === "High"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {problem.severity}
                      </span>

                    </div>


                    <h3 className="text-base font-bold text-[#1C241E] font-editorial">
                      {problem.title}
                    </h3>


                    <p className="text-xs text-[#64748B] mt-1 max-w-3xl line-clamp-2">
                      {problem.description}
                    </p>


                    <div className="flex items-center gap-3 flex-wrap mt-3 text-[11px] text-[#64748B]">

                      <span className="flex items-center gap-1">

                        <MapPin className="w-3.5 h-3.5 text-amber-700" />

                        {problem.district}

                        {problem.village
                          ? ` • ${problem.village}`
                          : ""}

                      </span>

                      {problem.affectedPopulation && (
                        <span>
                          👥 {problem.affectedPopulation}
                        </span>
                      )}

                    </div>

                  </div>


                  {/* RIGHT */}
                  <div className="flex items-center gap-2 shrink-0">

                    <button
                      onClick={() =>
                        navigate(
                          `/government/challenges/${problem.id}/review`
                        )
                      }
                      className="px-4 py-2.5 rounded-xl bg-[#1E4D38] hover:bg-[#163B2A] text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      Review
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}