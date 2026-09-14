
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Loader2,
  MapPin,
  ShieldCheck,
  XCircle,
} from "lucide-react";

import {
  getGovernmentChallengeById,
  startVerification,
  verifyChallenge,
  rejectChallenge,
} from "../../api/governmentApi";

export default function ReviewChallenge() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [challenge, setChallenge] = useState(null);
  const [decision, setDecision] = useState("");
  const [remarks, setRemarks] = useState("");

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // --------------------------------------------------
  // Load challenge
  // --------------------------------------------------
  const loadChallenge = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getGovernmentChallengeById(id);

      const challengeData = response?.challenge || response?.data;

      if (!challengeData) {
        setError("Challenge not found.");
        return;
      }

      setChallenge(challengeData);

      // Automatically start verification
      if (challengeData.status === "SUBMITTED") {
        try {
          await startVerification(id);

          const updatedResponse = await getGovernmentChallengeById(id);
          const updatedChallenge =
            updatedResponse?.challenge || updatedResponse?.data;

          if (updatedChallenge) {
            setChallenge(updatedChallenge);
          }
        } catch (verificationError) {
          console.error(
            "Failed to start verification:",
            verificationError
          );

          setError(
            verificationError?.response?.data?.message ||
              "Unable to start verification."
          );
        }
      }
    } catch (err) {
      console.error("Failed to load challenge:", err);

      setError(
        err?.response?.data?.message ||
          "Unable to load challenge."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadChallenge();
  }, [id]);

  // --------------------------------------------------
  // Decision selection
  // --------------------------------------------------
  const handleDecisionChange = (value) => {
    setDecision(value);
    setError("");
    setSuccessMessage("");
  };

  // --------------------------------------------------
  // Submit decision
  // --------------------------------------------------
  const handleSubmitDecision = async () => {
    if (!decision) {
      setError("Please select Verify or Reject.");
      return;
    }

    try {
      setSubmitting(true);
      setError("");
      setSuccessMessage("");

      if (decision === "VERIFY") {
        await verifyChallenge(id, remarks);
      } else if (decision === "REJECT") {
        await rejectChallenge(id, remarks);
      }

      setSuccessMessage(
        decision === "VERIFY"
          ? "Challenge verified successfully."
          : "Challenge rejected successfully."
      );

      setTimeout(() => {
        navigate("/government/dashboard");
      }, 1500);
    } catch (err) {
      console.error("Decision submission failed:", err);

      setError(
        err?.response?.data?.message ||
          "Failed to submit the decision. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // --------------------------------------------------
  // Loading screen
  // --------------------------------------------------
  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF8F2] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-[#1E4D38] mx-auto mb-3" />

          <p className="text-sm text-[#64748B]">
            Loading challenge...
          </p>
        </div>
      </div>
    );
  }

  // --------------------------------------------------
  // Challenge not found
  // --------------------------------------------------
  if (!challenge) {
    return (
      <div className="min-h-screen bg-[#FAF8F2] flex items-center justify-center px-6">
        <div className="text-center">
          <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />

          <h2 className="text-xl font-semibold text-[#1C241E]">
            Challenge not found
          </h2>

          <p className="text-sm text-[#64748B] mt-2">
            The requested challenge could not be found.
          </p>

          <button
            onClick={() => navigate("/government/dashboard")}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1E4D38] px-5 py-3 text-sm font-medium text-white hover:bg-[#163b2b]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F2] text-[#1C241E]">
      {/* --------------------------------------------------
          TOP BAR
      -------------------------------------------------- */}
      <div className="border-b border-[#E5E0D2] bg-[#FCFBF7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <button
            onClick={() => navigate("/government/dashboard")}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1E4D38] hover:text-[#163b2b]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>
        </div>
      </div>

      {/* --------------------------------------------------
          HEADER
      -------------------------------------------------- */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#EBF3EE] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-[#1E4D38]" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#64748B]">
              Government Verification Portal
            </p>

            <h1 className="text-2xl sm:text-3xl font-semibold mt-1">
              Review Challenge
            </h1>

            <p className="text-sm text-[#64748B] mt-2">
              Verify the submitted problem and decide whether it should
              move forward in the solution process.
            </p>
          </div>
        </div>
      </header>

      {/* --------------------------------------------------
          MAIN CONTENT
      -------------------------------------------------- */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        {/* Error */}
        {error && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4">
            <div className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />

              <div>
                <p className="font-medium text-red-700">
                  Something went wrong
                </p>

                <p className="text-sm text-red-600 mt-1">
                  {error}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Success */}
        {successMessage && (
          <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 px-5 py-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />

              <div>
                <p className="font-medium text-green-700">
                  {successMessage}
                </p>

                <p className="text-sm text-green-600 mt-1">
                  Returning to Government Dashboard...
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-6">
          {/* ==================================================
              1. CHALLENGE DETAILS
          ================================================== */}
          <section className="rounded-3xl border border-[#E5E0D2] bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3EE] flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#1E4D38]" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#64748B]">
                  Section 01
                </p>

                <h2 className="text-xl font-semibold">
                  Challenge Details
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              {/* Category and status */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-[#EBF3EE] px-3 py-1.5 text-xs font-medium text-[#1E4D38]">
                  {challenge.category || "Other"}
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F1F5F9] px-3 py-1.5 text-xs font-medium text-[#475569]">
                  <Clock className="w-3.5 h-3.5" />
                  {challenge.status || "SUBMITTED"}
                </span>
              </div>

              {/* Title */}
              <div>
                <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                  Challenge Title
                </p>

                <h3 className="text-2xl font-semibold text-[#1C241E]">
                  {challenge.title}
                </h3>
              </div>

              {/* Description */}
              <div>
                <p className="text-xs uppercase tracking-wider text-[#64748B] mb-2">
                  Description
                </p>

                <p className="text-sm leading-7 text-[#475569]">
                  {challenge.description}
                </p>
              </div>

              {/* Location and date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#FCFBF7] border border-[#E5E0D2] p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-amber-600" />

                    <span className="text-xs uppercase tracking-wider text-[#64748B]">
                      Location
                    </span>
                  </div>

                  <p className="text-sm font-medium text-[#1C241E]">
                    {challenge.location || "Location not provided"}
                  </p>

                  {challenge.district && (
                    <p className="text-xs text-[#64748B] mt-1">
                      {challenge.district}
                    </p>
                  )}
                </div>

                <div className="rounded-2xl bg-[#FCFBF7] border border-[#E5E0D2] p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-[#1E4D38]" />

                    <span className="text-xs uppercase tracking-wider text-[#64748B]">
                      Submitted
                    </span>
                  </div>

                  <p className="text-sm font-medium text-[#1C241E]">
                    {challenge.createdAt
                      ? new Date(
                          challenge.createdAt
                        ).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "Date not available"}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ==================================================
              2. EVIDENCE
          ================================================== */}
          <section className="rounded-3xl border border-[#E5E0D2] bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3EE] flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#1E4D38]" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#64748B]">
                  Section 02
                </p>

                <h2 className="text-xl font-semibold">
                  Evidence
                </h2>
              </div>
            </div>

            {challenge.media && challenge.media.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {challenge.media.map((media, index) => (
                  <div
                    key={media.publicId || media.url || index}
                    className="overflow-hidden rounded-2xl border border-[#E5E0D2] bg-[#FCFBF7]"
                  >
                    <img
                      src={media.url}
                      alt={`Challenge evidence ${index + 1}`}
                      className="w-full h-56 object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[#C5DACD] bg-[#FCFBF7] p-8 text-center">
                <FileText className="w-8 h-8 text-[#64748B] mx-auto mb-3" />

                <p className="text-sm font-medium text-[#475569]">
                  No evidence uploaded
                </p>

                <p className="text-xs text-[#64748B] mt-1">
                  This challenge does not contain any images or media.
                </p>
              </div>
            )}
          </section>

          {/* ==================================================
              3. GOVERNMENT DECISION
          ================================================== */}
          <section className="rounded-3xl border border-[#E5E0D2] bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3EE] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#1E4D38]" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#64748B]">
                  Section 03
                </p>

                <h2 className="text-xl font-semibold">
                  Government Decision
                </h2>
              </div>
            </div>

            {/* Decision buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Verify */}
              <button
                type="button"
                onClick={() => handleDecisionChange("VERIFY")}
                disabled={submitting || !!successMessage}
                className={`text-left rounded-2xl border-2 p-5 transition ${
                  decision === "VERIFY"
                    ? "border-[#1E4D38] bg-[#EBF3EE]"
                    : "border-[#E5E0D2] bg-[#FCFBF7] hover:border-[#C5DACD]"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      decision === "VERIFY"
                        ? "bg-[#1E4D38] text-white"
                        : "bg-[#EBF3EE] text-[#1E4D38]"
                    }`}
                  >
                    <CheckCircle2 className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#1C241E]">
                      Verify Challenge
                    </h3>

                    <p className="text-sm text-[#64748B] mt-1 leading-6">
                      Confirm that this is a valid government problem
                      that can move forward for university-level
                      solution development.
                    </p>
                  </div>
                </div>
              </button>

              {/* Reject */}
              <button
                type="button"
                onClick={() => handleDecisionChange("REJECT")}
                disabled={submitting || !!successMessage}
                className={`text-left rounded-2xl border-2 p-5 transition ${
                  decision === "REJECT"
                    ? "border-red-500 bg-red-50"
                    : "border-[#E5E0D2] bg-[#FCFBF7] hover:border-red-200"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      decision === "REJECT"
                        ? "bg-red-500 text-white"
                        : "bg-red-50 text-red-500"
                    }`}
                  >
                    <XCircle className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#1C241E]">
                      Reject Challenge
                    </h3>

                    <p className="text-sm text-[#64748B] mt-1 leading-6">
                      Reject the challenge if the submitted problem
                      cannot be verified or does not meet the required
                      criteria.
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {/* Remarks */}
            <div className="mt-6">
              <label
                htmlFor="remarks"
                className="block text-sm font-medium text-[#1C241E] mb-2"
              >
                Government Remarks
                <span className="text-[#64748B] font-normal">
                  {" "}
                  (optional)
                </span>
              </label>

              <textarea
                id="remarks"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                disabled={submitting || !!successMessage}
                rows={5}
                placeholder="Add remarks for the citizen or future university team..."
                className="w-full rounded-2xl border border-[#E5E0D2] bg-[#FCFBF7] px-4 py-3 text-sm text-[#1C241E] outline-none resize-none focus:border-[#1E4D38] focus:ring-2 focus:ring-[#EBF3EE] disabled:opacity-60"
              />
            </div>

            {/* Submit */}
            <div className="mt-6 pt-6 border-t border-[#E5E0D2]">
              <button
                type="button"
                onClick={handleSubmitDecision}
                disabled={
                  !decision ||
                  submitting ||
                  !!successMessage
                }
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition ${
                  !decision ||
                  submitting ||
                  !!successMessage
                    ? "bg-[#CBD5D1] text-[#64748B] cursor-not-allowed"
                    : decision === "VERIFY"
                    ? "bg-[#1E4D38] text-white hover:bg-[#163b2b]"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing...
                  </>
                ) : successMessage ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Completed
                  </>
                ) : decision === "VERIFY" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Verify Challenge
                  </>
                ) : decision === "REJECT" ? (
                  <>
                    <XCircle className="w-4 h-4" />
                    Reject Challenge
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    Submit Decision
                  </>
                )}
              </button>

              <p className="text-xs text-[#64748B] mt-3">
                Once submitted, the challenge status will be updated
                and you will be returned to the Government Dashboard.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

