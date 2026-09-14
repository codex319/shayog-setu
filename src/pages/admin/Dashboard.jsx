import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Users,
  FileText,
  CheckCircle2,
  Clock,
  AlertTriangle,
  TrendingUp,
  UserCheck,
  Building2,
  GraduationCap,
  Landmark,
  BriefcaseBusiness,
  ArrowRight,
  ChevronRight,
  Activity,
} from "lucide-react";

import {
  MOCK_PROBLEMS,
  MOCK_NOTIFICATIONS,
} from "../../data/problemsMockData";

export default function Dashboard() {
  const navigate = useNavigate();

  const metrics = [
    {
      label: "Total Users",
      value: "2,846",
      change: "+12.4%",
      icon: Users,
    },
    {
      label: "Problems Reported",
      value: "1,284",
      change: "+8.7%",
      icon: FileText,
    },
    {
      label: "Verified Problems",
      value: "842",
      change: "+14.2%",
      icon: CheckCircle2,
    },
    {
      label: "Active Solutions",
      value: "326",
      change: "+9.8%",
      icon: TrendingUp,
    },
  ];

  const roles = [
    {
      label: "Citizens",
      value: "1,842",
      percentage: 65,
      icon: Users,
    },
    {
      label: "Government",
      value: "214",
      percentage: 8,
      icon: Landmark,
    },
    {
      label: "University",
      value: "386",
      percentage: 14,
      icon: GraduationCap,
    },
    {
      label: "Industry",
      value: "298",
      percentage: 10,
      icon: BriefcaseBusiness,
    },
    {
      label: "Admins",
      value: "106",
      percentage: 3,
      icon: ShieldCheck,
    },
  ];

  const lifecycle = [
    {
      label: "Reported",
      value: "1,284",
      percentage: 100,
    },
    {
      label: "Verified",
      value: "842",
      percentage: 66,
    },
    {
      label: "In Progress",
      value: "326",
      percentage: 25,
    },
    {
      label: "Solved / Transferred",
      value: "714",
      percentage: 56,
    },
    {
      label: "Pilots",
      value: "48",
      percentage: 4,
    },
  ];

  const recentProblems = MOCK_PROBLEMS.slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">

      {/* Header */}
      <div className="bg-white rounded-3xl border border-[#E5E0D2] shadow-xs p-6">

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1E4D38]">
                Platform Administration
              </span>

              <span className="px-2 py-0.5 rounded-lg bg-[#EBF3EE] text-[#1E4D38] border border-[#C5DACD] text-[10px] font-bold">
                ADMIN
              </span>
            </div>

            <h1 className="text-3xl font-bold text-[#1C241E] font-editorial">
              Administration Dashboard
            </h1>

            <p className="text-sm text-[#64748B] mt-1 max-w-2xl">
              Monitor the Jharkhand Samadhan Setu platform, users, challenges,
              verification activity and solution progress.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#F4F1E8] border border-[#E0DACB]">
            <Activity className="w-4 h-4 text-[#1E4D38]" />

            <div>
              <div className="text-[10px] uppercase tracking-wider font-bold text-[#64748B]">
                System Status
              </div>

              <div className="text-xs font-bold text-emerald-700">
                All Systems Operational
              </div>
            </div>
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
              className="bg-white rounded-2xl border border-[#E5E0D2] p-5 shadow-xs"
            >
              <div className="flex items-center justify-between">

                <div className="w-10 h-10 rounded-xl bg-[#EBF3EE] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#1E4D38]" />
                </div>

                <span className="text-2xl font-bold text-[#1C241E] font-editorial">
                  {metric.value}
                </span>

              </div>

              <div className="mt-3 flex items-end justify-between gap-2">

                <div>
                  <div className="text-xs font-bold text-[#1C241E]">
                    {metric.label}
                  </div>

                  <div className="text-[10px] text-[#64748B] mt-0.5">
                    Platform-wide
                  </div>
                </div>

                <span className="text-[10px] font-bold text-emerald-700">
                  {metric.change}
                </span>

              </div>
            </div>
          );
        })}

      </div>

      {/* Main Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* User Distribution */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E5E0D2] shadow-xs">

          <div className="p-5 border-b border-[#F0EBE0]">

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#1C241E] font-editorial">
                  User Distribution
                </h2>

                <p className="text-xs text-[#64748B] mt-0.5">
                  Registered platform participants by role.
                </p>
              </div>

              <Users className="w-5 h-5 text-[#1E4D38]" />
            </div>

          </div>

          <div className="p-5 space-y-4">

            {roles.map((role) => {
              const Icon = role.icon;

              return (
                <div key={role.label}>

                  <div className="flex items-center justify-between mb-1.5">

                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#F4F1E8] flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-[#1E4D38]" />
                      </div>

                      <span className="text-xs font-bold text-[#334155]">
                        {role.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#1C241E]">
                        {role.value}
                      </span>

                      <span className="text-[10px] text-[#64748B]">
                        {role.percentage}%
                      </span>
                    </div>

                  </div>

                  <div className="h-2 rounded-full bg-[#F1EFE7] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#1E4D38]"
                      style={{
                        width: `${role.percentage}%`,
                      }}
                    />
                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* Challenge Lifecycle */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E5E0D2] shadow-xs">

          <div className="p-5 border-b border-[#F0EBE0] flex items-center justify-between">

            <div>
              <h2 className="text-xl font-bold text-[#1C241E] font-editorial">
                Challenge Lifecycle
              </h2>

              <p className="text-xs text-[#64748B] mt-0.5">
                Platform-wide movement from citizen reporting to implementation.
              </p>
            </div>

            <TrendingUp className="w-5 h-5 text-[#1E4D38]" />

          </div>

          <div className="p-5">

            <div className="space-y-5">

              {lifecycle.map((item, index) => (
                <div key={item.label}>

                  <div className="flex items-center justify-between mb-1.5">

                    <div className="flex items-center gap-2">

                      <div className="w-6 h-6 rounded-full bg-[#EBF3EE] text-[#1E4D38] flex items-center justify-center text-[10px] font-bold">
                        {index + 1}
                      </div>

                      <span className="text-xs font-bold text-[#334155]">
                        {item.label}
                      </span>

                    </div>

                    <div className="text-xs font-bold text-[#1C241E]">
                      {item.value}
                    </div>

                  </div>

                  <div className="h-3 rounded-full bg-[#F1EFE7] overflow-hidden border border-[#E9E4D8]">
                    <div
                      className="h-full rounded-full bg-[#1E4D38]"
                      style={{
                        width: `${item.percentage}%`,
                      }}
                    />
                  </div>

                </div>
              ))}

            </div>

            <div className="mt-5 pt-4 border-t border-[#F0EBE0] grid grid-cols-3 gap-3">

              <div className="p-3 rounded-xl bg-[#F4F1E8] text-center">
                <div className="text-lg font-bold text-[#1E4D38] font-editorial">
                  65.6%
                </div>
                <div className="text-[10px] text-[#64748B]">
                  Verification Rate
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#F4F1E8] text-center">
                <div className="text-lg font-bold text-[#B84F2A] font-editorial">
                  25.4%
                </div>
                <div className="text-[10px] text-[#64748B]">
                  Active Solutions
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#F4F1E8] text-center">
                <div className="text-lg font-bold text-[#1D4ED8] font-editorial">
                  48
                </div>
                <div className="text-[10px] text-[#64748B]">
                  Active Pilots
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Recent Problems + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Recent Problems */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-[#E5E0D2] shadow-xs">

          <div className="p-5 border-b border-[#F0EBE0] flex items-center justify-between">

            <div>
              <h2 className="text-xl font-bold text-[#1C241E] font-editorial">
                Recent Challenges
              </h2>

              <p className="text-xs text-[#64748B] mt-0.5">
                Latest problems entering the platform.
              </p>
            </div>

            <button
              onClick={() => navigate("/admin/users")}
              className="hidden sm:flex items-center gap-1 text-xs font-bold text-[#1E4D38] hover:underline cursor-pointer"
            >
              Manage Users
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

          </div>

          <div className="divide-y divide-[#F0EBE0]">

            {recentProblems.map((problem) => (
              <div
                key={problem.id}
                className="p-5 hover:bg-[#FAF8F2] transition-colors"
              >

                <div className="flex items-start justify-between gap-4">

                  <div className="min-w-0">

                    <div className="flex items-center gap-2 flex-wrap mb-1">

                      <span className="px-2 py-0.5 rounded-md bg-[#EBF3EE] text-[#1E4D38] border border-[#C5DACD] text-[10px] font-bold">
                        {problem.category || "General"}
                      </span>

                      {problem.severity && (
                        <span className="px-2 py-0.5 rounded-md bg-[#FFF4E5] text-[#B45309] border border-[#F2D6A6] text-[10px] font-bold">
                          {problem.severity}
                        </span>
                      )}

                    </div>

                    <h3 className="text-sm font-bold text-[#1C241E]">
                      {problem.title}
                    </h3>

                    <div className="flex items-center gap-3 mt-1.5 text-[10px] text-[#64748B]">

                      <span className="flex items-center gap-1">
                        <span>📍</span>
                        {problem.district}
                      </span>

                      <span>
                        ID: {problem.id}
                      </span>

                    </div>

                  </div>

                  <span className="shrink-0 px-2.5 py-1 rounded-lg bg-[#EBF3EE] text-[#1E4D38] border border-[#C5DACD] text-[10px] font-bold">
                    Active
                  </span>

                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Activity */}
        <div className="lg:col-span-4 bg-white rounded-3xl border border-[#E5E0D2] shadow-xs">

          <div className="p-5 border-b border-[#F0EBE0]">

            <h2 className="text-xl font-bold text-[#1C241E] font-editorial">
              Recent Activity
            </h2>

            <p className="text-xs text-[#64748B] mt-0.5">
              Important platform events.
            </p>

          </div>

          <div className="p-5 space-y-4">

            {MOCK_NOTIFICATIONS.slice(0, 4).map((notification) => (
              <div
                key={notification.id}
                className="flex gap-3"
              >

                <div className="w-8 h-8 rounded-xl bg-[#F4F1E8] flex items-center justify-center shrink-0">
                  <Activity className="w-3.5 h-3.5 text-[#1E4D38]" />
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

        </div>

      </div>

      {/* Admin Attention */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="bg-white rounded-3xl border border-[#E5E0D2] p-5 shadow-xs">

          <div className="flex items-center justify-between">

            <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center">
              <Clock className="w-4 h-4 text-amber-700" />
            </div>

            <span className="text-2xl font-bold text-[#1C241E] font-editorial">
              37
            </span>

          </div>

          <h3 className="text-sm font-bold text-[#1C241E] mt-3">
            Pending Verifications
          </h3>

          <p className="text-[11px] text-[#64748B] mt-0.5">
            Challenges waiting for government review.
          </p>

          <button
            onClick={() => navigate("/government/challenges/pending")}
            className="mt-3 text-xs font-bold text-[#1E4D38] flex items-center gap-1 hover:underline cursor-pointer"
          >
            Open Queue
            <ArrowRight className="w-3 h-3" />
          </button>

        </div>

        <div className="bg-white rounded-3xl border border-[#E5E0D2] p-5 shadow-xs">

          <div className="flex items-center justify-between">

            <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-red-700" />
            </div>

            <span className="text-2xl font-bold text-[#1C241E] font-editorial">
              12
            </span>

          </div>

          <h3 className="text-sm font-bold text-[#1C241E] mt-3">
            High Priority Issues
          </h3>

          <p className="text-[11px] text-[#64748B] mt-0.5">
            Critical challenges requiring administrative attention.
          </p>

          <button
            onClick={() => navigate("/government/dashboard")}
            className="mt-3 text-xs font-bold text-[#1E4D38] flex items-center gap-1 hover:underline cursor-pointer"
          >
            Review Dashboard
            <ArrowRight className="w-3 h-3" />
          </button>

        </div>

        <div className="bg-[#1E4D38] rounded-3xl p-5 shadow-xs text-white">

          <div className="flex items-center justify-between">

            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
              <UserCheck className="w-4 h-4 text-white" />
            </div>

            <span className="text-2xl font-bold font-editorial">
              94.2%
            </span>

          </div>

          <h3 className="text-sm font-bold mt-3">
            Platform Engagement
          </h3>

          <p className="text-[11px] text-[#D9E6DE] mt-0.5">
            Users actively participating in the ecosystem.
          </p>

          <button
            onClick={() => navigate("/admin/users")}
            className="mt-3 text-xs font-bold text-white flex items-center gap-1 hover:underline cursor-pointer"
          >
            Manage Users
            <ArrowRight className="w-3 h-3" />
          </button>

        </div>

      </div>

      {/* Bottom Notice */}
      <div className="bg-[#F4F1E8] border border-[#E0DACB] rounded-2xl p-4 flex items-start gap-3">

        <ShieldCheck className="w-5 h-5 text-[#1E4D38] shrink-0 mt-0.5" />

        <div>
          <div className="text-xs font-bold text-[#1C241E]">
            Administrative Access
          </div>

          <p className="text-[11px] text-[#64748B] mt-0.5 leading-relaxed">
            This dashboard contains platform-level information. User
            management, verification and administrative actions should be
            performed only by authorized administrators.
          </p>
        </div>

      </div>

    </div>
  );
}