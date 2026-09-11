
export const JHARKHAND_DISTRICTS = [
  { name: 'Ranchi', nameHi: 'राँची', problemsCount: 164, solvedCount: 108, activePilots: 9, topCategory: 'Agriculture', x: 52, y: 56 },
  { name: 'Latehar', nameHi: 'लातेहार', problemsCount: 98, solvedCount: 42, activePilots: 6, topCategory: 'Water', x: 34, y: 44 },
  { name: 'Dumka', nameHi: 'दुमका', problemsCount: 112, solvedCount: 65, activePilots: 5, topCategory: 'Healthcare', x: 82, y: 35 },
  { name: 'Palamu', nameHi: 'पलामू', problemsCount: 88, solvedCount: 39, activePilots: 4, topCategory: 'Agriculture', x: 26, y: 36 },
  { name: 'East Singhbhum', nameHi: 'पूर्वी सिंहभूम', problemsCount: 142, solvedCount: 92, activePilots: 7, topCategory: 'Environment', x: 74, y: 82 },
  { name: 'West Singhbhum', nameHi: 'पश्चिमी सिंहभूम', problemsCount: 95, solvedCount: 46, activePilots: 3, topCategory: 'Rural Livelihood', x: 55, y: 84 },
  { name: 'Hazaribagh', nameHi: 'हज़ारीबाग़', problemsCount: 84, solvedCount: 51, activePilots: 4, topCategory: 'Water', x: 48, y: 39 },
  { name: 'Giridih', nameHi: 'गिरिडीह', problemsCount: 76, solvedCount: 40, activePilots: 3, topCategory: 'Education', x: 65, y: 35 },
  { name: 'Gumla', nameHi: 'गुमला', problemsCount: 62, solvedCount: 34, activePilots: 2, topCategory: 'Agriculture', x: 33, y: 68 },
  { name: 'Lohardaga', nameHi: 'लोहरदगा', problemsCount: 48, solvedCount: 28, activePilots: 2, topCategory: 'Water', x: 38, y: 55 },
  { name: 'Dhanbad', nameHi: 'धनबाद', problemsCount: 130, solvedCount: 85, activePilots: 5, topCategory: 'Environment', x: 70, y: 48 },
  { name: 'Bokaro', nameHi: 'बोकारो', problemsCount: 89, solvedCount: 53, activePilots: 3, topCategory: 'Public Services', x: 62, y: 52 },
  { name: 'Deoghar', nameHi: 'देवघर', problemsCount: 72, solvedCount: 44, activePilots: 2, topCategory: 'Healthcare', x: 74, y: 30 },
  { name: 'Khunti', nameHi: 'खूंटी', problemsCount: 54, solvedCount: 31, activePilots: 3, topCategory: 'Rural Livelihood', x: 49, y: 66 },
  { name: 'Simdega', nameHi: 'सिमडेगा', problemsCount: 45, solvedCount: 22, activePilots: 1, topCategory: 'Healthcare', x: 30, y: 82 },
  { name: 'Garhwa', nameHi: 'गढ़वा', problemsCount: 59, solvedCount: 27, activePilots: 2, topCategory: 'Water', x: 18, y: 30 },
  { name: 'Koderma', nameHi: 'कोडरमा', problemsCount: 51, solvedCount: 29, activePilots: 1, topCategory: 'Education', x: 54, y: 28 },
  { name: 'Chatra', nameHi: 'चतरा', problemsCount: 47, solvedCount: 21, activePilots: 1, topCategory: 'Rural Livelihood', x: 38, y: 31 },
  { name: 'Sahebganj', nameHi: 'साहिबगंज', problemsCount: 63, solvedCount: 33, activePilots: 2, topCategory: 'Water', x: 89, y: 22 },
  { name: 'Pakur', nameHi: 'पाकुड़', problemsCount: 42, solvedCount: 19, activePilots: 1, topCategory: 'Sanitation', x: 88, y: 32 },
  { name: 'Godda', nameHi: 'गोड्डा', problemsCount: 53, solvedCount: 26, activePilots: 1, topCategory: 'Agriculture', x: 81, y: 25 },
  { name: 'Jamtara', nameHi: 'जामताड़ा', problemsCount: 41, solvedCount: 24, activePilots: 1, topCategory: 'Education', x: 77, y: 42 },
  { name: 'Ramgarh', nameHi: 'रामगढ़', problemsCount: 58, solvedCount: 37, activePilots: 2, topCategory: 'Infrastructure', x: 56, y: 50 },
  { name: 'Saraikela Kharsawan', nameHi: 'सरायकेला खरसावां', problemsCount: 65, solvedCount: 39, activePilots: 2, topCategory: 'Environment', x: 67, y: 73 }
];

