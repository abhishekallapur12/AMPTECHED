import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PROGRAMS } from '../data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Filter, ArrowRight, Award, Clock, BarChart, Zap, CheckCircle2, Phone, Monitor, Briefcase, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Programs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryFromUrl || 'All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const categories = ['All', 'Computer Science', 'Electrical & Electronics', 'Mechanical', 'Civil', 'Management'];

  const filteredPrograms = PROGRAMS.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pb-24 bg-white">
      {/* Search & Action Bar */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-24 md:pt-32 pb-8 px-4 border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 md:gap-8">
           <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
              <h1 className="text-xl md:text-3xl font-black text-slate-900 uppercase tracking-tight border-l-4 border-primary pl-4 md:pl-6 py-1">Programs</h1>
              <div className="h-4 w-[1px] bg-slate-200 hidden md:block" />
              <p className="text-slate-400 text-[10px] md:text-sm font-bold uppercase tracking-tight">Real projects • Rubric evaluation • Career outcomes</p>
           </div>
           
           <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <div className="relative w-full md:w-80">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={16} />
                 <input 
                   type="text" 
                   placeholder="Search programs..."
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-6 text-sm focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all font-medium"
                 />
              </div>
              <Button className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 rounded-2xl px-8 py-5 md:py-7 font-black shadow-xl shadow-primary/20 flex items-center justify-center gap-3 text-sm md:text-base">
                 <Phone size={18} /> Talk to Expert
              </Button>
           </div>
        </div>
      </motion.section>

      {/* Category Tabs */}
      <section className="sticky top-[64px] md:top-[73px] z-30 bg-white border-b border-slate-100 px-2 md:px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-1 md:gap-2 overflow-x-auto no-scrollbar py-0.5">
           {categories.map(cat => {
             const count = cat === 'All' ? PROGRAMS.length : PROGRAMS.filter(p => p.category === cat).length;
             const Icon = cat === 'Computer Science' ? Monitor : 
                         cat === 'Electrical & Electronics' ? Zap :
                         cat === 'Mechanical' ? Briefcase :
                         cat === 'Civil' ? Globe :
                         cat === 'Management' ? Users : 
                         Search;

             return (
               <button
                 key={cat}
                 onClick={() => handleCategoryChange(cat)}
                 className={`group flex items-center gap-2 md:gap-3 px-4 md:px-6 py-4 md:py-5 border-b-2 transition-all whitespace-nowrap shrink-0 ${
                   activeCategory === cat 
                   ? 'border-primary text-primary' 
                   : 'border-transparent text-slate-400 hover:text-slate-600'
                 }`}
               >
                 <Icon size={16} className={activeCategory === cat ? 'text-primary' : 'text-slate-400 group-hover:text-slate-600'} />
                 <span className="text-[11px] md:text-sm font-black uppercase tracking-tight">{cat}</span>
                 <span className="text-[9px] font-black opacity-40">{count}</span>
               </button>
             );
           })}
        </div>
      </section>

      {/* Program Grid */}
      <section className="py-12 px-4 bg-slate-50/50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          {filteredPrograms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100">
              {filteredPrograms.map((program, idx) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                >
                  <Link
                    to={`/programs/${program.id}`}
                    className="bg-white p-6 md:p-10 hover:bg-slate-50 transition-colors group flex flex-col sm:flex-row gap-6 h-full"
                  >
                    <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-3">
                       {program.mainIcon ? (
                         <img src={program.mainIcon} alt="" className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                       ) : (
                         <Zap className="text-slate-200" size={24} />
                       )}
                    </div>
                    <div className="flex flex-col gap-1">
                       <h3 className="text-2xl font-black text-slate-800 tracking-tight group-hover:text-primary transition-colors">{program.title}</h3>
                       <p className="text-slate-400 text-sm font-bold mb-4">{program.tagline}</p>
                       <div className="flex flex-wrap gap-2">
                          {program.badges.map(badge => (
                            <span key={badge} className="px-3 py-1 rounded-md border border-slate-100 bg-slate-50 text-[10px] font-black uppercase text-slate-400 group-hover:border-primary/20 group-hover:text-primary transition-colors">{badge}</span>
                          ))}
                       </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="text-slate-400 text-xl italic font-medium">No programs found matching your search criteria.</p>
              <Button variant="link" className="mt-4 text-primary font-bold" onClick={() => {setActiveCategory('All'); setSearchQuery('');}}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Pricing / Plan Section */}
      <section className="py-24 px-4 bg-slate-50 border-y border-slate-100">
         <div className="max-w-7xl mx-auto flex flex-col gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 text-center items-center"
            >
               <Badge className="bg-primary/10 text-primary border-none px-4 py-1 uppercase tracking-widest font-black text-xs">Pathways</Badge>
               <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">Choose Your Trajectory.</h2>
               <p className="text-slate-500 text-lg font-medium max-w-xl italic">Premium plans designed for different career stages, from foundations to global placements.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
               {/* Foundation Plan */}
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 whileHover={{ y: -10 }}
                 className="bg-white p-8 md:p-12 rounded-[32px] md:rounded-[50px] border border-slate-200 shadow-sm flex flex-col gap-8 md:gap-10 relative overflow-hidden"
               >
                  <div className="flex flex-col gap-2">
                     <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">Career Foundation</h3>
                     <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Fundamentals + Practical Learning</p>
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                     <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">₹7,000</span>
                     <span className="text-slate-400 font-bold uppercase text-[10px]">One-time</span>
                  </div>

                  <ul className="flex flex-col gap-5">
                     {[
                        'Fundamentals + Practical Learning',
                        'Live Mentorship',
                        'Project-based Learning',
                        'Certification Preparation',
                        'Resume Building',
                        'Community Access'
                     ].map(feat => (
                        <li key={feat} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                           <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-primary"><CheckCircle2 size={12} /></div>
                           {feat}
                        </li>
                     ))}
                  </ul>

                  <Button variant="outline" className="mt-auto border-slate-200 hover:bg-slate-900 hover:text-white rounded-2xl py-8 font-black text-lg">
                     Get Started
                  </Button>
               </motion.div>

               {/* Accelerator Plan */}
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 whileHover={{ y: -10 }}
                 className="bg-slate-900 p-8 md:p-12 rounded-[32px] md:rounded-[50px] border border-slate-800 shadow-2xl flex flex-col gap-8 md:gap-10 relative overflow-hidden text-white"
               >
                  <div className="absolute top-8 right-8">
                     <Badge className="bg-primary text-white border-none px-4 py-1 uppercase tracking-widest font-black text-[10px] animate-pulse">Most Popular</Badge>
                  </div>

                  <div className="flex flex-col gap-2">
                     <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">Placement Accelerator</h3>
                     <p className="text-white/40 font-bold uppercase tracking-widest text-[10px]">Everything in Foundation + Advanced Support</p>
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                     <span className="text-4xl md:text-5xl font-black tracking-tighter">₹15,000</span>
                     <span className="text-white/40 font-bold uppercase text-[10px]">Outcome Driven</span>
                  </div>

                  <ul className="flex flex-col gap-5">
                     {[
                        'Mock Interviews',
                        'Placement Preparation',
                        'Advanced Projects',
                        'Career Mentorship',
                        'Internship Support',
                        'Industry Networking'
                     ].map(feat => (
                        <li key={feat} className="flex items-center gap-3 text-white/70 font-medium text-sm">
                           <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-primary"><Zap size={10} fill="currentColor" /></div>
                           {feat}
                        </li>
                     ))}
                  </ul>

                  <Button className="mt-auto bg-primary text-white hover:bg-primary/90 rounded-2xl py-8 font-black text-lg shadow-xl shadow-primary/20">
                     Enroll in Accelerator
                  </Button>

                  <div className="absolute -bottom-20 -right-20 opacity-5 pointer-events-none">
                     <Zap size={300} />
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Support CTA */}
      <section className="py-24 px-4 text-slate-900">
         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-7xl mx-auto rounded-[32px] md:rounded-[60px] bg-primary text-white p-8 md:p-20 text-center flex flex-col items-center shadow-2xl shadow-primary/20 relative overflow-hidden"
         >
            <h2 className="text-3xl md:text-6xl font-black mb-6 uppercase tracking-tight relative z-10">Unsure which program is for you?</h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl font-medium relative z-10">Our counselors are available for a 1-on-1 career mapping session.</p>
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-10 md:px-12 py-6 md:py-8 rounded-2xl font-bold text-lg relative z-10 shadow-xl">
               Book a Free Session
            </Button>
            <Zap className="absolute bottom-[-100px] right-[-50px] text-white opacity-10 rotate-12" size={400} />
         </motion.div>
      </section>
    </div>
  );
}
