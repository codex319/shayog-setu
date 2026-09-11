import React from 'react';
import { MapPin, Users, CheckCircle2, AlertTriangle, ArrowRight, Heart } from 'lucide-react';
export const ProblemCard = ({ problem, language, onViewDetails, onUpvote, isUpvoted = false, compact = false }) => {
    const getSeverityBadge = () => {
        switch (problem.severity) {
            case 'Critical':
                return 'bg-rose-50 text-rose-700 border-rose-200';
            case 'High':
                return 'bg-amber-50 text-amber-800 border-amber-200';
            case 'Medium':
                return 'bg-amber-50 text-amber-700 border-amber-200';
            case 'Low':
            default:
                return 'bg-emerald-50 text-emerald-700 border-emerald-200';
        }
    };
    const getStatusBadge = () => {
        switch (problem.status) {
            case 'Pilot Running':
                return 'bg-emerald-100 text-emerald-800 border-emerald-300';
            case 'In Progress':
                return 'bg-blue-50 text-blue-700 border-blue-200';
            case 'Government Validated':
                return 'bg-teal-50 text-teal-700 border-teal-200';
            case 'Looking for Solvers':
                return 'bg-amber-50 text-amber-700 border-amber-200';
            default:
                return 'bg-stone-100 text-stone-700 border-stone-200';
        }
    };
    return (<div className={`bg-white rounded-2xl border border-[#E5E0D2] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group ${problem.priorityFeatured ? 'ring-1 ring-[#1E4D38]/20 bg-[#FDFCF9]' : ''}`}>
      
      {/* Top Banner & Image if available */}
      {problem.evidenceImages && problem.evidenceImages[0] && !compact && (<div className="relative h-36 sm:h-40 w-full overflow-hidden bg-[#F2ECE1]">
          <img src={problem.evidenceImages[0]} alt={problem.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300" referrerPolicy="no-referrer"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/>
          
          {/* Category Pill on top left */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-[#1E4D38] border border-[#DDD6C5]">
            {problem.category}
          </div>

          {/* Severity Badge top right */}
          <div className={`absolute top-3 right-3 px-2 py-0.5 rounded-md text-[11px] font-semibold border ${getSeverityBadge()}`}>
            ● {problem.severity} Priority
          </div>

          {/* Location on image bottom */}
          <div className="absolute bottom-2.5 left-3 text-white text-xs font-semibold flex items-center gap-1 drop-shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-amber-300"/>
            <span>{problem.district}, {problem.block} ({problem.village})</span>
          </div>
        </div>)}

      {/* Main Card Content */}
      <div className="p-4 flex-1 flex flex-col">
        
        {/* If no image, show category and severity header */}
        {(!problem.evidenceImages || !problem.evidenceImages[0] || compact) && (<div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#EBF3EE] text-[#1E4D38] border border-[#CDE1D4]">
                {problem.category}
              </span>
              <span className="text-xs text-[#526255] flex items-center gap-1 font-medium">
                <MapPin className="w-3 h-3 text-[#B84F2A]"/>
                {problem.district}
              </span>
            </div>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${getSeverityBadge()}`}>
              ● {problem.severity}
            </span>
          </div>)}

        {/* Date & Verification status */}
        <div className="flex items-center justify-between text-[11px] text-[#64748B] mb-1.5">
          <span>{problem.reportedDate}</span>
          {problem.isVerified ? (<span className="flex items-center gap-1 text-emerald-700 font-medium">
              <CheckCircle2 className="w-3 h-3 text-emerald-600"/> Admin Verified
            </span>) : (<span className="text-amber-700 font-medium flex items-center gap-1">
              <AlertTriangle className="w-3 h-3 text-amber-600"/> Under Review
            </span>)}
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-[#1C241E] group-hover:text-[#1E4D38] transition-colors leading-snug line-clamp-2">
          {language === 'hi' ? problem.titleHi : problem.title}
        </h3>

        {/* Secondary Title in opposite language */}
        <p className="text-xs text-[#6B7E6F] font-hindi font-medium mt-0.5 line-clamp-1">
          {language === 'hi' ? problem.title : problem.titleHi}
        </p>

        {/* Description snippet */}
        <p className="text-xs text-[#556458] mt-2 line-clamp-2 leading-relaxed flex-1">
          {language === 'hi' ? problem.descriptionHi : problem.description}
        </p>

        {/* Affected Population */}
        <div className="mt-3 py-1.5 px-2 rounded-lg bg-[#FAF8F2] border border-[#ECE7D9] flex items-center justify-between text-xs text-[#4F5E52]">
          <span className="flex items-center gap-1.5 font-medium">
            <Users className="w-3.5 h-3.5 text-[#1E4D38]"/>
            <span>Affected: <strong>{problem.affectedPopulation}</strong></span>
          </span>
          <span className="text-[10px] text-[#64748B] font-mono">
            {problem.id}
          </span>
        </div>

        {/* Required Skills Tags */}
        <div className="mt-3 flex items-center gap-1.5 flex-wrap">
          {problem.requiredSkills.slice(0, 3).map((skill) => (<span key={skill} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#F4F1E8] text-[#475569] border border-[#E0DACB]">
              {skill}
            </span>))}
          {problem.requiredSkills.length > 3 && (<span className="text-[10px] text-[#64748B] font-medium">
              +{problem.requiredSkills.length - 3}
            </span>)}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-3.5 bg-[#FAF8F2] border-t border-[#ECE7D9] flex items-center justify-between gap-2">
        {/* Status Pill */}
        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border ${getStatusBadge()}`}>
          {problem.status}
        </span>

        <div className="flex items-center gap-1.5">
          {/* Upvote/Support button */}
          {onUpvote && (<button onClick={(e) => {
                e.stopPropagation();
                onUpvote(problem.id);
            }} className={`p-1.5 rounded-lg border transition-colors cursor-pointer flex items-center gap-1 text-xs ${isUpvoted
                ? 'bg-rose-50 text-rose-600 border-rose-200'
                : 'text-[#64748B] hover:text-rose-600 hover:bg-rose-50 border-[#DDD6C5]'}`} title="Endorse this problem">
              <Heart className={`w-3.5 h-3.5 ${isUpvoted ? 'fill-current' : ''}`}/>
              <span className="font-semibold text-[11px]">{problem.upvotes + (isUpvoted ? 1 : 0)}</span>
            </button>)}

          {/* View Challenge button */}
          <button onClick={() => onViewDetails(problem)} className="bg-[#1E4D38] hover:bg-[#163B2A] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 shadow-2xs cursor-pointer">
            <span>{language === 'hi' ? 'विवरण देखें' : 'View Challenge'}</span>
            <ArrowRight className="w-3 h-3"/>
          </button>
        </div>
      </div>
    </div>);
};
