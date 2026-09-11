
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  MapPin,
  Users,
  ArrowRight,
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";

import { useProblems } from "../../context/ProblemsContext.jsx";

export default function Challenges() {
  const navigate = useNavigate();
  const { problems = [] } = useProblems();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  const categories = useMemo(() => {
    const values = problems
      .map((problem) => problem.category)
      .filter(Boolean);

    return ["All", ...new Set(values)];
  }, [problems]);

  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => {
      const title = problem.title || "";
      const description = problem.description || "";

      const matchesSearch =
        title.toLowerCase().includes(search.toLowerCase()) ||
        description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || problem.category === category;

      const matchesStatus =
        status === "All" || problem.status === status;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [problems, search, category, status]);

  const getStatusStyle = (problemStatus) => {
    if (problemStatus === "Resolved") {
      return "bg-[#ECFDF5] text-[#047857] border-[#A7F3D0]";
    }

    if (
      problemStatus === "In Progress" ||
      problemStatus === "Under Review"
    ) {
      return "bg-[#FFFBEB] text-[#B45309] border-[#FDE68A]";
    }

    return "bg-[#FEF2F2] text-[#B91C1C] border-[#FECACA]";
  };

  const getStatusIcon = (problemStatus) => {
    if (problemStatus === "Resolved") {
      return <CheckCircle2 className="w-3.5 h-3.5" />;
    }

    if (
      problemStatus === "In Progress" ||
      problemStatus === "Under Review"
    ) {
      return <Clock className="w-3.5 h-3.5" />;
    }

    return <AlertCircle className="w-3.5 h-3.5" />;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

      {/* ================= HEADER ================= */}
      <div className="bg-white rounded-3xl border border-[#E5E0D2] shadow-xs p-6 mb-6">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E4D38]">
              Citizen Portal
            </span>

            <h1 className="text-2xl sm:text-3xl font-bold text-[#1C241E] font-editorial mt-1">
              Community Challenges
            </h1>

            <p className="text-sm text-[#64748B] mt-1 max-w-2xl">
              Explore problems reported by citizens and discover challenges
              that need community-driven solutions.
            </p>
          </div>

          <button
            onClick={() => navigate("/citizen/challenges/new")}
            className="bg-[#1E4D38] hover:bg-[#163B2A] text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            Report a Problem
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

        </div>


        {/* ================= FILTERS ================= */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">

          {/* Search */}
          <div className="relative md:col-span-1">

            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search challenges..."
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] text-xs outline-none focus:ring-2 focus:ring-[#1E4D38]/20"
            />

          </div>


          {/* Category */}
          <div className="relative">

            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#94A3B8]" />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] text-xs outline-none cursor-pointer"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

          </div>


          {/* Status */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] text-xs outline-none cursor-pointer"
          >
            <option value="All">All Statuses</option>
            <option value="Open">Open</option>
            <option value="Under Review">Under Review</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>

        </div>

      </div>


      {/* ================= RESULT COUNT ================= */}
      <div className="flex items-center justify-between mb-3 px-1">

        <p className="text-xs font-semibold text-[#64748B]">
          Showing{" "}
          <span className="text-[#1C241E]">
            {filteredProblems.length}
          </span>{" "}
          challenges
        </p>

        <span className="text-[10px] text-[#94A3B8]">
          Community problems
        </span>

      </div>


      {/* ================= CARDS ================= */}
      {filteredProblems.length === 0 ? (

        <div className="bg-white rounded-3xl border border-[#E5E0D2] p-12 text-center">

          <div className="w-12 h-12 rounded-full bg-[#F4F1E8] mx-auto flex items-center justify-center mb-3">
            <Search className="w-5 h-5 text-[#1E4D38]" />
          </div>

          <h2 className="text-lg font-bold text-[#1C241E] font-editorial">
            No challenges found
          </h2>

          <p className="text-xs text-[#64748B] mt-1">
            Try changing your search or filters.
          </p>

        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {filteredProblems.map((problem) => (

            <article
              key={problem.id || problem._id}
              className="bg-white rounded-3xl border border-[#E5E0D2] shadow-xs overflow-hidden hover:shadow-md transition-shadow"
            >

              {/* Image */}
              {problem.image ? (

                <div className="h-40 overflow-hidden bg-[#F4F1E8]">

                  <img
                    src={problem.image}
                    alt={problem.title}
                    className="w-full h-full object-cover"
                  />

                </div>

              ) : (

                <div className="h-28 bg-[#F4F1E8] flex items-center justify-center">
                  <AlertCircle className="w-7 h-7 text-[#B8B1A1]" />
                </div>

              )}


              <div className="p-5">

                {/* Status */}
                <div className="flex items-center justify-between gap-2 mb-3">

                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg border text-[10px] font-bold ${getStatusStyle(
                      problem.status
                    )}`}
                  >
                    {getStatusIcon(problem.status)}
                    {problem.status || "Open"}
                  </span>

                  {problem.category && (
                    <span className="text-[10px] font-semibold text-[#64748B]">
                      {problem.category}
                    </span>
                  )}

                </div>


                {/* Title */}
                <h2 className="text-base font-bold text-[#1C241E] font-editorial leading-snug line-clamp-2">
                  {problem.title || "Untitled Challenge"}
                </h2>


                {/* Description */}
                <p className="text-xs text-[#64748B] leading-relaxed mt-2 line-clamp-3">
                  {problem.description ||
                    "A community problem that needs attention and a practical solution."}
                </p>


                {/* Meta */}
                <div className="mt-4 pt-3 border-t border-[#F0EBE0] space-y-2">

                  <div className="flex items-center gap-1.5 text-[11px] text-[#64748B]">

                    <MapPin className="w-3.5 h-3.5 text-[#B45309]" />

                    <span>
                      {problem.district ||
                        problem.location ||
                        "Jharkhand"}
                    </span>

                  </div>


                  <div className="flex items-center gap-1.5 text-[11px] text-[#64748B]">

                    <Users className="w-3.5 h-3.5 text-[#1E4D38]" />

                    <span>
                      {problem.affectedPopulation ||
                        problem.votes ||
                        "Community"}{" "}
                      affected
                    </span>

                  </div>

                </div>


                {/* Action */}
                <button
                  onClick={() =>
                    navigate(
                      `/citizen/challenges/${
                        problem.id || problem._id
                      }`
                    )
                  }
                  className="w-full mt-4 py-2.5 rounded-xl bg-[#FAF8F2] hover:bg-[#F2ECE1] border border-[#DDD6C5] text-xs font-bold text-[#1E4D38] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  View Challenge
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>

            </article>

          ))}

        </div>

      )}

    </div>
  );
}
