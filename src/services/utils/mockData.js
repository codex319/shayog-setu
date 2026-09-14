export const categories = [
  "HealthTech",
  "Water & Sanitation",
  "Agriculture",
  "Education",
  "Environment",
  "BioTech",
  "MedTech",
  "Urban Infrastructure",
];

export const severities = ["Low", "Medium", "High", "Critical"];

export const districts = [
  "Ranchi",
  "Jamshedpur",
  "Dhanbad",
  "Bokaro",
  "Deoghar",
  "Hazaribagh",
  "Palamu",
  "Giridih",
];

export const mockChallenges = [
  {
    id: "CH-1042",
    title: "Contaminated groundwater near Namkum handpumps",
    description:
      "Residents of Namkum block report discoloured, foul-smelling water from community handpumps, suspected industrial runoff contamination affecting roughly 400 households.",
    category: "Water & Sanitation",
    district: "Ranchi",
    severity: "Critical",
    status: "Verified",
    submittedBy: "Anaya Kumari",
    date: "2026-08-12",
    duplicateFlag: false,
  },
  {
    id: "CH-1041",
    title: "Delayed TB diagnosis in rural primary health centres",
    description:
      "Sputum sample turnaround time for TB testing exceeds 12 days in three block-level PHCs, delaying treatment initiation for suspected patients.",
    category: "HealthTech",
    district: "Palamu",
    severity: "High",
    status: "Under Review",
    submittedBy: "Anaya Kumari",
    date: "2026-08-20",
    duplicateFlag: true,
  },
  {
    id: "CH-1040",
    title: "Low-cost cold chain for vaccine storage in tribal blocks",
    description:
      "Sub-centres in remote tribal blocks lack reliable cold storage, causing vaccine spoilage during power outages exceeding 6 hours.",
    category: "BioTech",
    district: "Giridih",
    severity: "High",
    status: "In Progress",
    submittedBy: "Vikas Oraon",
    date: "2026-08-02",
    duplicateFlag: false,
  },
  {
    id: "CH-1039",
    title: "Crop advisory gap for millet farmers post-monsoon",
    description:
      "Smallholder millet farmers lack timely pest and blight advisories, resulting in an estimated 18% yield loss last season.",
    category: "Agriculture",
    district: "Hazaribagh",
    severity: "Medium",
    status: "Submitted",
    submittedBy: "Anaya Kumari",
    date: "2026-08-28",
    duplicateFlag: false,
  },
  {
    id: "CH-1038",
    title: "Overcrowded classrooms in Bokaro government schools",
    description:
      "Average student-teacher ratio of 65:1 recorded in 4 government middle schools, well above the recommended benchmark.",
    category: "Education",
    district: "Bokaro",
    severity: "Medium",
    status: "Verified",
    submittedBy: "Sunita Devi",
    date: "2026-07-30",
    duplicateFlag: false,
  },
  {
    id: "CH-1037",
    title: "Illegal dumping near Subarnarekha riverbank",
    description:
      "Unregulated solid waste dumping observed along a 2km stretch, threatening downstream water quality and aquatic life.",
    category: "Environment",
    district: "Jamshedpur",
    severity: "High",
    status: "Completed",
    submittedBy: "Ravi Mahato",
    date: "2026-07-14",
    duplicateFlag: false,
  },
  {
    id: "CH-1036",
    title: "Portable diagnostic kits for anaemia screening",
    description:
      "Anganwadi workers need field-deployable, low-power kits to screen anaemia in pregnant women without lab referral delays.",
    category: "MedTech",
    district: "Deoghar",
    severity: "Critical",
    status: "In Progress",
    submittedBy: "Anaya Kumari",
    date: "2026-06-25",
    duplicateFlag: false,
  },
];

export const mockAiInsights = {
  suggestedCategory: "HealthTech",
  suggestedSeverity: "High",
  keywords: ["diagnosis delay", "rural PHC", "sample turnaround", "TB screening"],
  recommendedUniversities: [
    "BIT Mesra — Dept. of Biomedical Engineering",
    "Central University of Jharkhand — School of Life Sciences",
    "IIT (ISM) Dhanbad — MedTech Innovation Cell",
  ],
  possibleDuplicates: ["CH-0998 — Diagnostic delays in Garhwa PHCs", "CH-1011 — TB sample logistics, Latehar"],
};

export const mockUniversityAssignments = [
  {
    id: "PRJ-021",
    challengeId: "CH-1040",
    title: "Low-cost cold chain for vaccine storage in tribal blocks",
    status: "Active",
    team: "Team Cryonova (5 students)",
    deadline: "2026-10-15",
  },
  {
    id: "PRJ-019",
    challengeId: "CH-1036",
    title: "Portable diagnostic kits for anaemia screening",
    status: "Accepted",
    team: "Team HemoSense (4 students)",
    deadline: "2026-11-02",
  },
  {
    id: "PRJ-014",
    challengeId: "CH-0998",
    title: "Diagnosis delays in Garhwa PHCs",
    status: "Proposed",
    team: "Unassigned",
    deadline: "2026-09-20",
  },
];

export const mockIndustryOpportunities = mockChallenges.filter((c) =>
  ["In Progress", "Verified"].includes(c.status)
);

export const mockUsers = [
  { id: "USR-001", name: "Anaya Kumari", email: "anaya.k@example.com", role: "citizen" },
  { id: "USR-002", name: "Officer R. Prasad", email: "r.prasad@jharkhand.gov.in", role: "government" },
  { id: "USR-003", name: "Dr. Meera Singh", email: "meera.singh@bitmesra.ac.in", role: "faculty" },
  { id: "USR-004", name: "Rohan Verma", email: "rohan.v@cuj.ac.in", role: "student" },
  { id: "USR-005", name: "Priya Mehta", email: "priya@medtechstart.in", role: "industry" },
  { id: "USR-006", name: "System Admin", email: "admin@samadhansetu.in", role: "admin" },
  { id: "USR-007", name: "Sunita Devi", email: "sunita.d@example.com", role: "citizen" },
  { id: "USR-008", name: "Vikas Oraon", email: "vikas.o@example.com", role: "citizen" },
];

export function statusBadgeClasses(status) {
  const map = {
    Submitted: "bg-slate-100 text-slate-700",
    "Under Review": "bg-amber-100 text-amber-800",
    Verified: "bg-emerald-100 text-emerald-800",
    "In Progress": "bg-indigo-100 text-indigo-800",
    Completed: "bg-purple-100 text-purple-800",
    Rejected: "bg-rose-100 text-rose-700",
  };
  return map[status] || "bg-slate-100 text-slate-700";
}

export function severityBadgeClasses(severity) {
  const map = {
    Low: "bg-slate-100 text-slate-600",
    Medium: "bg-amber-100 text-amber-800",
    High: "bg-orange-100 text-orange-800",
    Critical: "bg-rose-100 text-rose-700",
  };
  return map[severity] || "bg-slate-100 text-slate-600";
}
