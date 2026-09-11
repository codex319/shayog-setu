import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Users,
  Lightbulb,
  ShieldCheck,
  Building2,
  GraduationCap,
  Factory,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Report local problems",
    text: "Help identify real challenges in your neighbourhood and community.",
  },
  {
    icon: Users,
    title: "Collaborate together",
    text: "Bring citizens, institutions, government and industry onto one platform.",
  },
  {
    icon: Lightbulb,
    title: "Build solutions",
    text: "Turn verified community challenges into practical ideas and projects.",
  },
];

const stakeholders = [
  {
    icon: Users,
    title: "Citizens",
    text: "Report problems, share ideas and track progress.",
  },
  {
    icon: ShieldCheck,
    title: "Government",
    text: "Verify challenges, coordinate action and monitor outcomes.",
  },
  {
    icon: GraduationCap,
    title: "Universities",
    text: "Connect students and faculty with meaningful local challenges.",
  },
  {
    icon: Factory,
    title: "Industry",
    text: "Support innovation through technology, expertise and CSR.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F8F6EE] text-[#1C241E]">

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-[#E6E1D3]/80 bg-[#F8F6EE]/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1E4D38] text-white">
              <span className="font-editorial text-lg font-bold">S</span>
            </div>

            <div>
              <p className="font-editorial text-lg font-bold leading-none text-[#1E4D38]">
                Samadhan Setu
              </p>

              <p className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7A847D] sm:block">
                Connect • Collaborate • Solve
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-[#5F6B63] transition hover:text-[#1E4D38]"
            >
              How it works
            </a>

            <a
              href="#ecosystem"
              className="text-sm font-medium text-[#5F6B63] transition hover:text-[#1E4D38]"
            >
              Ecosystem
            </a>

            <a
              href="#impact"
              className="text-sm font-medium text-[#5F6B63] transition hover:text-[#1E4D38]"
            >
              Our impact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/login"
              className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-[#35423A] transition hover:bg-[#F0EDE3] sm:block"
            >
              Log in
            </Link>

            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-[#1E4D38] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#163B2A] sm:px-5"
            >
              Get started
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <main>
        <section className="relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#E7E1D1]/60 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#E4EEE7]/70 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:pb-28 lg:pt-24">

            {/* Hero copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D9D4C6] bg-white/70 px-3.5 py-2 text-xs font-semibold text-[#536259]">
                <span className="h-2 w-2 rounded-full bg-[#C85A32]" />
                A platform for community-driven solutions
              </div>

              <h1 className="mt-7 max-w-3xl font-editorial text-5xl font-bold leading-[1.08] tracking-tight text-[#1C241E] sm:text-6xl lg:text-7xl">
                From{" "}
                <span className="text-[#1E4D38]">
                  problems
                </span>{" "}
                to{" "}
                <span className="text-[#C85A32]">
                  solutions.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-[#5E6A62] sm:text-lg sm:leading-8">
                Samadhan Setu connects citizens, government, universities and
                industry to discover real community challenges and work
                together to solve them.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/register"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E4D38] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#163B2A]"
                >
                  Join the movement

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/login"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D8D3C5] bg-white px-6 py-3.5 text-sm font-semibold text-[#35423A] transition hover:bg-[#F4F1E8]"
                >
                  Explore the platform
                  <ChevronRight size={17} />
                </Link>
              </div>

              {/* Trust line */}
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-[#78827B]">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-[#1E4D38]" />
                  Role-based access
                </span>

                <span className="hidden h-4 w-px bg-[#D9D4C6] sm:block" />

                <span className="flex items-center gap-2">
                  <Users size={15} className="text-[#1E4D38]" />
                  Multi-stakeholder collaboration
                </span>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">

              {/* Main card */}
              <div className="relative rounded-[2rem] border border-[#DDD7C8] bg-white p-5 shadow-[0_25px_70px_rgba(30,77,56,0.10)] sm:p-7">

                {/* Map header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C85A32]">
                      Community pulse
                    </p>

                    <h2 className="mt-1 font-editorial text-2xl font-bold text-[#1C241E]">
                      Challenges across Jharkhand
                    </h2>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8EFEA] text-[#1E4D38]">
                    <MapPin size={19} />
                  </div>
                </div>

                {/* Map-style visual */}
                <div className="relative mt-6 h-[300px] overflow-hidden rounded-2xl bg-[#EEF2EA] sm:h-[340px]">

                  {/* Background grid */}
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{
                      backgroundImage:
                        "linear-gradient(#D8E0D7 1px, transparent 1px), linear-gradient(90deg, #D8E0D7 1px, transparent 1px)",
                      backgroundSize: "34px 34px",
                    }}
                  />

                  {/* Abstract Jharkhand shape */}
                  <div className="absolute left-1/2 top-1/2 h-56 w-44 -translate-x-1/2 -translate-y-1/2 rotate-[12deg] rounded-[45%_55%_48%_52%/38%_42%_58%_62%] border-[18px] border-[#B7CDBD] bg-[#DDE8DE] shadow-inner" />

                  {/* Map lines */}
                  <div className="absolute left-[28%] top-[30%] h-px w-[45%] rotate-[25deg] bg-[#AABBAE]" />
                  <div className="absolute left-[32%] top-[57%] h-px w-[43%] -rotate-[20deg] bg-[#AABBAE]" />
                  <div className="absolute left-[48%] top-[20%] h-[60%] w-px rotate-[14deg] bg-[#B5C4B8]" />

                  {/* Problem points */}
                  <div className="absolute left-[39%] top-[37%]">
                    <span className="absolute h-8 w-8 animate-ping rounded-full bg-[#C85A32]/20" />
                    <span className="relative block h-3.5 w-3.5 rounded-full border-2 border-white bg-[#C85A32] shadow" />
                  </div>

                  <div className="absolute left-[58%] top-[48%]">
                    <span className="absolute h-8 w-8 animate-ping rounded-full bg-[#D97706]/20" />
                    <span className="relative block h-3.5 w-3.5 rounded-full border-2 border-white bg-[#D97706] shadow" />
                  </div>

                  <div className="absolute left-[47%] top-[65%]">
                    <span className="absolute h-8 w-8 animate-ping rounded-full bg-[#1E4D38]/20" />
                    <span className="relative block h-3.5 w-3.5 rounded-full border-2 border-white bg-[#1E4D38] shadow" />
                  </div>

                  {/* Floating challenge card */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/70 bg-white/95 p-4 shadow-lg backdrop-blur sm:left-5 sm:right-auto sm:w-72">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F9E9E2] text-[#C85A32]">
                        <MapPin size={17} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-[#C85A32]">
                          Newly reported
                        </p>

                        <p className="mt-1 text-sm font-bold text-[#1C241E]">
                          Waste management near local markets
                        </p>

                        <p className="mt-1 text-xs text-[#78827B]">
                          Community reported • 12 supporters
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom metrics */}
                <div className="mt-5 grid grid-cols-3 divide-x divide-[#E6E1D3] rounded-xl bg-[#F8F6EE] py-4">
                  <div className="px-3 text-center">
                    <p className="font-editorial text-xl font-bold text-[#1E4D38]">
                      128
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-wide text-[#7A847D]">
                      Challenges
                    </p>
                  </div>

                  <div className="px-3 text-center">
                    <p className="font-editorial text-xl font-bold text-[#1E4D38]">
                      64
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-wide text-[#7A847D]">
                      Solutions
                    </p>
                  </div>

                  <div className="px-3 text-center">
                    <p className="font-editorial text-xl font-bold text-[#1E4D38]">
                      24
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-wide text-[#7A847D]">
                      Communities
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative floating card */}
              <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-[#DDD7C8] bg-white px-4 py-3 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8EFEA] text-[#1E4D38]">
                    <Lightbulb size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#1C241E]">
                      Solution in progress
                    </p>
                    <p className="text-[11px] text-[#7A847D]">
                      Community collaboration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section
          id="how-it-works"
          className="border-y border-[#E6E1D3] bg-white"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C85A32]">
                How it works
              </p>

              <h2 className="mt-3 font-editorial text-3xl font-bold text-[#1C241E] sm:text-4xl">
                A simple path from a local concern to collective action.
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#68736B] sm:text-base">
                Samadhan Setu brings the right people together at every stage
                of the problem-solving journey.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-[#E6E1D3] bg-[#F8F6EE] p-6 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E4D38] text-white">
                        <Icon size={21} />
                      </div>

                      <span className="font-editorial text-3xl font-bold text-[#DAD6C9]">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 font-editorial text-xl font-bold text-[#1C241E]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#68736B]">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= ECOSYSTEM ================= */}
        <section id="ecosystem">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C85A32]">
                  One ecosystem
                </p>

                <h2 className="mt-3 font-editorial text-3xl font-bold leading-tight text-[#1C241E] sm:text-4xl">
                  Everyone has a role in creating better communities.
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-[#68736B] sm:text-base">
                  Different stakeholders bring different strengths. Samadhan
                  Setu creates a shared space where those strengths can meet.
                </p>

                <Link
                  to="/register"
                  className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#1E4D38]"
                >
                  Become a participant
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {stakeholders.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#E6E1D3] bg-white p-6 shadow-sm transition hover:shadow-md"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F1E8] text-[#1E4D38]">
                        <Icon size={20} />
                      </div>

                      <h3 className="mt-5 font-editorial text-xl font-bold text-[#1C241E]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#68736B]">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ================= IMPACT ================= */}
        <section id="impact" className="bg-[#1E4D38]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#E9B44C]">
                  Why Samadhan Setu
                </p>

                <h2 className="mt-3 font-editorial text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Make local problems visible. Make solutions possible.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                  A community becomes stronger when problems are heard,
                  verified and connected with people who can help solve them.
                </p>

                <Link
                  to="/register"
                  className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#1E4D38] transition hover:bg-[#F4F1E8]"
                >
                  Get started
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <p className="font-editorial text-4xl font-bold text-white">
                    4
                  </p>
                  <p className="mt-2 text-sm text-white/65">
                    Stakeholder groups
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <p className="font-editorial text-4xl font-bold text-white">
                    1
                  </p>
                  <p className="mt-2 text-sm text-white/65">
                    Shared platform
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <p className="font-editorial text-4xl font-bold text-white">
                    ∞
                  </p>
                  <p className="mt-2 text-sm text-white/65">
                    Ideas for change
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <p className="font-editorial text-4xl font-bold text-white">
                    24/7
                  </p>
                  <p className="mt-2 text-sm text-white/65">
                    Community connection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="bg-[#F8F6EE]">
          <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C85A32]">
              Start today
            </p>

            <h2 className="mt-3 font-editorial text-3xl font-bold text-[#1C241E] sm:text-4xl">
              Have a problem worth solving?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#68736B] sm:text-base">
              Join Samadhan Setu and become part of a network turning
              community challenges into practical solutions.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/register"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E4D38] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#163B2A]"
              >
                Create your account
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-xl border border-[#D8D3C5] bg-white px-6 py-3.5 text-sm font-semibold text-[#35423A] transition hover:bg-[#F4F1E8]"
              >
                Log in
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#E6E1D3] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1E4D38] text-white">
              <span className="font-editorial font-bold">S</span>
            </div>

            <div>
              <p className="font-editorial font-bold text-[#1E4D38]">
                Samadhan Setu
              </p>

              <p className="text-xs text-[#89928B]">
                Connecting people, ideas and solutions.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs text-[#7A847D]">
            <span>Community</span>
            <span>Collaboration</span>
            <span>Innovation</span>
            <span>Impact</span>
          </div>

          <p className="text-xs text-[#89928B]">
            © 2026 Samadhan Setu
          </p>
        </div>
      </footer>
    </div>
  );
}