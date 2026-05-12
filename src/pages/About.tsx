import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, Globe, Users, Trophy, Target, Star, History, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pb-24">
      {/* Intro */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-24 px-4 relative overflow-hidden bg-white"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <Badge className="mb-8 bg-primary/10 text-primary border-none px-4 py-1 uppercase tracking-widest font-black text-xs">Our Story</Badge>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1] md:leading-tight text-slate-900 uppercase"
          >
            Empowering Ambition.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-500 max-w-3xl leading-relaxed italic font-medium"
          >
            "AMPTECH empowers engineering and management students with career-focused education, practical industry exposure, global certifications, and placement-driven mentorship."
          </motion.p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-white/[0.02] blur-[150px] rounded-full" />
      </motion.section>

      {/* Vision & Mission */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 bg-slate-50 border-y border-slate-100 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
           <div className="flex flex-col gap-12">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="flex flex-col gap-6"
             >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-primary"><Compass size={28} /></div>
                <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Our Vision</h2>
                <p className="text-slate-500 leading-relaxed text-lg font-medium">
                  To be the global catalyst for professional excellence, ensuring no student is left behind due to the lack of industry-aligned education. We dream of a world where every learner is a producer.
                </p>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="flex flex-col gap-6"
             >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-primary"><Target size={28} /></div>
                <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Our Mission</h2>
                <p className="text-slate-500 leading-relaxed text-lg font-medium">
                  By building a bridge between theoretical knowledge and elite industry practice, we provide students with the tools, certificates, and mentorship needed to claim their seat at the table.
                </p>
             </motion.div>
           </div>
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative aspect-square rounded-[60px] bg-white border border-slate-200 shadow-2xl overflow-hidden p-12 flex items-center justify-center group"
           >
              <Zap className="text-primary opacity-5 group-hover:opacity-10 transition-opacity" size={400} />
              <div className="relative z-10 text-center">
                 <p className="text-7xl md:text-9xl font-black tracking-tighter text-slate-900">95%</p>
                 <p className="text-xs uppercase tracking-[0.5em] font-black text-primary">Success Standard</p>
              </div>
           </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      </motion.section>

      {/* Learning Philosophy */}
      <section className="py-24 px-4 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 uppercase">The AMP Philosophy.</h2>
             <p className="text-slate-400 text-xl font-medium italic">"Learning is a byproduct of creation."</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: 'Project-First', desc: 'We don\'t start with theory. We start with a problem and build our way to the solution.', icon: Zap },
               { title: 'Industry-Aligned', desc: 'Our rubrics are designed by active managers at MNCs, not outdated academic standards.', icon: Trophy },
               { title: 'Community-Driven', desc: 'You aren\'t just a student; you are part of a global network of ambitious professionals.', icon: Users },
             ].map((item, idx) => (
               <motion.div 
                 key={item.title} 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: idx * 0.1 }}
                 className="p-10 rounded-[40px] bg-white border border-slate-100 flex flex-col gap-6 hover:shadow-2xl transition-all group shadow-sm"
               >
                  <div className="p-3 bg-slate-50 w-fit rounded-xl group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                     <item.icon size={28} />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-slate-500 leading-relaxed text-sm font-medium">{item.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* History / Timeline */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
             <Badge className="w-fit bg-primary/10 text-primary border-none px-4 py-1 uppercase tracking-widest font-black text-xs">Trajectory</Badge>
             <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-none">Our Growth.</h2>
             <p className="text-slate-500 text-xl font-medium italic">Charting the course of a learning revolution.</p>
          </motion.div>
          
          <div className="flex flex-col gap-12 border-t border-slate-100 pt-16">
             {[
               { year: '2022', title: 'Founding Purpose', desc: 'AMPTECH launched with a single focus: Full Stack Engineering for graduates.' },
               { year: '2023', title: 'Management Vertical', desc: 'Expanded into Product and Business Analytics after scaling to 2,000+ students.' },
               { year: '2024', title: 'Certification Hub', desc: 'Partnered with Microsoft, AWS, and Google to offer globally recognized credentials.' },
               { year: '2026', title: 'The Next Frontier', desc: 'Integrating AI-powered career mapping and global placement networks.' },
             ].map((item, idx) => (
               <motion.div 
                 key={item.year} 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: idx * 0.1 }}
                 className="grid md:grid-cols-[1fr_2fr] gap-12 group"
               >
                  <span className="text-7xl md:text-9xl font-black text-slate-100 group-hover:text-primary transition-colors duration-500 italic leading-none">{item.year}</span>
                  <div className="flex flex-col gap-4 justify-center">
                     <h4 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">{item.title}</h4>
                     <p className="text-slate-500 max-w-xl text-lg font-medium leading-relaxed">{item.desc}</p>
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 bg-slate-50 border-t border-slate-100"
      >
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-10">
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">Ready to be our next success story?</h2>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
               <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-2xl px-12 py-7 font-bold shadow-xl shadow-primary/20 w-full sm:w-auto" asChild>
                  <Link to="/programs">Explore Programs</Link>
               </Button>
               <Button size="lg" variant="outline" className="border-slate-200 bg-white hover:bg-slate-50 text-slate-700 rounded-2xl px-12 py-7 font-bold w-full sm:w-auto" asChild>
                  <Link to="/contact">Contact Us</Link>
               </Button>
            </div>
          </div>
      </motion.section>
    </div>
  );
}
