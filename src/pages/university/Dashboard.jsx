import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  MapPin,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Award,
  Search,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

import {
  MOCK_STUDENT_RECOMMENDATION,
  MOCK_PROJECT_TEAM,
  MOCK_NOTIFICATIONS,
} from "../../data/problemsMockData";

export default function Dashboard() {
  const navigate = useNavigate();

  const rec = MOCK_STUDENT_RECOMMENDATION;
  const project = MOCK_PROJECT_TEAM;

 

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">

      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-[#E5E0D2] shadow-xs">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EBF3EE] text-[#1E4D38] border border-[#C5DACD]">
              University & Researcher Portal
            </span>

            <span className="text-xs text-[#64748B]">
              Jharkhand Academic Network
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#1C241E] mt-1 font-editorial">
            Welcome, Researcher!
          </h1>

          <p className="text-sm font-hindi text-[#55685A] font-semibold mt-0.5">
            Here's what's happening with your university projects and
            collaboration opportunities.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-[#8C9B90] absolute left-3 top-1/2 -translate-y-1/2" />

            <input
              type="text"
              placeholder="Search problems, teams, mentors..."
              className="pl-9 pr-3 py-2 text-xs rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] focus:outline-none focus:ring-2 focus:ring-[#1E4D38]/30 w-64"
            />
          </div>

          <button
            onClick={() => navigate("/university/challenges")}
            className="bg-[#1E4D38] hover:bg-[#163B2A] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-colors shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <span>Find a Challenge</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
+
     
      {/* Active Project */}
      <div className="bg-white rounded-3xl border border-[#E5E0D2] p-6 shadow-xs">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#F0EBE0]">

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EBF3EE] text-[#1E4D38] border border-[#C5DACD]">
                Active Project
              </span>

              <span className="text-xs text-emerald-800 font-semibold flex items-center gap-1">
                ● In Progress ({project.progressPercentage}%)
              </span>
            </div>

            <h2 className="text-xl font-bold text-[#1C241E] mt-1 font-editorial">
              {project.title}
            </h2>

            <p className="text-xs text-[#64748B] mt-0.5">
              Next Milestone:{" "}
              <strong>{project.nextAction}</strong>{" "}
              • District: {project.district}
            </p>
          </div>

          <button
            onClick={() =>
              navigate("/university/challenges")
            }
            className="px-4 py-2 rounded-xl bg-[#FAF8F2] hover:bg-[#F2ECE1] border border-[#DDD6C5] text-xs font-bold text-[#1E4D38] flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>Open University Challenges</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Progress */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs font-semibold text-[#475569] mb-1.5">
            <span>
              Overall Solution Development Progress
            </span>

            <span>{project.progressPercentage}%</span>
          </div>

          <div className="w-full h-3 rounded-full bg-[#F4F1E6] overflow-hidden p-0.5 border border-[#E0DACB]">
            <div
              className="h-full rounded-full bg-[#1E4D38] transition-all duration-500"
              style={{
                width: `${project.progressPercentage}%`,
              }}
            />
          </div>
        </div>

        {/* Team */}
        <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs">

          <div className="flex items-center gap-2">
            <span className="text-[#64748B] font-medium">
              Cross-Univ Team:
            </span>

            <div className="flex items-center -space-x-2">
              {project.members.map((member) => (
                <img
                  key={member.id}
                  src={member.avatar}
                  alt={member.name}
                  title={`${member.name} (${member.university})`}
                  className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-xs"
                />
              ))}
            </div>

            <span className="text-[11px] text-[#475569] font-medium">
              BIT Mesra + NIT Jamshedpur + Ranchi University
            </span>
          </div>

          <div className="text-[11px] text-[#1E4D38] font-bold bg-[#EBF3EE] px-2.5 py-1 rounded-lg">
            Mentors: Dr. S. Gupta & Priya Singh
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="flex flex-col gap-6">

        
        

        {/* Recent Activity */}
        <div className="bg-white rounded-3xl border border-[#E5E0D2] p-5 shadow-xs">

          <h3 className="text-xs font-bold uppercase tracking-wider text-[#1C241E] mb-3 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#1E4D38]" />
            Recent Activity
          </h3>

          <div className="space-y-2.5 text-xs">
            {MOCK_NOTIFICATIONS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="p-2 rounded-xl hover:bg-[#FAF8F2] transition-colors border-b border-[#F0EBE0] last:border-b-0"
              >
                <div className="font-semibold text-[#1C241E] line-clamp-1">
                  {item.title}
                </div>

                <div className="text-[11px] text-[#64748B] line-clamp-1 mt-0.5">
                  {item.description}
                </div>

                <span className="text-[10px] text-[#94A3B8] font-mono mt-0.5 block">
                  {item.timestamp}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div className="bg-white rounded-3xl border border-[#E5E0D2] p-5 shadow-xs flex flex-col justify-between">

          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1C241E] flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[#1E4D38]" />
                Your Impact
              </h3>

              <span className="text-[10px] text-[#8C9B90] italic">
                (Demo data)
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">

              <div className="p-3 rounded-2xl bg-[#F4F1E6] border border-[#E0DACB] text-center">
                <div className="text-2xl font-bold text-[#1E4D38] font-editorial">
                  12
                </div>
                <div className="text-[11px] font-semibold text-[#475569] mt-0.5">
                  Problems Matched
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#F4F1E6] border border-[#E0DACB] text-center">
                <div className="text-2xl font-bold text-[#B84F2A] font-editorial">
                  3
                </div>
                <div className="text-[11px] font-semibold text-[#475569] mt-0.5">
                  Teams Joined
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#F4F1E6] border border-[#E0DACB] text-center">
                <div className="text-2xl font-bold text-[#1D4ED8] font-editorial">
                  4
                </div>
                <div className="text-[11px] font-semibold text-[#475569] mt-0.5">
                  Pilots in Field
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#F4F1E6] border border-[#E0DACB] text-center">
                <div className="text-2xl font-bold text-[#047857] font-editorial">
                  240
                </div>
                <div className="text-[11px] font-semibold text-[#475569] mt-0.5">
                  Households Impacted
                </div>
              </div>

            </div>
          </div>

          <div className="mt-3 pt-2 text-[10px] text-center text-[#64748B]">
            Verified for academic credit transfer by Jharkhand Technical University (JUT)
          </div>
        </div>
      </div>
    </div>
  );
}