import { useParams, Link } from 'react-router-dom';
import { PROGRAMS } from '../data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  ArrowLeft, 
  Clock, 
  Target, 
  Users, 
  Award, 
  Zap, 
  BookOpen,
  Calendar,
  Layers,
  ChevronRight,
  ShieldCheck,
  Search,
  ChevronDown,
  Monitor,
  Briefcase,
  Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function ProgramDetails() {
  const { id } = useParams();
  const program = PROGRAMS.find(p => p.id === id);
  const [expandedModule, setExpandedModule] = useState<string | null>('M01');
  const [curriculumSearch, setCurriculumSearch] = useState('');

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">Program Not Found</h1>
        <Button variant="outline" render={<Link to="/programs" />}>
          <ArrowLeft className="mr-2" /> Back to Programs
        </Button>
      </div>
    );
  }

  const filteredCurriculum = program.curriculum?.filter(m => 
    m.title.toLowerCase().includes(curriculumSearch.toLowerCase()) || 
    m.topics.some(t => t.toLowerCase().includes(curriculumSearch.toLowerCase()))
  );

  return (
    <div className="pb-24 bg-white selection:bg-primary/20">
      {/* Hero Header */}
      <section className="relative pt-32 pb-24 px-4 bg-slate-950 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full -mr-96 -mt-96" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-grow flex flex-col gap-8"
          >
            <div className="flex items-center gap-4 text-white/40 text-xs font-black uppercase tracking-[0.3em]">
               <Link to="/programs" className="hover:text-primary transition-colors">Programs</Link>
               <ChevronRight size={14} />
               <span className="text-white/80">{program.title}</span>
            </div>
            
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[1] md:leading-[0.9]">
               {program.title}
            </h1>
            
            <p className="text-lg md:text-2xl text-white/50 font-medium max-w-3xl leading-relaxed">
               {program.tagline}
            </p>

            <div className="flex flex-col gap-6 pt-10 border-t border-white/10 mt-4">
               <p className="text-white/40 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em]">Mentored by experts from world class companies</p>
               <div className="flex flex-wrap gap-8 opacity-40 grayscale brightness-200 uppercase tracking-tighter">
                  {['Meta', 'Amazon', 'Apple', 'Netflix', 'Google', 'Adobe'].map(c => (
                    <span key={c} className="text-base md:text-xl font-black text-white italic">{c}</span>
                  ))}
               </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-8">
               {[
                 { label: 'Duration', value: program.duration, icon: Clock },
                 { label: 'Format', value: 'Expert-Led + LMS', icon: Play },
                 { label: 'Projects', value: 'Internship + Projects', icon: Briefcase },
                 { label: 'Certificate', value: 'Verified Certificates', icon: Award },
               ].map(item => (
                 <div key={item.label} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-primary font-black uppercase text-[9px] md:text-[10px] tracking-widest">
                       <item.icon size={12} /> {item.label}
                    </div>
                    <p className="text-white font-black text-xs md:text-sm">{item.value}</p>
                 </div>
               ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
               <Button className="flex-grow sm:flex-grow-0 bg-primary text-white hover:bg-primary/90 rounded-2xl px-8 md:px-10 py-6 md:py-8 text-xs md:text-sm font-black uppercase tracking-widest shadow-xl shadow-primary/20">
                  Talk to Career Expert
               </Button>
               <Button variant="outline" className="flex-grow sm:flex-grow-0 border-white/10 text-white bg-white/5 hover:bg-white hover:text-slate-950 rounded-2xl px-8 md:px-10 py-6 md:py-8 text-xs md:text-sm font-black uppercase tracking-widest transition-all">
                  View Curriculum
               </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[400px] shrink-0"
          >
             <div className="bg-white p-8 md:p-10 rounded-[32px] md:rounded-[50px] border border-slate-100 shadow-2xl relative overflow-hidden">
                <div className="flex flex-col gap-6 md:gap-8">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/5 flex items-center justify-center p-2.5 md:p-3 animate-pulse">
                         <Zap size={24} className="text-primary" />
                      </div>
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Next batch</p>
                         <p className="text-base md:text-lg font-black text-slate-900">Starts in 29 days</p>
                      </div>
                   </div>

                   <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                         <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">Seats left</p>
                         <p className="text-[10px] md:text-xs font-black text-red-500">Only 12 left!</p>
                      </div>
                      <div className="h-1.5 md:h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                         <div className="h-full bg-red-500 w-[20%] transition-all" />
                      </div>
                   </div>

                   <div className="pt-6 md:pt-8 border-t border-slate-100">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-3 md:mb-4">Course Fee</p>
                      <div className="flex items-baseline gap-2">
                         <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">{program.fees}</span>
                         <span className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">Total</span>
                      </div>
                   </div>

                   <Button className="bg-slate-900 text-white hover:bg-primary rounded-2xl py-6 md:py-8 font-black uppercase tracking-widest shadow-xl shadow-slate-200 transition-all text-xs md:text-sm">
                      Enroll Today
                   </Button>
                   
                   <p className="text-[9px] md:text-[10px] text-center text-slate-400 font-black uppercase tracking-widest">
                      Flexible EMI options available
                   </p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Roadmap */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20"
           >
              <div className="flex flex-col gap-6 max-w-2xl">
                 <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">Curriculum roadmap</h2>
                 <p className="text-slate-500 font-medium text-lg leading-relaxed italic border-l-4 border-primary pl-8">
                    Specialized Domain Curriculum. A clean progression from fundamentals to advanced. Expand a module to see what you’ll master, plus the deliverables you’ll submit.
                 </p>
              </div>
              <div className="relative w-full md:w-96">
                 <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                 <input 
                   type="text" 
                   placeholder="Search modules or topics..." 
                   className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 pl-14 pr-6 text-sm font-medium focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                   value={curriculumSearch}
                   onChange={(e) => setCurriculumSearch(e.target.value)}
                 />
              </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="flex flex-col border border-slate-100 rounded-[40px] overflow-hidden shadow-sm"
           >
              <div className="bg-slate-50/50 p-8 border-b border-slate-100 flex items-center justify-between">
                 <h3 className="font-black uppercase tracking-widest text-xs text-slate-400">Modules & deliverables</h3>
                 <p className="font-black text-primary text-xs uppercase tracking-widest">{program.curriculum?.length || 0} Modules Total</p>
              </div>
              
              <div className="divide-y divide-slate-100">
                 {filteredCurriculum?.map((module, idx) => (
                   <div key={module.id} className="bg-white transition-colors hover:bg-slate-50/30">
                      <button 
                        onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                        className="w-full p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 text-left"
                      >
                         <div className="flex-grow flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
                            <div className="text-3xl md:text-4xl font-black text-slate-200 w-16 md:w-24 shrink-0 group-hover:text-primary transition-colors">{module.id}</div>
                            <div className="flex flex-col gap-1">
                               <div className="flex items-center gap-4 mb-1">
                                  <span className="bg-slate-100 text-slate-400 text-[9px] font-black uppercase px-3 py-1 rounded-md">{module.topicsCount} topics</span>
                                  <span className="bg-primary/5 text-primary text-[9px] font-black uppercase px-3 py-1 rounded-md">Expert-led + LMS</span>
                               </div>
                               <h4 className="text-2xl font-black text-slate-900 tracking-tight uppercase">{module.title}</h4>
                            </div>
                         </div>
                         <div className={cn("p-4 rounded-xl border border-slate-100 transition-all shadow-sm", expandedModule === module.id ? "bg-primary text-white border-primary" : "bg-white text-slate-400")}>
                            <ChevronDown size={20} className={cn("transition-transform duration-500", expandedModule === module.id ? "rotate-180" : "rotate-0")} />
                         </div>
                      </button>

                      <AnimatePresence>
                         {expandedModule === module.id && (
                           <motion.div
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: "auto", opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             transition={{ duration: 0.4, ease: "circOut" }}
                             className="overflow-hidden bg-slate-50/30"
                           >
                              <div className="p-6 md:p-10 pt-0 md:pl-44 flex flex-col lg:flex-row gap-12 lg:gap-20">
                                 <div className="flex flex-col gap-6 lg:w-1/2">
                                    <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Topics covered</h5>
                                    <ul className="grid grid-cols-1 gap-4">
                                       {module.topics.map(topic => (
                                         <li key={topic} className="flex items-center gap-4 text-slate-600 font-bold">
                                            <div className="w-2 h-2 rounded-full border-2 border-primary/30" />
                                            {topic}
                                         </li>
                                       ))}
                                    </ul>
                                 </div>
                                 <div className="flex flex-col gap-6 lg:w-1/2">
                                    <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Deliverables you'll submit</h5>
                                    <div className="flex flex-col gap-4">
                                       {module.deliverables?.map(del => (
                                         <div key={del} className="bg-white border border-slate-100 p-5 rounded-2xl flex items-center justify-between group cursor-default shadow-sm border-l-4 border-l-primary">
                                            <span className="font-black text-slate-800 text-sm uppercase">{del}</span>
                                            <Badge className="bg-primary/5 text-primary text-[9px] font-black uppercase border-none">Required</Badge>
                                         </div>
                                       )) || (
                                         <div className="text-slate-400 text-sm italic font-medium">Practice modules through LMS assignments.</div>
                                       )}
                                    </div>
                                 </div>
                              </div>
                           </motion.div>
                         )}
                      </AnimatePresence>
                   </div>
                 ))}
              </div>
           </motion.div>
        </div>
      </section>

      {/* Hands-on Projects */}
      {program.projects && program.projects.length > 0 && (
        <section className="py-24 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex flex-col gap-6 mb-20 text-center items-center"
             >
                <Badge className="bg-primary text-white font-black uppercase text-[10px] tracking-widest px-6 py-2 rounded-full">Practical outcomes</Badge>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">Hands-on Projects</h2>
                <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-xl italic">Work on industry-defined problem statements used across real organization engineering cycles.</p>
             </motion.div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {program.projects.map((project, idx) => (
                  <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm flex flex-col gap-6 hover:shadow-2xl transition-all group"
                  >
                     <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center p-3 group-hover:bg-primary transition-all shadow-lg">
                        <Briefcase className="text-white" />
                     </div>
                     <div className="flex flex-col gap-3">
                        <h4 className="text-2xl font-black text-slate-900 tracking-tight uppercase group-hover:text-primary transition-colors">{project.title}</h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed italic">"{project.description}"</p>
                     </div>
                     <div className="flex flex-wrap gap-2 mt-4 pt-6 border-t border-slate-100">
                        {project.skills.map(skill => (
                          <span key={skill} className="px-3 py-1 rounded-md bg-slate-50 text-[10px] font-black uppercase text-slate-400">{skill}</span>
                        ))}
                     </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>
      )}

      {/* Placements Section */}
      <section className="py-24 px-4 bg-slate-950 text-white overflow-hidden relative">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-8 lg:w-1/2 relative z-10"
            >
               <Badge className="bg-white/10 text-white border-white/20 font-black uppercase text-[10px] tracking-[0.4em] px-6 py-2 w-fit">Placement support</Badge>
               <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">Your entry into <br /> high-growth teams.</h2>
               <p className="text-white/50 text-lg font-medium leading-relaxed italic max-w-xl">
                  Our placement partners value AMPTECH's rubric-based evaluation. Upon clearing the program, you get direct referrals to roles that match your project expertise.
               </p>
               <div className="grid grid-cols-2 gap-8 mt-4">
                  {[
                    { label: 'Avg Hike', value: '72%' },
                    { label: 'Placement Rate', value: '94%' },
                    { label: 'Hiring Partners', value: '150+' },
                    { label: 'Avg CTC', value: '8.4 LPA' },
                  ].map(stat => (
                    <div key={stat.label} className="flex flex-col gap-1">
                       <p className="text-4xl font-black tracking-tighter text-white">{stat.value}</p>
                       <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">{stat.label}</p>
                    </div>
                  ))}
               </div>
               <Button className="bg-white text-slate-900 hover:bg-white/90 rounded-2xl px-10 py-8 font-black uppercase tracking-widest mt-8 w-fit shadow-2xl">
                  Explore Placement Portal
               </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
               <div className="grid grid-cols-3 gap-6 opacity-30 grayscale hover:opacity-100 transition-all duration-700 brightness-200">
                  {['Meta', 'Microsoft', 'Google', 'Amazon', 'Netflix', 'Adobe', 'TCS', 'Wipro', 'Infosys'].map(c => (
                    <div key={c} className="h-24 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center p-6 grayscale transition-all hover:grayscale-0 hover:bg-white/10 hover:border-white/30 cursor-default">
                       <span className="font-black text-xl italic">{c}</span>
                    </div>
                  ))}
               </div>
               {/* Decorative background circle */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10" />
            </motion.div>
         </div>
      </section>

      {/* Support FAQ */}
      <section className="py-24 px-4 bg-white">
         <div className="max-w-4xl mx-auto flex flex-col gap-10">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center flex flex-col gap-4"
            >
               <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Everything else you need to know</h3>
               <p className="text-slate-400 font-medium italic">Still have questions? Our experts are here to help.</p>
            </motion.div>
            
            <div className="flex flex-col gap-4 divide-y divide-slate-100">
               {[
                 { q: 'Is the mentor available after sessions?', a: 'Yes, we have 1-on-1 office hours for doubt clearing and project reviews.' },
                 { q: 'What kind of hardware do I need?', a: 'Any standard laptop with 8GB RAM is sufficient. We provide access to cloud environments for heavy computations.' },
                 { q: 'Can I pay in installments?', a: 'Yes, we offer No-Cost EMI options for up to 12 months with selected bank partners.' },
               ].map((item, idx) => (
                 <motion.div 
                   key={idx} 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: idx * 0.1 }}
                   className="pt-8 flex flex-col gap-4"
                 >
                    <h4 className="font-black text-lg text-slate-900 tracking-tight uppercase">{item.q}</h4>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed italic">"{item.a}"</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
