import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, MapPin, Briefcase, DollarSign, Clock, Building2, Lock, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const DUMMY_JOBS = [
  {
    id: 1,
    title: 'Senior Full Stack Engineer',
    company: 'TechFlow Systems',
    logo: 'https://cdn.simpleicons.org/react/61DAFB',
    location: 'Bangalore / Remote',
    salary: '18 - 24 LPA',
    type: 'Full-time',
    posted: '2 hours ago',
    category: 'Computer Science'
  },
  {
    id: 2,
    title: 'Data Analyst (Marketing)',
    company: 'Global Retail Corp',
    logo: 'https://cdn.simpleicons.org/tableau/E97627',
    location: 'Pune',
    salary: '8 - 12 LPA',
    type: 'Full-time',
    posted: '5 hours ago',
    category: 'Management'
  },
  {
    id: 3,
    title: 'DevOps & Site Reliability Engineer',
    company: 'CloudScale AI',
    logo: 'https://cdn.simpleicons.org/docker/2496ED',
    location: 'Remote',
    salary: '15 - 20 LPA',
    type: 'Contract',
    posted: '1 day ago',
    category: 'Computer Science'
  },
  {
    id: 4,
    title: 'Project Coordinator',
    company: 'Infrastructure Build',
    logo: 'https://cdn.simpleicons.org/autodesk/0696D7',
    location: 'Hyderabad',
    salary: '6 - 9 LPA',
    type: 'Full-time',
    posted: '3 days ago',
    category: 'Civil'
  },
  {
    id: 5,
    title: 'Embedded Systems Engineer',
    company: 'Electra Dynamics',
    logo: 'https://cdn.simpleicons.org/arduino/00979D',
    location: 'Chennai',
    salary: '10 - 14 LPA',
    type: 'Full-time',
    posted: '4 days ago',
    category: 'Electrical'
  }
];

export default function JobPortal() {
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const handleApply = () => {
    setShowLoginPrompt(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="flex flex-col gap-4">
                <Badge className="w-fit bg-primary/10 text-primary border-none text-[10px] uppercase font-black tracking-widest px-4 py-1">Career Hub</Badge>
                <h1 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter italic">Job Portal.</h1>
                <p className="text-slate-500 font-medium italic text-lg lg:text-xl max-w-2xl">
                    "Bridging the talent gap with exclusive opportunities from our global hiring network."
                </p>
            </div>
            <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm grow max-w-md">
                <Search className="ml-4 text-slate-400" size={20} />
                <input 
                    type="text" 
                    placeholder="Search roles, companies..." 
                    className="bg-transparent border-none outline-none p-3 w-full text-slate-900"
                />
            </div>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            {DUMMY_JOBS.map((job, idx) => (
                <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                    <Card className="bg-white border-slate-200 hover:border-primary/20 hover:shadow-xl transition-all group overflow-hidden rounded-[32px]">
                        <CardContent className="p-8">
                            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                                {/* Company Logo */}
                                <div className="w-20 h-20 shrink-0 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-4 group-hover:scale-105 transition-transform">
                                    <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
                                </div>

                                {/* Job Details */}
                                <div className="flex-grow flex flex-col gap-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight group-hover:text-primary transition-colors">{job.title}</h3>
                                            <Badge variant="outline" className="text-[9px] uppercase font-black text-slate-400 border-slate-200">{job.type}</Badge>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                                            <span className="flex items-center gap-2 text-slate-500 text-sm font-bold"><Building2 size={14} className="text-primary" /> {job.company}</span>
                                            <span className="flex items-center gap-2 text-slate-500 text-sm font-bold"><MapPin size={14} className="text-primary" /> {job.location}</span>
                                            <span className="flex items-center gap-2 text-slate-500 text-sm font-bold"><DollarSign size={14} className="text-primary" /> {job.salary}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-6 pt-4 border-t border-slate-50">
                                        <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400"><Briefcase size={12} /> {job.category}</span>
                                        <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400"><Clock size={12} /> Posted {job.posted}</span>
                                    </div>
                                </div>

                                {/* Action */}
                                <div className="w-full md:w-auto mt-4 md:mt-0">
                                    <Button 
                                        onClick={handleApply}
                                        className="w-full md:w-auto bg-slate-950 hover:bg-primary text-white rounded-2xl px-10 py-7 font-black tracking-widest uppercase text-xs shadow-xl shadow-slate-200 transition-all hover:-translate-y-1 active:scale-95"
                                    >
                                        Apply Now
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>

        {/* Empty State / More Jobs */}
        <div className="mt-12 text-center">
            <p className="text-slate-400 italic font-medium">New roles updated every 24 hours.</p>
        </div>
      </div>

      {/* Login Prompt Modal / Overlay */}
      {showLoginPrompt && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                onClick={() => setShowLoginPrompt(false)}
            />
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                className="relative bg-white rounded-[40px] shadow-2xl p-10 md:p-14 max-w-lg w-full overflow-hidden border border-slate-100"
            >
                <div className="absolute top-0 right-0 p-8 opacity-[0.05] pointer-events-none">
                    <Lock size={200} className="text-primary" />
                </div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-[32px] bg-primary/10 flex items-center justify-center mb-8">
                        <Lock className="text-primary" size={32} />
                    </div>
                    
                    <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">Verification Required.</h2>
                    <p className="text-slate-500 font-medium leading-relaxed mb-10">
                        "Job applications are exclusive to enrolled AMPTECH students and certified alumni. Please sign in to proceed."
                    </p>
                    
                    <div className="w-full flex flex-col gap-4">
                        <Button className="w-full bg-primary text-white hover:bg-primary/90 font-black uppercase tracking-widest py-7 rounded-2xl shadow-xl shadow-primary/20">
                            Sign In / Enroll
                        </Button>
                        <Button 
                            variant="ghost" 
                            onClick={() => setShowLoginPrompt(false)}
                            className="w-full text-slate-400 font-bold uppercase tracking-widest text-[10px] hover:bg-slate-50"
                        >
                            Return to Portal
                        </Button>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-slate-100 w-full">
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Login Access Blocked for Public</p>
                    </div>
                </div>
            </motion.div>
        </div>
      )}
    </div>
  );
}