export const MOCK_PROBLEMS = [
  {
    id: 'PRB-JH-01',
    title: 'Solar-powered irrigation for water-stressed farms',
    titleHi: 'जल संकटग्रस्त खेतों के लिए सौर ऊर्जा संचालित सिंचाई प्रणाली',
    description: 'Develop a low-cost, solar-powered automated irrigation solution for smallholder farms in Latehar district facing groundwater decline and erratic grid power supply.',
    descriptionHi: 'लातेहार जिले के छोटे किसानों के लिए भूजल स्तर में गिरावट और अनियमित बिजली आपूर्ति की समस्या को दूर करने के लिए कम लागत वाली सौर सिंचाई प्रणाली विकसित करना।',
    category: 'Agriculture',
    district: 'Latehar',
    block: 'Balumath',
    village: 'Hesatu',
    affectedPopulation: '~240 households',
    severity: 'High',
    status: 'Looking for Solvers',
    reportedDate: '12 Apr 2025',
    reportedBy: 'Gram Vikas Samiti, Hesatu',
    coordinates: { x: 35, y: 45 },
    geoLat: 23.7431,
    geoLng: 84.5029,
    requiredSkills: ['IoT', 'Solar', 'Agriculture', 'Embedded Systems'],
    evidenceImages: ['https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=600&q=80'],
    similarProblemsCount: 2,
    activeTeamsCount: 2,
    solutionsCount: 3,
    upvotes: 84,
    isVerified: true,
    priorityFeatured: true,
    timeline: {
      reportedAt: '12 Apr 2025',
      verifiedAt: '14 Apr 2025',
      teamMatchedAt: '18 Apr 2025',
    }
  },
  {
    id: 'PRB-JH-02',
    title: 'Water-quality monitoring in rural schools',
    titleHi: 'ग्रामीण विद्यालयों में पेयजल गुणवत्ता की निगरानी और शुद्धिकरण',
    description: 'Automated arsenic, fluoride and bacterial test telemetry for primary school borewells across Latehar and Netarhat hills with instant cloud alerting to district engineers.',
    descriptionHi: 'लातेहार और नेतरहाट पहाड़ियों के प्राथमिक विद्यालयों में बोरवेल के पानी में आर्सेनिक, फ्लोराइड और बैक्टीरिया की निगरानी के लिए टेलीमेट्री प्रणाली।',
    category: 'Water',
    district: 'Latehar',
    block: 'Mahuadanr',
    village: 'Netarhat Toli',
    affectedPopulation: '~200 households & 450 students',
    severity: 'High',
    status: 'In Progress',
    reportedDate: '28 Mar 2025',
    reportedBy: 'School Management Committee',
    coordinates: { x: 31, y: 52 },
    geoLat: 23.4795,
    geoLng: 84.2697,
    requiredSkills: ['AI/ML', 'IoT', 'Environmental Science', 'Web Dev'],
    evidenceImages: ['https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=600&q=80'],
    similarProblemsCount: 3,
    activeTeamsCount: 1,
    solutionsCount: 2,
    upvotes: 112,
    isVerified: true,
    priorityFeatured: true,
    timeline: {
      reportedAt: '28 Mar 2025',
      verifiedAt: '30 Mar 2025',
      teamMatchedAt: '05 Apr 2025',
      prototypeStartedAt: '12 Apr 2025',
      mentorAssignedAt: '16 Apr 2025',
    }
  },
  {
    id: 'PRB-JH-03',
    title: 'Better healthcare access in remote villages',
    titleHi: 'सुदूर गांवों में बेहतर स्वास्थ्य सेवा और टेलीमेडिसिन सुविधा',
    description: 'Community health worker offline tablet kit for diagnostic triaging, vitals capture, and asynchronous doctor consultation in forest villages without broadband.',
    descriptionHi: 'बिना ब्रॉडबैंड वाले वनग्रामों में सहिया दीदियों के लिए ऑफलाइन नैदानिक परीक्षण और डॉक्टर परामर्श हेतु डिजिटल किट।',
    category: 'Healthcare',
    district: 'Dumka',
    block: 'Kathikund',
    village: 'Koilabasa',
    affectedPopulation: '~180 households',
    severity: 'Medium',
    status: 'Under Review',
    reportedDate: '10 Apr 2025',
    reportedBy: 'Sahiya Community Health Worker',
    coordinates: { x: 82, y: 36 },
    geoLat: 24.2676,
    geoLng: 87.2498,
    requiredSkills: ['Healthcare', 'Telemedicine', 'IoT', 'Mobile Dev'],
    evidenceImages: ['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'],
    similarProblemsCount: 1,
    activeTeamsCount: 0,
    solutionsCount: 1,
    upvotes: 49,
    isVerified: false,
    priorityFeatured: false,
    timeline: {
      reportedAt: '10 Apr 2025',
    }
  },
  {
    id: 'PRB-JH-04',
    title: 'Solar cold storage micro-hubs for vegetable growers',
    titleHi: 'सब्जी उत्पादकों के लिए सौर कोल्ड स्टोरेज माइक्रो-हब',
    description: 'Decentralized 5MT solar-assisted cold rooms using phase-change materials to stop 40% post-harvest loss of tomatoes and green chillies in Ormanjhi belt.',
    descriptionHi: 'ओरमांझी क्षेत्र में टमाटर और हरी मिर्च की फसल कटाई के बाद होने वाले 40% नुकसान को रोकने के लिए सौर शीतगृह समाधान।',
    category: 'Agriculture',
    district: 'Ranchi',
    block: 'Ormanjhi',
    village: 'Khatanga',
    affectedPopulation: '~310 farming families',
    severity: 'High',
    status: 'Pilot Running',
    reportedDate: '15 Feb 2025',
    reportedBy: 'Ormanjhi Farmers Cooperative',
    coordinates: { x: 53, y: 54 },
    geoLat: 23.4862,
    geoLng: 85.4746,
    requiredSkills: ['Renewable Energy', 'Thermal Storage', 'Agri-Tech', 'Hardware Design'],
    activeTeamsCount: 1,
    solutionsCount: 1,
    upvotes: 145,
    isVerified: true,
    priorityFeatured: true,
    timeline: {
      reportedAt: '15 Feb 2025',
      verifiedAt: '20 Feb 2025',
      teamMatchedAt: '28 Feb 2025',
      prototypeStartedAt: '15 Mar 2025',
      mentorAssignedAt: '22 Mar 2025',
      pilotStartedAt: '10 Apr 2025',
    }
  },
  {
    id: 'PRB-JH-05',
    title: 'Digital traceability & fair pricing for Lac tribal harvesters',
    titleHi: 'लाह (लाक्षा) संग्राहकों के लिए डिजिटल ट्रेसेबिलिटी और उचित मूल्य प्रणाली',
    description: 'QR-enabled weighing and mobile ledger app in tribal dialects ensuring primary forest gatherers receive MSP payments without middleman leakage.',
    descriptionHi: 'जनजातीय बोलियों में मोबाइल खाता और तौल प्रणाली ताकि प्राथमिक वनोपज संग्राहकों को बिचौलियों से मुक्ति और उचित मूल्य मिले।',
    category: 'Rural Livelihood',
    district: 'Khunti',
    block: 'Torpa',
    village: 'Dormo',
    affectedPopulation: '~620 tribal collectors',
    severity: 'Medium',
    status: 'Pilot Running',
    reportedDate: '02 Feb 2025',
    reportedBy: 'Torpa Mahila Vikas Samiti',
    coordinates: { x: 48, y: 67 },
    geoLat: 22.9511,
    geoLng: 85.2536,
    requiredSkills: ['Mobile App', 'FinTech', 'Supply Chain', 'UI/UX Hindi/Tribal'],
    activeTeamsCount: 1,
    solutionsCount: 2,
    upvotes: 182,
    isVerified: true,
    priorityFeatured: false,
    timeline: {
      reportedAt: '02 Feb 2025',
      verifiedAt: '08 Feb 2025',
      teamMatchedAt: '18 Feb 2025',
      prototypeStartedAt: '05 Mar 2025',
      mentorAssignedAt: '15 Mar 2025',
      pilotStartedAt: '01 Apr 2025',
    }
  },
  {
    id: 'PRB-JH-06',
    title: 'Smart flash flood warning for Subarnarekha causeways',
    titleHi: 'सुवर्णरेखा नदी कॉजवे के लिए स्मार्ट अचानक बाढ़ पूर्व चेतावनी प्रणाली',
    description: 'Ultrasonic river level sensors with solar beacons and localized siren alerts to warn villagers before submerged bridge crossings become fatal during monsoon spates.',
    descriptionHi: 'मानसून में पुलिया जलमग्न होने से पहले ग्रामीणों को सचेत करने के लिए अल्ट्रासोनिक जलस्तर सेंसर और सायरन प्रणाली।',
    category: 'Infrastructure',
    district: 'East Singhbhum',
    block: 'Ghatshila',
    village: 'Galudih',
    affectedPopulation: '~1,200 commuters & farmers',
    severity: 'Critical',
    status: 'Government Validated',
    reportedDate: '20 Mar 2025',
    reportedBy: 'Ghatshila Block Emergency Task Force',
    coordinates: { x: 75, y: 81 },
    geoLat: 22.6517,
    geoLng: 86.4173,
    requiredSkills: ['IoT Sensors', 'Telemetry', 'Civil Engineering', 'Early Warning Systems'],
    activeTeamsCount: 1,
    solutionsCount: 1,
    upvotes: 97,
    isVerified: true,
    priorityFeatured: false,
    timeline: {
      reportedAt: '20 Mar 2025',
      verifiedAt: '22 Mar 2025',
      teamMatchedAt: '01 Apr 2025',
    }
  },
  {
    id: 'PRB-JH-07',
    title: 'Fly ash & red mud stabilization for rural haul roads',
    titleHi: 'ग्रामीण सड़कों के लिए फ्लाई ऐश और रेड मड का सुरक्षित स्थिरीकरण',
    description: 'Eco-friendly geopolymers using industrial waste from nearby thermal and aluminum units to pave durable all-weather village link roads.',
    descriptionHi: 'तापीय विद्युत और एल्युमिनियम संयंत्रों से निकलने वाले औद्योगिक कचरे से टिकाऊ ग्रामीण संपर्क सड़कें बनाना।',
    category: 'Environment',
    district: 'Dhanbad',
    block: 'Govindpur',
    village: 'Barmasiya',
    affectedPopulation: '~850 residents',
    severity: 'Low',
    status: 'Looking for Solvers',
    reportedDate: '05 Apr 2025',
    reportedBy: 'Village Panchayat',
    coordinates: { x: 71, y: 47 },
    geoLat: 23.8343,
    geoLng: 86.5186,
    requiredSkills: ['Materials Science', 'Civil Engineering', 'Waste Recycling'],
    activeTeamsCount: 0,
    solutionsCount: 0,
    upvotes: 38,
    isVerified: true,
    priorityFeatured: false,
    timeline: {
      reportedAt: '05 Apr 2025',
      verifiedAt: '09 Apr 2025',
    }
  }
];

