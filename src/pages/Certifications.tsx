import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Share2, 
  PhoneCall, 
  ChevronRight, 
  ChevronLeft,
  Lock,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const trainingCertUrl = new URL('../assets/training-cert.png', import.meta.url).href;
const internshipCertUrl = new URL('../assets/internship-cert.png', import.meta.url).href;
const certCertUrl = new URL('../assets/cert.png', import.meta.url).href;

const CERT_TYPES = [
  {
    id: 'training',
    label: 'Training',
    tagline: 'Expert-led cohort completion',
    description: 'Issued after rubric checks + expert review, not attendance.',
    image: trainingCertUrl,
    color: 'blue'
  },
  {
    id: 'internship',
    label: 'Internship',
    tagline: 'Project + evaluation proof',
    description: 'Signals proof-of-work, evaluation, and consistency in delivery.',
    image: internshipCertUrl,
    color: 'primary'
  },
  {
    id: 'excellence',
    label: 'Excellence',
    tagline: 'Top performance recognition',
    description: 'Fits resume + LinkedIn. Looks professional across devices.',
     image: certCertUrl,
    color: 'orange'
  }
];

export default function Certifications() {
  const [activeTab, setActiveTab] = useState(0);

  const nextTab = () => setActiveTab((prev) => (prev + 1) % CERT_TYPES.length);
  const prevTab = () => setActiveTab((prev) => (prev - 1 + CERT_TYPES.length) % CERT_TYPES.length);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Features */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-6"
            >
              <Badge className="w-fit bg-slate-50 border border-slate-200 text-slate-500 px-4 py-1.5 rounded-full text-[10px] uppercase font-black tracking-widest shadow-sm flex items-center gap-2">
                <CheckCircle2 size={14} className="text-primary" />
                Certification that signals proof
              </Badge>
              
              <h1 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.95]">
                Get Certified. <br />
                <span className="text-primary">Get Hired.</span>
              </h1>
              
              <p className="text-slate-500 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
                Your certificate is tied to real deliverables, projects, expert checks, and rubric-based evaluation, so recruiters see signal, not fluff.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {['Expert-reviewed', 'Rubric-scored', 'Shareable proof'].map((pill) => (
                <div key={pill} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-100 text-xs font-black text-slate-600 uppercase tracking-widest shadow-sm">
                  <CheckCircle2 size={14} className="text-primary" />
                  {pill}
                </div>
              ))}
            </div>

            <div className="space-y-10 mt-4">
              {[
                { 
                  title: 'Outcome-based credential', 
                  desc: 'Issued after rubric checks + expert review, not attendance.',
                  icon: Sparkles
                },
                { 
                  title: 'Hiring trust built-in', 
                  desc: 'Signals proof-of-work, evaluation, and consistency in delivery.',
                  icon: ShieldCheck
                },
                { 
                  title: 'Clean & shareable', 
                  desc: 'Fits resume + LinkedIn. Looks professional across devices.',
                  icon: Share2
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <feature.icon size={20} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">{feature.title}</h4>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-8">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-2xl px-8 py-7 font-black tracking-widest uppercase text-xs shadow-xl shadow-primary/20 flex items-center gap-3">
                <PhoneCall size={18} />
                Talk to Career Expert
              </Button>
              <Button variant="outline" className="w-full sm:w-auto border-slate-200 text-slate-600 rounded-2xl px-10 py-7 font-black tracking-widest uppercase text-xs flex items-center justify-between group">
                See Reviews <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform ml-2" />
              </Button>
            </div>
            
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-4">
              *Issued after evaluation & rubric validation.
            </p>
          </div>

          {/* Right Column - Certificate Preview */}
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-primary/5 rounded-full blur-[100px] -z-10" />
            
            <Card className="bg-white border-slate-100 p-4 md:p-10 rounded-[48px] shadow-2xl relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Certificate Preview</span>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tight">
                      {CERT_TYPES[activeTab].label}
                    </h3>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500 font-bold italic text-sm">{CERT_TYPES[activeTab].tagline}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={prevTab} className="rounded-full w-10 h-10 border-slate-100 hover:bg-slate-50 text-slate-400">
                    <ChevronLeft size={18} />
                  </Button>
                  <Button variant="outline" size="icon" onClick={nextTab} className="rounded-full w-10 h-10 border-slate-100 hover:bg-slate-50 text-slate-400">
                    <ChevronRight size={18} />
                  </Button>
                </div>
              </div>

              {/* Interactive Certificate Display */}
              <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-slate-50 group border border-slate-100 mb-10 cursor-pointer">
                {/* Swipe to preview badge */}
                <div className="absolute top-6 left-6 z-20">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/50 text-[10px] font-black uppercase tracking-widest text-slate-900 flex items-center gap-3 shadow-sm">
                    <Sparkles size={14} className="text-primary animate-pulse" />
                    Swipe to preview
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="w-full h-full p-4"
                  >
                    <div className="w-full h-full rounded-2xl overflow-hidden relative border border-slate-200/50 shadow-inner bg-white flex items-center justify-center p-8">
                      <img 
                        src={CERT_TYPES[activeTab].image} 
                        alt="Certificate"
                        className="w-full h-full object-contain"
                      />
                      {/* Overlay to handle different labels dynamically if needed, but here just visual reinforcement */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Corner Accents */}
                <div className="absolute bottom-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center border border-slate-100">
                    <Lock size={20} className="text-primary" />
                  </div>
                </div>
              </div>

              {/* Selection Tabs */}
              <div className="grid grid-cols-3 gap-4">
                {CERT_TYPES.map((type, idx) => (
                  <button
                    key={type.id}
                    onClick={() => setActiveTab(idx)}
                    className={`flex flex-col gap-2 p-5 rounded-3xl border transition-all text-left outline-none ${
                      activeTab === idx 
                        ? 'bg-white border-primary shadow-2xl shadow-primary/10 -translate-y-1' 
                        : 'bg-slate-50 border-transparent hover:border-slate-200 hover:bg-slate-100/50'
                    }`}
                  >
                    <span className={`text-[10px] font-black uppercase tracking-widest ${
                      activeTab === idx ? 'text-slate-900 font-black' : 'text-slate-400 font-bold'
                    }`}>
                      {type.label}
                    </span>
                    <p className={`text-[10px] font-bold leading-tight ${
                      activeTab === idx ? 'text-slate-500 italic' : 'text-slate-300'
                    }`}>
                      {type.tagline}
                    </p>
                    <div className={`h-1.5 w-full rounded-full mt-3 overflow-hidden ${
                      activeTab === idx ? 'bg-primary/20' : 'bg-slate-200'
                    }`}>
                      <motion.div 
                        initial={false}
                        animate={{ width: activeTab === idx ? '100%' : '0%' }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
