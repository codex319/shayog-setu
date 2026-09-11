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

  const skillsData = [
    { name: "AI/ML", pct: 90, color: "#3B82F6" },
    { name: "Web Dev", pct: 78, color: "#10B981" },
    { name: "IoT", pct: 60, color: "#06B6D4" },
    { name: "Python", pct: 60, color: "#F59E0B" },
    { name: "Data Analysis", pct: 50, color: "#EC4899" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">

      {/* ================= WELCOME SECTION ================= */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-[#E5E0D2] shadow-xs">

        <div>
          <div className="flex items-center gap-2">

            <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EBF3EE] text-[#1E4D38] border border-[#C5DACD]">
              Citizen Portal
            </span>

            <span className="text-xs text-[#64748B]">
              Jharkhand
            </span>

          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#1C241E] mt-1 font-editorial">
            Good morning, Citizen!
          </h1>

          <p className="text-sm font-hindi text-[#55685A] font-semibold mt-0.5">
            Here's what's happening with community problems and challenges.
          </p>
        </div>

        <div className="flex items-center gap-3">

          <div className="relative">
            <Search className="w-4 h-4 text-[#8C9B90] absolute left-3 top-1/2 -translate-y-1/2" />

            <input
              type="text"
              placeholder="Search problems, challenges..."
              className="pl-9 pr-3 py-2 text-xs rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] focus:outline-none focus:ring-2 focus:ring-[#1E4D38]/30 w-64"
            />
          </div>

          <button
            onClick={() => navigate("/citizen/challenges/new")}
            className="bg-[#1E4D38] hover:bg-[#163B2A] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-colors shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <span>Report a Problem</span>
            <ArrowRight className="w-3 h-3" />
          </button>

        </div>
      </div>


      {/* ================= TOP GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* ================= RECOMMENDED CHALLENGE ================= */}
        <div className="lg:col-span-8 bg-gradient-to-br from-[#FAF8F2] to-white rounded-3xl border border-[#E5E0D2] p-6 shadow-xs flex flex-col justify-between">

          <div>

            <div className="flex items-center justify-between gap-2 mb-3">

              <span className="text-xs font-bold uppercase tracking-wider text-[#1E4D38] flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                Recommended Challenge
              </span>

              <span className="px-2.5 py-1 rounded-full bg-[#1E4D38] text-white text-xs font-bold shadow-xs">
                {rec.matchScore}% Match
              </span>

            </div>

            <h2 className="text-xl font-bold text-[#1C241E] font-editorial leading-snug">
              {rec.problem.title}
            </h2>

            <p className="text-xs text-[#556458] mt-1.5 leading-relaxed">
              {rec.problem.description}
            </p>


            {/* WHY MATCHES */}
            <div className="mt-4 p-3 rounded-xl bg-[#F4F1E6] border border-[#E0DACB] space-y-1 text-xs">

              <div className="font-bold text-[#1C241E] text-[11px] mb-1">
                Why this matches your profile:
              </div>

              {rec.reasons.map((reason, i) => (
                <div
                  key={i}
                  className="flex items-start gap-1.5 text-[11px] text-[#475569]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />

                  <span>{reason}</span>
                </div>
              ))}

            </div>


            {/* SKILLS + LOCATION */}
            <div className="mt-4 flex items-center justify-between flex-wrap gap-2 pt-3 border-t border-[#EBE6DA]">

              <div className="flex items-center gap-1.5 flex-wrap">

                {rec.matchedSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-[#EBF3EE] text-[#1E4D38] border border-[#C5DACD]"
                  >
                    ✓ {skill}
                  </span>
                ))}

              </div>

              <div className="text-xs text-[#64748B] flex items-center gap-2">

                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-700" />
                  {rec.problem.district}
                </span>

                <span>•</span>

                <span>
                  👥 {rec.problem.affectedPopulation}
                </span>

              </div>

            </div>

          </div>


          <div className="mt-5 flex items-center justify-end">

            <button
              onClick={() => navigate("/citizen/challenges")}
              className="bg-[#1E4D38] hover:bg-[#163B2A] text-white text-xs font-bold px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>View Challenge Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>


        {/* ================= SKILLS ================= */}
        <div className="lg:col-span-4 bg-white rounded-3xl border border-[#E5E0D2] p-6 shadow-xs flex flex-col justify-between">

          <div>

            <div className="flex items-center justify-between mb-4">

              <h3 className="text-sm font-bold text-[#1C241E] flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#1E4D38]" />
                Your Skills Distribution
              </h3>

              <span className="text-xs font-semibold text-[#64748B]">
                6 Verified
              </span>

            </div>


            <div className="space-y-3">

              {skillsData.map((skill) => (
                <div key={skill.name}>

                  <div className="flex items-center justify-between text-xs font-semibold mb-1">

                    <span className="text-[#334155]">
                      {skill.name}
                    </span>

                    <span className="text-[#64748B]">
                      {skill.pct}%
                    </span>

                  </div>

                  <div className="w-full h-2 rounded-full bg-[#F1EFE7] overflow-hidden">

                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${skill.pct}%`,
                        backgroundColor: skill.color,
                      }}
                    />

                  </div>

                </div>
              ))}

            </div>

          </div>


          <div className="mt-6 pt-3 border-t border-[#F0EBE0] flex items-center justify-between text-xs text-[#556458]">

            <span>
              Based on your activity
            </span>

            <button className="font-bold text-[#1E4D38] hover:underline cursor-pointer">
              Update Skills
            </button>

          </div>

        </div>

      </div>


      {/* ================= ACTIVE PROJECT ================= */}
      <div className="bg-white rounded-3xl border border-[#E5E0D2] p-6 shadow-xs">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#F0EBE0]">

          <div>

            <div className="flex items-center gap-2">

              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EBF3EE] text-[#1E4D38] border border-[#C5DACD]">
                Active Community Challenge
              </span>

              <span className="text-xs text-emerald-800 font-semibold flex items-center gap-1">
                ● In Progress ({project.progressPercentage}%)
              </span>

            </div>

            <h2 className="text-xl font-bold text-[#1C241E] mt-1 font-editorial">
              {project.title}
            </h2>

            <p className="text-xs text-[#64748B] mt-0.5">
              Next Milestone: <strong>{project.nextAction}</strong>
              {" • "}
              District: {project.district}
            </p>

          </div>


          <button
            onClick={() => navigate("/citizen/challenges")}
            className="px-4 py-2 rounded-xl bg-[#FAF8F2] hover:bg-[#F2ECE1] border border-[#DDD6C5] text-xs font-bold text-[#1E4D38] flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>Open Challenge</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

        </div>


        {/* PROGRESS */}
        <div className="mt-4">

          <div className="flex items-center justify-between text-xs font-semibold text-[#475569] mb-1.5">

            <span>
              Solution Development Progress
            </span>

            <span>
              {project.progressPercentage}%
            </span>

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


        {/* TEAM */}
        <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs">

          <div className="flex items-center gap-2">

            <span className="text-[#64748B] font-medium">
              Solution Team:
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
              Community + Universities
            </span>

          </div>


          <div className="text-[11px] text-[#1E4D38] font-bold bg-[#EBF3EE] px-2.5 py-1 rounded-lg">
            Mentors Available
          </div>

        </div>

      </div>


      {/* ================= BOTTOM 3 COLUMNS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


        {/* UPCOMING */}
        <div className="bg-white rounded-3xl border border-[#E5E0D2] p-5 shadow-xs">

          <h3 className="text-xs font-bold uppercase tracking-wider text-[#1C241E] mb-3 flex items-center gap-1.5">

            <Calendar className="w-3.5 h-3.5 text-[#1E4D38]" />

            Upcoming Milestones

          </h3>


          <div className="space-y-3">

            {[
              {
                date: "25 Apr",
                title: "Field Testing",
                status: "Upcoming",
              },
              {
                date: "10 May",
                title: "Panchayat Verification",
                status: "Pending",
              },
              {
                date: "20 May",
                title: "Village Pilot Rollout",
                status: "Pending",
              },
            ].map((milestone, index) => (

              <div
                key={index}
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F2] border border-[#EBE6DA] text-xs"
              >

                <div>

                  <span className="font-bold text-[#1C241E] block">
                    {milestone.title}
                  </span>

                  <span className="text-[10px] text-[#64748B]">
                    {milestone.status}
                  </span>

                </div>

                <span className="px-2 py-0.5 rounded bg-white text-[#1E4D38] font-mono text-[11px] font-bold border border-[#DDD6C5]">
                  {milestone.date}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* RECENT ACTIVITY */}
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


        {/* IMPACT */}
        <div className="bg-white rounded-3xl border border-[#E5E0D2] p-5 shadow-xs flex flex-col justify-between">

          <div>

            <div className="flex items-center justify-between mb-3">

              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1C241E] flex items-center gap-1.5">

                <TrendingUp className="w-3.5 h-3.5 text-[#1E4D38]" />

                Your Impact

              </h3>

              <span className="text-[10px] text-[#8C9B90] italic">
                Demo data
              </span>

            </div>


            <div className="grid grid-cols-2 gap-3">

              <div className="p-3 rounded-2xl bg-[#F4F1E6] border border-[#E0DACB] text-center">

                <div className="text-2xl font-bold text-[#1E4D38] font-editorial">
                  12
                </div>

                <div className="text-[11px] font-semibold text-[#475569] mt-0.5">
                  Problems Reported
                </div>

              </div>


              <div className="p-3 rounded-2xl bg-[#F4F1E6] border border-[#E0DACB] text-center">

                <div className="text-2xl font-bold text-[#B84F2A] font-editorial">
                  3
                </div>

                <div className="text-[11px] font-semibold text-[#475569] mt-0.5">
                  Problems Resolved
                </div>

              </div>


              <div className="p-3 rounded-2xl bg-[#F4F1E6] border border-[#E0DACB] text-center">

                <div className="text-2xl font-bold text-[#1D4ED8] font-editorial">
                  4
                </div>

                <div className="text-[11px] font-semibold text-[#475569] mt-0.5">
                  Solutions Active
                </div>

              </div>


              <div className="p-3 rounded-2xl bg-[#F4F1E6] border border-[#E0DACB] text-center">

                <div className="text-2xl font-bold text-[#047857] font-editorial">
                  240
                </div>

                <div className="text-[11px] font-semibold text-[#475569] mt-0.5">
                  People Impacted
                </div>

              </div>

            </div>

          </div>


          <div className="mt-3 pt-2 text-[10px] text-center text-[#64748B]">
            Building better communities through Jharkhand Samadhan Setu
          </div>

        </div>

      </div>

    </div>
  );
}