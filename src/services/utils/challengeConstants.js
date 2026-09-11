export const CHALLENGE_CATEGORIES = [
  { value: "education", label: "Education" },
  { value: "healthcare", label: "Healthcare" },
  { value: "agriculture", label: "Agriculture" },
  { value: "water_management", label: "Water Management" },
  { value: "sanitation", label: "Sanitation" },
  { value: "environment", label: "Environment" },
  { value: "rural_livelihood", label: "Rural Livelihood" },
  { value: "accessibility", label: "Accessibility" },
  { value: "urban_infrastructure", label: "Urban Infrastructure" },
  { value: "public_service", label: "Public Service" },
  { value: "other", label: "Other" },
];

export function statusBadgeClasses(status) {
  const map = {
    PENDING: "bg-slate-100 text-slate-700",
    VERIFIED: "bg-emerald-100 text-emerald-800",
    REJECTED: "bg-rose-100 text-rose-700",
    ASSIGNED: "bg-indigo-100 text-indigo-800",
    ACCEPTED: "bg-sky-100 text-sky-800",
    IN_PROGRESS: "bg-amber-100 text-amber-800",
    DEPLOYED: "bg-purple-100 text-purple-800",
    COMPLETED: "bg-teal-100 text-teal-800",
  };
  return map[status] || "bg-slate-100 text-slate-700";
}

export function categoryLabel(value) {
  return CHALLENGE_CATEGORIES.find((c) => c.value === value)?.label || value;
}