export const MOCK_PROJECT_TEAM = {
  id: 'PROJ-JH-01',
  title: 'Smart Irrigation System',
  titleHi: 'स्मार्ट सौर सिंचाई एवं मृदा नमी नियंत्रण प्रणाली',
  problemId: 'PRB-JH-01',
  category: 'Agriculture',
  district: 'Latehar',
  status: 'In Progress',
  progressPercentage: 60,
  currentMilestone: 'Prototype Sensor Calibrations',
  nextAction: 'Field Testing • 15 Apr',
  collaboratingUniversities: ['BIT Mesra', 'NIT Jamshedpur', 'Ranchi University', 'IIT (ISM) Dhanbad'],
  members: [
    {
      id: 'm1',
      name: 'Riya Sharma',
      role: 'Team Lead & IoT Architect',
      university: 'BIT Mesra',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      skills: ['IoT', 'Embedded C', 'System Design']
    },
    {
      id: 'm2',
      name: 'Ankit Kumar',
      role: 'Hardware & Solar Developer',
      university: 'NIT Jamshedpur',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      skills: ['Solar PV', 'Power Electronics', 'Firmware']
    },
    {
      id: 'm3',
      name: 'Sneha Patel',
      role: 'Farmer UI & Vernacular UX',
      university: 'Ranchi University',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
      skills: ['User Research', 'Figma', 'Hindi Localization']
    },
    {
      id: 'm4',
      name: 'Rahul Verma',
      role: 'Data Scientist & Agronomist',
      university: 'IIT (ISM) Dhanbad',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      skills: ['Soil Science', 'Python', 'Predictive ML']
    }
  ],
  mentors: [
    {
      id: 'ment-1',
      name: 'Dr. S. Gupta',
      designation: 'Professor, Electronics Dept',
      organization: 'BIT Mesra',
      type: 'Faculty Mentor',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      expertise: ['Agri-IoT', 'Low-power Telemetry', 'Academic Grant Review']
    },
    {
      id: 'ment-2',
      name: 'Mr. Priya Singh',
      designation: 'Head, Rural Innovations (CSR)',
      organization: 'Tata Steel (R&D)',
      type: 'Industry Mentor',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
      expertise: ['CSR Pilot Grants', 'Field Deployment', 'Scale-up']
    }
  ],
  milestones: [
    { id: 'ms1', title: 'Problem Verified & Field Survey', dueDate: '10 Mar 2025', completed: true, current: false, stage: 'Validation', dateStr: '10 Mar' },
    { id: 'ms2', title: 'Cross-University Team Assembled', dueDate: '20 Mar 2025', completed: true, current: false, stage: 'Formation', dateStr: '20 Mar' },
    { id: 'ms3', title: 'Hardware Architecture & Schematic', dueDate: '02 Apr 2025', completed: true, current: false, stage: 'Prototype', dateStr: '02 Apr' },
    { id: 'ms4', title: 'Sensor Bench Calibrations', dueDate: '12 Apr 2025', completed: true, current: true, stage: 'Testing', dateStr: '12 Apr' },
    { id: 'ms5', title: 'Field Testing in Latehar Farm', dueDate: '25 Apr 2025', completed: false, current: false, stage: 'Field Test', dateStr: '25 Apr' },
    { id: 'ms6', title: 'Government & Village Panchayat Signoff', dueDate: '10 May 2025', completed: false, current: false, stage: 'Signoff', dateStr: '10 May' },
    { id: 'ms7', title: 'Full Village Pilot Rollout', dueDate: '20 May 2025', completed: false, current: false, stage: 'Pilot', dateStr: '20 May' }
  ],
  kanbanTasks: [
    { id: 'k1', title: 'Compile Latehar soil electrical conductivity logs', column: 'Completed', assignee: 'Rahul Verma', priority: 'Medium', dueDate: '08 Apr', progress: 100, tags: ['Data', 'Latehar'] },
    { id: 'k2', title: 'Wire solar MPPT controller to ESP32 board', column: 'Completed', assignee: 'Ankit Kumar', priority: 'High', dueDate: '11 Apr', progress: 100, tags: ['Hardware'] },
    { id: 'k3', title: 'Calibrate capacitive soil moisture probes in lab', column: 'In Progress', assignee: 'Riya Sharma', priority: 'High', dueDate: '14 Apr', progress: 65, tags: ['Lab', 'IoT'] },
    { id: 'k4', title: 'Audio prompt voice recordings in Sadri & Hindi', column: 'In Progress', assignee: 'Sneha Patel', priority: 'Medium', dueDate: '16 Apr', progress: 40, tags: ['UX', 'Vernacular'] },
    { id: 'k5', title: 'Prepare schematic documentation for mentor review', column: 'Review', assignee: 'Ankit Kumar', priority: 'High', dueDate: '17 Apr', progress: 85, tags: ['Mentor Review'] },
    { id: 'k6', title: '3D print weather-resistant IP65 enclosure', column: 'Backlog', assignee: 'Riya Sharma', priority: 'Low', dueDate: '22 Apr', progress: 0, tags: ['Manufacturing'] },
    { id: 'k7', title: 'Deploy prototype unit 01 at Hesatu village plot', column: 'Pilot Ready', assignee: 'Team', priority: 'High', dueDate: '25 Apr', progress: 15, tags: ['Field Pilot'] }
  ],
  discussions: [
    {
      id: 'd1',
      author: 'Dr. S. Gupta',
      role: 'Faculty Mentor',
      affiliation: 'BIT Mesra',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      content: 'Riya and Ankit: please ensure the moisture sensor probe coating is resistant to high mineral salinity found in Latehar black-loam soils. Standard copper PCB tracks corrode within 3 weeks without conformal silicone.',
      timestamp: 'Yesterday at 4:15 PM',
      isOfficial: true
    },
    {
      id: 'd2',
      author: 'Riya Sharma',
      role: 'Team Lead',
      affiliation: 'BIT Mesra',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      content: 'Noted sir! We switched to stainless steel 316 grade electrodes and tested them in 5% brine solution for 48 hours with zero oxidation.',
      timestamp: 'Yesterday at 6:30 PM'
    },
    {
      id: 'd3',
      author: 'Mr. Priya Singh',
      role: 'Industry Mentor',
      affiliation: 'Tata Steel (R&D)',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
      content: 'Great initiative team. Tata Steel Rural Development Society (TSRDS) has approved a ₹1.5 Lakh pilot deployment seed grant for 5 farmer clusters upon successful demonstration on April 25.',
      timestamp: 'Today at 10:20 AM',
      isOfficial: true
    }
  ],
  repoUrl: 'github.com/jharkhand-setu/smart-irrigation-latehar',
  documentsCount: 6,
  pilotVillage: 'Hesatu, Balumath block, Latehar',
  impactMetrics: {
    householdsReached: 240,
    sensorReadingsLogged: 4200,
    costReductionPct: 35
  }
};

