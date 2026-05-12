import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Award, ShieldCheck, Zap, Globe, Briefcase, Star, Target, CheckCircle2, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Achievements() {
  const achievements = [
    {
      title: "India's First Pioneer",
      desc: "AMP TECH is the India's first company to provide service and spare parts of any brands for imported garage equipment which were sold by import trading companies in India for decades.",
      icon: Target
    },
    {
      title: "Redesign & Re-engineer",
      desc: "We specialized in redesigning and re-engineering imported equipment parts sold by numerous trading companies across India.",
      icon: Zap
    },
    {
      title: "Compatible Solutions",
      desc: "We have supplied compatible parts for a wide range of imported equipment in the existing Indian market, ensuring machine longevity.",
      icon: ShieldCheck
    }
  ];

  const certificates = [
    {
       img: 'https://images.weserv.nl/?url=http://www.amptech.co.in/images/achievement/amp_tech_r.jpg',
       title: 'Official Recognition'
    },
    {
       img: 'https://images.weserv.nl/?url=http://www.amptech.co.in/images/achievement/qyr-research.jpg',
       title: 'QYR Research'
    },
    {
       img: 'https://images.weserv.nl/?url=http://www.amptech.co.in/images/achievement/cert.jpg',
       title: 'Compliance Certificate'
    },
    {
       img: 'https://images.weserv.nl/?url=http://www.amptech.co.in/images/achievement/AMP_technologies_award.jpeg',
       title: 'Technological Award'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Header Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative py-24 px-6 overflow-hidden bg-white text-slate-900 border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <Badge className="mb-8 bg-primary/10 text-primary border-none px-6 py-2 uppercase tracking-[0.3em] font-black text-xs rounded-full">Record of Excellence</Badge>
             <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.8] text-slate-900 uppercase">
               Milestones <br /> & <span className="text-primary italic">Awards.</span>
             </h1>
             <p className="text-xl text-slate-500 max-w-4xl font-medium italic leading-relaxed">
               "Redefining industry standards since our inception. We don't just innovate; we re-engineer the future of automotive equipment services."
             </p>
          </motion.div>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
      </motion.section>

      {/* Narrative Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="lg:w-1/2 flex flex-col gap-8"
             >
                <div className="inline-flex items-center gap-3 text-primary font-black uppercase text-xs tracking-widest bg-primary/5 px-4 py-2 rounded-xl w-fit">
                   <Target size={16} /> Market Disruption
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter italic leading-[1.1]">
                  Pioneering Service <br /> in the Indian market.
                </h2>
                <div className="space-y-6">
                   <p className="text-slate-600 text-lg font-medium leading-relaxed italic">
                    AMP TECH is the INDIA'S first company to provide service and spare parts of any brands for imported garage equipments which are sold by import trading company in INDIA from so many decades.
                   </p>
                   <p className="text-slate-500 text-base italic leading-relaxed">
                    For that we redesign and re-engineer imported equipment parts sold by so many Trading Company in INDIA. For the proof we added spare part and service category in our website, where you can get spare parts compatible for our existing any brand machine.
                   </p>
                </div>
                
                <div className="flex flex-col gap-4 mt-8">
                   {achievements.map((item, idx) => (
                     <motion.div 
                       key={idx} 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.5, delay: idx * 0.1 }}
                       className="flex gap-6 p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all group shadow-sm"
                     >
                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all scale-100 group-hover:scale-110">
                           <item.icon size={24} />
                        </div>
                        <div className="flex flex-col gap-2">
                           <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">{item.title}</h4>
                           <p className="text-slate-500 text-sm italic font-medium leading-relaxed">"{item.desc}"</p>
                        </div>
                     </motion.div>
                   ))}
                </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="lg:w-1/2 relative"
             >
                <div className="aspect-square md:aspect-[4/5] bg-white rounded-[64px] overflow-hidden shadow-2xl relative group p-6 border border-slate-100">
                   <img 
                    src="https://images.weserv.nl/?url=http://www.amptech.co.in/images/achievement/AMP_technologies_award.jpeg" 
                    alt="AMP Tech Award" 
                    className="w-full h-full object-cover rounded-[48px] transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-x-6 bottom-6 h-1/2 bg-gradient-to-t from-slate-900/40 to-transparent rounded-b-[48px] pointer-events-none" />
                   <div className="absolute bottom-12 left-12 right-12">
                      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[32px] border border-white/20">
                         <Star className="text-yellow-400 mb-4" size={32} fill="currentColor" />
                         <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2 italic">Excellence Award</h3>
                         <p className="text-white/60 text-sm font-bold uppercase tracking-widest">Technological Innovation in Auto-Equipment</p>
                      </div>
                   </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-12 -right-12 w-48 h-48 bg-white p-6 rounded-[40px] shadow-2xl flex flex-col items-center justify-center text-center border border-slate-100"
                >
                   <span className="text-4xl font-black text-primary">#1</span>
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">In India</span>
                </motion.div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-24"
          >
             <Badge className="bg-primary/10 text-primary border-none px-4 py-1 uppercase tracking-widest font-black text-xs mb-6">Credential Portfolio</Badge>
             <h2 className="text-5xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter italic">Official Governance.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
             {certificates.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -20 }}
                  className="flex flex-col gap-8"
                >
                   <div className="aspect-[4/5] bg-white rounded-[64px] p-4 shadow-2xl border border-slate-100 overflow-hidden group">
                      <div className="w-full h-full rounded-[48px] overflow-hidden bg-slate-50 flex items-center justify-center p-4 border-4 border-dashed border-slate-200 hover:border-primary/40 transition-all">
                         <img 
                          src={cert.img} 
                          alt={cert.title} 
                          className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                         />
                      </div>
                   </div>
                   <div className="text-center px-4">
                      <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2 italic">{cert.title}</h3>
                      <div className="flex items-center justify-center gap-3">
                         <div className="h-px w-8 bg-primary/30" />
                         <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-primary" />
                            <span className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.3em]">Verified Registry</span>
                         </div>
                         <div className="h-px w-8 bg-primary/30" />
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>
        </div>
        
        {/* Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
           <span className="text-[300px] font-black text-slate-900 uppercase whitespace-nowrap">CERTIFIED</span>
        </div>
      </section>

      {/* spare parts focus */}
      <section className="py-32 bg-white px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto bg-slate-50 rounded-[80px] p-12 md:p-32 flex flex-col lg:flex-row gap-20 items-center overflow-hidden border border-slate-100"
        >
           <div className="lg:w-1/2 flex flex-col gap-8">
              <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">Compatible <br /> <span className="text-primary">Ecosystem.</span></h2>
              <p className="text-slate-500 text-lg font-medium italic leading-relaxed">
                "We already supplied so many compatible parts to imported equipments in existing Indian market. Our repository is the most comprehensive catalog for legacy and modern garage equipment maintenance."
              </p>
              <div className="flex flex-col gap-4">
                 {['Universal Compatibility', 'Precision Engineering', 'Direct Referrals', 'Nationwide support'].map((item, idx) => (
                   <motion.div 
                     key={item} 
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.4, delay: idx * 0.1 }}
                     className="flex items-center gap-4 text-slate-800 font-black uppercase tracking-tight text-sm"
                   >
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                         <CheckCircle2 size={14} />
                      </div>
                      {item}
                   </motion.div>
                 ))}
              </div>
              <Button size="lg" className="w-fit bg-primary text-white hover:bg-primary/90 px-12 py-8 rounded-[24px] font-black uppercase tracking-widest shadow-xl shadow-primary/30 mt-8">
                 Explore Spare Parts
              </Button>
           </div>
           
           <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative">
              {[Briefcase, Globe, Monitor, ShieldCheck].map((Icon, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={cn("aspect-square rounded-[40px] bg-white shadow-xl flex items-center justify-center border border-slate-100 hover:border-primary/20 transition-all", idx % 3 === 0 ? "scale-110" : "scale-90")}
                >
                   <Icon size={48} className="text-slate-100 group-hover:text-primary" />
                </motion.div>
              ))}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
              </div>
           </div>
        </motion.div>
      </section>
    </div>
  );
}
