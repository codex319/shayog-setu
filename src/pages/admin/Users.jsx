import React, { useMemo, useState } from "react";
import {
  Search,
  Users,
  UserCheck,
  UserX,
  ShieldCheck,
  MoreHorizontal,
  Mail,
  Building2,
  ChevronDown,
} from "lucide-react";

const INITIAL_USERS = [
  {
    id: 1,
    name: "Anaya Kumari",
    email: "anaya@example.com",
    role: "citizen",
    organization: "Public Citizen",
    status: "active",
    joined: "12 Aug 2026",
  },
  {
    id: 2,
    name: "Rohan Verma",
    email: "rohan@example.com",
    role: "student",
    organization: "Rajkiya Engineering College",
    status: "active",
    joined: "10 Aug 2026",
  },
  {
    id: 3,
    name: "Dr. Meera Singh",
    email: "meera@example.com",
    role: "faculty",
    organization: "University of Jharkhand",
    status: "active",
    joined: "08 Aug 2026",
  },
  {
    id: 4,
    name: "Officer R. Prasad",
    email: "r.prasad@gov.in",
    role: "government",
    organization: "Government of Jharkhand",
    status: "active",
    joined: "05 Aug 2026",
  },
  {
    id: 5,
    name: "Priya Mehta",
    email: "priya@industry.com",
    role: "industry",
    organization: "GreenTech Industries",
    status: "pending",
    joined: "04 Aug 2026",
  },
  {
    id: 6,
    name: "Aman Kumar",
    email: "aman@example.com",
    role: "citizen",
    organization: "Public Citizen",
    status: "active",
    joined: "02 Aug 2026",
  },
  {
    id: 7,
    name: "Sneha Gupta",
    email: "sneha@example.com",
    role: "student",
    organization: "BIT Mesra",
    status: "pending",
    joined: "30 Jul 2026",
  },
  {
    id: 8,
    name: "System Admin",
    email: "admin@samadhansetu.gov",
    role: "admin",
    organization: "Samadhan Setu",
    status: "active",
    joined: "01 Jul 2026",
  },
  {
    id: 9,
    name: "Vikash Singh",
    email: "vikash@example.com",
    role: "citizen",
    organization: "Public Citizen",
    status: "suspended",
    joined: "28 Jul 2026",
  },
];

const ROLE_OPTIONS = [
  { value: "all", label: "All Roles" },
  { value: "citizen", label: "Citizen" },
  { value: "government", label: "Government" },
  { value: "university", label: "University" },
  { value: "faculty", label: "Faculty" },
  { value: "student", label: "Student" },
  { value: "industry", label: "Industry" },
  { value: "admin", label: "Admin" },
];

const STATUS_OPTIONS = [
  { value: "all", label: "All Status" },
  { value: "active", label: "Active" },
  { value: "pending", label: "Pending" },
  { value: "suspended", label: "Suspended" },
];

function roleLabel(role) {
  const labels = {
    citizen: "Citizen",
    government: "Government",
    university: "University",
    faculty: "Faculty",
    student: "Student",
    industry: "Industry",
    admin: "Admin",
  };

  return labels[role] || role;
}

function getRoleStyle(role) {
  const styles = {
    citizen: "bg-emerald-50 text-emerald-700 border-emerald-100",
    government: "bg-blue-50 text-blue-700 border-blue-100",
    university: "bg-purple-50 text-purple-700 border-purple-100",
    faculty: "bg-indigo-50 text-indigo-700 border-indigo-100",
    student: "bg-amber-50 text-amber-700 border-amber-100",
    industry: "bg-orange-50 text-orange-700 border-orange-100",
    admin: "bg-slate-100 text-slate-700 border-slate-200",
  };

  return styles[role] || "bg-slate-100 text-slate-700 border-slate-200";
}

function getStatusStyle(status) {
  const styles = {
    active: "bg-emerald-50 text-emerald-700 border-emerald-100",
    pending: "bg-amber-50 text-amber-700 border-amber-100",
    suspended: "bg-red-50 text-red-700 border-red-100",
  };

  return styles[status] || "bg-slate-100 text-slate-700 border-slate-200";
}

function formatStatus(status) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

function StatCard({ icon: Icon, label, value, description }) {
  return (
    <div className="rounded-2xl border border-[#E6E1D3] bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-[#647067]">{label}</p>
          <p className="mt-2 text-3xl font-bold text-[#1C241E]">{value}</p>
          <p className="mt-1 text-xs text-[#7A847D]">{description}</p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F1E8] text-[#1E4D38]">
          <Icon size={21} />
        </div>
      </div>
    </div>
  );
}

