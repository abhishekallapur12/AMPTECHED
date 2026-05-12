import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Users, 
  Building2, 
  GraduationCap, 
  Award,
  Zap,
  Star,
  Quote,
  Layout as LayoutIcon,
  Search,
  MessageCircle,
  Briefcase,
  Phone,
  ShieldCheck,
  PhoneCall,
  ChevronLeft,
  Sparkles,
  Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CountUp from 'react-countup';
import { PROGRAMS, CERTIFICATIONS, PARTNER_LOGOS } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const trainingCertUrl = new URL('../assets/internship-cert.png', import.meta.url).href;
const internshipCertUrl = new URL('../assets/training-cert.png', import.meta.url).href;
const certCertUrl = new URL('../assets/cert.png', import.meta.url).href;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 2,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const CERT_TYPES = [
  {
    id: 'training',
    label: 'Training',
    tagline: 'Expert-led cohort completion',
    description: 'Issued after rubric checks + expert review, not attendance.',
    image: trainingCertUrl,
  },
  {
    id: 'internship',
    label: 'Internship',
    tagline: 'Project + evaluation proof',
    description: 'Signals proof-of-work, evaluation, and consistency in delivery.',
    image: internshipCertUrl,
  },
  {
    id: 'excellence',
    label: 'Excellence',
    tagline: 'Top performance recognition',
    description: 'Fits resume + LinkedIn. Looks professional across devices.',
    
    image: certCertUrl,
  }
];

