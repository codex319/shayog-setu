import React from "react";
import { useNavigate } from "react-router-dom";
import { HowItWorksJourney } from "../../components/Howitworks";
import {
  Sparkles,
  MapPin,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Award,
  Search,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

import {
  MOCK_STUDENT_RECOMMENDATION,
  MOCK_PROJECT_TEAM,
  MOCK_NOTIFICATIONS,
} from "../../data/problemsMockData";

export default function Dashboard() {
  const navigate = useNavigate();

  const rec = MOCK_STUDENT_RECOMMENDATION;
  const project = MOCK_PROJECT_TEAM;



  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">

      {/* ================= WELCOME SECTION ================= */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-[#E5E0D2] shadow-xs">

        <div>
          <div className="flex items-center gap-2">

            <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EBF3EE] text-[#1E4D38] border border-[#C5DACD]">
              Citizen Portal
            </span>

            <span className="text-xs text-[#64748B]">
              Jharkhand
            </span>

          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#1C241E] mt-1 font-editorial">
            Good morning
          </h1>

          <p className="text-sm font-hindi text-[#55685A] font-semibold mt-0.5">
            Here's what's happening with community problems and challenges.
          </p>
        </div>

        <div className="flex items-center gap-3">

          <div className="relative">
            <Search className="w-4 h-4 text-[#8C9B90] absolute left-3 top-1/2 -translate-y-1/2" />

            <input
              type="text"
              placeholder="Search problems, challenges..."
              className="pl-9 pr-3 py-2 text-xs rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] focus:outline-none focus:ring-2 focus:ring-[#1E4D38]/30 w-64"
            />
          </div>

         

        </div>
      </div>


      {/* ================= TOP GRID ================= */}
    <div className="flex items-center gap-[100px] w-full">
      <div className="flex flex-col gap-4">

  <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1C241E] font-editorial leading-[1.15]">
              
                <>
                  Connecting Jharkhand's <span className="text-[#1E4D38] italic font-serif">rural challenges</span> with university research & CSR mentors.
                </>
              
            </h1>
<div className="flex gap-1.5">
    <button
      onClick={() => navigate("/citizen/challenges/new")}
      className="bg-[#1E4D38] hover:bg-[#163B2A] text-white text-l font-bold px-3.5 py-2 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 w-fit"
    >
      <span>Report a Problem</span>
      <ArrowRight className="w-3 h-3" />
    </button>

     <button onClick={() => navigate('/citizen/mychallenges')} className="px-5 py-3 rounded-2xl bg-white hover:bg-[#FAF8F2] text-[#1E4D38] border border-[#DDD6C5] text-m font-bold transition-all shadow-2xs hover:shadow-xs flex items-center gap-2 cursor-pointer">
               
                <span>My Challenges</span>
              </button>
              </div>

  </div>
          <div className="relative overflow-hidden w-full h-28 sm:h-28 ">
            <svg viewBox="0 0 700 120" class="w-full h-full object-cover" preserveAspectRatio="xMidYMax slice" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,80 Q140,50 280,75 T560,65 T700,75 L700,120 L0,120 Z" fill="#D9E6D8" opacity="0.6"></path><path d="M0,90 Q120,70 240,88 T480,80 T700,85 L700,120 L0,120 Z" fill="#C4D9C2" opacity="0.8"></path><g transform="translate(45, 62)"><rect x="0" y="22" width="52" height="30" fill="#E8DEC8" stroke="#7D6B56" stroke-width="1.5"></rect><rect x="18" y="32" width="14" height="20" rx="1" fill="#7D6B56"></rect><rect x="6" y="28" width="8" height="8" fill="#5F7D6D" stroke="#7D6B56" stroke-width="1"></rect><polygon points="26,4 -6,22 58,22" fill="#C85A32" stroke="#9E3B18" stroke-width="1.5"></polygon><line x1="26" y1="4" x2="6" y2="22" stroke="#9E3B18" stroke-width="1" opacity="0.4"></line><line x1="26" y1="4" x2="46" y2="22" stroke="#9E3B18" stroke-width="1" opacity="0.4"></line></g><g transform="translate(108, 55)"><path d="M12,42 L12,24" stroke="#68543B" stroke-width="3.5" stroke-linecap="round"></path><ellipse cx="12" cy="18" rx="16" ry="18" fill="#3D7B58"></ellipse><ellipse cx="8" cy="14" rx="12" ry="13" fill="#4D8E69"></ellipse></g><g transform="translate(138, 52)"><rect x="0" y="26" width="64" height="36" fill="#F1E7D4" stroke="#7D6B56" stroke-width="1.5"></rect><rect x="24" y="38" width="16" height="24" rx="1" fill="#6B5944"></rect><rect x="8" y="32" width="10" height="10" fill="#4B6A5B" stroke="#7D6B56" stroke-width="1"></rect><rect x="46" y="32" width="10" height="10" fill="#4B6A5B" stroke="#7D6B56" stroke-width="1"></rect><polygon points="32,6 -8,26 72,26" fill="#B84F2A" stroke="#8E3514" stroke-width="1.5"></polygon><line x1="32" y1="6" x2="12" y2="26" stroke="#8E3514" stroke-width="1" opacity="0.4"></line><line x1="32" y1="6" x2="52" y2="26" stroke="#8E3514" stroke-width="1" opacity="0.4"></line></g><g transform="translate(216, 60)"><rect x="0" y="22" width="46" height="32" fill="#E8DEC8" stroke="#7D6B56" stroke-width="1.5"></rect><rect x="16" y="32" width="12" height="22" rx="1" fill="#7D6B56"></rect><polygon points="23,6 -4,22 50,22" fill="#D6683E" stroke="#9E3B18" stroke-width="1.5"></polygon></g><g transform="translate(268, 52)"><path d="M10,48 L10,25" stroke="#68543B" stroke-width="3" stroke-linecap="round"></path><ellipse cx="10" cy="18" rx="14" ry="16" fill="#2E6646"></ellipse><ellipse cx="16" cy="15" rx="12" ry="13" fill="#3D7B58"></ellipse></g><g transform="translate(310, 58)"><rect x="0" y="24" width="58" height="32" fill="#F1E7D4" stroke="#7D6B56" stroke-width="1.5"></rect><rect x="22" y="34" width="14" height="22" rx="1" fill="#6B5944"></rect><polygon points="29,5 -6,24 64,24" fill="#C85A32" stroke="#9E3B18" stroke-width="1.5"></polygon></g><g transform="translate(385, 70)"><line x1="0" y1="30" x2="160" y2="30" stroke="#9B8B77" stroke-width="1.5" stroke-dasharray="6 3"></line><line x1="20" y1="22" x2="20" y2="35" stroke="#7D6B56" stroke-width="1.5"></line><line x1="50" y1="22" x2="50" y2="35" stroke="#7D6B56" stroke-width="1.5"></line><line x1="80" y1="22" x2="80" y2="35" stroke="#7D6B56" stroke-width="1.5"></line><line x1="110" y1="22" x2="110" y2="35" stroke="#7D6B56" stroke-width="1.5"></line><line x1="140" y1="22" x2="140" y2="35" stroke="#7D6B56" stroke-width="1.5"></line></g><g transform="translate(560, 42)"><path d="M16,65 L16,30" stroke="#5A4A33" stroke-width="4" stroke-linecap="round"></path><ellipse cx="16" cy="22" rx="20" ry="24" fill="#2A5C3F"></ellipse><ellipse cx="12" cy="18" rx="16" ry="18" fill="#3B7754"></ellipse></g><g transform="translate(615, 48)"><path d="M14,60 L14,28" stroke="#5A4A33" stroke-width="3.5" stroke-linecap="round"></path><ellipse cx="14" cy="20" rx="18" ry="20" fill="#346F4C"></ellipse><ellipse cx="18" cy="17" rx="14" ry="16" fill="#4B8D67"></ellipse></g><rect x="0" y="112" width="700" height="8" fill="#C2B79B" opacity="0.6"></rect></svg>
       
          </div>
         
    </div>

      {/* ================= ACTIVE PROJECT ================= */}
     

       

      {/* HOW IT WORKS COLLABORATIVE JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <HowItWorksJourney />
      </section>


      

   


      {/* ================= BOTTOM 3 COLUMNS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


        {/* UPCOMING */}
        


        {/* RECENT ACTIVITY */}
       


        {/* IMPACT */}
        

             
      </div>

    </div>
  );
}