export const MOCK_STUDENT_RECOMMENDATION = {
  problemId: 'PRB-JH-02',
  matchScore: 92,
  problem: MOCK_PROBLEMS[1],
  matchedSkills: ['AI/ML', 'IoT', 'Environmental Science'],
  reasons: [
    'Your department is Computer Science & Engineering with an IoT specialization',
    'Matches your past project on Water Salinity Telemetry',
    'High regional priority in Latehar district (20 km from your university campus)'
  ]
};

export const MOCK_NOTIFICATIONS = [
  {
    id: 'n1',
    title: 'Problem Verified by District Collectorate',
    description: 'Solar-powered irrigation in Latehar has been verified by the Block Development Officer.',
    timestamp: '2h ago',
    read: false,
    type: 'verification'
  },
  {
    id: 'n2',
    title: 'Ankit Kumar joined your project team',
    description: 'Hardware Developer from NIT Jamshedpur accepted team invitation for Smart Irrigation.',
    timestamp: '4h ago',
    read: false,
    type: 'team'
  },
  {
    id: 'n3',
    title: 'New Mentor Feedback from Tata Steel R&D',
    description: 'Mr. Priya Singh approved milestone #3 and released pilot grant allocation notes.',
    timestamp: '6h ago',
    read: true,
    type: 'mentor'
  },
  {
    id: 'n4',
    title: 'New Recommended Challenge (92% Match)',
    description: 'Water-quality monitoring in rural schools matches your IoT & ML skill profile.',
    timestamp: '1d ago',
    read: true,
    type: 'match'
  }
];

