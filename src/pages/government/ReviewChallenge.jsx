
import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Users,
  Calendar,
  AlertTriangle,
} from "lucide-react";

import { MOCK_PROBLEMS } from "../../data/problemsMockData";

export default function ReviewChallenge() {
  const navigate = useNavigate();
  const { id } = useParams();

  const problem = useMemo(
    () => MOCK_PROBLEMS.find((item) => item.id === id),
    [id]
  );

  const [decision, setDecision] = useState("");
  const [remarks, setRemarks] = useState("");

  if (!problem) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-3xl border border-[#E5E0D2] p-10 text-center">

          <AlertTriangle className="w-8 h-8 text-amber-600 mx-auto mb-3" />

          <h1 className="text-xl font-bold text-[#1C241E] font-editorial">
            Challenge Not Found
          </h1>

          <p className="text-xs text-[#64748B] mt-1">
            The requested challenge could not be found in the current records.
          </p>

          <button
            onClick={() => navigate("/government/challenges/pending")}
            className="mt-5 px-4 py-2 rounded-xl bg-[#1E4D38] text-white text-xs font-bold"
          >
            Back to Pending Challenges
          </button>

        </div>
      </div>
    );
  }

  const handleDecision = (value) => {
    setDecision(value);
  };

  const handleSubmit = () => {
    if (!decision) return;

    console.log("Administrative decision:", {
      problemId: problem.id,
      decision,
      remarks,
    });

    navigate("/government/challenges/pending");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">

      {/* ================= BACK ================= */}
      <button
        onClick={() => navigate("/government/challenges/pending")}
        className="flex items-center gap-1.5 text-xs font-semibold text-[#64748B] hover:text-[#1E4D38] transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to Pending Challenges
      </button>


      {/* ================= HEADER ================= */}
      <div className="bg-white rounded-3xl border border-[#E5E0D2] shadow-xs p-6">

        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5">

          <div>

            <div className="flex items-center gap-2 flex-wrap mb-2">

              <span className="font-mono text-[10px] text-[#64748B] bg-[#F4F1E8] px-2 py-1 rounded-lg">
                {problem.id}
              </span>

              <span className="px-2.5 py-1 rounded-lg bg-[#EBF3EE] text-[#1E4D38] border border-[#C5DACD] text-[10px] font-bold">
                {problem.category}
              </span>

              <span
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${
                  problem.severity === "Critical"
                    ? "bg-rose-100 text-rose-800 border border-rose-200"
                    : problem.severity === "High"
                    ? "bg-amber-100 text-amber-800 border border-amber-200"
                    : "bg-slate-100 text-slate-700 border border-slate-200"
                }`}
              >
                {problem.severity} Severity
              </span>

            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-[#1C241E] font-editorial">
              {problem.title}
            </h1>

            <p className="text-sm text-[#64748B] mt-2 max-w-3xl leading-relaxed">
              {problem.description}
            </p>

          </div>


          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] shrink-0">

            <ShieldCheck className="w-4 h-4 text-amber-700" />

            <div>

              <div className="text-[10px] font-bold uppercase tracking-wide text-amber-800">
                Administrative Review
              </div>

              <div className="text-[10px] text-amber-700">
                Verification required
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= DETAILS GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* LOCATION */}
        <div className="bg-white rounded-3xl border border-[#E5E0D2] p-5 shadow-xs">

          <div className="flex items-center gap-2 mb-4">

            <div className="w-9 h-9 rounded-xl bg-[#F4F1E8] flex items-center justify-center">
              <MapPin className="w-4 h-4 text-amber-700" />
            </div>

            <div>

              <h3 className="text-sm font-bold text-[#1C241E]">
                Location
              </h3>

              <p className="text-[10px] text-[#64748B]">
                Reported community location
              </p>

            </div>

          </div>

          <div className="space-y-3 text-xs">

            <div>
              <span className="text-[#94A3B8] block text-[10px]">
                District
              </span>

              <span className="font-bold text-[#1C241E]">
                {problem.district || "Not specified"}
              </span>
            </div>

            <div>
              <span className="text-[#94A3B8] block text-[10px]">
                Village / Locality
              </span>

              <span className="font-semibold text-[#475569]">
                {problem.village ||
                  problem.location ||
                  "Not specified"}
              </span>
            </div>

          </div>

        </div>


        {/* IMPACT */}
        <div className="bg-white rounded-3xl border border-[#E5E0D2] p-5 shadow-xs">

          <div className="flex items-center gap-2 mb-4">

            <div className="w-9 h-9 rounded-xl bg-[#EBF3EE] flex items-center justify-center">
              <Users className="w-4 h-4 text-[#1E4D38]" />
            </div>

            <div>

              <h3 className="text-sm font-bold text-[#1C241E]">
                Community Impact
              </h3>

              <p className="text-[10px] text-[#64748B]">
                Estimated affected population
              </p>

            </div>

          </div>

          <div className="text-3xl font-bold font-editorial text-[#1E4D38]">
            {problem.affectedPopulation || "—"}
          </div>

          <p className="text-[10px] text-[#64748B] mt-1">
            People / households potentially affected
          </p>

        </div>


        {/* DATE */}
        <div className="bg-white rounded-3xl border border-[#E5E0D2] p-5 shadow-xs">

          <div className="flex items-center gap-2 mb-4">

            <div className="w-9 h-9 rounded-xl bg-[#F4F1E8] flex items-center justify-center">
              <Calendar className="w-4 h-4 text-[#1E4D38]" />
            </div>

            <div>

              <h3 className="text-sm font-bold text-[#1C241E]">
                Report Information
              </h3>

              <p className="text-[10px] text-[#64748B]">
                Record metadata
              </p>

            </div>

          </div>

          <div className="space-y-3 text-xs">

            <div>
              <span className="text-[#94A3B8] block text-[10px]">
                Problem ID
              </span>

              <span className="font-mono font-bold text-[#1C241E]">
                {problem.id}
              </span>
            </div>

            <div>
              <span className="text-[#94A3B8] block text-[10px]">
                Current Status
              </span>

              <span className="font-semibold text-amber-700">
                Awaiting Verification
              </span>
            </div>

          </div>

        </div>

      </div>


      {/* ================= DESCRIPTION ================= */}
      <div className="bg-white rounded-3xl border border-[#E5E0D2] p-6 shadow-xs">

        <div className="flex items-center justify-between mb-4">

          <div>

            <h2 className="text-base font-bold text-[#1C241E] font-editorial">
              Problem Assessment
            </h2>

            <p className="text-xs text-[#64748B] mt-0.5">
              Review the information before making an administrative decision.
            </p>

          </div>

          <span className="text-[10px] font-bold text-[#64748B]">
            {problem.category}
          </span>

        </div>


        <div className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#EBE6DA]">

          <h3 className="text-xs font-bold text-[#1C241E] mb-2">
            Citizen Description
          </h3>

          <p className="text-sm text-[#475569] leading-relaxed">
            {problem.description ||
              "No additional description was provided for this challenge."}
          </p>

        </div>


        {/* Existing fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

          <div className="p-4 rounded-2xl border border-[#EBE6DA]">

            <span className="text-[10px] uppercase tracking-wider font-bold text-[#94A3B8]">
              Category
            </span>

            <p className="text-sm font-bold text-[#1C241E] mt-1">
              {problem.category || "Not specified"}
            </p>

          </div>


          <div className="p-4 rounded-2xl border border-[#EBE6DA]">

            <span className="text-[10px] uppercase tracking-wider font-bold text-[#94A3B8]">
              Severity
            </span>

            <p className="text-sm font-bold text-[#1C241E] mt-1">
              {problem.severity || "Not specified"}
            </p>

          </div>

        </div>

      </div>


      {/* ================= DECISION ================= */}
      <div className="bg-white rounded-3xl border border-[#E5E0D2] p-6 shadow-xs">

        <div className="mb-5">

          <h2 className="text-base font-bold text-[#1C241E] font-editorial">
            Administrative Decision
          </h2>

          <p className="text-xs text-[#64748B] mt-0.5">
            Select the appropriate action for this community challenge.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* APPROVE */}
          <button
            type="button"
            onClick={() => handleDecision("verified")}
            className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
              decision === "verified"
                ? "border-emerald-400 bg-emerald-50 ring-2 ring-emerald-100"
                : "border-[#E5E0D2] hover:border-emerald-300 hover:bg-[#FAF8F2]"
            }`}
          >

            <div className="flex items-start gap-3">

              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-700" />
              </div>

              <div>

                <h3 className="text-sm font-bold text-[#1C241E]">
                  Verify & Approve
                </h3>

                <p className="text-[11px] text-[#64748B] mt-1 leading-relaxed">
                  Confirm that the problem is valid and move it forward for
                  university/industry solution matching.
                </p>

              </div>

            </div>

          </button>


          {/* REJECT */}
          <button
            type="button"
            onClick={() => handleDecision("rejected")}
            className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
              decision === "rejected"
                ? "border-rose-400 bg-rose-50 ring-2 ring-rose-100"
                : "border-[#E5E0D2] hover:border-rose-300 hover:bg-[#FAF8F2]"
            }`}
          >

            <div className="flex items-start gap-3">

              <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center shrink-0">
                <XCircle className="w-5 h-5 text-rose-700" />
              </div>

              <div>

                <h3 className="text-sm font-bold text-[#1C241E]">
                  Reject / Return
                </h3>

                <p className="text-[11px] text-[#64748B] mt-1 leading-relaxed">
                  Return the record because the information is insufficient,
                  inaccurate or does not qualify as a civic challenge.
                </p>

              </div>

            </div>

          </button>

        </div>


        {/* REMARKS */}
        <div className="mt-5">

          <label className="block text-xs font-bold text-[#334155] mb-1.5">
            Administrative Remarks
            <span className="font-normal text-[#94A3B8] ml-1">
              (Optional)
            </span>
          </label>

          <textarea
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            rows={4}
            placeholder="Add verification notes, observations or instructions..."
            className="w-full px-3.5 py-3 rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] text-xs outline-none resize-none focus:border-[#1E4D38] focus:ring-2 focus:ring-[#1E4D38]/10"
          />

        </div>


        {/* ACTIONS */}
        <div className="mt-5 pt-5 border-t border-[#F0EBE0] flex flex-col sm:flex-row justify-end gap-3">

          <button
            type="button"
            onClick={() => navigate("/government/challenges/pending")}
            className="px-5 py-2.5 rounded-xl border border-[#DDD6C5] bg-white text-xs font-bold text-[#64748B] hover:bg-[#F4F1E8] transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={!decision}
            onClick={handleSubmit}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-colors ${
              decision
                ? "bg-[#1E4D38] hover:bg-[#163B2A] cursor-pointer"
                : "bg-[#AAB5AE] cursor-not-allowed"
            }`}
          >
            Submit Decision
          </button>

        </div>

      </div>

    </div>
  );
}