export default function Home() {
  const [activeCertTab, setActiveCertTab] = useState(0);
  const [activeTab, setActiveTab] = useState('Computer Science');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ['Computer Science', 'Electrical & Electronics', 'Mechanical', 'Civil', 'Management'];

  const filteredPrograms = PROGRAMS.filter(p => 
    (p.category === activeTab) && 
    (p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     p.tagline.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-20 px-4 bg-gradient-to-b from-red-50/50 to-white">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-red-200/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col gap-6">
              <Badge className="w-fit bg-primary/10 text-primary border-none px-4 py-1 rounded-full uppercase tracking-[0.2em] font-black text-xs">
                Since 2006 • Founders of learning
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] md:leading-[1.05] text-slate-900 uppercase">
                Pioneering Career Focused Education <span className="text-primary italic">Worldwide.</span>
              </h1>
              <p className="text-base md:text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
                Experience the future of learning with industry-led certifications, hands-on projects, and global placement support. Empowering the next generation of engineers and leaders.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-10 py-7 rounded-2xl shadow-xl shadow-primary/20 group font-bold">
                Start Your Journey <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-lg px-10 py-7 rounded-2xl group font-semibold shadow-sm">
                Explore Programs <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" size={18} />
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 pt-10 border-t border-slate-100">
               {[
                 { value: '7,400+', label: 'Students' },
                 { value: '150+', label: 'Hiring Partners' },
                 { value: '98%', label: 'Success Rate' },
               ].map((stat, idx) => (
                 <div key={idx} className="flex flex-col">
                   <span className="text-2xl md:text-3xl font-black text-slate-900 leading-none">{stat.value}</span>
                   <span className="text-[10px] uppercase font-black tracking-widest text-primary mt-2">{stat.label}</span>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Right Side Visual - Dark Rotating Orbital Visualization (Full Spectrum) - Now Responsive */}
          <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px] lg:h-[600px] w-full overflow-hidden lg:overflow-visible mt-4 mb-12 lg:my-0">
            <div className="absolute inset-x-0 h-full bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.8)_0%,_transparent_70%)] pointer-events-none" />
            
            <div className="scale-[0.5] sm:scale-[0.7] md:scale-[0.8] lg:scale-[0.9] flex items-center justify-center relative w-full aspect-square max-w-[500px] -translate-y-7 lg:-translate-y-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Central Logo - Official Brand Logo with Dark Glow */}
                <div className="relative w-28 h-28 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(239,68,68,0.3)] z-40 overflow-hidden border-4 md:border-8 border-slate-900 p-4 md:p-6 transition-transform hover:scale-105 duration-500">
                   <img 
                     src="https://catalog.wlimg.com/1/2965119/other-images/12585-comp-image.png" 
                     alt="AMPTECH" 
                     className="w-full h-auto object-contain relative z-10"
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-red-500/10 animate-pulse" />
                </div>

                {/* Dark Circular "Still" Backdrop */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[480px] md:h-[480px] bg-slate-950 rounded-full shadow-[inset_0_0_60px_rgba(0,0,0,0.8)] border border-slate-800/50 z-0" />

                {/* Orbital Paths - Sophisticated Glowing Rings */}
                {[160, 240, 320].map((radius, idx) => (
                  <div 
                    key={idx}
                    style={{ width: radius * 2, height: radius * 2 }}
                    className="absolute border border-slate-700/30 rounded-full pointer-events-none z-10"
                  >
                    <div className="absolute inset-0 border-t border-primary/20 rounded-full animate-[spin_60s_linear_infinite]" 
                         style={{ animationDirection: idx % 2 === 0 ? 'normal' : 'reverse' }} />
                  </div>
                ))}

                {/* Orbit 1: Inner (Tech Core) */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
                >
                  {[
                    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', angle: 0 },
                    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', angle: 90 },
                    { name: 'AWS', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbyS7Gjj0Stwk2H1ywTqeNba47t-u2KGFvg&s', angle: 180 },
                    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED', angle: 270 },
                  ].map((tech) => (
                    <div
                      key={tech.name}
                      style={{ 
                        transform: `rotate(${tech.angle}deg) translateX(160px) rotate(-${tech.angle}deg)` 
                      }}
                      className="absolute"
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="w-14 h-14 bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center p-3 border border-slate-800 pointer-events-auto group hover:border-primary transition-colors"
                      >
                        <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                      </motion.div>
                    </div>
                  ))}
                </motion.div>

                {/* Orbit 2: Outer (Tools Ecosystem) */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                >
                  {[
                    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', angle: 30 },
                    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248', angle: 90 },
                    { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E', angle: 150 },
                    { name: 'Kubernetes', icon: 'https://cdn.simpleicons.org/kubernetes/326CE5', angle: 210 },
                    { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00', angle: 270 },
                    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933', angle: 330 },
                  ].map((tech) => (
                    <div
                      key={tech.name}
                      style={{ 
                        transform: `rotate(${tech.angle}deg) translateX(240px) rotate(-${tech.angle}deg)` 
                      }}
                      className="absolute"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                        className="w-12 h-12 bg-slate-900 rounded-xl shadow-lg flex items-center justify-center p-2.5 border border-slate-800 pointer-events-auto group hover:border-primary transition-colors"
                      >
                        <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                      </motion.div>
                    </div>
                  ))}
                </motion.div>

              {/* Orbital particles / dots for tech atmosphere */}
              <div className="absolute inset-0 animate-[spin_120s_linear_infinite] z-10">
                 {[...Array(16)].map((_, i) => (
                   <div 
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-primary/30 rounded-full blur-[1px]"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${i * 22.5}deg) translateX(340px)`
                    }}
                   />
                 ))}
              </div>
              
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.1)_0%,_transparent_70%)] blur-3xl z-0" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>

      {/* 2. PROGRAMS TABS SECTION WITH SEARCH (IMAGE 1 STYLE) */}
      <section className="py-12 md:py-24 px-4 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-[24px] md:rounded-[32px] p-2 md:p-3 mb-16 shadow-lg">
            <Tabs defaultValue="Computer Science" onValueChange={setActiveTab} className="w-full">
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
                <div className="relative w-full lg:w-auto overflow-hidden">
                  <TabsList className="bg-transparent h-auto gap-2 md:gap-3 p-1 flex flex-nowrap overflow-x-auto no-scrollbar justify-start w-full select-none touch-pan-x min-w-full snap-x">
                    <div className="flex flex-nowrap gap-2 md:gap-3 min-w-max">
                      {categories.map(cat => (
                        <TabsTrigger 
                          key={cat} 
                          value={cat}
                          className="bg-slate-50 text-slate-500 data-[state=active]:bg-primary data-[state=active]:text-white px-5 md:px-6 py-2.5 md:py-3 rounded-xl md:rounded-2xl transition-all font-bold text-xs md:text-sm border border-slate-100 data-[state=active]:border-primary shrink-0 whitespace-nowrap snap-start"
                        >
                          {cat}
                        </TabsTrigger>
                      ))}
                    </div>
                  </TabsList>
                </div>
                
                {/* Search integrated in tabs bar style */}
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl px-4 py-2.5 md:py-3 group focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/10 transition-all flex-grow">
                  <Search className="text-slate-400 mr-3 shrink-0" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search programs..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none outline-none text-slate-900 text-sm w-full placeholder:text-slate-400"
                  />
                </div>
              </div>
            </Tabs>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 px-2 md:px-4">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase">Available Programs.</h2>
              <p className="text-slate-500 text-base md:text-lg max-w-xl font-medium">Curated batches designed to bridge the gap between academia and industry.</p>
            </div>
            <Link to="/programs" className="text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 group hover:text-primary transition-colors text-slate-400">
              View All Programs <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <AnimatePresence mode="wait">
            {filteredPrograms.length > 0 ? (
              <motion.div
                key={activeTab}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 md:px-4"
              >
                {filteredPrograms.map(program => (
                  <motion.div key={program.id} variants={itemVariants}>
                    <Card className="bg-white border-slate-200 hover:border-primary/30 shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden relative rounded-[24px] md:rounded-[32px]">
                      {/* Background Watermark Icon */}
                      {program.mainIcon && (
                        <div className="absolute -right-6 -bottom-6 w-32 h-32 md:w-40 md:h-40 opacity-[0.03] md:opacity-[0.05] pointer-events-none group-hover:scale-110 transition-transform duration-700 select-none">
                          <img src={program.mainIcon} alt="" className="w-full h-full object-contain" />
                        </div>
                      )}

                      <CardContent className="p-5 md:p-7 relative z-10">
                         <div className="flex flex-col gap-4 md:gap-5">
                           <div className="flex justify-between items-start">
                             <div className="flex flex-wrap gap-1.5">
                               {program.badges.map(badge => (
                                 <Badge key={badge} variant="secondary" className="bg-primary/5 text-primary hover:bg-primary/10 border-none text-[8px] md:text-[9px] uppercase font-black px-2.5 md:px-3 py-0.5 rounded-full">{badge}</Badge>
                               ))}
                             </div>
                             <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-primary/10 group-hover:text-primary transition-all p-1.5 md:p-2 border border-slate-100 group-hover:border-primary/20">
                                {program.mainIcon ? (
                                  <img src={program.mainIcon} alt="" className="w-full h-full object-contain" />
                                ) : (
                                  <Zap size={16} />
                                )}
                             </div>
                           </div>
                           
                           <div>
                              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-1 leading-tight uppercase tracking-tight group-hover:text-primary transition-colors">{program.title}</h3>
                              <p className="text-slate-500 text-[11px] md:text-xs font-medium italic mb-2">"{program.tagline}"</p>
                              {program.summary && (
                                <p className="text-slate-600 text-[10px] md:text-[11px] leading-relaxed mb-4 line-clamp-2">{program.summary}</p>
                              )}
                              
                              {/* Tech Stack Icons - Full Color */}
                              {program.technologies && program.technologies.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-1">
                                  {program.technologies.map(tech => (
                                    <div 
                                      key={tech.name} 
                                      className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center p-1 md:p-1.5 bg-slate-50 rounded-lg shadow-sm border border-slate-100 hover:border-primary/30 transition-all group/tech"
                                      title={tech.name}
                                    >
                                      <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain transition-all" />
                                    </div>
                                  ))}
                                </div>
                              )}
                           </div>
    
                           <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-100">
                              <div className="flex flex-col">
                                 <span className="text-[9px] text-slate-400 uppercase font-black tracking-widest leading-none mb-1.5">Structure</span>
                                 <span className="text-xs font-bold text-slate-700">{program.curriculum?.length || 0} Modules</span>
                              </div>
                              <div className="flex flex-col">
                                 <span className="text-[9px] text-slate-400 uppercase font-black tracking-widest leading-none mb-1.5">Level</span>
                                 <span className="text-xs font-bold text-slate-700">{program.level}</span>
                              </div>
                           </div>
    
                           <div className="flex items-center justify-between">
                              <div className="flex flex-col">
                                 <span className="text-[9px] text-slate-400 uppercase font-black tracking-widest leading-none mb-1.5">Duration</span>
                                 <span className="text-sm font-black text-slate-900 tracking-tight">{program.duration}</span>
                              </div>
                              <Link to={`/programs/${program.id}`} className="shrink-0">
                                <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-5 md:px-7 py-5 md:py-6 text-xs font-bold shadow-lg shadow-primary/20 transition-transform active:scale-95 group">
                                  Enroll <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={14} />
                                </Button>
                              </Link>
                           </div>
                         </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-24 text-center"
              >
                <p className="text-slate-400 text-xl italic font-medium">No programs found in this category.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 3. CERTIFICATIONS SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-24 px-4 overflow-hidden bg-white"
      >
        <div className="max-w-7xl mx-auto mb-12 md:mb-16 flex flex-col items-center text-center">
           <Badge variant="outline" className="mb-6 border-primary/20 px-4 py-1 uppercase tracking-[0.3em] font-black text-primary bg-primary/5 rounded-full">
              Credentials
           </Badge>
           <h2 className="text-3xl md:text-6xl font-extrabold text-slate-900 mb-6">Industry-Recognized Certifications.</h2>
           <p className="text-slate-500 text-base md:text-lg max-w-2xl leading-relaxed">
             Direct pathways to the world's most valuable professional credentials. Aligned with real career outcomes and global industry standards.
           </p>
        </div>

        {/* Carousel / Marquee for Certs - Enhanced for Mobile responsiveness */}
        <div className="relative overflow-hidden group">
          <div className="flex items-center gap-6 md:gap-12 animate-marquee whitespace-nowrap py-8 md:overflow-visible select-none">
            {[...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS].map((cert, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center gap-6 px-10 md:px-12 py-8 md:py-10 rounded-[32px] md:rounded-[40px] bg-white border border-slate-100 hover:border-primary/30 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all min-w-[280px] md:min-w-[320px] group"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center p-3 md:p-4 shadow-xl border border-slate-50 group-hover:scale-110 transition-transform">
                   <img 
                     src={cert.logo} 
                     alt={cert.name} 
                     className="max-w-full max-h-full object-contain" 
                   />
                </div>
                <div className="text-center">
                  <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-2">{cert.name}</h4>
                  <p className="text-[10px] md:text-xs text-slate-400 text-center whitespace-normal max-w-[220px] italic">"{cert.description}"</p>
                </div>
                <div className="px-4 py-2 rounded-full bg-primary/5 text-[9px] md:text-[10px] text-primary font-black uppercase tracking-widest border border-primary/10">Official Partner</div>
              </div>
            ))}
          </div>
          {/* Subtle gradient overlays for marquee feel */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </motion.section>

      {/* 4. STRATEGIC ADVANTAGE - BENTO */}
      <section className="py-12 md:py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 mb-20 items-center text-center"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">Strategic Advantage.</h2>
            <p className="text-slate-500 text-lg max-w-2xl">Why thousands of students trust AMPTECH for their professional journey.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[220px]">
            {/* Real World Projects */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 md:row-span-2 p-8 md:p-10 rounded-[32px] md:rounded-[48px] bg-white border border-slate-200 shadow-sm relative overflow-hidden group"
            >
               <div className="relative z-10 h-full flex flex-col justify-between">
                 <div className="p-4 bg-primary/10 w-fit rounded-2xl">
                   <Zap className="text-primary" size={32} />
                 </div>
                 <div className="mt-8 md:mt-0">
                   <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">Real-World <br /> Projects</h3>
                   <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm">Build production-ready systems that matter. No toy problems, only industry-grade engineering experiences.</p>
                 </div>
               </div>
               <div className="absolute -right-16 -bottom-16 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <LayoutIcon size={340} className="text-primary rotate-12" />
               </div>
            </motion.div>

            {/* Rubric Based */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 lg:col-span-2 md:row-span-2 p-8 md:p-10 rounded-[32px] md:rounded-[48px] bg-primary text-white relative overflow-hidden flex flex-col justify-between shadow-2xl shadow-primary/20"
            >
               <div className="p-4 bg-white/20 w-fit rounded-2xl backdrop-blur-md">
                 <CheckCircle2 size={32} />
               </div>
               <div className="mt-8 md:mt-0">
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">Rubric-Based <br /> Evaluations</h3>
                  <p className="opacity-80 text-sm leading-relaxed max-w-sm">Quantifiable feedback based on rigorous industry standards. Know exactly where you stand and how to improve with data-driven insights.</p>
               </div>
               <div className="mt-8 flex flex-col gap-3">
                 <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} className="h-full bg-white" /></div>
                 <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: '60%' }} className="h-full bg-white" /></div>
               </div>
               <div className="absolute top-0 right-0 p-12 opacity-10">
                  <Award size={200} />
               </div>
            </motion.div>

            {/* Industry Mentors */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm flex flex-col justify-center gap-6 hover:shadow-xl transition-all group"
            >
               <div className="p-3 bg-slate-50 w-fit rounded-xl group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <Users size={24} />
               </div>
               <h4 className="text-xl font-extrabold text-slate-900">50+ Industry Mentors</h4>
            </motion.div>

            {/* Placement Focus */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm flex flex-col justify-center gap-6 hover:shadow-xl transition-all group"
            >
               <div className="p-3 bg-slate-50 w-fit rounded-xl group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <GraduationCap size={24} />
               </div>
               <h4 className="text-xl font-extrabold text-slate-900">95% Placement Record</h4>
            </motion.div>
          </div>
        </div>
      </section>      {/* 5. CERITIFICATIONS SECTION - Resized to be more compact */}
      <section className="py-12 md:py-16 px-4 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Column */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <Badge className="w-fit bg-slate-50 border border-slate-200 text-slate-500 px-3 py-1 rounded-full text-[9px] uppercase font-black tracking-widest shadow-sm flex items-center gap-2">
                <CheckCircle2 size={12} className="text-primary" />
                Certification that signals proof
              </Badge>
              
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-[0.95]">
                Get Certified. <br />
                <span className="text-primary italic">Get Hired.</span>
              </h2>
              
              <p className="text-slate-500 text-sm md:text-base font-medium max-w-xl leading-relaxed">
                Your certificate is tied to real deliverables, projects, expert checks, and rubric-based evaluation, so recruiters see signal, not fluff.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {['Expert-reviewed', 'Rubric-scored', 'Shareable proof'].map((pill) => (
                <div key={pill} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-100 text-[10px] font-black text-slate-600 uppercase tracking-widest shadow-sm">
                  <CheckCircle2 size={12} className="text-primary" />
                  {pill}
                </div>
              ))}
            </div>

            <div className="space-y-4 mt-2">
              {[
                { 
                  title: 'Outcome-based credential', 
                  desc: 'Issued after rubric checks + expert review, not attendance.',
                },
                { 
                  title: 'Hiring trust built-in', 
                  desc: 'Signals proof-of-work, evaluation, and consistency in delivery.',
                },
                { 
                  title: 'Clean & shareable', 
                  desc: 'Fits resume + LinkedIn. Looks professional across devices.',
                }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="w-9 h-9 shrink-0 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <ShieldCheck size={16} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h4 className="text-base font-black text-slate-900 uppercase tracking-tight">{feature.title}</h4>
                    <p className="text-slate-500 font-medium text-[11px] leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl px-7 py-5 font-black tracking-widest uppercase text-[9px] shadow-lg shadow-primary/20 flex items-center gap-2">
                  <PhoneCall size={14} />
                  Talk to Career Expert
                </Button>
              </Link>
            </div>
            
            <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">
              *Issued after evaluation & rubric validation.
            </p>
          </div>

          {/* Right Column - Interactive Preview */}
          <div className="lg:w-1/2 relative w-full">
            <Card className="bg-white border-slate-100 p-5 md:p-6 rounded-[32px] shadow-xl relative z-10 w-full overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Certificate Preview</span>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">
                      {CERT_TYPES[activeCertTab].label}
                    </h3>
                    <span className="text-slate-300 text-xs">•</span>
                    <span className="text-slate-500 font-bold italic text-[10px]">{CERT_TYPES[activeCertTab].tagline}</span>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <Button variant="outline" size="icon" onClick={() => setActiveCertTab(prev => (prev - 1 + CERT_TYPES.length) % CERT_TYPES.length)} className="rounded-full w-7 h-7 border-slate-100 hover:bg-slate-50 text-slate-400">
                    <ChevronLeft size={12} />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => setActiveCertTab(prev => (prev + 1) % CERT_TYPES.length)} className="rounded-full w-7 h-7 border-slate-100 hover:bg-slate-50 text-slate-400">
                    <ChevronRight size={12} />
                  </Button>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden bg-slate-50 group border border-slate-100 mb-6 cursor-pointer shadow-inner">
                <div className="absolute top-3 left-3 z-20">
                  <div className="bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg border border-white/50 text-[8px] font-black uppercase tracking-widest text-slate-900 flex items-center gap-1.5 shadow-sm">
                    <Sparkles size={10} className="text-primary animate-pulse" />
                    Preview
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCertTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full p-3 flex items-center justify-center bg-white"
                  >
                    <img 
                      src={CERT_TYPES[activeCertTab].image} 
                      alt="Certificate"
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {CERT_TYPES.map((type, idx) => (
                  <button
                    key={type.id}
                    onClick={() => setActiveCertTab(idx)}
                    className={`flex flex-col gap-2 p-4 rounded-2xl border transition-all text-left outline-none relative overflow-hidden group ${
                      activeCertTab === idx 
                        ? 'bg-white border-primary shadow-lg ring-1 ring-primary/20' 
                        : 'bg-slate-50/50 border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    {activeCertTab === idx && (
                      <motion.div 
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 2, 
                          ease: "linear",
                          repeatDelay: 1
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 pointer-events-none"
                      />
                    )}
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] relative z-10 ${
                      activeCertTab === idx ? 'text-slate-900 font-bold' : 'text-slate-400'
                    }`}>
                      {type.label}
                    </span>
                    <div className="h-2 w-full bg-slate-100 rounded-full mt-1 overflow-hidden relative z-10">
                      <motion.div 
                        initial={false}
                        animate={{ 
                          width: activeCertTab === idx ? '100%' : '0%',
                          opacity: activeCertTab === idx ? 1 : 0
                        }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </Card>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square bg-primary/5 rounded-full blur-[60px] -z-10" />
          </div>
        </div>
      </section>

      {/* 5. CAREER OUTCOMES DASHBOARD */}
      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-10">
            <Badge className="w-fit bg-primary/10 text-primary border-none px-5 py-2 rounded-full uppercase tracking-widest font-black text-[10px]">Impact Report</Badge>
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-slate-900">Tangible Results. <br /> Proven Trajectories.</h2>
            <p className="text-slate-500 text-base md:text-xl leading-relaxed">
              We focus on one metric above all: <span className="text-slate-900 font-bold">student success.</span> Our data-driven approach consistently delivers top-tier salary hikes and placements at global tech giants.
            </p>
            <div className="grid grid-cols-2 gap-12 py-10 border-y border-slate-100">
               <div>
                 <p className="text-5xl font-black text-primary mb-2">150%</p>
                 <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black">Avg. Salary Hike</p>
               </div>
               <div>
                 <p className="text-5xl font-black text-primary mb-2">12 LPA</p>
                 <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black">Avg. CTC Offered</p>
               </div>
            </div>
            <Button size="lg" className="w-fit bg-primary hover:bg-primary/90 text-white rounded-2xl px-10 py-7 font-bold shadow-xl shadow-primary/20 group">
              Download Outcomes Report <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative bg-slate-50 border border-slate-100 rounded-[32px] md:rounded-[60px] p-8 md:p-16 shadow-inner">
             {/* Hiring Partners Auto-Scroller */}
             <div className="flex flex-col gap-8 md:gap-10">
               <div className="flex items-center justify-between">
                 <h4 className="font-extrabold text-xl md:text-2xl text-slate-900 uppercase tracking-tight">Top Hiring Partners</h4>
                 <div className="flex gap-2">
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-primary/40 animate-pulse" />
                    <div className="w-2 md:w-3 h-3 md:h-3 rounded-full bg-primary/20" />
                    <div className="w-2 md:w-3 h-3 md:h-3 rounded-full bg-primary/10" />
                 </div>
               </div>
               
               <div className="relative overflow-hidden -mx-8">
                 <div className="flex items-center gap-6 animate-marquee-fast whitespace-nowrap py-4 px-8">
                   {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((partner, idx) => (
                     <motion.div 
                       key={idx} 
                       whileHover={{ y: -5, scale: 1.05 }}
                       className="h-16 md:h-20 w-32 md:w-40 shrink-0 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all p-3 md:p-4"
                     >
                        <img src={partner.logo.replace('/white', '/color')} alt={partner.name} className="max-h-full max-w-full object-contain" />
                     </motion.div>
                   ))}
                 </div>
                 <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                 <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
               </div>

               <div className="flex items-center justify-center gap-3 py-6 border-t border-slate-200">
                 <div className="flex -space-x-4">
                   {[1, 2, 3, 4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" className="w-full h-full object-cover" />
                     </div>
                   ))}
                 </div>
                 <div className="text-sm font-black text-slate-400 uppercase tracking-widest">+ 500 More Students Placed</div>
               </div>

               <div className="mt-10 p-8 rounded-[40px] bg-white shadow-xl shadow-slate-200/50 border border-slate-100 relative group">
                  <div className="flex items-center gap-5 mb-6">
                     <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-100 ring-4 ring-slate-50 transition-transform group-hover:scale-105">
                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop" alt="Student" className="object-cover w-full h-full" />
                     </div>
                     <div>
                        <p className="font-black text-lg text-slate-900">Arjun V.</p>
                        <p className="text-[10px] text-primary uppercase tracking-[0.2em] font-black">Placed at NVIDIA</p>
                     </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed italic relative z-10">"The System Design course here is absolute gold. It was the crucial differentiator in my multiple technical interview rounds at NVIDIA. The focus on production-grade engineering is unmatched."</p>
                  <Quote size={80} className="absolute bottom-6 right-8 text-slate-50 -z-1" />
               </div>
             </div>

             {/* Background glow */}
             <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-1" />
          </div>
        </div>
      </section>

      {/* 8. PRICING SECTION - From User Image */}
      <section className="py-12 md:py-24 px-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-none px-4 py-1 rounded-full uppercase tracking-widest font-black text-xs">
            Investment
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 uppercase">Transparent Pricing.</h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-4">
          {/* Plan 1 */}
          <div className="bg-white border border-slate-200 rounded-[40px] p-10 flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all h-full">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Plan</p>
              <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Career Foundation Program</h3>
              <p className="text-slate-500 font-medium italic mb-10">Fundamentals + Practical Learning</p>
              
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-5xl font-black text-slate-900 tracking-tighter">₹7,000</span>
              </div>

              <ul className="flex flex-col gap-5">
                {[
                  'Live Mentorship',
                  'Project-based Learning',
                  'Certification Preparation',
                  'Resume Building',
                  'Community Access'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                    <CheckCircle2 size={18} className="text-primary" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Button className="mt-12 bg-slate-950 text-white hover:bg-slate-800 rounded-2xl py-8 font-bold text-lg group">
              Enroll Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Plan 2 */}
          <div className="bg-slate-950 rounded-[40px] p-10 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden h-full">
            <div className="absolute top-8 right-8">
              <Badge className="bg-white text-slate-950 px-4 py-1 font-black uppercase tracking-widest text-[10px]">Most Popular</Badge>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-6">Plan</p>
              <h3 className="text-3xl font-black mb-3 tracking-tight">Placement Accelerator Program</h3>
              <p className="text-white/60 font-medium italic mb-10">Everything in Foundation + Advanced Support</p>
              
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-5xl font-black tracking-tighter">₹15,000</span>
              </div>

              <ul className="flex flex-col gap-5">
                {[
                  'Mock Interviews',
                  'Placement Preparation',
                  'Advanced Projects',
                  'Career Mentorship',
                  'Internship Support',
                  'Industry Networking'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 font-medium">
                    <CheckCircle2 size={18} className="text-primary" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Button className="mt-12 bg-white text-slate-950 hover:bg-slate-100 rounded-2xl py-8 font-bold text-lg group">
              Enroll Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* 9. CONTACT SECTION */}
      <section className="py-12 md:py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto rounded-[32px] md:rounded-[60px] bg-primary text-white p-8 md:p-24 overflow-hidden relative shadow-2xl shadow-primary/40">
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div className="flex flex-col gap-10">
                <h2 className="text-4xl md:text-7xl font-black tracking-tight leading-[1.1] text-white uppercase italic">Ready to Start Your Journey?</h2>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl italic">
                  Our career counselors are ready to help you navigate the best trajectory for your industrial professional goals.
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black tracking-[0.3em] opacity-60">Call Us Directly</p>
                      <p className="font-black text-2xl tracking-tight">+91 800-AMPTECH</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black tracking-[0.3em] opacity-60">Book a Console</p>
                      <p className="font-black text-2xl tracking-tight border-b-2 border-white/40 hover:border-white transition-all cursor-pointer">Talk to Expert</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="bg-white p-10 md:p-14 rounded-[48px] shadow-2xl flex flex-col gap-8 text-slate-900 overflow-hidden relative group">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                 <div className="flex flex-col gap-3 relative z-10">
                   <label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Full Name</label>
                   <input type="text" placeholder="John Doe" className="bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none" />
                 </div>
                 <div className="flex flex-col gap-3 relative z-10">
                   <label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Email Address</label>
                   <input type="email" placeholder="john@example.com" className="bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none" />
                 </div>
                 <div className="flex flex-col gap-3 relative z-10">
                   <label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Interest Area</label>
                   <select className="bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none appearance-none">
                      <option>Computer Science</option>
                      <option>Cloud & DevOps</option>
                      <option>Data Engineering</option>
                      <option>Management</option>
                   </select>
                 </div>
                 <Button className="mt-4 bg-primary text-white hover:bg-primary/90 rounded-[28px] py-10 text-xl font-black shadow-xl shadow-primary/20 relative z-10 transition-transform active:scale-95 group">
                   Request Callback <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                 </Button>
              </form>
            </div>
            
            <div className="absolute top-0 right-0 p-12 opacity-10 -rotate-12">
              <Zap size={460} />
            </div>
         </div>
      </section>

      {/* Final CTA Marquee Style */}
      <section className="py-12 bg-white text-black overflow-hidden relative">
         <div className="flex animate-marquee-fast whitespace-nowrap gap-12 text-5xl md:text-8xl font-black uppercase tracking-tighter italic opacity-90">
            <span>Pioneering</span> <span>Learning</span> <span>Placement</span> <span>Impact</span> <span>Certification</span>
            <span>Pioneering</span> <span>Learning</span> <span>Placement</span> <span>Impact</span> <span>Certification</span>
         </div>
      </section>
    </div>
  );
}
