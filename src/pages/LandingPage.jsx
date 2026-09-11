import React from "react";
import { Link } from "react-router-dom";

const steps = [
  {
    n: "01",
    title: "Citizens report what they see",
    body: "A blocked drain, a delayed diagnosis, a failing crop advisory — anyone can file a challenge from their district in under two minutes, no technical language required.",
  },
  {
    n: "02",
    title: "AI sorts it, government verifies it",
    body: "Machine classification flags category, severity and likely duplicates. A government officer reviews the AI's read, confirms it, and assigns it to the universities best placed to help.",
  },
  {
    n: "03",
    title: "Universities and industry build the fix",
    body: "Student and faculty teams take on the verified problem as a real project, with industry partners contributing mentorship, funding or manufacturing capacity to get it into the field.",
  },
];

const stakeholders = [
  { label: "Citizens", detail: "Report and track local problems" },
  { label: "Government", detail: "Verify, prioritise, and assign" },
  { label: "Universities", detail: "Research and build solutions" },
  { label: "Industry", detail: "Fund, mentor, and scale" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <header className="max-w-6xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <BridgeMark />
          <span className="font-display text-lg font-semibold tracking-tight">Samadhan Setu</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="focus-ring text-sm font-medium text-ink/80 hover:text-ink px-3 py-2"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="focus-ring text-sm font-semibold bg-ink text-white px-4 py-2.5 rounded-lg hover:bg-ink/90"
          >
            Register
          </Link>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-10 md:pt-16 pb-20 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <p className="text-sm font-medium text-[#8a5a1f] mb-4">
            SIH26043 · Government of Jharkhand · MedTech / BioTech / HealthTech
          </p>
          <h1 className="font-display text-4xl md:text-[3.4rem] leading-[1.08] font-semibold text-ink max-w-xl">
            The bridge between a citizen's problem and someone who can solve it.
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-lg leading-relaxed">
            Samadhan Setu turns local, everyday challenges into verified projects — routed to the
            university labs and industry partners equipped to build real solutions, with the
            government keeping every step accountable.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/login"
              className="focus-ring bg-[#C6822A] text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-[#B0721F] transition-colors"
            >
              Log in to your portal
            </Link>
            <Link
              to="/register"
              className="focus-ring border border-ink/20 font-semibold px-6 py-3.5 rounded-lg text-ink hover:bg-ink/5 transition-colors"
            >
              Register an account
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-ink/10 bg-white shadow-panel p-6">
            <p className="text-xs font-medium text-ink/50 mb-4">Live snapshot · Jharkhand</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Challenges reported", value: "1,042" },
                { label: "Verified by government", value: "618" },
                { label: "Active university projects", value: "97" },
                { label: "Industry collaborations", value: "34" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-[#FAFAF7] p-4">
                  <p className="font-display text-2xl font-semibold text-ink">{s.value}</p>
                  <p className="text-xs text-ink/60 mt-1 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-xl bg-ink text-white text-xs font-medium px-4 py-3 shadow-panel hidden md:block">
            "Diagnosed and assigned to BIT Mesra in 4 days" — Deoghar handpump case
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink max-w-md">
            How it works
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.n}>
                <p className="font-display text-3xl text-[#C6822A] font-medium">{step.n}</p>
                <h3 className="mt-3 font-semibold text-ink text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink max-w-md">
          Built for four kinds of problem solvers
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {stakeholders.map((s) => (
            <div key={s.label} className="rounded-xl border border-ink/10 p-5">
              <p className="font-semibold text-ink">{s.label}</p>
              <p className="mt-1.5 text-sm text-ink/60">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-ink/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-ink/50">
          <p>Samadhan Setu · Smart India Hackathon · Problem SIH26043</p>
          <p>Government of Jharkhand</p>
        </div>
      </footer>
    </div>
  );
}

function BridgeMark() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 18C2 18 6 9 13 9C20 9 24 18 24 18"
        stroke="#C6822A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M2 18H24" stroke="#12181B" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 18V13" stroke="#12181B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 18V9.5" stroke="#12181B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 18V13" stroke="#12181B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
