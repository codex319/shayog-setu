import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  CalendarDays,
  CheckCircle2,
  Clock,
  AlertCircle,
  Tag,
  ShieldCheck,
  Image as ImageIcon,
} from "lucide-react";

import { getOneChallenge } from "../../api/challengeApi";

export default function ChallengeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [challenge, setChallenge] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch single challenge from backend
  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getOneChallenge(id);

        console.log("Challenge details from backend:", response);

        setChallenge(response.singleList);
      } catch (error) {
        console.error("Failed to fetch challenge:", error);

        setError(
          error.response?.data?.message ||
            "Failed to load challenge details."
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchChallenge();
    }
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-4xl items-center justify-center px-4 py-12">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#E5E0D2] border-t-[#1E4D38]" />

          <p className="mt-4 text-sm font-semibold text-[#64748B]">
            Loading challenge...
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !challenge) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-4xl items-center justify-center px-4 py-12">
        <div className="w-full rounded-3xl border border-[#E5E0D2] bg-white p-10 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F4F1E8]">
            <AlertCircle className="h-6 w-6 text-[#C85A32]" />
          </div>

          <h1 className="mt-5 font-editorial text-2xl font-bold text-[#1C241E]">
            Challenge not found
          </h1>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#64748B]">
            {error ||
              "The challenge you are looking for may have been removed or the link may be incorrect."}
          </p>

          <Link
            to="/citizen/challenges"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1E4D38] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#163B2A]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to challenges
          </Link>
        </div>
      </div>
    );
  }

  const status = challenge.status || "SUBMITTED";

  const location =
    challenge.location || challenge.district || "Location not available";

  const reportedDate = challenge.createdAt
    ? new Date(challenge.createdAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Date not available";

  const updatedDate = challenge.updatedAt
    ? new Date(challenge.updatedAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  // Status style based on backend enum
  const getStatusStyle = () => {
    switch (status) {
      case "VERIFIED":
      case "DEPLOYED":
      case "COMPLETED":
        return "bg-[#ECFDF5] text-[#047857] border-[#A7F3D0]";

      case "UNDER_VERIFICATION":
      case "ASSIGNED":
      case "IN_PROGRESS":
      case "PILOT":
        return "bg-[#FFFBEB] text-[#B45309] border-[#FDE68A]";

      case "REJECTED":
        return "bg-[#FEF2F2] text-[#B91C1C] border-[#FECACA]";

      case "SUBMITTED":
      default:
        return "bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]";
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case "VERIFIED":
      case "DEPLOYED":
      case "COMPLETED":
        return <CheckCircle2 className="h-4 w-4" />;

      case "UNDER_VERIFICATION":
      case "ASSIGNED":
      case "IN_PROGRESS":
      case "PILOT":
        return <Clock className="h-4 w-4" />;

      case "REJECTED":
        return <AlertCircle className="h-4 w-4" />;

      case "SUBMITTED":
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "UNDER_VERIFICATION":
        return "Under Verification";

      case "IN_PROGRESS":
        return "In Progress";

      default:
        return status.replaceAll("_", " ");
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* ================= BACK ================= */}
      <button
        onClick={() => navigate("/citizen/challenges")}
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#64748B] transition hover:text-[#1E4D38]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to challenges
      </button>

      {/* ================= MAIN ================= */}
      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-6">
          {/* ================= CHALLENGE CONTENT ================= */}
          <div className="overflow-hidden rounded-3xl border border-[#E5E0D2] bg-white shadow-sm">
            {/* ================= IMAGE ================= */}
            {challenge.media?.length > 0 ? (
              <div className="h-64 overflow-hidden bg-[#F4F1E8] sm:h-80 lg:h-[390px]">
                <img
                  src={challenge.media[0].url}
                  alt={challenge.title || "Community challenge"}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              <div className="flex h-56 items-center justify-center bg-[#F4F1E8] sm:h-72">
                <div className="text-center">
                  <ImageIcon className="mx-auto h-12 w-12 text-[#B8B1A1]" />

                  <p className="mt-3 text-sm font-semibold text-[#94A3B8]">
                    No image available
                  </p>
                </div>
              </div>
            )}

            <div className="p-6 sm:p-8">
              {/* ================= STATUS + CATEGORY ================= */}
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold ${getStatusStyle()}`}
                >
                  {getStatusIcon()}
                  {getStatusText()}
                </span>

                {challenge.category && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E0D2] bg-[#F8F6EE] px-3 py-1.5 text-xs font-semibold text-[#64748B]">
                    <Tag className="h-3.5 w-3.5" />
                    {challenge.category}
                  </span>
                )}
              </div>

              {/* ================= TITLE ================= */}
              <h1 className="mt-5 font-editorial text-3xl font-bold leading-tight text-[#1C241E] sm:text-4xl">
                {challenge.title || "Untitled Challenge"}
              </h1>

              {/* ================= DESCRIPTION ================= */}
              <p className="mt-5 whitespace-pre-line text-sm leading-7 text-[#59665D] sm:text-base">
                {challenge.description ||
                  "No description available for this challenge."}
              </p>

              {/* ================= META ================= */}
              <div className="mt-7 grid gap-3 border-t border-[#F0EBE0] pt-6 sm:grid-cols-2">
                {/* District */}
                <div className="flex items-start gap-3 rounded-xl bg-[#FAF8F2] p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFF4E5] text-[#B45309]">
                    <MapPin className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                      District
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#1C241E]">
                      {challenge.district || "Not available"}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 rounded-xl bg-[#FAF8F2] p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E8EFEA] text-[#1E4D38]">
                    <MapPin className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#1C241E]">
                      {location}
                    </p>
                  </div>
                </div>

                {/* Reported Date */}
                <div className="flex items-start gap-3 rounded-xl bg-[#FAF8F2] p-4 sm:col-span-2">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F0ECF8] text-[#6D4CA5]">
                    <CalendarDays className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                      Reported
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#1C241E]">
                      {reportedDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= VERIFICATION INFORMATION ================= */}
          {challenge.verification && (
            <div className="rounded-3xl border border-[#E5E0D2] bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8EFEA] text-[#1E4D38]">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
                    Government verification
                  </p>

                  <h2 className="mt-1 font-editorial text-2xl font-bold text-[#1C241E]">
                    Verification information
                  </h2>
                </div>
              </div>

              {challenge.verification.verifiedAt && (
                <div className="mt-6 rounded-xl bg-[#FAF8F2] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                    Verified / reviewed on
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#1C241E]">
                    {new Date(
                      challenge.verification.verifiedAt
                    ).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              )}

              {challenge.verification.remarks && (
                <div className="mt-3 rounded-xl bg-[#FAF8F2] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                    Remarks
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#59665D]">
                    {challenge.verification.remarks}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div className="space-y-5">
          {/* ================= STATUS CARD ================= */}
          <div className="rounded-3xl border border-[#E5E0D2] bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
              Challenge status
            </p>

            <div className="mt-4 flex items-center gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                  status === "VERIFIED" ||
                  status === "DEPLOYED" ||
                  status === "COMPLETED"
                    ? "bg-[#ECFDF5] text-[#047857]"
                    : status === "REJECTED"
                    ? "bg-[#FEF2F2] text-[#B91C1C]"
                    : "bg-[#FFFBEB] text-[#B45309]"
                }`}
              >
                {getStatusIcon()}
              </div>

              <div>
                <p className="font-editorial text-xl font-bold text-[#1C241E]">
                  {getStatusText()}
                </p>

                <p className="mt-0.5 text-xs text-[#64748B]">
                  Current challenge stage
                </p>
              </div>
            </div>

            <div className="mt-5 border-t border-[#F0EBE0] pt-5">
              <div className="flex items-center gap-2 text-xs text-[#64748B]">
                <ShieldCheck className="h-4 w-4 text-[#1E4D38]" />
                Community challenge tracking enabled
              </div>
            </div>
          </div>

          {/* ================= DETAILS CARD ================= */}
          <div className="rounded-3xl border border-[#E5E0D2] bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
              Challenge details
            </p>

            <div className="mt-5 space-y-4">
              {/* Category */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                  Category
                </p>

                <p className="mt-1 text-sm font-semibold text-[#1C241E]">
                  {challenge.category || "Not available"}
                </p>
              </div>

              {/* District */}
              <div className="border-t border-[#F0EBE0] pt-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                  District
                </p>

                <p className="mt-1 text-sm font-semibold text-[#1C241E]">
                  {challenge.district || "Not available"}
                </p>
              </div>

              {/* Location */}
              <div className="border-t border-[#F0EBE0] pt-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                  Location
                </p>

                <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-[#1C241E]">
                  <MapPin className="h-3.5 w-3.5 text-[#B45309]" />
                  {location}
                </p>
              </div>

              {/* Created */}
              <div className="border-t border-[#F0EBE0] pt-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                  Created
                </p>

                <p className="mt-1 text-sm font-semibold text-[#1C241E]">
                  {reportedDate}
                </p>
              </div>

              {/* Updated */}
              {updatedDate && (
                <div className="border-t border-[#F0EBE0] pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                    Last updated
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#1C241E]">
                    {updatedDate}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ================= ACTION CARD ================= */}
          <div className="rounded-3xl bg-[#1E4D38] p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-wider text-[#E9B44C]">
              Community challenges
            </p>

            <h3 className="mt-2 font-editorial text-2xl font-bold">
              Explore more challenges
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/70">
              Discover other challenges reported by communities across
              Jharkhand.
            </p>

            <button
              onClick={() => navigate("/citizen/challenges")}
              className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-white"
            >
              View all challenges

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}