export default function AdminUsers() {
  const [users, setUsers] = useState(INITIAL_USERS);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [openMenu, setOpenMenu] = useState(null);

  const stats = useMemo(() => {
    return {
      total: users.length,
      active: users.filter((user) => user.status === "active").length,
      pending: users.filter((user) => user.status === "pending").length,
      suspended: users.filter((user) => user.status === "suspended").length,
    };
  }, [users]);

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return users.filter((user) => {
      const matchesSearch =
        !query ||
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.organization.toLowerCase().includes(query);

      const matchesRole =
        roleFilter === "all" || user.role === roleFilter;

      const matchesStatus =
        statusFilter === "all" || user.status === statusFilter;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, search, roleFilter, statusFilter]);

  const updateStatus = (id, status) => {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === id ? { ...user, status } : user
      )
    );

    setOpenMenu(null);
  };

  return (
    <div className="min-h-screen bg-[#F8F6EE] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#C85A32]">
              Administration
            </p>

            <h1 className="font-editorial text-3xl font-bold text-[#1C241E] sm:text-4xl">
              User Management
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#647067] sm:text-base">
              Manage registered users, review their roles and monitor account
              status across the Samadhan Setu platform.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-[#E6E1D3] bg-white px-4 py-2 text-sm text-[#55685A] shadow-sm">
            <Users size={17} />
            <span>{stats.total} registered users</span>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            icon={Users}
            label="Total Users"
            value={stats.total}
            description="All registered accounts"
          />

          <StatCard
            icon={UserCheck}
            label="Active Users"
            value={stats.active}
            description="Currently active accounts"
          />

          <StatCard
            icon={ShieldCheck}
            label="Pending"
            value={stats.pending}
            description="Awaiting verification"
          />

          <StatCard
            icon={UserX}
            label="Suspended"
            value={stats.suspended}
            description="Restricted accounts"
          />
        </div>

        {/* Main card */}
        <div className="overflow-hidden rounded-2xl border border-[#E6E1D3] bg-white shadow-sm">
          {/* Filters */}
          <div className="border-b border-[#E6E1D3] p-4 sm:p-5">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#89938C]"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name, email or organization..."
                  className="w-full rounded-xl border border-[#DDD6C5] bg-[#FAF9F5] py-3 pl-11 pr-4 text-sm text-[#1C241E] outline-none transition placeholder:text-[#9AA19B] focus:border-[#1E4D38] focus:ring-2 focus:ring-[#1E4D38]/10"
                />
              </div>

              {/* Role filter */}
              <div className="relative">
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-[#DDD6C5] bg-[#FAF9F5] px-4 py-3 pr-10 text-sm font-medium text-[#35423A] outline-none focus:border-[#1E4D38] sm:w-48"
                >
                  {ROLE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#647067]"
                />
              </div>

              {/* Status filter */}
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-[#DDD6C5] bg-[#FAF9F5] px-4 py-3 pr-10 text-sm font-medium text-[#35423A] outline-none focus:border-[#1E4D38] sm:w-48"
                >
                  {STATUS_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#647067]"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm text-[#6B756E]">
                Showing{" "}
                <span className="font-semibold text-[#1C241E]">
                  {filteredUsers.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-[#1C241E]">
                  {users.length}
                </span>{" "}
                users
              </p>

              {(search || roleFilter !== "all" || statusFilter !== "all") && (
                <button
                  onClick={() => {
                    setSearch("");
                    setRoleFilter("all");
                    setStatusFilter("all");
                  }}
                  className="text-sm font-semibold text-[#1E4D38] hover:text-[#163B2A]"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-[#E6E1D3] bg-[#FAF9F5] text-left">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#748078]">
                    User
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#748078]">
                    Organization
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#748078]">
                    Role
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#748078]">
                    Status
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#748078]">
                    Joined
                  </th>

                  <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-[#748078]">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-[#EEEADF] last:border-b-0 hover:bg-[#FCFBF7]"
                  >
                    {/* User */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8EFEA] text-sm font-bold text-[#1E4D38]">
                          {user.name
                            .split(" ")
                            .map((word) => word[0])
                            .slice(0, 2)
                            .join("")}
                        </div>

                        <div className="min-w-0">
                          <p className="font-semibold text-[#1C241E]">
                            {user.name}
                          </p>

                          <div className="mt-0.5 flex items-center gap-1 text-xs text-[#7A847D]">
                            <Mail size={12} />
                            <span>{user.email}</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Organization */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-[#556159]">
                        <Building2 size={15} className="text-[#8A938D]" />
                        <span>{user.organization}</span>
                      </div>
                    </td>

                    {/* Role */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${getRoleStyle(
                          user.role
                        )}`}
                      >
                        {roleLabel(user.role)}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${getStatusStyle(
                          user.status
                        )}`}
                      >
                        {formatStatus(user.status)}
                      </span>
                    </td>

                    {/* Joined */}
                    <td className="px-6 py-4 text-sm text-[#69746C]">
                      {user.joined}
                    </td>

                    {/* Action */}
                    <td className="relative px-6 py-4 text-right">
                      <button
                        onClick={() =>
                          setOpenMenu(
                            openMenu === user.id ? null : user.id
                          )
                        }
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[#647067] transition hover:bg-[#F4F1E8] hover:text-[#1E4D38]"
                        aria-label={`Actions for ${user.name}`}
                      >
                        <MoreHorizontal size={19} />
                      </button>

                      {openMenu === user.id && (
                        <div className="absolute right-6 top-14 z-20 w-44 rounded-xl border border-[#E6E1D3] bg-white p-1.5 text-left shadow-xl">
                          {user.status !== "active" && (
                            <button
                              onClick={() => updateStatus(user.id, "active")}
                              className="w-full rounded-lg px-3 py-2 text-left text-sm text-[#35423A] hover:bg-[#F4F1E8]"
                            >
                              Activate user
                            </button>
                          )}

                          {user.status !== "suspended" && (
                            <button
                              onClick={() =>
                                updateStatus(user.id, "suspended")
                              }
                              className="w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                            >
                              Suspend user
                            </button>
                          )}

                          {user.status === "pending" && (
                            <button
                              onClick={() => updateStatus(user.id, "active")}
                              className="w-full rounded-lg px-3 py-2 text-left text-sm text-[#1E4D38] hover:bg-[#F4F1E8]"
                            >
                              Verify account
                            </button>
                          )}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="divide-y divide-[#EEEADF] lg:hidden">
            {filteredUsers.map((user) => (
              <div key={user.id} className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8EFEA] text-sm font-bold text-[#1E4D38]">
                      {user.name
                        .split(" ")
                        .map((word) => word[0])
                        .slice(0, 2)
                        .join("")}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate font-semibold text-[#1C241E]">
                        {user.name}
                      </p>

                      <p className="mt-0.5 truncate text-xs text-[#7A847D]">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <div className="relative shrink-0">
                    <button
                      onClick={() =>
                        setOpenMenu(
                          openMenu === user.id ? null : user.id
                        )
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-[#647067] hover:bg-[#F4F1E8]"
                    >
                      <MoreHorizontal size={19} />
                    </button>

                    {openMenu === user.id && (
                      <div className="absolute right-0 top-11 z-20 w-44 rounded-xl border border-[#E6E1D3] bg-white p-1.5 shadow-xl">
                        {user.status !== "active" && (
                          <button
                            onClick={() => updateStatus(user.id, "active")}
                            className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-[#F4F1E8]"
                          >
                            Activate user
                          </button>
                        )}

                        {user.status !== "suspended" && (
                          <button
                            onClick={() =>
                              updateStatus(user.id, "suspended")
                            }
                            className="w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                          >
                            Suspend user
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${getRoleStyle(
                      user.role
                    )}`}
                  >
                    {roleLabel(user.role)}
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${getStatusStyle(
                      user.status
                    )}`}
                  >
                    {formatStatus(user.status)}
                  </span>
                </div>

                <div className="mt-4 space-y-2 text-sm text-[#68736B]">
                  <div className="flex items-center gap-2">
                    <Building2 size={15} />
                    <span>{user.organization}</span>
                  </div>

                  <div className="text-xs text-[#8A938D]">
                    Joined {user.joined}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredUsers.length === 0 && (
            <div className="px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F4F1E8] text-[#1E4D38]">
                <Users size={24} />
              </div>

              <h3 className="mt-4 font-editorial text-xl font-bold text-[#1C241E]">
                No users found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm text-[#718078]">
                Try changing your search query or clearing one of the filters
                to see more users.
              </p>
            </div>
          )}
        </div>

        {/* Footer note */}
        <div className="mt-5 flex flex-col gap-2 text-xs text-[#7A847D] sm:flex-row sm:items-center sm:justify-between">
          <p>
            User management actions are currently handled in the frontend
            demo.
          </p>

          <p>Samadhan Setu • Administration Panel</p>
        </div>
      </div>
    </div>
  );
}