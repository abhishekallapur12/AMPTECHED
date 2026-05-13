import { Link, Outlet } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  Phone, 
  MessageSquare, 
  ExternalLink,
  ChevronRight,
  Monitor,
  Zap,
  Globe,
  Briefcase,
  Users,
  ShieldCheck,
  Award,
  Target,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { PROGRAMS } from '../data';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState('Computer Science');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map track names from the menu to internal categories
  const trackMap: Record<string, string> = {
    'Computer Science': 'Computer Science',
    'Management': 'Management',
    'Electrical': 'Electrical & Electronics',
    'Mechanical': 'Mechanical',
    'Civil': 'Civil'
  };

  const currentCategoryPrograms = PROGRAMS.filter(p => p.category === trackMap[hoveredCategory]).slice(0, 4);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-primary selection:text-white overflow-x-hidden">
      <ScrollToTop />
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation Bar */}
      <nav 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500 border-b",
          isScrolled 
            ? "bg-white/95 backdrop-blur-xl border-slate-200 py-3 shadow-md" 
            : "bg-white/95 backdrop-blur-md border-slate-100 py-4 shadow-sm h-auto"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group px-4">
                <img 
                  src="https://catalog.wlimg.com/1/2965119/other-images/12585-comp-image.png" 
                  alt="AMPTECH" 
                  className={cn(
                    "w-auto object-contain transition-all duration-500",
                    isScrolled ? "h-8 lg:h-12" : "h-10 lg:h-16"
                  )}
                  referrerPolicy="no-referrer"
                />
            </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 justify-center flex-grow">
            <NavigationMenu>
              <NavigationMenuList className="gap-0">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-slate-50 data-[state=open]:bg-slate-50 transition-colors text-slate-800 font-black uppercase tracking-tight px-5">
                    Programs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[850px] bg-white border border-slate-200 rounded-[32px] shadow-2xl overflow-hidden flex">
                        {/* Domain Categories */}
                        <div className="w-[280px] bg-slate-50/50 p-8 border-r border-slate-100 shrink-0">
                           <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-6">Learning Tracks</h4>
                           <div className="flex flex-col gap-2">
                             {[
                               { n: 'Computer Science', i: Monitor },
                               { n: 'Management', i: Users },
                               { n: 'Electrical', i: Zap },
                               { n: 'Mechanical', i: Briefcase },
                               { n: 'Civil', i: Globe }
                             ].map(item => (
                               <NavigationMenuLink 
                                 key={item.n} 
                                 render={
                                   <Link 
                                     to={`/programs?category=${encodeURIComponent(trackMap[item.n])}`} 
                                     onMouseEnter={() => setHoveredCategory(item.n)}
                                     className={cn(
                                       "flex items-center gap-4 px-4 py-3 rounded-xl transition-all group",
                                       hoveredCategory === item.n 
                                        ? "bg-white text-primary shadow-sm" 
                                        : "hover:bg-slate-100 text-slate-600"
                                     )}
                                   />
                                 }
                               >
                                   <item.i size={18} className={cn(
                                     "transition-colors",
                                     hoveredCategory === item.n ? "text-primary" : "text-slate-400 group-hover:text-primary"
                                   )} />
                                   <span className="text-sm font-black uppercase tracking-tight">{item.n}</span>
                                   <ChevronRight size={14} className={cn(
                                     "ml-auto transition-all",
                                     hoveredCategory === item.n ? "translate-x-1 opacity-100" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                                   )} />
                               </NavigationMenuLink>
                             ))}
                           </div>

                           <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
                              <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Need Guidance?</p>
                              <p className="text-[10px] text-slate-500 font-bold mb-4 italic leading-relaxed">Not sure where to start? Let our career experts guide you.</p>
                              <Button variant="ghost" size="sm" className="w-full text-[10px] font-black uppercase tracking-widest text-primary hover:bg-primary/10 p-0 text-left justify-start">
                                 Talk to Expert <ChevronRight size={12} className="ml-1" />
                              </Button>
                           </div>
                        </div>

                        {/* Program Lists */}
                        <div className="flex-grow p-10 flex flex-col">
                           <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                              <div className="flex flex-col">
                                <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">Available in {hoveredCategory}</h5>
                                <span className="text-xl font-black text-slate-900 uppercase tracking-tight">Active Curriculums</span>
                              </div>
                              <NavigationMenuLink render={<Link to={`/programs?category=${encodeURIComponent(trackMap[hoveredCategory])}`} className="text-[10px] font-black text-primary uppercase tracking-[0.3em] flex items-center gap-2 hover:bg-primary/5 px-4 py-2 rounded-lg transition-colors" />}>
                                  View Category <ArrowRight size={12} />
                              </NavigationMenuLink>
                           </div>

                           <div className="grid grid-cols-2 gap-8 overflow-y-auto max-h-[400px] pr-2">
                              {currentCategoryPrograms.length > 0 ? (
                                currentCategoryPrograms.map(p => (
                                  <NavigationMenuLink key={p.id} render={<Link to={`/programs/${p.id}`} className="group flex items-start gap-4 p-4 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all" />}>
                                       <div className="w-10 h-10 shrink-0 rounded-lg bg-white border border-slate-100 flex items-center justify-center p-2 shadow-sm group-hover:border-primary/20 transition-colors">
                                          {p.mainIcon ? (
                                            <img src={p.mainIcon} alt="" className="w-full h-full object-contain" />
                                          ) : (
                                            <Zap size={16} className="text-slate-300" />
                                          )}
                                       </div>
                                       <div className="flex flex-col gap-1">
                                          <div className="flex items-center gap-2">
                                             <Badge className="bg-primary/10 text-primary border-none text-[8px] uppercase tracking-widest font-black px-2 py-0">
                                               {p.level}
                                             </Badge>
                                             <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{p.duration}</span>
                                          </div>
                                          <span className="text-[13px] font-black text-slate-800 group-hover:text-primary transition-colors tracking-tight uppercase leading-snug">{p.title}</span>
                                          <span className="text-[10px] text-slate-500 font-bold italic leading-tight line-clamp-1">"{p.tagline}"</span>
                                       </div>
                                  </NavigationMenuLink>
                                ))
                              ) : (
                                <div className="col-span-2 py-12 flex flex-col items-center justify-center text-center gap-4 bg-slate-50/50 rounded-3xl border border-dashed border-slate-200">
                                   <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                                      <Monitor size={20} className="text-slate-300" />
                                   </div>
                                   <div>
                                      <p className="text-sm font-black text-slate-400 uppercase tracking-tight">New Programs Launching Soon</p>
                                      <p className="text-[10px] text-slate-400 mt-1">Our academic council is verifying the rubric for this track.</p>
                                   </div>
                                </div>
                              )}
                           </div>
                              
                           <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between gap-4">
                              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest italic leading-tight shrink border-l-2 border-primary pl-4 py-1">Rubric-verified learning ecosystem</p>
                              <NavigationMenuLink render={<Link to="/programs" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline whitespace-nowrap shrink-0" />}>
                                Complete Catalog
                              </NavigationMenuLink>
                           </div>
                        </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-slate-50 transition-colors text-slate-800 font-black uppercase tracking-tight px-5">
                    Certifications
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[800px] flex overflow-hidden bg-white border border-slate-200 rounded-[32px] shadow-2xl relative">
                       <div className="w-[300px] bg-slate-50 p-10 flex flex-col gap-8 border-r border-slate-100">
                          <div className="flex flex-col gap-2">
                             <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                                <Award className="text-white" size={24} />
                             </div>
                             <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mt-4">Credential Registry</h3>
                             <p className="text-slate-500 text-xs font-medium italic">Verified mastery across global standards.</p>
                          </div>
                          
                          <div className="flex flex-col gap-4">
                             <div className="p-5 rounded-2xl bg-white border border-slate-100 flex flex-col gap-1 items-start group hover:border-primary/30 transition-all cursor-default shadow-sm font-black">
                                <span className="text-[10px] text-slate-500 uppercase tracking-widest leading-none mb-1">Global Authority</span>
                                <span className="text-slate-900 text-sm">15+ Partners</span>
                             </div>
                             <div className="p-5 rounded-2xl bg-white border border-slate-100 flex flex-col gap-1 items-start group hover:border-primary/30 transition-all cursor-default shadow-sm font-black">
                                <span className="text-[10px] text-slate-500 uppercase tracking-widest leading-none mb-1">Verifiable</span>
                                <span className="text-slate-900 text-sm">Blockchain ID</span>
                             </div>
                          </div>
                       </div>
                       
                       <div className="flex-grow p-10 bg-white grid grid-cols-2 gap-10">
                          <div className="flex flex-col gap-6">
                             <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Professional Certifications</h4>
                             <ul className="flex flex-col gap-6">
                                {[
                                  { n: 'Microsoft Certified', d: 'Cloud & Infrastructure', icon: 'microsoft' },
                                  { n: 'IBM Mastery', d: 'AI & Enterprise Apps', icon: 'ibm' },
                                  { n: 'Google Cloud Professional', d: 'Data & Architecture', icon: 'googlecloud' },
                                  { n: 'AWS Solution Architect', d: 'Cloud Scalability', icon: 'amazonaws' }
                                ].map(cert => (
                                  <li key={cert.n}>
                                     <NavigationMenuLink render={<Link to="/certifications" className="flex items-center gap-4 group/l" />}>
                                          <div className="w-10 h-10 shrink-0 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center p-2 group-hover/l:border-primary/20 transition-colors">
                                             <img src={`https://cdn.simpleicons.org/${cert.icon}`} alt="" className="w-full h-full object-contain" />
                                          </div>
                                          <div className="flex flex-col">
                                             <span className="text-sm font-black text-slate-900 uppercase tracking-tight group-hover/l:text-primary transition-colors">{cert.n}</span>
                                             <span className="text-[10px] font-bold text-slate-500 italic mt-0.5">{cert.d}</span>
                                          </div>
                                     </NavigationMenuLink>
                                  </li>
                                ))}
                             </ul>
                          </div>

                          <div className="flex flex-col gap-6">
                             <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Industrial Mastery</h4>
                             <ul className="flex flex-col gap-6">
                                {[
                                  { n: 'Cisco Certified', d: 'Network Mastery', icon: 'cisco' },
                                  { n: 'Oracle Database', d: 'Enterprise Standards', icon: 'oracle' },
                                  { n: 'Adobe Professional', d: 'Creative Systems', icon: 'adobe' },
                                  { n: 'Unity Associate', d: 'Real-time 3D', icon: 'unity' }
                                ].map(cert => (
                                  <li key={cert.n}>
                                     <NavigationMenuLink render={<Link to="/certifications" className="flex items-center gap-4 group/l" />}>
                                          <div className="w-10 h-10 shrink-0 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center p-2 group-hover/l:border-primary/20 transition-colors">
                                             <img src={`https://cdn.simpleicons.org/${cert.icon}`} alt="" className="w-full h-full object-contain" />
                                          </div>
                                          <div className="flex flex-col">
                                             <span className="text-sm font-black text-slate-900 uppercase tracking-tight group-hover/l:text-primary transition-colors">{cert.n}</span>
                                             <span className="text-[10px] font-bold text-slate-500 italic mt-0.5">{cert.d}</span>
                                          </div>
                                     </NavigationMenuLink>
                                  </li>
                                ))}
                             </ul>
                          </div>
                       </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link to="/training-centers" className="px-5 py-2 text-sm font-black uppercase tracking-tight text-slate-800 hover:text-primary transition-colors" />}>Training Centers</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link to="/job-portal" className="px-5 py-2 text-sm font-black uppercase tracking-tight text-slate-800 hover:text-primary transition-colors" />}>Job Portal</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link to="/achievements" className="px-5 py-2 text-sm font-black uppercase tracking-tight text-slate-800 hover:text-primary transition-colors" />}>Achievements</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link to="/contact" className="px-5 py-2 text-sm font-black uppercase tracking-tight text-slate-800 hover:text-primary transition-colors" />}>Support</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex items-center gap-3 px-4">
            <Button className="bg-primary text-white hover:bg-primary/90 rounded-xl px-8 py-6 font-bold shadow-xl shadow-primary/20 group flex items-center gap-2 text-base">
              Sign In <ExternalLink size={16} />
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
             <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
               <SheetTrigger render={<Button variant="ghost" size="icon" className="text-slate-900 hover:bg-slate-50" />}>
                   <Menu size={24} />
               </SheetTrigger>
               <SheetContent side="right" className="w-[300px] bg-white border-l border-slate-100 p-0 overflow-y-auto">
                 <div className="flex flex-col p-8 gap-10">
                   <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex flex-col gap-2">
                       <img 
                         src="https://catalog.wlimg.com/1/2965119/other-images/12585-comp-image.png" 
                         alt="AMPTECH" 
                         className="h-8 w-auto object-contain"
                         referrerPolicy="no-referrer"
                       />
                    </Link>
                   <div className="flex flex-col gap-6">
                     <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-700 hover:text-primary transition-colors">Home</Link>
                     <Link to="/programs" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-700 hover:text-primary transition-colors">Programs</Link>
                     <Link to="/certifications" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-700 hover:text-primary transition-colors">Certifications</Link>
                     <Link to="/training-centers" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-700 hover:text-primary transition-colors">Training Centers</Link>
                     <Link to="/job-portal" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-700 hover:text-primary transition-colors">Job Portal</Link>
                     <Link to="/achievements" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-700 hover:text-primary transition-colors">Achievements</Link>
                   </div>
                   <div className="flex flex-col gap-4 mt-8">
                     <Button variant="outline" className="w-full border-slate-200 text-slate-700 font-bold rounded-xl" render={<Link to="/dashboard" onClick={() => setMobileMenuOpen(false)} />}>Sign In</Button>
                     <Button className="w-full bg-primary text-white hover:bg-primary/90 rounded-xl font-bold py-6">Enroll Now</Button>
                   </div>
                 </div>
               </SheetContent>
             </Sheet>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-24 px-4 relative overflow-hidden">
        {/* Footer Background Art */}
        <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none">
          <Zap size={400} className="text-primary" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-8 relative z-10">
          <div className="flex flex-col gap-8">
            <Link to="/" className="flex items-center gap-2">
               <img 
                 src="https://catalog.wlimg.com/1/2965119/other-images/12585-comp-image.png" 
                 alt="AMPTECH" 
                 className="h-12 w-auto object-contain"
                 referrerPolicy="no-referrer"
               />
            </Link>
            <p className="text-slate-500 text-base leading-relaxed max-w-sm font-medium italic">
              "Redefining education through a producer-first mindset. Learn to build, then build to scale."
            </p>
            <div className="flex gap-4">
               {['Twitter', 'LinkedIn', 'Instagram', 'Youtube'].map(social => (
                 <div key={social} className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all cursor-pointer group shadow-sm">
                   <span className="sr-only">{social}</span>
                   <Globe size={20} className="text-slate-400 group-hover:text-white" />
                 </div>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8 px-1">Programs</h4>
            <ul className="flex flex-col gap-5 text-sm font-bold text-slate-500">
              <li><Link to="/programs" className="hover:text-primary transition-colors">Computer Science & AI</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors">Cloud & DevOps Engineering</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors">Data Science & Analytics</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors">Management & Finance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8 px-1">Resources</h4>
            <ul className="flex flex-col gap-5 text-sm font-bold text-slate-500">
              <li><Link to="/training-centers" className="hover:text-primary transition-colors">Training Centers</Link></li>
              <li><Link to="/placements" className="hover:text-primary transition-colors">Placement Hub</Link></li>
              <li><Link to="/certifications" className="hover:text-primary transition-colors">Certifications</Link></li>
              <li><Link to="/achievements" className="hover:text-primary transition-colors">Achievements</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8 px-1">Locations</h4>
            <div className="flex flex-col gap-6 text-sm font-bold text-slate-500">
               <div>
                  <p className="text-slate-900 uppercase tracking-tighter mb-2 italic">Pune (Head Office)</p>
                  <p className="text-[10px] leading-relaxed italic opacity-80 mb-3">Rahatani, Pimpri Chinchwad, Pune 411017</p>
                  <div className="flex flex-col gap-1 text-[11px]">
                     <p className="flex items-center gap-2"><Phone size={12} className="text-primary" /> +91 7676832037</p>
                     <p className="flex items-center gap-2"><Phone size={12} className="text-primary" /> +91 7760839088</p>
                  </div>
               </div>
               <div>
                  <p className="text-slate-900 uppercase tracking-tighter mb-2 italic">Vijaypura (Branch)</p>
                  <p className="text-[10px] leading-relaxed italic opacity-80 mb-3">Satya Sai Nagar, Vijayapura 586102</p>
                  <div className="flex flex-col gap-1 text-[11px]">
                     <p className="flex items-center gap-2"><Phone size={12} className="text-primary" /> </p>
                     <p className="flex items-center gap-2"><Phone size={12} className="text-primary" /> </p>
                  </div>
               </div>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8 px-1">Connect</h4>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <p className="flex items-center gap-3 text-slate-700 font-bold"><MessageSquare size={18} className="text-primary" /> contact@amptech.co.in</p>
                <p className="flex items-center gap-3 text-slate-700 font-bold ml-7 text-xs opacity-70 italic">amphardsoft@gamil.com</p>
                <p className="flex items-center gap-3 text-slate-700 font-bold"><Globe size={18} className="text-primary" /> bijapur@amptech.co.in</p>
              </div>
              
              <div className="mt-4 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-400">Join our newsletter</p>
                <div className="flex flex-col gap-3">
                  <input type="email" placeholder="Email address" className="bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary transition-all" />
                  <Button size="sm" className="bg-primary text-white hover:bg-primary/90 font-bold rounded-xl py-5 shadow-lg shadow-primary/20">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">
          <p>© 2026 AMPTECH LEARNING PLATFORM. PIONEERING EDUCATION SINCE 2018.</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Shield</Link>
            <Link to="#" className="hover:text-primary transition-colors">Compliance Terms</Link>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl hover:bg-green-400 transition-colors"
        >
          <MessageSquare size={24} />
        </motion.button>
      </div>
    </div>
  );
}
