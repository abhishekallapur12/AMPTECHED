export interface Module {
  id: string;
  title: string;
  topicsCount: number;
  topics: string[];
  deliverables?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface Program {
  id: string;
  title: string;
  tagline: string;
  summary?: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Computer Science' | 'Electrical & Electronics' | 'Mechanical' | 'Civil' | 'Management';
  fees: string;
  badges: string[];
  curriculum?: Module[];
  projects?: Project[];
  technologies?: { name: string; logo: string }[];
  mainIcon?: string;
}

export const PROGRAMS: Program[] = [
  // Computer Science
  { 
    id: 'cs-ai', 
    title: 'Artificial Intelligence', 
    tagline: 'Applied AI foundations', 
    summary: 'Master neural networks, deep learning, and generative AI models using Python and TensorFlow.',
    duration: '6 Months', 
    level: 'Advanced', 
    category: 'Computer Science', 
    fees: '₹7,000', 
    badges: ['Certification', 'Expert-led'],
    mainIcon: 'https://png.pngtree.com/png-clipart/20240508/original/pngtree-artificial-intelligence-logo-png-image_15034965.png',
    technologies: [
      { name: 'Python', logo: 'https://cdn.simpleicons.org/python' },
      { name: 'TensorFlow', logo: 'https://cdn.simpleicons.org/tensorflow' },
      { name: 'PyTorch', logo: 'https://cdn.simpleicons.org/pytorch' }
    ],
    curriculum: [
      { id: 'M01', title: 'AI Foundations', topicsCount: 3, topics: ['Neural Networks', 'Linear Algebra', 'Propability'], deliverables: ['Baseline Model'] },
      { id: 'M02', title: 'Deep Learning', topicsCount: 5, topics: ['CNNs', 'RNNs', 'Transformers'], deliverables: ['Image Classifier'] },
    ],
    projects: [
      { id: 'P01', title: 'Self-Driving Car Simulation', description: 'Build a lane detection system using computer vision.', skills: ['Python', 'OpenCV'] }
    ]
  },
  { 
    id: 'cs-fs', 
    title: 'Full Stack Web Development', 
    tagline: 'Build and ship web apps', 
    summary: 'Comprehensive path covering modern frontend, scalable backends, and full-stack architecture.',
    duration: '5 Months', 
    level: 'Intermediate', 
    category: 'Computer Science', 
    fees: '₹7,000', 
    badges: ['Certification', 'Expert-led'],
    mainIcon: 'https://cdn.simpleicons.org/react',
    technologies: [
      { name: 'React', logo: 'https://cdn.simpleicons.org/react' },
      { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs' },
      { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript' }
    ],
    curriculum: [
      { id: 'M01', title: 'Frontend Mastery', topicsCount: 8, topics: ['React', 'TypeScript', 'Tailwind'], deliverables: ['Personal Portfolio'] },
      { id: 'M02', title: 'Backend Systems', topicsCount: 6, topics: ['Node.js', 'PostgreSQL', 'Redis'], deliverables: ['Scalable API'] },
    ]
  },
  { 
    id: 'cs-cy', 
    title: 'Cyber Security', 
    tagline: 'Defense, fundamentals, practice', 
    summary: 'Protect systems and networks through ethical hacking, threat hunting, and security auditing.',
    duration: '4 Months', 
    level: 'Intermediate', 
    category: 'Computer Science', 
    fees: '₹7,000', 
    badges: ['Certification', 'Expert-led'],
    mainIcon: 'https://cdn.simpleicons.org/fortinet',
    technologies: [
      { name: 'Linux', logo: 'https://cdn.simpleicons.org/linux' },
      { name: 'Wireshark', logo: 'https://cdn.simpleicons.org/wireshark' },
      { name: 'Metasploit', logo: 'https://cdn.simpleicons.org/metasploit' }
    ],
    curriculum: [
      { id: 'M01', title: 'Security Fundamentals', topicsCount: 5, topics: ['Networking Basics', 'Crypography', 'Linux Administration'], deliverables: ['Infrastructure Audit'] },
      { id: 'M02', title: 'Ethical Hacking', topicsCount: 7, topics: ['Vulnerability Assessment', 'Penetration Testing', 'NMAP Mastery'], deliverables: ['Pentest Report'] },
      { id: 'M03', title: 'Incident Response', topicsCount: 4, topics: ['Forensics', 'Threat Hunting', 'SIEM Tools'], deliverables: ['Response Plan'] },
    ]
  },
  { 
    id: 'cs-do', 
    title: 'DevOps', 
    tagline: 'CI/CD, deployments, reliability', 
    summary: 'Automate infrastructure and software delivery pipelines using cloud-native tools and practices.',
    duration: '4 Months', 
    level: 'Advanced', 
    category: 'Computer Science', 
    fees: '₹7,000', 
    badges: ['Certification', 'Expert-led'],
    mainIcon: 'https://cdn.simpleicons.org/docker',
    technologies: [
      { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker' },
      { name: 'Kubernetes', logo: 'https://cdn.simpleicons.org/kubernetes' },
      { name: 'Terraform', logo: 'https://cdn.simpleicons.org/terraform' }
    ],
    curriculum: [
      { id: 'M01', title: 'Containerization', topicsCount: 4, topics: ['Docker Basics', 'Images & Layers', 'Networking'], deliverables: ['Multi-container App'] },
      { id: 'M02', title: 'Orchestration', topicsCount: 6, topics: ['Kubernetes Architecture', 'Pods & Services', 'Helm Charts'], deliverables: ['K8s Cluster Setup'] },
      { id: 'M03', title: 'CI/CD Pipelines', topicsCount: 5, topics: ['GitHub Actions', 'Jenkins', 'Automated Testing'], deliverables: ['Zero-downtime Pipeline'] },
    ]
  },
  { 
    id: 'cs-ds', 
    title: 'Data Science', 
    tagline: 'Data to insights and systems', 
    summary: 'Extract meaningful insights from big data using statistical modeling and machine learning.',
    duration: '6 Months', 
    level: 'Advanced', 
    category: 'Computer Science', 
    fees: '₹7,000', 
    badges: ['Certification', 'Expert-led'],
    mainIcon: 'https://cdn.simpleicons.org/pandas',
    technologies: [
      { name: 'Python', logo: 'https://cdn.simpleicons.org/python' },
      { name: 'Jupyter', logo: 'https://cdn.simpleicons.org/jupyter' },
      { name: 'PowerBI', logo: 'https://cdn.simpleicons.org/powerbi' }
    ],
    curriculum: [
      { id: 'M01', title: 'Statistical Analysis', topicsCount: 5, topics: ['Hypothesis Testing', 'Regression', 'ANOVA'], deliverables: ['Insights Dashboard'] },
      { id: 'M02', title: 'Machine Learning Pipelines', topicsCount: 6, topics: ['Feature Engineering', 'Model Selection', 'Cross Validation'], deliverables: ['Predictive Model'] },
    ]
  },
  // Electrical & Electronics
  { 
    id: 'ee-iot', 
    title: 'Internet of Things', 
    tagline: 'Smart connectivity & sensors', 
    summary: 'Build intelligent hardware that interacts with the cloud and cloud-scale data streams.',
    duration: '4 Months', 
    level: 'Intermediate', 
    category: 'Electrical & Electronics', 
    fees: '₹7,000', 
    badges: ['Certification', 'Expert-led'],
    mainIcon: 'https://cdn.simpleicons.org/arduino',
    technologies: [
      { name: 'Arduino', logo: 'https://cdn.simpleicons.org/arduino' },
      { name: 'Raspberry Pi', logo: 'https://cdn.simpleicons.org/raspberrypi' },
      { name: 'HiveMQ', logo: 'https://cdn.simpleicons.org/hivemq' }
    ],
    curriculum: [
      { id: 'M01', title: 'Sensor Integration', topicsCount: 4, topics: ['Analog vs Digital', 'I2C/SPI Protocols'], deliverables: ['Sensor Suite Prototype'] },
      { id: 'M02', title: 'Cloud Connectivity', topicsCount: 5, topics: ['MQTT', 'REST APIs', 'Data Logging'], deliverables: ['Remote Monitoring App'] },
    ]
  },
  // Mechanical
  { 
    id: 'me-cad', 
    title: 'Industrial CAD & Design', 
    tagline: 'Advanced modeling for manufacturing', 
    summary: 'Master 3D design and engineering workflows for complex industrial products and systems.',
    duration: '4 Months', 
    level: 'Intermediate', 
    category: 'Mechanical', 
    fees: '₹7,000', 
    badges: ['Certification', 'Expert-led'],
    mainIcon: 'https://cdn.simpleicons.org/autodesk',
    technologies: [
        { name: 'AutoCAD', logo: 'https://cdn.simpleicons.org/autodesk' },
        { name: 'SolidWorks', logo: 'https://cdn.simpleicons.org/solidworks' }
    ],
    curriculum: [
      { id: 'M01', title: '3D Modeling Foundations', topicsCount: 6, topics: ['Sketching', 'Extrude/Revolve', 'Assemblies'], deliverables: ['Mechanical Assembly'] },
      { id: 'M02', title: 'Simulation & Analysis', topicsCount: 4, topics: ['FEA Basics', 'Stress Analysis'], deliverables: ['Performance Report'] },
    ]
  },
  // Civil
  { 
    id: 'cv-bim', 
    title: 'BIM & Construction MGMT', 
    tagline: 'Modern digital construction', 
    summary: 'Master Building Information Modeling (BIM) workflows and digital project management for large-scale infrastructure.',
    duration: '5 Months', 
    level: 'Intermediate', 
    category: 'Civil', 
    fees: '₹7,000', 
    badges: ['Certification', 'Expert-led'],
    mainIcon: 'https://cdn.simpleicons.org/autodesk',
    technologies: [
        { name: 'Revit', logo: 'https://cdn.simpleicons.org/autodesk' },
        { name: 'Bentley', logo: 'https://cdn.simpleicons.org/bentley' }
    ],
    curriculum: [
      { id: 'M01', title: 'BIM Modeling', topicsCount: 5, topics: ['Architectural Modeling', 'Structural Coordination'], deliverables: ['BIM Execution Plan'] },
      { id: 'M02', title: 'Project Scheduling', topicsCount: 4, topics: ['4D Simulation', 'Resource Leveling'], deliverables: ['Project Schedule'] },
    ]
  },
  // Management (User provided detailed syllabus for these)
  { 
    id: 'm-fi', 
    title: 'Finance', 
    tagline: 'Learn finance with a decision-first approach.', 
    summary: 'Core corporate finance, treasury operations, and risk management for modern professionals.',
    duration: '8-Week Accelerated', 
    level: 'Intermediate', 
    category: 'Management', 
    fees: '₹7,499', 
    badges: ['Bestseller', 'Expert-led'],
    mainIcon: 'https://cdn.simpleicons.org/wise',
    technologies: [
        { name: 'Excel', logo: 'https://cdn.simpleicons.org/microsoftexcel' },
        { name: 'Tally', logo: 'https://cdn.simpleicons.org/tally' }
    ],
    curriculum: [
      { id: 'M01', title: 'Corporate Finance Fundamentals', topicsCount: 3, topics: ['Funding choices and capital raising', 'Capital structure and cost of capital basics', 'Credit assessment and credit decision workflow'], deliverables: ['Skill checkpoint', 'Setup + onboarding'] },
      { id: 'M02', title: 'Treasury & Financial Operations', topicsCount: 2, topics: ['Cash management', 'Working capital optimization'] },
      { id: 'M03', title: 'Corporate Portfolio & Investment Policy', topicsCount: 2, topics: ['Asset allocation', 'Investment mandates'] },
      { id: 'M04', title: 'Financial Ratio Applications', topicsCount: 2, topics: ['Ratio analysis', 'Benchmarking'] },
      { id: 'M05', title: 'Cash Flow & Liquidity Management', topicsCount: 2, topics: ['Forecasting', 'Buffer management'] },
      { id: 'M06', title: 'Investments & Portfolio Management', topicsCount: 2, topics: ['Equity analysis', 'Bond valuation'] },
      { id: 'M07', title: 'Enterprise Risk Management', topicsCount: 2, topics: ['Hedging', 'Operational risk'] },
      { id: 'M08', title: 'Financial Planning & Wealth Management', topicsCount: 2, topics: ['Tax planning', 'Retirement strategy'] },
      { id: 'M09', title: 'International Finance', topicsCount: 2, topics: ['Forex', 'Cross-border trade'] },
      { id: 'M10', title: 'FinTech & Digital Finance', topicsCount: 2, topics: ['Blockchain', 'Digital payments'] },
      { id: 'M11', title: 'Ethics, Governance & Standards', topicsCount: 2, topics: ['IFRS', 'ESG'] },
      { id: 'M12', title: 'Practical Labs & Case Work', topicsCount: 2, topics: ['Valuation modeling', 'M&A cases'] },
      { id: 'M13', title: 'Advanced Finance Topics', topicsCount: 2, topics: ['Derivatives', 'Real Estate'] },
    ]
  },
  { 
    id: 'm-dm', 
    title: 'Digital Marketing', 
    tagline: 'Learn digital marketing with a performance mindset.', 
    summary: 'Master performance marketing, SEO, and social strategy to drive measurable business growth.',
    duration: '8-Week Accelerated', 
    level: 'Beginner', 
    category: 'Management', 
    fees: '₹7,499', 
    badges: ['Bestseller', 'Expert-led'],
    mainIcon: 'https://cdn.simpleicons.org/googleads',
    technologies: [
        { name: 'Google Ads', logo: 'https://cdn.simpleicons.org/googleads' },
        { name: 'Meta', logo: 'https://cdn.simpleicons.org/meta' },
        { name: 'Mailchimp', logo: 'https://cdn.simpleicons.org/mailchimp' }
    ],
    curriculum: [
      { id: 'M01', title: 'Digital Marketing Foundations', topicsCount: 2, topics: ['Digital vs traditional channels', 'Modern marketing trends'], deliverables: ['Skill checkpoint', 'Setup + onboarding'] },
      { id: 'M02', title: 'Strategy, Planning & Positioning', topicsCount: 2, topics: ['Targeting', 'USP design'] },
      { id: 'M03', title: 'Search Engine Optimization (SEO)', topicsCount: 3, topics: ['On-page SEO', 'Technical SEO', 'Link building'] },
      { id: 'M04', title: 'Content Marketing Systems', topicsCount: 3, topics: ['Content strategy', 'CMS tools', 'Distribution'] },
      { id: 'M05', title: 'Social Media Strategy & Growth', topicsCount: 2, topics: ['Community build', 'Viral loops'] },
      { id: 'M06', title: 'Paid Ads (PPC) Fundamentals', topicsCount: 3, topics: ['Google Ads', 'Meta Ads', 'Retargeting'] },
      { id: 'M07', title: 'Email Marketing & Automation', topicsCount: 2, topics: ['DRIP campaigns', 'Segmentation'] },
      { id: 'M08', title: 'Analytics & Measurement', topicsCount: 2, topics: ['GA4', 'Conversion tracking'] },
    ],
    projects: [
      { id: 'P01', title: 'Lead Generation Funnel', description: 'Design a lead gen campaign using landing pages, lead magnets, and tracking.', skills: ['Lead gen', 'Funnel optimization', 'CRM tools'] },
      { id: 'P02', title: 'SEO Strategy Buildout', description: 'Create an SEO plan to increase rankings and organic traffic.', skills: ['SEO', 'Keyword research', 'Link building'] },
      { id: 'P03', title: 'Landing Page CRO (A/B Testing)', description: 'Increase conversion rate by running experiments.', skills: ['A/B testing', 'UX design', 'Web optimization'] },
    ]
  },
  { 
    id: 'm-sm', 
    title: 'Stock Market', 
    tagline: 'Learn investing and trading with strong fundamentals.', 
    summary: 'Deep dive into market dynamics, technical analysis, and portfolio management strategies.',
    duration: '8-Week Accelerated', 
    level: 'Beginner', 
    category: 'Management', 
    fees: '₹7,499', 
    badges: ['Expert-led'],
    mainIcon: 'https://cdn.simpleicons.org/tradingview',
    technologies: [
        { name: 'TradingView', logo: 'https://cdn.simpleicons.org/tradingview' },
        { name: 'Excel', logo: 'https://cdn.simpleicons.org/microsoftexcel' }
    ],
    curriculum: [
      { id: 'M01', title: 'Stock Market Foundations', topicsCount: 2, topics: ['Financial markets overview', 'Primary vs secondary market'], deliverables: ['Skill checkpoint', 'Setup + onboarding'] },
      { id: 'M02', title: 'Market Instruments & Products', topicsCount: 4, topics: ['Equities', 'Futures', 'Options', 'Mutual Funds'] },
      { id: 'M03', title: 'Market Participants & Roles', topicsCount: 2, topics: ['Brokers', 'Exchanges'] },
      { id: 'M04', title: 'How Trading Works (Operations)', topicsCount: 2, topics: ['Demat', 'Order types'] },
      { id: 'M05', title: 'Fundamental Analysis', topicsCount: 2, topics: ['Balance Sheets', 'P&L'] },
      { id: 'M06', title: 'Technical Analysis', topicsCount: 3, topics: ['Candlesticks', 'Indicators', 'Patterns'] },
    ]
  },
  { 
    id: 'm-ba', 
    title: 'Business Analytics', 
    tagline: 'Learn business analytics focused on decision-making.', 
    summary: 'Master the data-driven decision-making process using SQL, statistics, and visualization tools.',
    duration: '8-Week Accelerated', 
    level: 'Intermediate', 
    category: 'Management', 
    fees: '₹7,499', 
    badges: ['Expert-led'],
    mainIcon: 'https://cdn-icons-png.flaticon.com/512/7048/7048970.png',
    technologies: [
        { name: 'Tableau', logo: 'https://cdn.simpleicons.org/tableau' },
        { name: 'SQL', logo: 'https://cdn.simpleicons.org/sqlite' }
    ],
    curriculum: [
      { id: 'M01', title: 'Analytics Basics & Mindset', topicsCount: 3, topics: ['Analytics lifecycle', 'Types of analytics', 'Industry examples'], deliverables: ['Skill checkpoint', 'Setup + onboarding'] },
      { id: 'M02', title: 'Statistics for Business Decisions', topicsCount: 3, topics: ['Hypothesis testing', 'Probability', 'Distributions'] },
      { id: 'M03', title: 'Data Sourcing & Management', topicsCount: 3, topics: ['SQL Basics', 'ETL', 'Data lakes'] },
      { id: 'M13', title: 'Case Studies & Projects', topicsCount: 2, topics: ['Retail cases', 'Supply chain cases'] },
    ],
    projects: [
      { id: 'P01', title: 'Hospital Resource Utilization', description: 'Track patient inflow and bed occupancy to improve operations.', skills: ['Dashboarding', 'Time Series', 'Data Cleaning'] },
      { id: 'P06', title: 'Logistics Optimization', description: 'Use delivery route + traffic patterns to reduce fuel spend.', skills: ['Optimization Algorithms', 'Geo Analytics', 'Cost Analysis'] },
    ]
  },
  { 
    id: 'm-hr', 
    title: 'Human Resource', 
    tagline: 'Learn HR the way organizations run it.', 
    summary: 'Learn strategic HR management, talent acquisition, and organizational development.',
    duration: '8-Week Accelerated', 
    level: 'Beginner', 
    category: 'Management', 
    fees: '₹7,499', 
    badges: ['Bestseller', 'Expert-led'],
    mainIcon: 'https://cdn-icons-png.freepik.com/256/18999/18999669.png?semt=ais_white_label',
    technologies: [
        { name: 'LinkedIn', logo: 'https://cdn.simpleicons.org/linkedin' },
        { name: 'Workday', logo: 'https://cdn.simpleicons.org/workday' }
    ],
    curriculum: [
      { id: 'M01', title: 'HRM Fundamentals', topicsCount: 2, topics: ['Core HR functions', 'Evolution of HR'], deliverables: ['Skill checkpoint', 'Setup + onboarding'] },
      { id: 'M02', title: 'Talent Acquisition & Selection', topicsCount: 2, topics: ['Sourcing', 'Interviewing'] },
      { id: 'M03', title: 'Learning & Development', topicsCount: 2, topics: ['Gap analysis', 'Training design'] },
    ]
  },
];

export const CERTIFICATIONS = [
  { name: 'Microsoft', logo: 'https://cdn.simpleicons.org/microsoft/00A4EF', description: 'Global leader in cloud and software cloud solutions.' },
  { name: 'IBM', logo: 'https://cdn.simpleicons.org/ibm/052d65', description: 'Enterprise computing and AI industry standards.' },
  { name: 'Cisco', logo: 'https://cdn.simpleicons.org/cisco/1ba0d8', description: 'Networking and infrastructure certification authority.' },
  { name: 'AWS', logo: 'https://cdn.simpleicons.org/amazonaws/232F3E', description: 'Market-leading cloud computing credentials.' },
  { name: 'Google', logo: 'https://cdn.simpleicons.org/google/4285f4', description: 'Cloud, Data, and Marketing certifications.' },
  { name: 'Meta', logo: 'https://cdn.simpleicons.org/meta/0668e1', description: 'Digital marketing and front-end engineering.' },
  { name: 'Adobe', logo: 'https://cdn.simpleicons.org/adobe/ff0000', description: 'Creative design and digital experience standards.' },
  { name: 'Autodesk', logo: 'https://cdn.simpleicons.org/autodesk/0696d7', description: 'Engineering design and 3D modeling.' },
  { name: 'Apple', logo: 'https://cdn.simpleicons.org/apple/000000', description: 'Swift development and ecosystem design.' },
  { name: 'Unity', logo: 'https://cdn.simpleicons.org/unity/000000', description: 'Game development and real-time 3D.' },
  { name: 'Oracle', logo: 'https://cdn.simpleicons.org/oracle/f80000', description: 'Database and enterprise Java systems.' },
  { name: 'SAP', logo: 'https://cdn.simpleicons.org/sap/008fd3', description: 'Enterprise resource planning and management.' },
  { name: 'Intel', logo: 'https://cdn.simpleicons.org/intel/0071c5', description: 'Edge AI and hardware-level computing.' },
  { name: 'NVIDIA', logo: 'https://cdn.simpleicons.org/nvidia/76b900', description: 'Deep learning and GPU-accelerated computing.' },
  { name: 'Salesforce', logo: 'https://cdn.simpleicons.org/salesforce/00A1E0', description: 'CRM and cloud enterprise solutions.' },
];

export const TESTIMONIALS = [
  {
    name: 'Rahul Sharma',
    role: 'Full Stack Developer',
    review: 'AMPTECH transformed my career. The project-based learning approach helped me land a job at a top startup.',
    rating: 5,
    company: 'TCS',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop'
  },
  {
    name: 'Priya Patel',
    role: 'Data Scientist',
    review: 'The mentorship here is unmatched. Real-world projects gave me the confidence to switch from a non-tech background.',
    rating: 5,
    company: 'Infosys',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop'
  },
  {
    name: 'Ankit Gupta',
    role: 'Product Manager',
    review: 'Industry certifications paired with practical rubric evaluations made my resume stand out to recruiter.',
    rating: 5,
    company: 'Accenture',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop'
  }
];

export const PARTNER_LOGOS = [
  { name: 'TCS', logo: 'https://cdn.simpleicons.org/tata/646464' },
  { name: 'Infosys', logo: 'https://cdn.simpleicons.org/infosys/007cc3' },
  { name: 'Wipro', logo: 'https://cdn.simpleicons.org/wipro/000000' },
  { name: 'Accenture', logo: 'https://cdn.simpleicons.org/accenture/a100ff' },
  { name: 'Capgemini', logo: 'https://cdn.simpleicons.org/capgemini/0070ad' },
  { name: 'Cognizant', logo: 'https://cdn.simpleicons.org/cognizant/0033a0' },
  { name: 'IBM', logo: 'https://cdn.simpleicons.org/ibm/052d65' },
  { name: 'Deloitte', logo: 'https://cdn.simpleicons.org/deloitte/86bc25' },
  { name: 'Tech Mahindra', logo: 'https://cdn.simpleicons.org/techmahindra/e41b1d' },
  { name: 'HCL', logo: 'https://cdn.simpleicons.org/hcltech/00569c' }
];
