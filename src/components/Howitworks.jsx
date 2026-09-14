import React from 'react';
import {
  FileEdit,
  Cpu,
  Users,
  Laptop,
  Sprout,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const STEPS = [
  {
    num: '1',
    title: 'Raise a Problem',
    desc: 'Grassroots citizens submit unaddressed community issues.',
    icon: FileEdit,
    accentColor: '#B84F2A',
    bgColor: '#FFF5F0'
  },
  {
    num: '2',
    title: 'AI Matching',
    desc: 'Smart NLP deduplicates & categorizes regional challenges.',
    icon: Cpu,
    accentColor: '#2563EB',
    bgColor: '#EFF6FF'
  },
  {
    num: '3',
    title: 'Form Teams',
    desc: 'Multi-university students collaborate on real-world engineering.',
    icon: Users,
    accentColor: '#16A34A',
    bgColor: '#F0FDF4'
  },
  {
    num: '4',
    title: 'Develop Solution',
    desc: 'Low-cost hardware, IoT and vernacular software prototypes built.',
    icon: Laptop,
    accentColor: '#0891B2',
    bgColor: '#ECFEFF'
  },
  {
    num: '5',
    title: 'Industry Mentorship',
    desc: 'Industry experts review designs and sponsor field testing.',
    icon: Sprout,
    accentColor: '#D97706',
    bgColor: '#FFFBEB'
  },
  {
    num: '6',
    title: 'Measure Impact',
    desc: 'Village pilot deployments tracked with live sensor metrics.',
    icon: TrendingUp,
    accentColor: '#059669',
    bgColor: '#ECFDF5'
  }
];

export const HowItWorksJourney = ({ className = '' }) => {
  return (
    <div className={`w-full py-10 px-4 max-w-7xl mx-auto ${className}`}>

      {/* Section Header */}
      <div className="text-center mb-8">

        <span className="text-xs font-bold uppercase tracking-widest text-[#1E4D38] px-2.5 py-1 rounded-full bg-[#EBF3EE] border border-[#C5DACD]">
          Problem-to-Impact Lifecycle
        </span>

        <h2 className="text-2xl sm:text-3xl font-bold text-[#1C241E] mt-2 font-editorial">
          How It Works
        </h2>

        <p className="text-sm text-[#55685A] font-semibold mt-0.5">
          Civic Crowdsourcing & Collaborative University Ecosystem
        </p>

      </div>

      {/* Horizontal Lifecycle Flow on Desktop, Structured Cards on Mobile */}
      <div className="relative">

        {/* Continuous connector line on desktop */}
        <div className="hidden lg:block absolute top-[52px] left-[6%] right-[6%] h-0.5 bg-[#DED6C4] -z-0" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-3 relative z-10">

          {STEPS.map((step, idx) => {

            const Icon = step.icon;

            return (
              <div
                key={step.num}
                className="bg-white rounded-2xl border border-[#E4DED0] p-4 text-center shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-center group relative"
              >

                {/* Step badge number */}
                <div className="text-xs font-bold text-[#8A7C6B] mb-2 font-mono">
                  0{step.num}
                </div>

                {/* Circular Icon container */}
                <div
                  className="w-13 h-13 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-105"
                  style={{
                    backgroundColor: step.bgColor,
                    color: step.accentColor,
                    border: `1.5px solid ${step.accentColor}30`
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Arrow indicator */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-[44px] w-6 h-6 rounded-full bg-white border border-[#D5CEBC] items-center justify-center text-[#8C9C90] z-20 shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}

                {/* English Title */}
                <h3 className="text-sm font-bold text-[#1C241E] leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[11px] text-[#64748B] mt-2 leading-relaxed">
                  {step.desc}
                </p>

              </div>
            );
          })}

        </div>
      </div>

    </div>
  );
};