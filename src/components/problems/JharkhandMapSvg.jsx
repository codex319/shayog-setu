import React, { useState } from 'react';
import { JHARKHAND_DISTRICTS, MOCK_PROBLEMS } from '../../data/problemsMockData';
import { ZoomIn, ZoomOut, RotateCcw, MapPin, ArrowUpRight } from 'lucide-react';
export const JharkhandMapSvg = ({ selectedDistrict = 'All Districts', onDistrictSelect, selectedProblemId, onProblemSelect, filteredProblems = MOCK_PROBLEMS, showPins = true, className = '', heightClass = 'h-[360px] sm:h-[420px]', interactive = true, }) => {
    const [zoom, setZoom] = useState(1);
    const [hoveredDistrict, setHoveredDistrict] = useState(null);
    const [hoveredProblem, setHoveredProblem] = useState(null);
    const handleZoomIn = () => setZoom((z) => Math.min(z + 0.25, 2.25));
    const handleZoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.75));
    const handleReset = () => setZoom(1);
    // Helper to color pins by severity or status
    const getPinColor = (p) => {
        if (p.status === 'Solved')
            return '#0284C7'; // Blue
        if (p.status === 'Pilot Running')
            return '#16A34A'; // Emerald
        if (p.severity === 'Critical' || p.severity === 'High')
            return '#DC2626'; // Red
        if (p.severity === 'Medium')
            return '#D97706'; // Amber
        return '#65A30D'; // Lime
    };
    return (<div className={`relative w-full rounded-2xl bg-[#F4F1E6] border border-[#E2DDD0] overflow-hidden flex flex-col ${className}`}>
      
      {/* Top Map Header & Controls */}
      <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
        {/* District indicator badge */}
        <div className="pointer-events-auto bg-white/90 backdrop-blur-sm border border-[#DDD6C5] px-3 py-1.5 rounded-lg shadow-sm text-xs font-semibold text-[#1C241E] flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#1E4D38]"/>
          <span>
            {selectedDistrict && selectedDistrict !== 'All Districts'
            ? selectedDistrict
            : hoveredDistrict
                ? hoveredDistrict
                : 'Jharkhand (All 24 Districts)'}
          </span>
        </div>

        {/* Legend */}
        <div className="pointer-events-auto bg-white/90 backdrop-blur-sm border border-[#DDD6C5] px-2.5 py-1 rounded-lg shadow-sm text-[11px] font-medium text-[#475569] hidden sm:flex items-center gap-2.5">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]"/> High
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#D97706]"/> Medium
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#65A30D]"/> Low
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#16A34A]"/> Pilot
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#0284C7]"/> Solved
          </span>
        </div>

        {/* Zoom Controls */}
        <div className="pointer-events-auto flex items-center gap-1 bg-white/90 backdrop-blur-sm border border-[#DDD6C5] p-1 rounded-lg shadow-sm">
          <button onClick={handleZoomIn} title="Zoom In" className="p-1 text-[#334155] hover:bg-[#F1EFE7] rounded cursor-pointer">
            <ZoomIn className="w-3.5 h-3.5"/>
          </button>
          <button onClick={handleZoomOut} title="Zoom Out" className="p-1 text-[#334155] hover:bg-[#F1EFE7] rounded cursor-pointer">
            <ZoomOut className="w-3.5 h-3.5"/>
          </button>
          <button onClick={handleReset} title="Reset" className="p-1 text-[#334155] hover:bg-[#F1EFE7] rounded cursor-pointer">
            <RotateCcw className="w-3.5 h-3.5"/>
          </button>
        </div>
      </div>

      {/* SVG Map Canvas */}
      <div className={`relative w-full ${heightClass} flex items-center justify-center overflow-hidden`}>
        <div className="relative w-full h-full transition-transform duration-200" style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}>
          <svg viewBox="0 0 1000 750" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background topographic contours */}
            <g opacity="0.35">
              <path d="M 50,200 Q 300,100 600,180 T 950,150" stroke="#C5BFAF" strokeWidth="1" strokeDasharray="3 3"/>
              <path d="M 80,450 Q 350,400 650,420 T 920,490" stroke="#C5BFAF" strokeWidth="1" strokeDasharray="4 4"/>
              <path d="M 120,600 Q 400,620 700,580 T 900,650" stroke="#C5BFAF" strokeWidth="1" strokeDasharray="3 3"/>
            </g>

            {/* Base Jharkhand boundary fill */}
            <path d="M 160,210 
                 L 220,130 L 320,110 L 420,70 L 540,90 L 640,60 L 750,110 L 840,160 L 920,140 L 940,250 
                 L 880,320 L 920,380 L 890,460 L 820,530 L 840,640 L 760,680 L 680,640 L 590,700 
                 L 480,720 L 360,690 L 260,650 L 220,550 L 150,510 L 130,420 L 80,360 L 90,260 Z" fill="#E9E4D4" stroke="#B3AA94" strokeWidth="2.5"/>

            {/* District Polygons and Text Labels */}
            {JHARKHAND_DISTRICTS.map((dist) => {
            const isSelected = selectedDistrict === dist.name;
            const isHovered = hoveredDistrict === dist.name;
            // Map percentage coords to 1000x750 canvas
            const cx = (dist.x / 100) * 1000;
            const cy = (dist.y / 100) * 750;
            return (<g key={dist.name} className="cursor-pointer transition-all duration-150" onClick={() => {
                    if (interactive && onDistrictSelect) {
                        onDistrictSelect(selectedDistrict === dist.name ? 'All Districts' : dist.name);
                    }
                }} onMouseEnter={() => setHoveredDistrict(dist.name)} onMouseLeave={() => setHoveredDistrict(null)}>
                  {/* District Territory Circle / Area representation */}
                  <circle cx={cx} cy={cy} r={isSelected ? 46 : isHovered ? 42 : 36} fill={isSelected ? '#35684B' : isHovered ? '#608E73' : '#D5DEC9'} stroke={isSelected ? '#143825' : '#A3B497'} strokeWidth={isSelected ? 3 : 1.5} opacity={isSelected ? 0.95 : isHovered ? 0.9 : 0.75}/>

                  {/* District Name Label */}
                  <text x={cx} y={cy - 4} textAnchor="middle" fill={isSelected ? '#FFFFFF' : '#1C241E'} fontSize="12" fontWeight={isSelected ? '700' : '600'} fontFamily="Plus Jakarta Sans, sans-serif" className="select-none pointer-events-none">
                    {dist.name}
                  </text>

                  {/* Problems Count Mini Badge */}
                  <text x={cx} y={cy + 12} textAnchor="middle" fill={isSelected ? '#D1FAE5' : '#475569'} fontSize="9.5" fontWeight="500" className="select-none pointer-events-none">
                    {dist.problemsCount} issues
                  </text>
                </g>);
        })}

            {/* Dynamic Problem Pins overlay */}
            {showPins &&
            filteredProblems.map((p) => {
                const px = (p.coordinates.x / 100) * 1000;
                const py = (p.coordinates.y / 100) * 750;
                const isPinSelected = selectedProblemId === p.id;
                const color = getPinColor(p);
                return (<g key={p.id} className="cursor-pointer" onClick={(e) => {
                        e.stopPropagation();
                        if (onProblemSelect)
                            onProblemSelect(p);
                    }} onMouseEnter={() => setHoveredProblem(p)} onMouseLeave={() => setHoveredProblem(null)}>
                    {/* Pulsing ring for high severity or selected */}
                    {(isPinSelected || p.severity === 'High' || p.severity === 'Critical') && (<circle cx={px} cy={py} r="16" fill={color} opacity="0.25" className="animate-pulse"/>)}

                    {/* Outer pin marker */}
                    <circle cx={px} cy={py} r={isPinSelected ? 9 : 7} fill={color} stroke="#FFFFFF" strokeWidth={isPinSelected ? 2.5 : 1.8} filter="drop-shadow(0 2px 3px rgba(0,0,0,0.25))"/>

                    {/* Pin center core */}
                    <circle cx={px} cy={py} r="2.5" fill="#FFFFFF"/>
                  </g>);
            })}
          </svg>
        </div>

        {/* Floating Detail Card for Hovered or Selected Problem on the Map */}
        {(hoveredProblem || selectedProblemId) && (<div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-sm bg-white/95 backdrop-blur-md border border-[#D5CEBC] rounded-xl p-3 shadow-lg z-30 animate-in fade-in slide-in-from-bottom-2">
            {(() => {
                const target = hoveredProblem || filteredProblems.find((p) => p.id === selectedProblemId);
                if (!target)
                    return null;
                return (<div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#EBF3EE] text-[#1E4D38]">
                      {target.category}
                    </span>
                    <span className="text-[11px] font-semibold text-[#B84F2A] flex items-center gap-1">
                      <MapPin className="w-3 h-3"/>
                      {target.district} ({target.block})
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-[#1C241E] line-clamp-1">{target.title}</h4>
                  <p className="text-[11px] text-[#556458] line-clamp-2 mt-0.5">{target.description}</p>
                  
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F0EBE0] text-[11px]">
                    <span className="text-[#64748B]">
                      👥 {target.affectedPopulation}
                    </span>
                    <button onClick={() => onProblemSelect && onProblemSelect(target)} className="font-bold text-[#1E4D38] hover:text-[#163B2A] flex items-center gap-0.5 cursor-pointer">
                      View Challenge <ArrowUpRight className="w-3 h-3"/>
                    </button>
                  </div>
                </div>);
            })()}
          </div>)}
      </div>

      {/* Map Bottom Status Bar */}
      <div className="px-4 py-2 bg-[#ECE8DC] border-t border-[#DED7C5] flex items-center justify-between text-xs text-[#526054]">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#1C241E]">
            {filteredProblems.length} Active Challenges mapped
          </span>
          <span className="text-[#94A396]">•</span>
          <span className="italic text-[11px] text-[#64748B]">(Demo data)</span>
        </div>
        <div className="text-[11px] text-[#475569] hidden md:block">
          Click any district circle or map pin to inspect community challenges
        </div>
      </div>
    </div>);
};
