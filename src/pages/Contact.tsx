import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube,
  Send,
  Zap,
  Globe,
  ArrowRight
} from 'lucide-react';

export default function Contact() {
  return (
    <div className="pb-24">
      {/* Header */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-24 px-4 text-center overflow-hidden relative bg-white"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-8 bg-primary/10 text-primary border-none px-4 py-1 uppercase tracking-widest font-black text-xs">Support Nexus</Badge>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter mb-8 text-slate-900 uppercase leading-[1.1]">Get in Touch.</h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed italic font-medium">
              "Have a question about your trajectory? Our counselors are humans, not bots—ready to talk when you are."
            </p>
          </motion.div>
        </div>
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </motion.section>

      {/* Main Grid */}
      <section className="py-24 px-4 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.5fr_2fr] gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12"
          >
             <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-black tracking-tighter text-slate-900 uppercase">Direct Connect.</h2>
                <p className="text-slate-500 font-medium leading-relaxed italic">Reach out through any of these channels and our team will respond within 4 business hours.</p>
             </div>
             
             <div className="flex flex-col gap-8">
                {[
                  { icon: Phone, label: 'Pune Helpline', value: '+91 7676832037', desc: '+91 7676832037' },
                  { icon: Phone, label: 'Vijayapura Helpline', value: '+91 7760839088', desc: '+91 7760839088' },
                  { icon: Mail, label: 'Email Support', value: 'contact@amptech.co.in', desc: 'amphardsoft@gamil.com' },
                  { icon: Mail, label: 'Branch Email', value: '', desc: 'Vijayapura Support' },
                ].map((item, idx) => (
                  <motion.div 
                    key={item.label} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-6 items-center group"
                  >
                     <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-500 shadow-sm">
                        <item.icon size={24} className="text-slate-400 group-hover:text-white" />
                     </div>
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400">{item.label}</span>
                        <h4 className="text-xl font-black tracking-tight text-slate-900 uppercase">{item.value}</h4>
                        <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                     </div>
                  </motion.div>
                ))}
             </div>

             <div className="flex flex-col gap-6 pt-12 border-t border-slate-200">
                <h4 className="text-[10px] uppercase font-black tracking-[0.4em] text-slate-400">Follow the Revolution</h4>
                <div className="flex gap-4">
                   {[
                     { Icon: Instagram, link: '#' },
                     { Icon: Linkedin, link: '#' },
                     { Icon: Twitter, link: '#' },
                     { Icon: Youtube, link: '#' }
                   ].map((item, idx) => (
                     <motion.div 
                       key={idx} 
                       initial={{ opacity: 0, scale: 0.8 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                       className="w-12 h-12 rounded-2xl border border-slate-200 flex items-center justify-center bg-white text-slate-400 hover:bg-primary hover:border-primary hover:text-white transition-all cursor-pointer shadow-sm"
                     >
                        <item.Icon size={20} />
                     </motion.div>
                   ))}
                </div>
             </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-1 px-1 bg-gradient-to-br from-slate-200 via-slate-50 to-transparent rounded-[50px] shadow-sm"
          >
             <div className="bg-white p-8 md:p-16 rounded-[32px] md:rounded-[48px] h-full flex flex-col gap-10 border border-slate-100 shadow-inner">
                <h3 className="text-3xl font-black tracking-tight text-slate-900 uppercase">Drop a Message.</h3>
                
                <form className="flex flex-col gap-8">
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-2 relative">
                         <label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Full Name</label>
                         <input type="text" placeholder="Alex Rivera" className="bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-primary transition-colors text-slate-900 font-bold" />
                      </div>
                      <div className="flex flex-col gap-2 relative">
                         <label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Email Address</label>
                         <input type="email" placeholder="alex@gmail.com" className="bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-primary transition-colors text-slate-900 font-bold" />
                      </div>
                   </div>
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-2 relative">
                         <label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Phone Number</label>
                         <input type="tel" placeholder="+91 000 000 0000" className="bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-primary transition-colors text-slate-900 font-bold" />
                      </div>
                      <div className="flex flex-col gap-2 relative">
                         <label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Program of Interest</label>
                         <select className="bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer text-slate-900 font-bold">
                            <option>Full Stack Dev</option>
                            <option>Digital Marketing</option>
                            <option>Product Management</option>
                            <option>Cyber Security</option>
                         </select>
                      </div>
                   </div>
                   <div className="flex flex-col gap-2 relative">
                      <label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Your Questions / Notes</label>
                      <textarea placeholder="Tell us about your learning goals..." className="bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-primary transition-colors min-h-[120px] resize-none text-slate-900 font-bold" />
                   </div>
                   
                   <Button className="bg-primary text-white hover:bg-primary/90 rounded-2xl py-8 text-lg font-black group shadow-xl shadow-primary/20">
                      Send Message <Send size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </Button>
                </form>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 px-4 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
               <Badge className="mb-4 bg-primary/10 text-primary border-none px-4 py-1 uppercase tracking-widest font-black text-xs">Our Presence</Badge>
               <h2 className="text-3xl md:text-7xl font-black tracking-tight text-slate-900 uppercase italic">Training Hubs.</h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12">
               {/* Pune - Head Office */}
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="bg-slate-50 p-8 md:p-10 rounded-[32px] md:rounded-[48px] border border-slate-100 flex flex-col gap-8 group hover:shadow-2xl transition-all duration-500"
               >
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Head Office</span>
                     <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                        <MapPin className="text-primary" />
                     </div>
                  </div>
                  <div>
                     <h3 className="text-3xl font-black text-slate-900 uppercase mb-4 italic">Pune.</h3>
                     <p className="text-slate-500 font-medium leading-relaxed italic mb-6">
                        Wing C/2, Flat No.13, Shivtirth Nagar, S.No.59/2A/1/4,<br />
                        Rahatani, Pimpri Chinchwad (M Corp),<br />
                        Haveli, Pune 411017.
                     </p>
                     <div className="flex flex-col gap-2">
                        <p className="font-bold text-slate-700 flex items-center gap-2"><Phone size={14} className="text-primary" /> +91 7676832037 / 7760839088</p>
                        <p className="font-bold text-slate-700 flex items-center gap-2"><Mail size={14} className="text-primary" /> contact@amptech.co.in</p>
                     </div>
                  </div>
                  <Button asChild className="bg-slate-900 text-white hover:bg-primary rounded-2xl py-6 font-bold mt-auto border-none">
                     <a href="https://g.page/AMP-Wheel-Tech?share" target="_blank" rel="noopener noreferrer">
                        Google Map <ArrowRight className="ml-2" />
                     </a>
                  </Button>
               </motion.div>

               {/* Vijayapura - Branch Office */}
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="bg-slate-50 p-8 md:p-10 rounded-[32px] md:rounded-[48px] border border-slate-100 flex flex-col gap-8 group hover:shadow-2xl transition-all duration-500"
               >
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Branch Office</span>
                     <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                        <MapPin className="text-primary" />
                     </div>
                  </div>
                  <div>
                     <h3 className="text-3xl font-black text-slate-900 uppercase mb-4 italic">Vijayapura.</h3>
                     <p className="text-slate-500 font-medium leading-relaxed italic mb-6">
                        Plot NO.46, Satya Sai Nagar,<br />
                        Near Satya Sai School, Vazra Hanuman Railway Gate,<br />
                        Vijayapura, Karnataka, India. Zip: 586102
                     </p>
                     <div className="flex flex-col gap-2">
                        <p className="font-bold text-slate-700 flex items-center gap-2"><Phone size={14} className="text-primary" /> +91 9922686404 / 7676944821</p>
                        <p className="font-bold text-slate-700 flex items-center gap-2"><Mail size={14} className="text-primary" /> bijapur@amptech.co.in</p>
                     </div>
                  </div>
                  <Button asChild className="bg-slate-900 text-white hover:bg-primary rounded-2xl py-6 font-bold mt-auto border-none">
                     <a href="https://goo.gl/maps/B93Z3weD5jZbQbgL6" target="_blank" rel="noopener noreferrer">
                        Google Map <ArrowRight className="ml-2" />
                     </a>
                  </Button>
               </motion.div>
            </div>
         </div>
      </section>
    </div>
  );
}
