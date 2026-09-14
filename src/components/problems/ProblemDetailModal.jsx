import React from "react";
import { X, MapPin, Users, CheckCircle2, AlertTriangle, Heart, Wrench } from "lucide-react";

export function ProblemDetailModal({ problem, language = "en", onClose, onUpvote, isUpvoted }) {
  if (!problem) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-[#FAF8F2] border border-[#DDD6C5] rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        <div className="px-6 py-4 bg-white border-b border-[#E6E1D3] flex items-start justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#EBF3EE] text-[#1E4D38] border border-[#CDE1D4]">
              {problem.category}
            </span>
            <h2 className="mt-2 text-lg font-bold text-[#1C241E] leading-snug">
              {language === "hi" ? problem.titleHi : problem.title}
            </h2>
            <p className="text-xs text-[#6B7E6F] mt-0.5">
              {language === "hi" ? problem.title : problem.titleHi}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#64748B] hover:text-[#1C241E] hover:bg-[#F1EFE7] rounded-lg transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          <p className="text-sm text-[#334155] leading-relaxed">
            {language === "hi" ? problem.descriptionHi : problem.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white border border-[#E0DACB] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#B84F2A]" />
              <span>
                {problem.district}, {problem.block} ({problem.village})
              </span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#E0DACB] flex items-center gap-2">
              <Users className="w-4 h-4 text-[#1E4D38]" />
              <span>
                Affected: <strong>{problem.affectedPopulation}</strong>
              </span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#E0DACB] flex items-center gap-2">
              <Wrench className="w-4 h-4 text-[#1E4D38]" />
              <span>{problem.activeTeamsCount} active team(s) working on this</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#E0DACB] flex items-center gap-2">
              {problem.isVerified ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">Admin Verified</span>
                </>
              ) : (
                <>
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span className="text-amber-700 font-medium">Under Review</span>
                </>
              )}
            </div>
          </div>

          {problem.requiredSkills?.length > 0 && (
            <div>
              <p className="text-xs font-bold text-[#334155] mb-1.5">Skills needed</p>
              <div className="flex flex-wrap gap-1.5">
                {problem.requiredSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#F4F1E8] text-[#475569] border border-[#E0DACB]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-white border-t border-[#E6E1D3] flex items-center justify-between">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-lg border bg-stone-100 text-stone-700 border-stone-200">
            {problem.status}
          </span>
          {onUpvote && (
            <button
              onClick={() => onUpvote(problem.id)}
              className={`px-3 py-1.5 rounded-lg border flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                isUpvoted
                  ? "bg-rose-50 text-rose-600 border-rose-200"
                  : "text-[#64748B] hover:text-rose-600 hover:bg-rose-50 border-[#DDD6C5]"
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isUpvoted ? "fill-current" : ""}`} />
              {problem.upvotes + (isUpvoted ? 1 : 0)} support this
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
