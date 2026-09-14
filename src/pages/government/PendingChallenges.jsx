
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Filter,
  MapPin,
  ArrowRight,
  Clock,
} from "lucide-react";

import { getGovernmentChallenges } from "../../api/governmentApi";

export default function PendingChallenges() {
  const navigate = useNavigate();

  const [challenges, setChallenges] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ================= FETCH PENDING CHALLENGES =================
  useEffect(() => {
    const fetchPendingChallenges = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getGovernmentChallenges({
          status: "SUBMITTED",
        });

        setChallenges(data.list || []);
      } catch (err) {
        console.error("Error fetching pending challenges:", err);

        setError("Unable to load pending challenges.");
      } finally {
        setLoading(false);
      }
    };

    fetchPendingChallenges();
  }, []);

  // ================= CATEGORIES =================
  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(
        challenges
          .map((challenge) => challenge.category)
          .filter(Boolean)
      ),
    ];
  }, [challenges]);

  // ================= FILTER =================
  const filteredChallenges = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return challenges.filter((challenge) => {
      const matchesSearch =
        !searchText ||
        challenge.title?.toLowerCase().includes(searchText) ||
        challenge.description?.toLowerCase().includes(searchText) ||
        challenge._id?.toLowerCase().includes(searchText) ||
        challenge.district?.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" ||
        challenge.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [challenges, search, category]);

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
              Review community challenges that are waiting for
              government verification.
            </p>
          </div>

          <div className="px-3 py-2 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-xs font-bold text-[#92400E]">
            {filteredChallenges.length} Pending Records
          </div>

        </div>

        {/* ================= FILTERS ================= */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">

          {/* Search */}
          <div className="relative">

            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, ID or district..."
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
                  {item === "All" ? "All Categories" : item}
                </option>
              ))}
            </select>

          </div>

        </div>

      </div>

      {/* ================= QUEUE ================= */}
      <div className="bg-white rounded-3xl border border-[#E5E0D2] shadow-xs overflow-hidden">

        <div className="px-6 py-4 border-b border-[#F0EBE0]">

          <h2 className="text-base font-bold text-[#1C241E] font-editorial">
            Verification Queue
          </h2>

          <p className="text-xs text-[#64748B] mt-0.5">
            Inspect each challenge before administrative verification.
          </p>

        </div>

        {/* ================= LOADING ================= */}
        {loading && (
          <div className="p-12 text-center">

            <Clock className="w-8 h-8 text-[#1E4D38] mx-auto mb-3 animate-pulse" />

            <h3 className="text-sm font-bold text-[#1C241E]">
              Loading challenges...
            </h3>

          </div>
        )}

        {/* ================= ERROR ================= */}
        {!loading && error && (
          <div className="p-12 text-center">

            <h3 className="text-sm font-bold text-red-700">
              {error}
            </h3>

            <p className="text-xs text-[#64748B] mt-1">
              Make sure your backend server is running.
            </p>

          </div>
        )}

        {/* ================= EMPTY ================= */}
        {!loading &&
          !error &&
          filteredChallenges.length === 0 && (
            <div className="p-12 text-center">

              <Search className="w-8 h-8 text-[#B8B1A1] mx-auto mb-3" />

              <h3 className="text-sm font-bold text-[#1C241E]">
                No pending challenges
              </h3>

              <p className="text-xs text-[#64748B] mt-1">
                Try changing your search or category filter.
              </p>

            </div>
          )}

        {/* ================= CARD GRID ================= */}
        {!loading &&
          !error &&
          filteredChallenges.length > 0 && (
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">

              {filteredChallenges.map((challenge) => (
                <div
                  key={challenge._id}
                  className="min-h-[300px] flex flex-col bg-[#FAF8F2] border border-[#E5E0D2] rounded-2xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >

                  {/* TOP */}
                  <div className="flex items-center justify-between gap-2 mb-3">

                    <span className="font-mono text-[9px] text-[#64748B] truncate">
                      {challenge._id}
                    </span>

                    <span className="px-2 py-1 rounded-lg bg-[#EBF3EE] text-[#1E4D38] text-[9px] font-bold whitespace-nowrap">
                      {challenge.category}
                    </span>

                  </div>

                  {/* TITLE */}
                  <h3 className="text-base font-bold text-[#1C241E] font-editorial line-clamp-2">
                    {challenge.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-xs text-[#64748B] mt-2 line-clamp-4">
                    {challenge.description}
                  </p>

                  {/* LOCATION */}
                  <div className="flex items-start gap-1.5 mt-4 text-[11px] text-[#64748B]">

                    <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />

                    <span className="line-clamp-2">
                      {challenge.district}
                      {challenge.location
                        ? ` • ${challenge.location}`
                        : ""}
                    </span>

                  </div>

                  {/* STATUS */}
                  <div className="mt-3">

                    <span className="inline-flex px-2 py-1 rounded-lg bg-amber-50 border border-amber-100 text-[9px] font-bold text-amber-700">
                      {challenge.status}
                    </span>

                  </div>

                  {/* REVIEW */}
                  <div className="mt-auto pt-4">

                    <button
                      onClick={() =>
                        navigate(
                          `/government/challenges/${challenge._id}/review`
                        )
                      }
                      className="w-full px-3 py-2.5 rounded-xl bg-[#1E4D38] hover:bg-[#163B2A] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      Review Challenge
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                  </div>

                </div>
              ))}

            </div>
          )}

      </div>

    </div>
  );
}

