
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  MapPin,
  Download,
  Check,
} from "lucide-react";

import {
  JHARKHAND_DISTRICTS,
  MOCK_PROBLEMS,
  CATEGORIES_WITH_ICONS,
} from "../../data/problemsMockData";

import { JharkhandMapSvg } from "../../components/problems/JharkhandMapSvg";

export default function GovernmentDashboard() {
  const navigate = useNavigate();

  const [selectedDistrict, setSelectedDistrict] =
    useState("All Districts");

  const [selectedCategory, setSelectedCategory] =
    useState("All Categories");

  const [verifiedList, setVerifiedList] = useState({
    "PRB-JH-01": true,
    "PRB-JH-02": true,
    "PRB-JH-04": true,
  });

  const toggleVerify = (id) => {
    setVerifiedList((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const metrics = [
    {
      label: "Problems Raised",
      count: "1,284",
      color: "#1C241E",
    },
    {
      label: "Verified by BDO/Panchayat",
      count: "842",
      color: "#166534",
    },
    {
      label: "In Progress (Active Teams)",
      count: "326",
      color: "#1E40AF",
    },
    {
      label: "Solved / Transferred",
      count: "714",
      color: "#115E59",
    },
    {
      label: "Pilots in Villages",
      count: "48",
      color: "#92400E",
    },
  ];

  const lifecycleStages = [
    { label: "Reported", count: "1,284", icon: "📝" },
    { label: "Verified", count: "842", icon: "✓" },
    { label: "Matched", count: "612", icon: "⚡" },
    { label: "In Progress", count: "326", icon: "⚙️" },
    { label: "Solved", count: "714", icon: "🎉" },
    { label: "Piloted", count: "48", icon: "🌱" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">

      {/* ================= HEADER ================= */}
      <div className="bg-white rounded-3xl border border-[#E5E0D2] p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">

        <div>

          <div className="flex items-center gap-2 flex-wrap">

            <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EBF3EE] text-[#1E4D38] border border-[#C5DACD] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              District Administration & Validation Portal
            </span>

            <span className="text-xs text-[#64748B]">
              State Level Dashboard
            </span>

          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#1C241E] mt-1.5 font-editorial">
            Government of Jharkhand Civic Oversight
          </h1>

          <p className="text-sm font-hindi text-[#55685A] font-semibold mt-0.5">
            Block and district level challenge verification and student
            solution monitoring.
          </p>

        </div>

        <button
          onClick={() =>
            alert(
              "Exporting Official CSV Data Digest for Department of Planning..."
            )
          }
          className="px-3 py-2 rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] text-xs font-bold text-[#475569] hover:bg-[#F2ECE1] flex items-center gap-1.5 cursor-pointer self-start"
        >
          <Download className="w-3.5 h-3.5" />
          Export Digest
        </button>

      </div>


      {/* ================= FILTER BAR ================= */}
      <div className="bg-white rounded-2xl border border-[#E5E0D2] p-4 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">

        {/* District */}
        <div>

          <label className="block font-bold text-[#475569] mb-1">
            District / जिला:
          </label>

          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] font-semibold text-[#1C241E]"
          >
            <option value="All Districts">
              All 24 Districts
            </option>

            {JHARKHAND_DISTRICTS.map((district) => (
              <option
                key={district.name}
                value={district.name}
              >
                {district.name} ({district.nameHi})
              </option>
            ))}

          </select>

        </div>


        {/* Category */}
        <div>

          <label className="block font-bold text-[#475569] mb-1">
            Category / श्रेणी:
          </label>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] font-semibold text-[#1C241E]"
          >
            <option value="All Categories">
              All Categories
            </option>

            {CATEGORIES_WITH_ICONS.map((category) => (
              <option
                key={category.name}
                value={category.name}
              >
                {category.name}
              </option>
            ))}

          </select>

        </div>


        {/* Status */}
        <div>

          <label className="block font-bold text-[#475569] mb-1">
            Status / स्थिति:
          </label>

          <select className="w-full px-3 py-2 rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] font-semibold text-[#1C241E]">

            <option>All Statuses</option>

            <option>
              Requires Administrative Verification
            </option>

            <option>
              Matched with University
            </option>

            <option>
              Pilot Deployed in Village
            </option>

          </select>

        </div>


        {/* Date */}
        <div>

          <label className="block font-bold text-[#475569] mb-1">
            Date Range:
          </label>

          <select className="w-full px-3 py-2 rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] font-semibold text-[#1C241E]">

            <option>Last 6 months</option>
            <option>Last 30 days</option>
            <option>Financial Year 2024-25</option>

          </select>

        </div>

      </div>


      {/* ================= METRICS ================= */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">

        {metrics.map((metric) => (

          <div
            key={metric.label}
            className="bg-white p-4 rounded-2xl border border-[#E5E0D2] shadow-xs text-center"
          >

            <span
              className="text-2xl sm:text-3xl font-bold font-editorial block"
              style={{ color: metric.color }}
            >
              {metric.count}
            </span>

            <span className="text-xs font-bold text-[#1C241E] mt-1 block leading-snug">
              {metric.label}
            </span>

            <span className="text-[10px] text-[#8C9B90] italic mt-0.5 block">
              (Demo data)
            </span>

          </div>

        ))}

      </div>


      {/* ================= LIFECYCLE ================= */}
      <div className="bg-white rounded-3xl border border-[#E5E0D2] p-6 shadow-xs">

        <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E4D38] mb-4">
          Problem Lifecycle Pipeline / समस्या जीवनचक्र
        </h3>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">

          {lifecycleStages.map((stage, index) => (

            <div
              key={stage.label}
              className="p-3.5 rounded-2xl bg-[#FAF8F2] border border-[#EBE6DA] text-center relative"
            >

              <div className="text-lg mb-1">
                {stage.icon}
              </div>

              <div className="text-xl font-bold text-[#1E4D38] font-editorial">
                {stage.count}
              </div>

              <div className="text-xs font-semibold text-[#475569] mt-0.5">
                {stage.label}
              </div>

              {index < lifecycleStages.length - 1 && (
                <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 text-[#CBD5E1] text-xs font-bold">
                  →
                </div>
              )}

            </div>

          ))}

        </div>

      </div>


      {/* ================= MAP + DISTRICTS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* MAP */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E5E0D2] p-5 shadow-xs flex flex-col justify-between">

          <div className="flex items-center justify-between mb-3">

            <div>

              <h3 className="text-sm font-bold text-[#1C241E]">
                Statewide Problem Density Map
              </h3>

              <p className="text-[11px] text-[#64748B]">
                Click any district circle to filter community records
              </p>

            </div>

            <span className="text-xs font-bold text-[#1E4D38] bg-[#EBF3EE] px-2.5 py-1 rounded-lg">
              District: {selectedDistrict}
            </span>

          </div>

          <JharkhandMapSvg
            selectedDistrict={selectedDistrict}
            onDistrictSelect={(district) =>
              setSelectedDistrict(district)
            }
            onProblemSelect={(problem) =>
              navigate(
                `/government/challenges/${problem.id}/review`
              )
            }
            heightClass="h-[380px]"
          />

        </div>


        {/* DISTRICT BREAKDOWN */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E5E0D2] p-5 shadow-xs flex flex-col justify-between space-y-4">

          <div>

            <div className="flex items-center justify-between mb-3">

              <h3 className="text-sm font-bold text-[#1C241E]">
                District Breakdown
              </h3>

              <span className="text-[10px] text-[#64748B]">
                Sorted by count
              </span>

            </div>


            <div className="border border-[#ECE7D9] rounded-xl overflow-hidden max-h-52 overflow-y-auto text-xs">

              <table className="w-full text-left">

                <thead className="bg-[#FAF8F2] border-b border-[#ECE7D9] text-[#64748B] font-bold">

                  <tr>
                    <th className="p-2">District</th>
                    <th className="p-2">Reported</th>
                    <th className="p-2">Solved</th>
                    <th className="p-2">Pilots</th>
                  </tr>

                </thead>

                <tbody className="divide-y divide-[#F4F1E8]">

                  {JHARKHAND_DISTRICTS
                    .slice(0, 8)
                    .map((district) => (

                      <tr
                        key={district.name}
                        onClick={() =>
                          setSelectedDistrict(district.name)
                        }
                        className={`cursor-pointer transition-colors ${
                          selectedDistrict === district.name
                            ? "bg-[#EBF3EE] font-bold text-[#1E4D38]"
                            : "hover:bg-[#FAF8F2]"
                        }`}
                      >

                        <td className="p-2">
                          {district.name}
                        </td>

                        <td className="p-2 font-mono font-semibold">
                          {district.problemsCount}
                        </td>

                        <td className="p-2 font-mono text-emerald-700">
                          {district.solvedCount}
                        </td>

                        <td className="p-2 font-mono text-amber-700">
                          {district.activePilots}
                        </td>

                      </tr>

                    ))}

                </tbody>

              </table>

            </div>

          </div>


          {/* CATEGORY DISTRIBUTION */}
          <div>

            <h4 className="text-xs font-bold text-[#1C241E] mb-2">
              Top Categories Distribution
            </h4>

            <div className="space-y-2 text-xs">

              {[
                {
                  name: "Agriculture & Irrigation",
                  pct: 28,
                  color: "#16A34A",
                },
                {
                  name: "Water & Fluoride Warning",
                  pct: 23,
                  color: "#0891B2",
                },
                {
                  name: "Rural Education & Schools",
                  pct: 18,
                  color: "#2563EB",
                },
                {
                  name: "Healthcare & Telemedicine",
                  pct: 12,
                  color: "#DC2626",
                },
                {
                  name: "Others & Infrastructure",
                  pct: 19,
                  color: "#D97706",
                },
              ].map((category) => (

                <div key={category.name}>

                  <div className="flex items-center justify-between text-[11px] mb-0.5">

                    <span className="text-[#334155]">
                      {category.name}
                    </span>

                    <span className="font-semibold text-[#64748B]">
                      {category.pct}%
                    </span>

                  </div>

                  <div className="w-full h-1.5 rounded-full bg-[#F1EFE7] overflow-hidden">

                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${category.pct}%`,
                        backgroundColor: category.color,
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>


      {/* ================= VERIFICATION QUEUE ================= */}
      <div className="bg-white rounded-3xl border border-[#E5E0D2] p-6 shadow-xs space-y-4">

        <div className="flex items-center justify-between gap-3">

          <div>

            <h3 className="text-base font-bold text-[#1C241E] font-editorial">
              Requires Administrative Attention / सत्यापन सूची
            </h3>

            <p className="text-xs text-[#64748B]">
              High and Critical severity community challenges awaiting
              verification before funding match.
            </p>

          </div>

          <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 whitespace-nowrap">
            3 Pending Triage
          </span>

        </div>


        <div className="divide-y divide-[#F0EBE0] border border-[#ECE7D9] rounded-2xl overflow-hidden">

          {MOCK_PROBLEMS.map((problem) => {

            const isVerified = verifiedList[problem.id];

            return (

              <div
                key={problem.id}
                className="p-4 bg-white hover:bg-[#FAF8F2] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >

                <div className="space-y-1 max-w-2xl">

                  <div className="flex items-center gap-2 flex-wrap">

                    <span className="font-mono text-[10px] text-[#64748B]">
                      {problem.id}
                    </span>

                    <span className="font-bold text-[#1E4D38] px-1.5 py-0.5 rounded bg-[#EBF3EE]">
                      {problem.category}
                    </span>

                    <span className="text-[#475569] font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-700" />
                      {problem.district} ({problem.village})
                    </span>

                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        problem.severity === "Critical"
                          ? "bg-rose-100 text-rose-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {problem.severity}
                    </span>

                  </div>

                  <h4 className="font-bold text-[#1C241E] text-sm">
                    {problem.title}
                  </h4>

                  <p className="text-[11px] text-[#556458] line-clamp-1">
                    {problem.description}
                  </p>

                </div>


                <div className="flex items-center gap-2 shrink-0">

                  <button
                    onClick={() =>
                      navigate(
                        `/government/challenges/${problem.id}/review`
                      )
                    }
                    className="px-3 py-1.5 rounded-xl border border-[#DDD6C5] font-semibold text-[#475569] hover:bg-white cursor-pointer"
                  >
                    Inspect
                  </button>


                  <button
                    onClick={() =>
                      toggleVerify(problem.id)
                    }
                    className={`px-3 py-1.5 rounded-xl font-bold transition-colors cursor-pointer flex items-center gap-1 ${
                      isVerified
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                        : "bg-[#1E4D38] text-white hover:bg-[#163B2A]"
                    }`}
                  >

                    {isVerified ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Verified
                      </>
                    ) : (
                      "Verify Problem"
                    )}

                  </button>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </div>
  );
}
