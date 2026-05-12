import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Zap, Trophy, ShieldCheck, Briefcase, GraduationCap } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Career Foundation',
      price: '₹7,000',
      description: 'The fundamental building blocks for your professional journey.',
      features: [
        'Fundamentals + Practical Learning',
        'Live Mentorship',
        'Project-based Learning',
        'Certification Preparation',
        'Resume Building',
        'Community Access'
      ],
      cta: 'Start Foundation',
      highlight: false
    },
    {
      name: 'Placement Accelerator',
      price: '₹15,000',
      description: 'Everything you need to land a top-tier industry role.',
      features: [
        'Everything in Foundation',
        'Mock Interviews',
        'Placement Preparation',
        'Advanced Projects',
        'Career Mentorship',
        'Internship Support',
        'Placement Assistance',
        'Industry Networking'
      ],
      cta: 'Join Accelerator',
      highlight: true
    }
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 bg-white text-slate-900 overflow-hidden relative"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <Badge className="bg-primary text-white hover:bg-primary/90 px-4 py-1 mb-8 uppercase tracking-widest font-black text-xs border-none">Investment in Success</Badge>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-slate-900 uppercase">Transparent Pricing.</h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed italic font-medium">
            "No hidden fees, no gimmicks. Just pure industrial-grade learning designed for outcomes."
          </p>
        </div>
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </motion.section>

      {/* Pricing Cards */}
      <section className="py-24 px-4 -mt-20 relative z-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
           {plans.map((plan, idx) => (
             <motion.div
               key={plan.name}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: idx * 0.2 }}
             >
               <Card className={`relative overflow-hidden h-full flex flex-col border-slate-200 rounded-[50px] shadow-2xl transition-all duration-500 hover:scale-[1.02] ${plan.highlight ? 'bg-white text-slate-900 ring-2 ring-primary' : 'bg-white text-slate-600'}`}>
                  {plan.highlight && (
                    <div className="absolute top-0 right-0 p-8">
                       <Badge className="bg-primary text-white font-black uppercase tracking-widest py-1.5 px-4 rounded-full border-none shadow-lg">Most Popular</Badge>
                    </div>
                  )}
                  
                  <CardContent className="p-12 md:p-16 flex flex-col h-full">
                     <div className="mb-12">
                        <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter text-slate-900">{plan.name}</h3>
                        <div className="flex items-baseline gap-2 mb-6">
                           <span className="text-7xl font-black text-primary tracking-tighter">{plan.price}</span>
                           <span className="text-sm uppercase font-black tracking-widest text-slate-400">/ Program</span>
                        </div>
                        <p className="text-slate-500 text-lg font-medium italic leading-relaxed">
                           {plan.description}
                        </p>
                     </div>

                     <div className="flex-grow flex flex-col gap-8 mb-12">
                        <p className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-400 border-b border-slate-100 pb-4">Included Features</p>
                        <div className="flex flex-col gap-6">
                           {plan.features.map(feature => (
                             <div key={feature} className="flex items-start gap-4 group">
                                <CheckCircle2 className="mt-1 shrink-0 text-primary group-hover:scale-110 transition-transform" size={20} />
                                <span className="text-base font-bold text-slate-700">{feature}</span>
                             </div>
                           ))}
                        </div>
                     </div>

                     <Button size="lg" className={`w-full rounded-[24px] py-9 text-xl font-black transition-all shadow-xl ${plan.highlight ? 'bg-primary text-white hover:bg-primary/90 shadow-primary/20' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-200'}`}>
                        {plan.cta}
                     </Button>
                  </CardContent>
               </Card>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
           <motion.h4 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-slate-400 uppercase tracking-[0.5em] text-[10px] font-black"
           >
             Guaranteed Standards
           </motion.h4>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-16 w-full max-w-5xl">
              {[
                { icon: ShieldCheck, label: 'Secure Checkout' },
                { icon: Trophy, label: 'Elite Credentials' },
                { icon: Briefcase, label: 'Job Assistance' },
                { icon: Zap, label: 'Instant Access' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center gap-4 group cursor-help"
                >
                   <div className="p-6 bg-slate-50 rounded-3xl group-hover:bg-primary/10 group-hover:text-primary transition-all">
                      <item.icon size={40} />
                   </div>
                   <span className="text-[10px] uppercase tracking-widest font-black text-slate-500">{item.label}</span>
                </motion.div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