export const MOCK_SIMILAR_PROBLEMS_MAP = {
  'water': [
    { id: 'PRB-JH-02', title: 'Water shortage and high fluoride at Govt School, Latehar', district: 'Latehar', similarity: 93 },
    { id: 'PRB-JH-01', title: 'Irrigation access issue & dry borewells in nearby villages', district: 'Latehar', similarity: 88 }
  ],
  'irrigation': [
    { id: 'PRB-JH-01', title: 'Solar-powered irrigation for water-stressed farms', district: 'Latehar', similarity: 95 },
    { id: 'PRB-JH-04', title: 'Solar cold storage micro-hubs for vegetable growers', district: 'Ranchi', similarity: 81 }
  ],
  'health': [
    { id: 'PRB-JH-03', title: 'Better healthcare access in remote villages', district: 'Dumka', similarity: 91 }
  ]
};

export const CATEGORIES_WITH_ICONS = [
  { name: 'Education', nameHi: 'शिक्षा', icon: 'GraduationCap', count: 184, color: 'text-blue-700 bg-blue-50 border-blue-200' },
  { name: 'Healthcare', nameHi: 'स्वास्थ्य सेवा', icon: 'HeartPulse', count: 162, color: 'text-rose-700 bg-rose-50 border-rose-200' },
  { name: 'Agriculture', nameHi: 'कृषि एवं सिंचाई', icon: 'Wheat', count: 286, color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
  { name: 'Water', nameHi: 'पेयजल एवं जल संरक्षण', icon: 'Droplets', count: 242, color: 'text-cyan-700 bg-cyan-50 border-cyan-200' },
  { name: 'Sanitation', nameHi: 'स्वच्छता एवं अपशिष्ट', icon: 'Sparkles', count: 96, color: 'text-teal-700 bg-teal-50 border-teal-200' },
  { name: 'Environment', nameHi: 'पर्यावरण एवं वानिकी', icon: 'Trees', count: 118, color: 'text-green-700 bg-green-50 border-green-200' },
  { name: 'Rural Livelihood', nameHi: 'ग्रामीण आजीविका', icon: 'Users', count: 154, color: 'text-amber-700 bg-amber-50 border-amber-200' },
  { name: 'Accessibility', nameHi: 'सड़क एवं पहुंच', icon: 'Accessibility', count: 72, color: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
  { name: 'Infrastructure', nameHi: 'बुनियादी ढांचा', icon: 'Building2', count: 130, color: 'text-slate-700 bg-slate-50 border-slate-200' },
  { name: 'Public Services', nameHi: 'सार्वजनिक सेवाएं', icon: 'Landmark', count: 85, color: 'text-orange-700 bg-orange-50 border-orange-200' },
];
