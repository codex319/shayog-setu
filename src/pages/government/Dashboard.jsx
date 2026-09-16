import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  MapPin,
  Download,
  ArrowRight,
  Building2,
  CheckCircle2,
  Loader2,
  X,
} from "lucide-react";

import {
  getGovernmentDashboardStats,
  getGovernmentChallenges,
  getAllUniversities,
  assignChallenge,
} from "../../api/governmentApi";

export default function GovernmentDashboard() {
  const navigate = useNavigate();

  // ================= DASHBOARD STATS =================

  const [dashboardStats, setDashboardStats] = useState({
    totalChallenges: 0,
    pendingVerification: 0,
    verified: 0,
    rejected: 0,
    assigned: 0,
  });

  const [loadingStats, setLoadingStats] = useState(true);
  const [statsError, setStatsError] = useState("");

  // ================= CHALLENGES =================

  const [pendingChallenges, setPendingChallenges] = useState([]);
  const [underVerificationChallenges, setUnderVerificationChallenges] =
    useState([]);
  const [verifiedChallenges, setVerifiedChallenges] = useState([]);
  const [assignedChallenges, setAssignedChallenges] = useState([]);

  const [loadingChallenges, setLoadingChallenges] = useState(true);
  const [challengeError, setChallengeError] = useState("");

  // ================= UNIVERSITY ASSIGNMENT =================

  const [universities, setUniversities] = useState([]);
  const [loadingUniversities, setLoadingUniversities] = useState(false);

  const [assigningChallengeId, setAssigningChallengeId] = useState(null);
  const [selectedUniversity, setSelectedUniversity] = useState("");

  const [assignmentError, setAssignmentError] = useState("");
  const [assignmentSuccess, setAssignmentSuccess] = useState("");

  // ================= FETCH DASHBOARD STATS =================

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        setLoadingStats(true);
        setStatsError("");

        const data = await getGovernmentDashboardStats();

        setDashboardStats(data.stats);
      } catch (error) {
        console.error(
          "Failed to load government dashboard statistics:",
          error
        );

        setStatsError("Unable to load live dashboard statistics.");
      } finally {
        setLoadingStats(false);
      }
    };

    fetchDashboardStats();
  }, []);

  // ================= FETCH CHALLENGES =================

  const fetchGovernmentChallenges = async () => {
    try {
      setLoadingChallenges(true);
      setChallengeError("");

      const pendingResponse = await getGovernmentChallenges({
        status: "SUBMITTED",
      });

      const verificationResponse = await getGovernmentChallenges({
        status: "UNDER_VERIFICATION",
      });

      const verifiedResponse = await getGovernmentChallenges({
        status: "VERIFIED",
      });

      const assignedResponse = await getGovernmentChallenges({
        status: "ASSIGNED",
      });

      setPendingChallenges(pendingResponse.list || []);

      setUnderVerificationChallenges(
        verificationResponse.list || []
      );

      setVerifiedChallenges(
        verifiedResponse.list || []
      );

      setAssignedChallenges(
        assignedResponse.list || []
      );
    } catch (error) {
      console.error(
        "Failed to load government challenges:",
        error
      );

      setChallengeError(
        "Unable to load government challenges."
      );
    } finally {
      setLoadingChallenges(false);
    }
  };

  useEffect(() => {
    fetchGovernmentChallenges();
  }, []);

  // ================= LOAD UNIVERSITIES =================

  const loadUniversities = async () => {
    try {
      setLoadingUniversities(true);
      setAssignmentError("");

      const response = await getAllUniversities();

      setUniversities(response.list || []);
    } catch (error) {
      console.error(
        "Failed to load universities:",
        error
      );

      setAssignmentError(
        "Unable to load universities."
      );
    } finally {
      setLoadingUniversities(false);
    }
  };

  // ================= OPEN ASSIGN MODAL =================

  const handleOpenAssign = async (challenge) => {
    setAssignmentError("");
    setAssignmentSuccess("");
    setSelectedUniversity("");

    setAssigningChallengeId(challenge._id);

    if (universities.length === 0) {
      await loadUniversities();
    }
  };

  // ================= CLOSE ASSIGN MODAL =================

  const handleCloseAssign = () => {
    setAssigningChallengeId(null);
    setSelectedUniversity("");
    setAssignmentError("");
  };

  // ================= ASSIGN UNIVERSITY =================

  const handleAssignUniversity = async () => {
    if (!selectedUniversity) {
      setAssignmentError("Please select a university.");
      return;
    }

    try {
      setAssignmentError("");
      setAssignmentSuccess("");

      await assignChallenge(
        assigningChallengeId,
        selectedUniversity
      );

      setAssignmentSuccess(
        "Challenge assigned to university successfully."
      );

      setTimeout(async () => {
        setAssigningChallengeId(null);
        setSelectedUniversity("");
        setAssignmentSuccess("");

        await fetchGovernmentChallenges();

        try {
          const statsResponse =
            await getGovernmentDashboardStats();

          setDashboardStats(
            statsResponse.stats
          );
        } catch (error) {
          console.error(
            "Failed to refresh dashboard stats:",
            error
          );
        }
      }, 1000);
    } catch (error) {
      console.error(
        "Failed to assign challenge:",
        error
      );

      setAssignmentError(
        error?.response?.data?.message ||
          "Failed to assign challenge. Please try again."
      );
    }
  };

  // ================= METRICS =================

  const metrics = [
    {
      label: "Problems Raised",
      count: dashboardStats.totalChallenges,
      color: "#1C241E",
    },
    {
      label: "Pending Verification",
      count: dashboardStats.pendingVerification,
      color: "#92400E",
    },
    {
      label: "Verified",
      count: dashboardStats.verified,
      color: "#166534",
    },
    {
      label: "Rejected",
      count: dashboardStats.rejected,
      color: "#B91C1C",
    },
    {
      label: "Assigned",
      count: dashboardStats.assigned,
      color: "#1E40AF",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">

      {/* ================= HEADER ================= */}

      <div className="bg-white rounded-3xl border border-[#E5E0D2] p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">

        <div>

          <div className="flex items-center gap-2 flex-wrap">

            <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-lg bg-[#EBF3EE] text-[#1E4D38] border border-[#C5DACD] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Government Verification Portal
            </span>

            <span className="text-xs text-[#64748B]">
              Jharkhand
            </span>

          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#1C241E] mt-2 font-editorial">
            Government of Jharkhand
          </h1>

          <p className="text-sm text-[#55685A] font-semibold mt-1">
            Verify community challenges and monitor their progress.
          </p>

        </div>

        <button
          onClick={() =>
            alert("Export feature will be connected later.")
          }
          className="px-3 py-2 rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] text-xs font-bold text-[#475569] hover:bg-[#F2ECE1] flex items-center gap-1.5 cursor-pointer self-start"
        >
          <Download className="w-3.5 h-3.5" />
          Export
        </button>

      </div>

      {/* ================= LIVE STATUS OVERVIEW ================= */}

      <div className="bg-white rounded-3xl border border-[#E5E0D2] p-5 shadow-xs">

        <div className="flex items-center justify-between mb-4">

          <div>
            <h2 className="text-sm font-bold text-[#1C241E]">
              Challenge Overview
            </h2>

            <p className="text-[11px] text-[#64748B] mt-0.5">
              Live data from the backend
            </p>
          </div>

          <span className="text-[10px] font-bold text-[#1E4D38] bg-[#EBF3EE] border border-[#C5DACD] px-2.5 py-1 rounded-lg">
            LIVE
          </span>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">

          {metrics.map((metric) => (

            <div
              key={metric.label}
              className="bg-[#FAF8F2] border border-[#EBE6DA] rounded-2xl px-3 py-4 text-center"
            >

              <div
                className="text-2xl sm:text-3xl font-bold font-editorial"
                style={{ color: metric.color }}
              >
                {loadingStats ? "..." : metric.count}
              </div>

              <p className="text-xs font-bold text-[#1C241E] mt-1 leading-snug">
                {metric.label}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* ================= STATS ERROR ================= */}

      {statsError && (
        <div className="bg-rose-50 border border-rose-200 text-rose-700 rounded-xl px-4 py-3 text-xs font-semibold">
          {statsError}
        </div>
      )}

      {/* ================= CHALLENGE ERROR ================= */}

      {challengeError && (
        <div className="bg-rose-50 border border-rose-200 text-rose-700 rounded-xl px-4 py-3 text-xs font-semibold">
          {challengeError}
        </div>
      )}

      {/* ================= ASSIGNMENT ERROR ================= */}

      {assignmentError && !assigningChallengeId && (
        <div className="bg-rose-50 border border-rose-200 text-rose-700 rounded-xl px-4 py-3 text-xs font-semibold">
          {assignmentError}
        </div>
      )}

      {/* ================= VERIFICATION QUEUE ================= */}

      <ChallengeSection
        title="Verification Queue"
        description="Community challenges waiting for government verification."
        badge={
          loadingChallenges
            ? "Loading..."
            : `${pendingChallenges.length} Pending`
        }
        badgeClass="text-amber-800 bg-amber-50 border-amber-200"
        challenges={pendingChallenges}
        loading={loadingChallenges}
        emptyTitle="No pending challenges"
        emptyDescription="All submitted challenges have been processed."
        showReview={true}
        navigate={navigate}
      />

      {/* ================= UNDER VERIFICATION ================= */}

      <ChallengeSection
        title="Under Verification"
        description="Challenges currently being reviewed by government officers."
        badge={
          loadingChallenges
            ? "Loading..."
            : `${underVerificationChallenges.length} Under Review`
        }
        badgeClass="text-blue-800 bg-blue-50 border-blue-200"
        challenges={underVerificationChallenges}
        loading={loadingChallenges}
        emptyTitle="No challenges under verification"
        emptyDescription="No challenge is currently being reviewed."
        showReview={true}
        navigate={navigate}
      />

      {/* ================= VERIFIED ================= */}

      <ChallengeSection
        title="Verified Challenges"
        description="Community challenges successfully verified by government."
        badge={
          loadingChallenges
            ? "Loading..."
            : `${verifiedChallenges.length} Verified`
        }
        badgeClass="text-green-800 bg-green-50 border-green-200"
        challenges={verifiedChallenges}
        loading={loadingChallenges}
        emptyTitle="No verified challenges"
        emptyDescription="Verified challenges will appear here."
        showReview={false}
        showAssign={true}
        navigate={navigate}
        onAssign={handleOpenAssign}
      />

      {/* ================= ASSIGNED ================= */}

      <ChallengeSection
        title="Assigned Challenges"
        description="Challenges assigned to universities for solution development."
        badge={
          loadingChallenges
            ? "Loading..."
            : `${assignedChallenges.length} Assigned`
        }
        badgeClass="text-blue-800 bg-blue-50 border-blue-200"
        challenges={assignedChallenges}
        loading={loadingChallenges}
        emptyTitle="No assigned challenges"
        emptyDescription="Verified challenges assigned to universities will appear here."
        showReview={false}
        showAssign={false}
        showDetails={true}
        navigate={navigate}
      />

      {/* ================= ASSIGN UNIVERSITY MODAL ================= */}

      {assigningChallengeId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">

          <div className="w-full max-w-md bg-white rounded-3xl border border-[#E5E0D2] shadow-2xl p-6">

            {/* Modal Header */}

            <div className="flex items-start justify-between gap-4 mb-6">

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-xl bg-[#EBF3EE] flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#1E4D38]" />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-[#1C241E]">
                    Assign University
                  </h2>

                  <p className="text-xs text-[#64748B] mt-1">
                    Select a university for this verified challenge.
                  </p>
                </div>

              </div>

              <button
                type="button"
                onClick={handleCloseAssign}
                className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#F2ECE1] text-[#64748B]"
              >
                <X className="w-4 h-4" />
              </button>

            </div>

            {/* Error */}

            {assignmentError && (
              <div className="mb-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl px-4 py-3 text-xs font-semibold">
                {assignmentError}
              </div>
            )}

            {/* Success */}

            {assignmentSuccess && (
              <div className="mb-4 bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                {assignmentSuccess}
              </div>
            )}

            {/* University Select */}

            <div>

              <label
                htmlFor="university"
                className="block text-sm font-semibold text-[#1C241E] mb-2"
              >
                Select University
              </label>

              {loadingUniversities ? (

                <div className="w-full rounded-xl border border-[#E5E0D2] bg-[#FCFBF7] px-4 py-3 flex items-center gap-2 text-sm text-[#64748B]">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Loading universities...
                </div>

              ) : (

                <select
                  id="university"
                  value={selectedUniversity}
                  onChange={(e) =>
                    setSelectedUniversity(e.target.value)
                  }
                  disabled={!!assignmentSuccess}
                  className="w-full rounded-xl border border-[#E5E0D2] bg-[#FCFBF7] px-4 py-3 text-sm text-[#1C241E] outline-none focus:border-[#1E4D38] focus:ring-2 focus:ring-[#EBF3EE]"
                >

                  <option value="">
                    -- Select University --
                  </option>

                  {universities.map((university) => (

                    <option
                      key={university._id}
                      value={university._id}
                    >
                      {university.name} ({university.code})
                    </option>

                  ))}

                </select>

              )}

            </div>

            {/* Buttons */}

            <div className="flex justify-end gap-3 mt-6">

              <button
                type="button"
                onClick={handleCloseAssign}
                disabled={!!assignmentSuccess}
                className="px-4 py-2.5 rounded-xl border border-[#E5E0D2] bg-[#FAF8F2] text-sm font-semibold text-[#475569] hover:bg-[#F2ECE1]"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleAssignUniversity}
                disabled={
                  !selectedUniversity ||
                  loadingUniversities ||
                  !!assignmentSuccess
                }
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 ${
                  !selectedUniversity ||
                  loadingUniversities ||
                  !!assignmentSuccess
                    ? "bg-[#CBD5D1] text-[#64748B] cursor-not-allowed"
                    : "bg-[#1E4D38] text-white hover:bg-[#163B2A]"
                }`}
              >

                {assignmentSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Assigned
                  </>
                ) : (
                  <>
                    <Building2 className="w-4 h-4" />
                    Assign
                  </>
                )}

              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}


/* =========================================================
   CHALLENGE SECTION
========================================================= */

function ChallengeSection({
  title,
  description,
  badge,
  badgeClass,
  challenges,
  loading,
  emptyTitle,
  emptyDescription,
  showReview,
  showAssign,
  showDetails,
  navigate,
  onAssign,
}) {
  return (
    <div className="bg-white rounded-3xl border border-[#E5E0D2] p-5 shadow-xs">

      {/* HEADER */}

      <div className="flex items-center justify-between gap-3 mb-5">

        <div>

          <h2 className="text-base font-bold text-[#1C241E] font-editorial">
            {title}
          </h2>

          <p className="text-xs text-[#64748B] mt-1">
            {description}
          </p>

        </div>

        <span
          className={`text-xs font-bold px-2.5 py-1 rounded-lg border whitespace-nowrap ${badgeClass}`}
        >
          {badge}
        </span>

      </div>

      {/* LOADING */}

      {loading ? (

        <div className="py-10 text-center text-sm text-[#64748B]">
          Loading challenges...
        </div>

      ) : challenges.length === 0 ? (

        /* EMPTY STATE */

        <div className="py-10 text-center border border-[#ECE7D9] rounded-2xl bg-[#FAF8F2]">

          <div className="text-2xl mb-2 text-[#1E4D38]">
            ✓
          </div>

          <h3 className="text-sm font-bold text-[#1C241E]">
            {emptyTitle}
          </h3>

          <p className="text-xs text-[#64748B] mt-1">
            {emptyDescription}
          </p>

        </div>

      ) : (

        /* ================= CARD GRID ================= */

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">

          {challenges.map((challenge) => (

            <div
              key={challenge._id}
              className="
                w-full
                max-w-[260px]
                mx-auto
                min-h-[300px]
                bg-[#FCFBF7]
                border border-[#E5E0D2]
                rounded-2xl
                p-4
                flex flex-col
                shadow-sm
                hover:shadow-md
                hover:border-[#C5DACD]
                transition-all
              "
            >

              {/* TOP */}

              <div className="flex items-center justify-between gap-2 mb-3">

                <span className="font-mono text-[9px] text-[#94A3B8]">
                  #{challenge._id?.slice(-6)}
                </span>

                <span className="px-2 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200 text-[9px] font-bold">
                  {challenge.status}
                </span>

              </div>

              {/* CATEGORY */}

              <span className="w-fit max-w-full px-2 py-1 rounded-md bg-[#EBF3EE] text-[#1E4D38] text-[9px] font-bold mb-3 truncate">
                {challenge.category}
              </span>

              {/* TITLE */}

              <h3 className="text-sm font-bold text-[#1C241E] font-editorial leading-snug line-clamp-2">
                {challenge.title}
              </h3>

              {/* DESCRIPTION */}

              <p className="text-[11px] text-[#64748B] mt-2 leading-relaxed line-clamp-3">
                {challenge.description}
              </p>

              {/* LOCATION */}

              <div className="flex items-start gap-1.5 mt-3 text-[10px] text-[#64748B]">

                <MapPin className="w-3.5 h-3.5 text-amber-700 flex-shrink-0 mt-0.5" />

                <span className="line-clamp-2">

                  {challenge.district}

                  {challenge.location
                    ? ` • ${challenge.location}`
                    : ""}

                </span>

              </div>

              {/* ASSIGNED UNIVERSITY */}

              {challenge.assignedUniversity && (
                <div className="flex items-center gap-1.5 mt-3 text-[10px] text-[#1E4D38] font-semibold">

                  <Building2 className="w-3.5 h-3.5 flex-shrink-0" />

                  <span className="truncate">
                    University Assigned
                  </span>

                </div>
              )}

              {/* BOTTOM */}

              <div className="mt-auto pt-3">

                <div className="border-t border-[#EDE8DC] mb-3" />

                <div className="flex items-center justify-between gap-2">

                  <span className="text-[9px] text-[#94A3B8]">
                    {challenge.createdAt
                      ? new Date(
                          challenge.createdAt
                        ).toLocaleDateString()
                      : ""}
                  </span>

                  {/* REVIEW BUTTON */}

                  {showReview && (
                    <button
                      onClick={() =>
                        navigate(
                          `/government/challenges/${challenge._id}/review`
                        )
                      }
                      className="
                        px-3
                        py-1.5
                        rounded-lg
                        bg-[#1E4D38]
                        hover:bg-[#163B2A]
                        text-white
                        text-[10px]
                        font-bold
                        flex
                        items-center
                        gap-1
                        transition-colors
                        cursor-pointer
                      "
                    >
                      Review
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}

                  {/* ASSIGN UNIVERSITY BUTTON */}

                  {showAssign && (
                    <button
                      onClick={() => onAssign(challenge)}
                      className="
                        px-3
                        py-1.5
                        rounded-lg
                        bg-[#1E40AF]
                        hover:bg-[#1E3A8A]
                        text-white
                        text-[10px]
                        font-bold
                        flex
                        items-center
                        gap-1
                        transition-colors
                        cursor-pointer
                      "
                    >
                      <Building2 className="w-3 h-3" />
                      Assign University
                    </button>
                  )}

                  {/* VIEW DETAILS BUTTON */}

                  {showDetails && (
                    <button
                      onClick={() =>
                        navigate(
                          `/government/challenges/${challenge._id}/review`
                        )
                      }
                      className="
                        px-3
                        py-1.5
                        rounded-lg
                        bg-[#1E4D38]
                        hover:bg-[#163B2A]
                        text-white
                        text-[10px]
                        font-bold
                        flex
                        items-center
                        gap-1
                        transition-colors
                        cursor-pointer
                      "
                    >
                      View Details
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}