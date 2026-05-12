import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { PARTNER_LOGOS } from '../data';
import { Briefcase, Building2, TrendingUp, Users, Zap, ShieldCheck } from 'lucide-react';

export default function Placements() {
  const metrics = [
    { label: 'Hiring Partners', value: '150+', icon: Building2 },
    { label: 'Highest Package', value: '24 LPA', icon: TrendingUp },
    { label: 'Average Package', value: '8.5 LPA', icon: Zap },
    { label: 'Success Velocity', value: '45 Days', icon: Users },
  ];

  return (
    <div className="pb-24">
      {/* Hero Header */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-24 px-4 relative overflow-hidden bg-white"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-8 bg-primary/10 text-primary font-black uppercase tracking-widest px-4 py-1 border-none shadow-sm">Outcome Focused</Badge>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter mb-8 text-slate-900 uppercase leading-[1.1]">Career Outcomes.</h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed italic font-medium">
              "Our success is measured by yours. From first interview to final deployment, we are your bridge to global opportunities."
            </p>
          </motion.div>
        </div>
        <div className="absolute top-[10%] right-[10%] w-full md:w-[500px] h-full md:h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      </motion.section>

      {/* Metrics Grid */}
      <section className="py-24 px-4 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 md:p-10 rounded-[32px] md:rounded-[40px] bg-white border border-slate-100 flex flex-col items-center text-center gap-4 hover:shadow-2xl transition-all shadow-sm"
            >
               <metric.icon size={32} className="text-primary" />
               <p className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">{metric.value}</p>
               <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-24 px-4 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-16 flex flex-col items-center text-center"
        >
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 uppercase">Our Alumni Work Here.</h2>
           <p className="text-slate-500 text-lg font-medium max-w-xl">Join the ranks of professionals at leading multinational companies and high-growth startups.</p>
        </motion.div>
        
        <div className="flex flex-wrap items-center justify-center gap-12 max-w-5xl mx-auto opacity-40 hover:opacity-100 transition-all">
          {PARTNER_LOGOS.map((partner, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex flex-col items-center gap-3"
            >
               <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center p-3 shadow-xl hover:scale-110 transition-transform border border-slate-100">
                   <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" />
                </div>
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Accelerator Workflow */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
           <div className="flex flex-col gap-8 flex-grow">
              <motion.h2 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-6xl font-black tracking-tighter leading-tight text-slate-900 uppercase"
              >
                The Accelerator <br className="hidden md:block" /> Workflow.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-slate-500 text-xl font-medium"
              >
                Our proven 4-stage process to ensure you aren't just job-ready, but industry-elite.
              </motion.p>
              
              <div className="flex flex-col gap-6">
                {[
                  { step: '01', title: 'Rubric Mastery', desc: 'Passing the internal industry-standard quality gates.' },
                  { step: '02', title: 'Portfolio Lockdown', desc: 'Deploying your production project with clean, documented code.' },
                  { step: '03', title: 'Elite Interview Prep', desc: 'Mock rounds with hiring managers from Top Tech firms.' },
                  { step: '04', title: 'Direct Access', desc: 'Warm introductions to recruiting teams within our partner network.' },
                ].map((item, idx) => (
                  <motion.div 
                    key={item.step} 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="flex gap-6 pb-6 border-b border-slate-100 group"
                  >
                     <span className="text-4xl font-black text-slate-100 group-hover:text-primary transition-colors duration-500">{item.step}</span>
                     <div className="flex flex-col">
                        <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">{item.title}</h4>
                        <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                     </div>
                  </motion.div>
                ))}
              </div>
           </div>
           
           <motion.div 
             initial={{ opacity: 0, x: 50, rotate: 2 }}
             whileInView={{ opacity: 1, x: 0, rotate: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="w-full lg:w-[450px] aspect-[4/5] rounded-[60px] border border-slate-200 bg-slate-50 p-12 flex flex-col justify-between relative overflow-hidden group shadow-inner"
           >
              <ShieldCheck className="text-primary opacity-[0.05] group-hover:opacity-10 transition-all" size={200} />
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4 leading-tight">Placement <br /> Insurance.</h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  Our Career Experts stand by you until you land your role. We don't just provide courses; we provide outcomes.
                </p>
                <div className="mt-12 h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                   <motion.div initial={{ width: 0 }} whileInView={{ width: '95%' }} transition={{ duration: 1.5, delay: 0.5 }} className="h-full bg-primary" />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
           </motion.div>
        </div>
      </section>
    </div>
  );
}
