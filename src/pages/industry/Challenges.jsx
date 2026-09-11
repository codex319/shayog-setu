import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  MapPin,
  Users,
  ArrowRight,
  Filter,
  SlidersHorizontal,
  X,
  CheckCircle2,
  Building2,
  Target,
} from "lucide-react";

import { useProblems } from "../../context/ProblemsContext.jsx";
import { CATEGORIES_WITH_ICONS } from "../../data/problemsMockData";

export default function Challenges() {
  const navigate = useNavigate();
  const { problems } = useProblems();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [severity, setSeverity] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const categories = useMemo(() => {
    const names = CATEGORIES_WITH_ICONS.map((item) =>
      typeof item === "string" ? item : item.name
    );

    return ["All", ...names];
  }, []);

  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => {
      const query = search.toLowerCase().trim();

      const matchesSearch =
        !query ||
        problem.title?.toLowerCase().includes(query) ||
        problem.description?.toLowerCase().includes(query) ||
        problem.category?.toLowerCase().includes(query) ||
        problem.district?.toLowerCase().includes(query) ||
        problem.location?.toLowerCase().includes(query);

      const matchesCategory =
        category === "All" ||
        problem.category?.toLowerCase() === category.toLowerCase();

      const matchesSeverity =
        severity === "All" ||
        problem.severity?.toLowerCase() === severity.toLowerCase();

      return matchesSearch && matchesCategory && matchesSeverity;
    });
  }, [problems, search, category, severity]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setSeverity("All");
  };

  const getSeverityClass = (value) => {
    switch (value?.toLowerCase()) {
      case "critical":
      case "high":
        return "bg-red-50 text-red-700 border-red-200";

      case "medium":
        return "bg-amber-50 text-amber-700 border-amber-200";

      default:
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">

      {/* Header */}
      <div className="bg-white rounded-3xl border border-[#E5E0D2] shadow-xs p-6">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">

          <div>
            <div className="flex items-center gap-2 mb-1">

              <span className="text-xs font-bold uppercase tracking-wider text-[#1E4D38]">
                Industry Innovation Network
              </span>

              <span className="text-[10px] px-2 py-0.5 rounded-lg bg-[#EBF3EE] text-[#1E4D38] border border-[#C5DACD] font-bold">
                VERIFIED CHALLENGES
              </span>

            </div>

            <h1 className="text-3xl font-bold text-[#1C241E] font-editorial">
              Explore Opportunities
            </h1>

            <p className="text-sm text-[#64748B] mt-1 max-w-2xl">
              Find verified community challenges where your company, technology,
              products or expertise can create measurable impact.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#F4F1E8] border border-[#E0DACB] rounded-xl px-3 py-2">
            <Target className="w-4 h-4 text-[#1E4D38]" />

            <span className="text-xs font-bold text-[#1C241E]">
              {filteredProblems.length}
            </span>

            <span className="text-xs text-[#64748B]">
              opportunities found
            </span>
          </div>

        </div>

        {/* Search */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">

          <div className="relative flex-1">

            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by problem, district, category or location..."
              className="w-full pl-10 pr-10 py-3 rounded-xl border border-[#DDD6C5] bg-[#FAF8F2] text-sm text-[#1C241E] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#1E4D38]/20 focus:border-[#1E4D38]"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#1C241E] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}

          </div>

          <button
            onClick={() => setShowFilters((prev) => !prev)}
            className={`px-4 py-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
              showFilters
                ? "bg-[#1E4D38] text-white border-[#1E4D38]"
                : "bg-white text-[#1E4D38] border-[#DDD6C5] hover:bg-[#F4F1E8]"
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mt-4 p-4 rounded-2xl bg-[#FAF8F2] border border-[#E5E0D2]">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                  Category
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-[#DDD6C5] bg-white text-xs font-semibold text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#1E4D38]/20"
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                  Severity
                </label>

                <select
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-[#DDD6C5] bg-white text-xs font-semibold text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#1E4D38]/20"
                >
                  <option value="All">All Severities</option>
                  <option value="Critical">Critical</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={clearFilters}
                  className="w-full px-3 py-2.5 rounded-xl border border-[#DDD6C5] bg-white text-xs font-bold text-[#B84F2A] hover:bg-[#FFF7F3] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <X className="w-3.5 h-3.5" />
                  Clear Filters
                </button>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Quick Categories */}
      <div className="flex gap-2 overflow-x-auto pb-1">

        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
              category === item
                ? "bg-[#1E4D38] text-white border-[#1E4D38]"
                : "bg-white text-[#556458] border-[#E5E0D2] hover:bg-[#F4F1E8] hover:text-[#1E4D38]"
            }`}
          >
            {item}
          </button>
        ))}

      </div>

      {/* Challenge Grid */}
      {filteredProblems.length > 0 ? (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

          {filteredProblems.map((problem) => (

            <div
              key={problem.id}
              className="group bg-white rounded-3xl border border-[#E5E0D2] shadow-xs hover:shadow-md hover:border-[#C9C1AE] transition-all duration-200 overflow-hidden flex flex-col"
            >

              <div className="p-5 flex-1">

                {/* Tags */}
                <div className="flex items-center justify-between gap-2 mb-3">

                  <span className="px-2.5 py-1 rounded-lg bg-[#EBF3EE] text-[#1E4D38] border border-[#C5DACD] text-[10px] font-bold">
                    {problem.category || "General"}
                  </span>

                  {problem.severity && (
                    <span
                      className={`px-2.5 py-1 rounded-lg border text-[10px] font-bold uppercase ${getSeverityClass(
                        problem.severity
                      )}`}
                    >
                      {problem.severity}
                    </span>
                  )}

                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-[#1C241E] font-editorial leading-snug group-hover:text-[#1E4D38] transition-colors">
                  {problem.title}
                </h2>

                <p className="text-xs text-[#64748B] leading-relaxed mt-2 line-clamp-3">
                  {problem.description}
                </p>

                {/* Location */}
                <div className="mt-4 space-y-2">

                  <div className="flex items-center gap-2 text-xs text-[#556458]">
                    <MapPin className="w-3.5 h-3.5 text-[#B84F2A] shrink-0" />

                    <span className="font-semibold">
                      {problem.district || "Jharkhand"}
                    </span>

                    {problem.location && (
                      <>
                        <span className="text-[#CBD5E1]">
                          •
                        </span>

                        <span className="truncate">
                          {problem.location}
                        </span>
                      </>
                    )}
                  </div>

                  {problem.affectedPopulation && (
                    <div className="flex items-center gap-2 text-xs text-[#64748B]">
                      <Users className="w-3.5 h-3.5 text-[#1E4D38]" />

                      <span>
                        {problem.affectedPopulation} people affected
                      </span>
                    </div>
                  )}

                </div>

                {/* Collaboration Potential */}
                <div className="mt-4 p-3 rounded-xl bg-[#F4F1E8] border border-[#E0DACB]">

                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#1E4D38]">
                    <Building2 className="w-3.5 h-3.5" />
                    Industry Opportunity
                  </div>

                  <p className="text-[11px] text-[#556458] mt-1 leading-relaxed">
                    Potential for technology deployment, CSR partnership,
                    product innovation or field implementation.
                  </p>

                </div>

              </div>

              {/* Footer */}
              <div className="px-5 py-3.5 bg-[#FAF8F2] border-t border-[#EDE8DC]">

                <div className="flex items-center justify-between gap-3">

                  <div className="flex items-center gap-1.5 text-[10px] text-[#64748B]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1E4D38]" />
                    Verified challenge
                  </div>

                  <button
                    onClick={() => navigate("/industry/challenges")}
                    className="px-3 py-1.5 rounded-lg bg-[#1E4D38] hover:bg-[#163B2A] text-white text-[10px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    Collaborate
                    <ArrowRight className="w-3 h-3" />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      ) : (

        /* Empty State */
        <div className="bg-white rounded-3xl border border-[#E5E0D2] p-12 text-center">

          <div className="w-14 h-14 rounded-2xl bg-[#F4F1E8] mx-auto flex items-center justify-center">
            <Filter className="w-6 h-6 text-[#64748B]" />
          </div>

          <h2 className="text-lg font-bold text-[#1C241E] font-editorial mt-4">
            No opportunities found
          </h2>

          <p className="text-xs text-[#64748B] mt-1 max-w-md mx-auto">
            Try different keywords or clear the filters to discover more
            industry collaboration opportunities.
          </p>

          <button
            onClick={clearFilters}
            className="mt-5 px-4 py-2.5 rounded-xl bg-[#1E4D38] hover:bg-[#163B2A] text-white text-xs font-bold cursor-pointer transition-colors"
          >
            Clear All Filters
          </button>

        </div>
      )}

    </div>
  );
}