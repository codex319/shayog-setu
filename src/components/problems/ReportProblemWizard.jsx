import React, { useState, useEffect } from 'react';
import { X, MapPin, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, Wifi, Save, Camera, HelpCircle, Wheat, Droplets, HeartPulse, GraduationCap, Sparkles as SanitationIcon, Trees, Users, Accessibility, Building2, Landmark } from 'lucide-react';
import { JHARKHAND_DISTRICTS, MOCK_SIMILAR_PROBLEMS_MAP } from '../../data/problemsMockData';
const CATEGORIES = [
    { id: 'Education', labelEn: 'Education', labelHi: 'शिक्षा', icon: GraduationCap },
    { id: 'Healthcare', labelEn: 'Healthcare', labelHi: 'स्वास्थ्य सेवा', icon: HeartPulse },
    { id: 'Agriculture', labelEn: 'Agriculture', labelHi: 'कृषि एवं सिंचाई', icon: Wheat },
    { id: 'Water', labelEn: 'Water', labelHi: 'पेयजल', icon: Droplets },
    { id: 'Sanitation', labelEn: 'Sanitation', labelHi: 'स्वच्छता', icon: SanitationIcon },
    { id: 'Environment', labelEn: 'Environment', labelHi: 'पर्यावरण', icon: Trees },
    { id: 'Rural Livelihood', labelEn: 'Rural Livelihood', labelHi: 'ग्रामीण आजीविका', icon: Users },
    { id: 'Accessibility', labelEn: 'Accessibility', labelHi: 'सड़क व संपर्क', icon: Accessibility },
    { id: 'Infrastructure', labelEn: 'Infrastructure', labelHi: 'बुनियादी ढांचा', icon: Building2 },
    { id: 'Public Services', labelEn: 'Public Services', labelHi: 'सार्वजनिक सेवाएं', icon: Landmark },
];
export const ReportProblemWizard = ({ onClose, language = 'en', onProblemSubmitted, onSubmitProblem, isLowBandwidthMode = false }) => {
    const [step, setStep] = useState(1);
    const [category, setCategory] = useState('Agriculture');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [district, setDistrict] = useState('Latehar');
    const [block, setBlock] = useState('Balumath');
    const [village, setVillage] = useState('');
    const [affectedPopulation, setAffectedPopulation] = useState('100 - 500 households');
    const [severity, setSeverity] = useState('High');
    const [isDetectingGps, setIsDetectingGps] = useState(false);
    const [gpsCoordinates, setGpsCoordinates] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [draftSavedTime, setDraftSavedTime] = useState(null);
    const [duplicateWarning, setDuplicateWarning] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    // Auto-detect duplicates when typing title or description
    useEffect(() => {
        const text = (title + ' ' + description).toLowerCase();
        if (text.includes('water') || text.includes('पानी') || text.includes('fluoride')) {
            setDuplicateWarning(MOCK_SIMILAR_PROBLEMS_MAP['water']);
        }
        else if (text.includes('irrigation') || text.includes('सिंचाई') || text.includes('solar')) {
            setDuplicateWarning(MOCK_SIMILAR_PROBLEMS_MAP['irrigation']);
        }
        else if (text.includes('health') || text.includes('अस्पताल') || text.includes('doctor')) {
            setDuplicateWarning(MOCK_SIMILAR_PROBLEMS_MAP['health']);
        }
        else {
            setDuplicateWarning(null);
        }
    }, [title, description]);
    // Load draft from localStorage
    useEffect(() => {
        const draft = localStorage.getItem('jh_problem_draft');
        if (draft) {
            try {
                const parsed = JSON.parse(draft);
                if (parsed.title)
                    setTitle(parsed.title);
                if (parsed.description)
                    setDescription(parsed.description);
                if (parsed.district)
                    setDistrict(parsed.district);
                if (parsed.category)
                    setCategory(parsed.category);
                setDraftSavedTime('Saved draft restored');
            }
            catch (e) { }
        }
    }, []);
    const handleSaveDraft = () => {
        const draft = { category, title, description, district, block, village, affectedPopulation, severity };
        localStorage.setItem('jh_problem_draft', JSON.stringify(draft));
        setDraftSavedTime('Draft saved at ' + new Date().toLocaleTimeString());
    };
    const handleDetectGps = () => {
        setIsDetectingGps(true);
        setTimeout(() => {
            setIsDetectingGps(false);
            setGpsCoordinates('23.7431° N, 84.5029° E (Latehar District Block HQ)');
        }, 900);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newProblem = {
            id: `PRB-JH-${Math.floor(10 + Math.random() * 90)}`,
            title: title || 'Solar irrigation and groundwater salinity issue',
            titleHi: 'सौर सिंचाई एवं भूजल संबंधी समस्या',
            description: description || 'Villagers facing water scarcity during peak sowing season.',
            descriptionHi: 'बुवाई के मौसम में किसानों को पानी की भारी किल्लत का सामना करना पड़ता है।',
            category,
            district,
            block: block || 'Block HQ',
            village: village || 'Gram Panchayat',
            affectedPopulation,
            severity,
            status: 'Community Reported',
            reportedDate: 'Just now',
            reportedBy: 'Local Resident',
            coordinates: { x: 42, y: 50 },
            geoLat: 23.7431,
            geoLng: 84.5029,
            requiredSkills: [category, 'Field Survey', 'IoT'],
            activeTeamsCount: 0,
            solutionsCount: 0,
            upvotes: 1,
            isVerified: false,
            timeline: {
                reportedAt: 'Just now'
            }
        };
        localStorage.removeItem('jh_problem_draft');
        setIsSubmitted(true);
        setTimeout(() => {
            const callback = onProblemSubmitted || onSubmitProblem;
            if (typeof callback === 'function') {
                callback(newProblem);
            }
            onClose();
            setIsSubmitted(false);
            setStep(1);
            setTitle('');
            setDescription('');
        }, 1200);
    };
    return (<div className="max-w-5xl">
      <div className="bg-[#FAF8F2] border border-[#DDD6C5] rounded-3xl w-full shadow-panel overflow-hidden flex flex-col">
        
        {/* Wizard Header */}
        <div className="px-6 py-4 bg-white border-b border-[#E6E1D3] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#EBF3EE] text-[#1E4D38] flex items-center justify-center font-bold">
              +
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1C241E] font-editorial leading-tight">
                Report a Problem
              </h2>
              <p className="text-xs font-hindi text-[#55685A] font-semibold">
                समस्या दर्ज करें — जमीनी समाधान की शुरुआत
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EBF3EE] border border-[#C5DACD] text-[11px] font-semibold text-[#1E4D38]">
              <Wifi className="w-3 h-3 text-emerald-600"/>
              <span>{isLowBandwidthMode ? 'Offline Queue Active' : 'Low-Bandwidth Optimized'}</span>
            </div>
            <button onClick={onClose} className="p-1.5 text-[#64748B] hover:text-[#1C241E] hover:bg-[#F1EFE7] rounded-lg transition-colors cursor-pointer">
              <X className="w-5 h-5"/>
            </button>
          </div>
        </div>

        {/* Step Progress Indicator */}
        <div className="px-6 py-3 bg-[#F4F1E6] border-b border-[#E2DDD0] flex items-center justify-between text-xs overflow-x-auto gap-2">
          {[
            { num: 1, label: 'Problem Info' },
            { num: 2, label: 'Location' },
            { num: 3, label: 'Affected People' },
            { num: 4, label: 'Severity' },
            { num: 5, label: 'Evidence' },
            { num: 6, label: 'Review' },
        ].map((s) => (<div key={s.num} className="flex items-center gap-1.5 shrink-0">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === s.num
                ? 'bg-[#1E4D38] text-white shadow-xs'
                : step > s.num
                    ? 'bg-[#A3B8A8] text-white'
                    : 'bg-[#E3DDCF] text-[#6B786E]'}`}>
                {step > s.num ? '✓' : s.num}
              </span>
              <span className={`hidden md:inline font-medium ${step === s.num ? 'text-[#1C241E] font-bold' : 'text-[#6B786E]'}`}>
                {s.label}
              </span>
              {s.num < 6 && <span className="text-[#C5BEAD] ml-1">→</span>}
            </div>))}
        </div>

        {/* Modal Body: Split view (Form on left, Rural Context on right) */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Form Fields (Col 8) */}
          <div className="md:col-span-8 flex flex-col justify-between">
            {isSubmitted ? (<div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 animate-bounce">
                  <CheckCircle2 className="w-10 h-10"/>
                </div>
                <h3 className="text-xl font-bold text-[#1C241E] font-editorial">
                  Problem Successfully Submitted!
                </h3>
                <p className="text-sm font-hindi text-[#1E4D38] font-bold mt-1">
                  आपकी समस्या सफलतापूर्वक दर्ज कर ली गई है।
                </p>
                <div className="mt-4 p-4 rounded-xl bg-white border border-[#E0DACB] text-xs text-[#556458] max-w-md text-left">
                  <p className="font-bold text-[#1C241E] mb-1">What happens next / आगे क्या होगा?</p>
                  <ol className="list-decimal list-inside space-y-1 text-[11px] text-[#64748B]">
                    <li>Regional BDO / Panchayat coordinator verifies village coordinates.</li>
                    <li>AI matching engine broadcasts challenge to student engineering teams (BIT Mesra, NIT JSR).</li>
                    <li>You will receive SMS updates when a prototype solution is initiated.</li>
                  </ol>
                </div>
              </div>) : (<div>
                {/* AI Similarity Notification Banner */}
                {duplicateWarning && (<div className="mb-5 p-3.5 rounded-xl bg-[#FFFBEB] border border-[#FCD34D] text-xs animate-in fade-in">
                    <div className="flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5"/>
                      <div className="flex-1">
                        <div className="font-bold text-amber-900 flex items-center justify-between">
                          <span>AI Detected Similar Existing Challenges</span>
                          <span className="text-[10px] font-mono bg-amber-200/70 px-1.5 py-0.5 rounded text-amber-900">
                            93% Match
                          </span>
                        </div>
                        <p className="text-amber-800 text-[11px] mt-0.5">
                          We found {duplicateWarning.length} similar problem reports in {district}. You can merge your report to strengthen priority, or continue submitting a new one.
                        </p>
                        <div className="mt-2 space-y-1">
                          {duplicateWarning.map((item) => (<div key={item.id} className="p-1.5 rounded bg-white/80 border border-amber-200 flex items-center justify-between text-[11px]">
                              <span className="font-semibold text-[#1C241E] line-clamp-1">{item.title}</span>
                              <span className="text-emerald-700 font-bold ml-2 shrink-0">{item.similarity}% similarity</span>
                            </div>))}
                        </div>
                      </div>
                    </div>
                  </div>)}

                {/* STEP 1: What is the problem? */}
                {step === 1 && (<div className="space-y-4">
                    <div>
                      <h3 className="text-base font-bold text-[#1C241E]">
                        1. What is the problem? / समस्या क्या है?
                      </h3>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        Choose the primary category and describe what is not working in your village.
                      </p>
                    </div>

                    {/* Category Selection Grid */}
                    <div>
                      <label className="block text-xs font-bold text-[#334155] mb-2">
                        Choose the category / श्रेणी चुनें:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                        {CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    const isSel = category === cat.id;
                    return (<button key={cat.id} type="button" onClick={() => setCategory(cat.id)} className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 text-xs ${isSel
                            ? 'bg-[#1E4D38] text-white border-[#1E4D38] shadow-xs'
                            : 'bg-white text-[#334155] border-[#DDD6C5] hover:bg-[#F6F3EB]'}`}>
                              <Icon className={`w-4 h-4 ${isSel ? 'text-emerald-200' : 'text-[#1E4D38]'}`}/>
                              <span className="font-bold text-[11px] leading-tight line-clamp-1">{cat.labelEn}</span>
                              <span className="text-[9.5px] font-hindi opacity-80 line-clamp-1">{cat.labelHi}</span>
                            </button>);
                })}
                      </div>
                    </div>

                    {/* Problem Title */}
                    <div>
                      <label className="block text-xs font-bold text-[#334155] mb-1">
                        Short Problem Title / समस्या का शीर्षक:
                      </label>
                      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Solar-powered irrigation for water-stressed farms..." className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD6C5] text-xs text-[#1C241E] focus:outline-none focus:ring-2 focus:ring-[#1E4D38]/30 font-medium"/>
                    </div>

                    {/* Description */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-xs font-bold text-[#334155]">
                          Describe the problem (in simple words) / समस्या का संक्षिप्त विवरण दें:
                        </label>
                        <span className="text-[10px] text-[#64748B]">{description.length}/500</span>
                      </div>
                      <textarea rows={4} maxLength={500} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Explain what the challenge is, how long it has been happening, and what attempts were made locally..." className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD6C5] text-xs text-[#1C241E] focus:outline-none focus:ring-2 focus:ring-[#1E4D38]/30 resize-none leading-relaxed"/>
                    </div>
                  </div>)}

                {/* STEP 2: Where is it happening? */}
                {step === 2 && (<div className="space-y-4">
                    <div>
                      <h3 className="text-base font-bold text-[#1C241E]">
                        2. Where is it happening? / स्थान कहाँ है?
                      </h3>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        Pinpoint the district, block, and village in Jharkhand so local universities can visit.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#334155] mb-1">
                          District / जिला:
                        </label>
                        <select value={district} onChange={(e) => setDistrict(e.target.value)} className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#DDD6C5] text-xs font-semibold text-[#1C241E]">
                          {JHARKHAND_DISTRICTS.map((d) => (<option key={d.name} value={d.name}>
                              {d.name} ({d.nameHi})
                            </option>))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#334155] mb-1">
                          Block / प्रखंड:
                        </label>
                        <input type="text" value={block} onChange={(e) => setBlock(e.target.value)} placeholder="e.g. Balumath, Ormanjhi, Torpa..." className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#DDD6C5] text-xs"/>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#334155] mb-1">
                        Village / Tola / Mohalla / ग्राम / टोला:
                      </label>
                      <input type="text" value={village} onChange={(e) => setVillage(e.target.value)} placeholder="e.g. Hesatu Village, Near Middle School" className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#DDD6C5] text-xs"/>
                    </div>

                    {/* GPS Auto-detect Button */}
                    <div className="p-3.5 rounded-xl bg-[#F0ECE1] border border-[#DDD6C5] flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-[#334155]">
                        <MapPin className="w-4 h-4 text-[#1E4D38]"/>
                        <span>
                          {gpsCoordinates ? gpsCoordinates : 'Use device GPS to record precise location'}
                        </span>
                      </div>
                      <button type="button" onClick={handleDetectGps} disabled={isDetectingGps} className="px-3 py-1.5 rounded-lg bg-[#1E4D38] text-white text-xs font-semibold hover:bg-[#163B2A] transition-colors cursor-pointer">
                        {isDetectingGps ? 'Detecting...' : 'Detect GPS'}
                      </button>
                    </div>
                  </div>)}

                {/* STEP 3: Who is affected? */}
                {step === 3 && (<div className="space-y-4">
                    <div>
                      <h3 className="text-base font-bold text-[#1C241E]">
                        3. Who is affected? / प्रभावित समुदाय कौन है?
                      </h3>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        Estimate how many households, school students, or farmers suffer from this issue.
                      </p>
                    </div>

                    <div className="space-y-2">
                      {[
                    'Under 50 households (Small hamlet/Toli)',
                    '50 - 200 households (Village ward)',
                    '200 - 500 households (Full Gram Panchayat)',
                    '500+ households / Regional commuters',
                    'Primary / Secondary School Children',
                    'Women Self-Help Groups (SHGs / Sakhi Mandal)'
                ].map((pop) => (<label key={pop} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors text-xs font-medium ${affectedPopulation === pop
                        ? 'bg-[#EBF3EE] border-[#1E4D38] text-[#1E4D38] font-bold'
                        : 'bg-white border-[#DDD6C5] text-[#334155] hover:bg-[#FAF8F2]'}`}>
                          <input type="radio" name="affected" checked={affectedPopulation === pop} onChange={() => setAffectedPopulation(pop)} className="text-[#1E4D38] focus:ring-[#1E4D38]"/>
                          <span>{pop}</span>
                        </label>))}
                    </div>
                  </div>)}

                {/* STEP 4: How serious is it? */}
                {step === 4 && (<div className="space-y-4">
                    <div>
                      <h3 className="text-base font-bold text-[#1C241E]">
                        4. How serious is the issue? / गंभीरता स्तर
                      </h3>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        Helps university researchers and district officers triage urgency.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                    { level: 'Critical', labelHi: 'अति गंभीर (तत्काल ध्यान आवश्यक)', desc: 'Immediate health hazard, drinking water contamination, or flood risk', color: 'border-rose-300 bg-rose-50/70 text-rose-900' },
                    { level: 'High', labelHi: 'गंभीर (उच्च प्राथमिकता)', desc: 'Crop failure risk, long-term power failure, impassable access road', color: 'border-amber-300 bg-amber-50/70 text-amber-900' },
                    { level: 'Medium', labelHi: 'मध्यम (नियमित सुधार)', desc: 'Periodic water shortfall, irregular school connectivity, market supply issues', color: 'border-amber-200 bg-yellow-50/70 text-yellow-900' },
                    { level: 'Low', labelHi: 'सामान्य (योजनाबद्ध)', desc: 'General infrastructural upgrade, playground, street light installation', color: 'border-emerald-200 bg-emerald-50/70 text-emerald-900' }
                ].map((sev) => (<button key={sev.level} type="button" onClick={() => setSeverity(sev.level)} className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${severity === sev.level
                        ? `ring-2 ring-[#1E4D38] shadow-sm ${sev.color}`
                        : 'bg-white border-[#DDD6C5] hover:bg-[#FAF8F2]'}`}>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs">{sev.level} Priority</span>
                            {severity === sev.level && <CheckCircle2 className="w-4 h-4 text-[#1E4D38]"/>}
                          </div>
                          <div className="text-[11px] font-hindi font-medium mt-0.5 opacity-90">{sev.labelHi}</div>
                          <p className="text-[11px] text-[#64748B] mt-1 leading-snug">{sev.desc}</p>
                        </button>))}
                    </div>
                  </div>)}

                {/* STEP 5: Upload evidence */}
                {step === 5 && (<div className="space-y-4">
                    <div>
                      <h3 className="text-base font-bold text-[#1C241E]">
                        5. Upload Evidence / साक्ष्य और तस्वीरें
                      </h3>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        Add photos of the borewell, dried canal, or road. Rural images are automatically compressed.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl border-2 border-dashed border-[#DDD6C5] bg-white text-center flex flex-col items-center justify-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-[#F4F1E6] text-[#1E4D38] flex items-center justify-center">
                        <Camera className="w-6 h-6"/>
                      </div>
                      <div className="text-xs font-semibold text-[#1C241E]">
                        Drag and drop photos or click to browse
                      </div>
                      <p className="text-[11px] text-[#64748B]">
                        Supports JPG, PNG up to 10MB • Auto-compressed for 2G/3G networks
                      </p>
                      <button type="button" onClick={() => {
                    setUploadedFiles([
                        'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=400&q=80'
                    ]);
                }} className="mt-2 px-3 py-1.5 rounded-lg bg-[#EBF3EE] text-[#1E4D38] text-xs font-bold hover:bg-[#D8EADB] transition-colors cursor-pointer">
                        + Attach Sample Field Photo (Demo)
                      </button>

                      {uploadedFiles.length > 0 && (<div className="mt-3 flex items-center gap-2 p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600"/>
                          <span>field_evidence_latehar.jpg attached (Compressed to 140 KB)</span>
                        </div>)}
                    </div>
                  </div>)}

                {/* STEP 6: Review */}
                {step === 6 && (<div className="space-y-4">
                    <div>
                      <h3 className="text-base font-bold text-[#1C241E]">
                        6. Review and Submit / समीक्षा एवं पुष्टि
                      </h3>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        Confirm details before broadcasting to researchers and district engineers.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-[#DDD6C5] space-y-2.5 text-xs text-[#334155]">
                      <div className="flex items-center justify-between border-b border-[#F0EBE0] pb-2">
                        <span className="text-[#64748B]">Category:</span>
                        <span className="font-bold text-[#1E4D38]">{category}</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-[#F0EBE0] pb-2">
                        <span className="text-[#64748B]">Title:</span>
                        <span className="font-bold text-[#1C241E] max-w-xs truncate">{title || 'Solar irrigation solution'}</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-[#F0EBE0] pb-2">
                        <span className="text-[#64748B]">Location:</span>
                        <span className="font-semibold">{district}, {block} ({village || 'Panchayat'})</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-[#F0EBE0] pb-2">
                        <span className="text-[#64748B]">Affected Population:</span>
                        <span className="font-semibold">{affectedPopulation}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#64748B]">Severity:</span>
                        <span className="font-bold text-amber-700">{severity} Priority</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-[#64748B] leading-relaxed">
                      By submitting, you agree to allow university faculty and student researchers to contact village representatives for on-site surveys.
                    </div>
                  </div>)}
              </div>)}

            {/* Bottom Form Actions */}
            {!isSubmitted && (<div className="mt-8 pt-4 border-t border-[#E6E1D3] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button type="button" onClick={handleSaveDraft} className="px-3 py-1.5 rounded-lg border border-[#DDD6C5] text-xs font-semibold text-[#475569] hover:bg-white flex items-center gap-1.5 transition-colors cursor-pointer">
                    <Save className="w-3.5 h-3.5"/>
                    <span>Save as Draft</span>
                  </button>
                  {draftSavedTime && (<span className="text-[10px] text-emerald-700 font-medium hidden sm:inline">
                      {draftSavedTime}
                    </span>)}
                </div>

                <div className="flex items-center gap-2">
                  {step > 1 && (<button type="button" onClick={() => setStep(step - 1)} className="px-3 py-2 rounded-xl border border-[#DDD6C5] text-xs font-semibold text-[#334155] hover:bg-white flex items-center gap-1 transition-colors cursor-pointer">
                      <ArrowLeft className="w-3.5 h-3.5"/>
                      <span>Back</span>
                    </button>)}

                  {step < 6 ? (<button type="button" onClick={() => setStep(step + 1)} className="px-4 py-2 rounded-xl bg-[#1E4D38] hover:bg-[#163B2A] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer">
                      <span>Next</span>
                      <ArrowRight className="w-3.5 h-3.5"/>
                    </button>) : (<button type="button" onClick={handleSubmit} className="px-5 py-2 rounded-xl bg-[#1E4D38] hover:bg-[#163B2A] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer">
                      <span>Submit Problem / दर्ज करें</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-300"/>
                    </button>)}
                </div>
              </div>)}
          </div>

          {/* Right Side Info & Context Panel (Col 4) matching the reference */}
          <div className="md:col-span-4 bg-white rounded-2xl border border-[#E0DACB] p-4 flex flex-col justify-between">
            <div>
              {/* Illustrated Rural Worker / Sahiya Didi badge */}
              <div className="rounded-xl overflow-hidden mb-3 bg-[#F4F1E6] border border-[#DDD6C5] aspect-[4/3] flex items-center justify-center p-2">
                <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80" alt="Rural Community Representative" className="w-full h-full object-cover rounded-lg" referrerPolicy="no-referrer"/>
              </div>

              <h4 className="text-xs font-bold text-[#1C241E] font-editorial">
                "Tell us what's not working in your village."
              </h4>
              <p className="text-[11px] font-hindi text-[#1E4D38] font-semibold mt-0.5">
                "हमें बताएं कि आपके गांव में क्या समस्या है।"
              </p>
              <p className="text-[11px] text-[#556458] mt-2 leading-relaxed">
                We'll help connect the problem with students, engineers, and mentors who can build a practical prototype tested directly in your fields.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#F0EBE0] space-y-2 text-[11px]">
              <div className="flex items-center gap-1.5 text-[#1E4D38] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600"/>
                <span>Works with low connectivity</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#64748B]">
                <HelpCircle className="w-3.5 h-3.5"/>
                <span>SMS / IVR submission mode: Planned</span>
              </div>
              <div className="p-2 rounded-lg bg-[#FAF8F2] border border-[#EBE6DA] text-[10px] text-[#6B786E]">
                🔒 <strong>Privacy Note:</strong> Contact details are only shared with authorized university teams.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
};
