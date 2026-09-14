import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  Search,
  ArrowRight,
  MapPin,
  Users,
  TrendingUp,
  CheckCircle2,
  Clock,
  BriefcaseBusiness,
  Target,
  IndianRupee,
  ChevronRight,
} from "lucide-react";

import { MOCK_PROBLEMS, MOCK_NOTIFICATIONS } from "../../data/problemsMockData";

export default function Dashboard() {
  const navigate = useNavigate();

  const industryProblems = MOCK_PROBLEMS.slice(0, 4);

  const metrics = [
    {
      label: "Challenges Explored",
      value: "24",
      icon: Search,
      description: "Across Jharkhand",
    },
    {
      label: "Partnerships",
      value: "8",
      icon: Users,
      description: "Active collaborations",
    },
    {
      label: "Solutions Deployed",
      value: "5",
      icon: CheckCircle2,
      description: "In field",
    },
    {
      label: "People Impacted",
      value: "12.4K",
      icon: TrendingUp,
      description: "Through your solutions",
    },
  ];

  const opportunities = [
    {
      title: "Smart Agriculture & Irrigation",
      category: "Agriculture",
      district: "Latehar",
      stage: "Pilot Ready",
      funding: "₹8–12 Lakh",
      description:
        "Deploy affordable IoT-based irrigation systems for small and marginal farmers.",
    },
    {
      title: "Rural Digital Connectivity",
      category: "Technology",
      district: "West Singhbhum",
      stage: "Research",
      funding: "₹15–20 Lakh",
      description:
        "Build reliable last-mile digital infrastructure for underserved communities.",
    },
    {
      title: "Waste Management Innovation",
      category: "Environment",
      district: "Ranchi",
      stage: "Prototype",
      funding: "₹5–8 Lakh",
      description:
        "Develop scalable solutions for waste segregation and local recycling.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">

      {/* Hero */}
      <div className="bg-white rounded-3xl border border-[#E5E0D2] shadow-xs p-6 sm:p-7">

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

          <div className="max-w-2xl">

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-[#EBF3EE] text-[#1E4D38] border border-[#C5DACD]">
                Industry & Innovation
              </span>

              <span className="text-[11px] text-[#64748B]">
                Jharkhand Samadhan Setu
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#1C241E] font-editorial leading-tight">
              Turn Real Problems Into
              <span className="text-[#1E4D38]"> Real Solutions.</span>
            </h1>

            <p className="text-sm text-[#556458] mt-2 leading-relaxed max-w-xl">
              Discover verified challenges from Jharkhand and connect your
              technology, expertise and resources with communities that need
              them most.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">

              <button
                onClick={() => navigate("/industry/challenges")}
                className="px-4 py-2.5 rounded-xl bg-[#1E4D38] hover:bg-[#163B2A] text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Search className="w-3.5 h-3.5" />
                Explore Challenges
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                className="px-4 py-2.5 rounded-xl bg-[#FAF8F2] hover:bg-[#F2ECE1] border border-[#DDD6C5] text-[#1E4D38] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <BriefcaseBusiness className="w-3.5 h-3.5" />
                View Partnerships
              </button>

            </div>
          </div>

          {/* Opportunity Card */}
          <div className="w-full lg:w-[330px] bg-[#F4F1E8] border border-[#E0DACB] rounded-2xl p-5">

            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#1E4D38]">
                Featured Opportunity
              </span>

              <Target className="w-4 h-4 text-[#B84F2A]" />
            </div>

            <h3 className="text-lg font-bold text-[#1C241E] font-editorial">
              {opportunities[0].title}
            </h3>

            <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
              {opportunities[0].description}
            </p>

            <div className="grid grid-cols-2 gap-2 mt-4">

              <div className="bg-white rounded-xl border border-[#E5E0D2] p-2.5">
                <div className="text-[10px] text-[#64748B]">
                  Location
                </div>

                <div className="text-xs font-bold text-[#1C241E] mt-0.5 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#B84F2A]" />
                  {opportunities[0].district}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-[#E5E0D2] p-2.5">
                <div className="text-[10px] text-[#64748B]">
                  Investment
                </div>

                <div className="text-xs font-bold text-[#1C241E] mt-0.5 flex items-center gap-1">
                  <IndianRupee className="w-3 h-3 text-[#1E4D38]" />
                  {opportunities[0].funding.replace("₹", "")}
                </div>
              </div>

            </div>

            <button
              onClick={() => navigate("/industry/challenges")}
              className="mt-4 w-full py-2 rounded-xl bg-white border border-[#DDD6C5] text-[#1E4D38] text-xs font-bold hover:bg-[#1E4D38] hover:text-white transition-colors cursor-pointer"
            >
              View Opportunity
            </button>

          </div>

        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.label}
              className="bg-white rounded-2xl border border-[#E5E0D2] p-4 shadow-xs"
            >
              <div className="flex items-center justify-between">

                <div className="w-9 h-9 rounded-xl bg-[#EBF3EE] flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#1E4D38]" />
                </div>

                <span className="text-2xl font-bold text-[#1C241E] font-editorial">
                  {metric.value}
                </span>

              </div>

              <div className="mt-3">
                <div className="text-xs font-bold text-[#1C241E]">
                  {metric.label}
                </div>

                <div className="text-[10px] text-[#64748B] mt-0.5">
                  {metric.description}
                </div>
              </div>
            </div>
          );
        })}

      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Challenge Opportunities */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-[#E5E0D2] shadow-xs">

          <div className="p-5 border-b border-[#F0EBE0] flex items-center justify-between gap-3">

            <div>
              <h2 className="text-xl font-bold text-[#1C241E] font-editorial">
                Collaboration Opportunities
              </h2>

              <p className="text-xs text-[#64748B] mt-0.5">
                Challenges where industry expertise can create measurable impact.
              </p>
            </div>

            <button
              onClick={() => navigate("/industry/challenges")}
              className="hidden sm:flex items-center gap-1 text-xs font-bold text-[#1E4D38] hover:underline cursor-pointer"
            >
              View All
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

          </div>

          <div className="divide-y divide-[#F0EBE0]">

            {industryProblems.map((problem) => (
              <div
                key={problem.id}
                className="p-5 hover:bg-[#FAF8F2] transition-colors"
              >

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">

                  <div className="min-w-0">

                    <div className="flex items-center gap-2 flex-wrap mb-1.5">

                      <span className="px-2 py-0.5 rounded-md bg-[#EBF3EE] text-[#1E4D38] border border-[#C5DACD] text-[10px] font-bold">
                        {problem.category || "General"}
                      </span>

                      {problem.severity && (
                        <span className="px-2 py-0.5 rounded-md bg-[#FFF4E5] text-[#B45309] border border-[#F2D6A6] text-[10px] font-bold">
                          {problem.severity}
                        </span>
                      )}

                    </div>

                    <h3 className="text-base font-bold text-[#1C241E] font-editorial">
                      {problem.title}
                    </h3>

                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed line-clamp-2">
                      {problem.description}
                    </p>

                    <div className="mt-2 flex items-center gap-3 flex-wrap text-[10px] text-[#64748B]">

                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#B84F2A]" />
                        {problem.district}
                      </span>

                      {problem.affectedPopulation && (
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3 text-[#1E4D38]" />
                          {problem.affectedPopulation}
                        </span>
                      )}

                    </div>

                  </div>

                  <button
                    onClick={() => navigate("/industry/challenges")}
                    className="shrink-0 px-3.5 py-2 rounded-xl border border-[#DDD6C5] bg-white text-[#1E4D38] text-xs font-bold hover:bg-[#1E4D38] hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    Explore
                    <ArrowRight className="w-3 h-3" />
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Industry Activity */}
        <div className="lg:col-span-4 bg-white rounded-3xl border border-[#E5E0D2] shadow-xs">

          <div className="p-5 border-b border-[#F0EBE0]">

            <h2 className="text-xl font-bold text-[#1C241E] font-editorial">
              Industry Activity
            </h2>

            <p className="text-xs text-[#64748B] mt-0.5">
              Recent collaboration updates.
            </p>

          </div>

          <div className="p-5 space-y-4">

            {MOCK_NOTIFICATIONS.slice(0, 4).map((notification) => (
              <div
                key={notification.id}
                className="flex gap-3"
              >

                <div className="w-8 h-8 rounded-xl bg-[#F4F1E8] flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5 text-[#1E4D38]" />
                </div>

                <div className="min-w-0">
                  <div className="text-xs font-bold text-[#1C241E] line-clamp-1">
                    {notification.title}
                  </div>

                  <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-2">
                    {notification.description}
                  </p>

                  <span className="text-[10px] text-[#94A3B8] mt-1 block">
                    {notification.timestamp}
                  </span>
                </div>

              </div>
            ))}

          </div>

          <div className="px-5 pb-5">
            <button className="w-full py-2 rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] text-[#1E4D38] text-xs font-bold hover:bg-[#F2ECE1] transition-colors cursor-pointer">
              View Collaboration History
            </button>
          </div>

        </div>

      </div>

      {/* Investment / Partnership Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {opportunities.map((opportunity, index) => (
          <div
            key={opportunity.title}
            className="bg-white rounded-3xl border border-[#E5E0D2] p-5 shadow-xs hover:shadow-md transition-shadow"
          >

            <div className="flex items-center justify-between">

              <span className="text-[10px] uppercase tracking-wider font-bold text-[#1E4D38]">
                Opportunity {index + 1}
              </span>

              <span className="px-2 py-1 rounded-lg bg-[#EBF3EE] text-[#1E4D38] border border-[#C5DACD] text-[10px] font-bold">
                {opportunity.stage}
              </span>

            </div>

            <h3 className="text-lg font-bold text-[#1C241E] font-editorial mt-3 leading-snug">
              {opportunity.title}
            </h3>

            <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
              {opportunity.description}
            </p>

            <div className="mt-4 pt-3 border-t border-[#F0EBE0] flex items-center justify-between">

              <div className="text-[10px] text-[#64748B]">
                <div className="flex items-center gap-1 font-semibold">
                  <MapPin className="w-3 h-3" />
                  {opportunity.district}
                </div>

                <div className="flex items-center gap-1 mt-1 font-semibold">
                  <IndianRupee className="w-3 h-3" />
                  {opportunity.funding}
                </div>
              </div>

              <button
                onClick={() => navigate("/industry/challenges")}
                className="w-8 h-8 rounded-xl bg-[#1E4D38] text-white flex items-center justify-center hover:bg-[#163B2A] transition-colors cursor-pointer"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* Bottom CTA */}
      <div className="bg-[#1E4D38] rounded-3xl p-6 sm:p-7 text-white flex flex-col md:flex-row md:items-center justify-between gap-5">

        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#CFE0D5]">
            Build With Jharkhand
          </div>

          <h2 className="text-2xl font-bold font-editorial mt-1">
            Have a solution that can make an impact?
          </h2>

          <p className="text-xs text-[#D9E6DE] mt-1 max-w-xl">
            Connect your technology, startup or enterprise capabilities with
            verified challenges and local innovation teams.
          </p>
        </div>

        <button
          onClick={() => navigate("/industry/challenges")}
          className="shrink-0 px-5 py-3 rounded-xl bg-white text-[#1E4D38] hover:bg-[#F4F1E8] text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          Explore Opportunities
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>

    </div>
  );
}