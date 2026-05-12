import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Monitor, Award, Zap, Users, Play, ExternalLink, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function TrainingCenters() {
  const trainingModules = [
    { title: '3D Wheel Alignment', desc: 'Precision calibration using laser-guided 3D technology for perfect vehicle dynamics.' },
    { title: 'Wheel Balancing', desc: 'Mastering rotational stability and vibration elimination for high-speed safety.' },
    { title: 'Tyre Changing', desc: 'Operating advanced pneumatic and robotic tyre changers with zero-rim-damage rubric.' },
    { title: 'Nitrogen Generator', desc: 'Scientific tyre inflation management for optimal pressure retention and longevity.' }
  ];

  const trainees = [
    { name: 'Mr. Vineet', location: 'New Zealand' },
    { name: 'Mr. Satyanarayan A Jadhav', location: 'KA, Ranebennur' },
    { name: 'Mr. Ganesh', location: 'Pune' },
    { name: 'Mr. Ravi', location: 'Pune' },
    { name: 'Symbiosis Skill University', location: '3-10-2019' },
    { name: 'Mr. Pruthviraj Dhankude', location: 'Pune' },
    { name: 'Mr. Vivek Badrinath Deshmane', location: 'Pune' },
    { name: 'Mr. Govinda & Mr. Shivprasad', location: 'Hyderabad' },
    { name: 'Mr. Santosh', location: 'Tamil Nadu' },
    { name: 'Mr. Navkishor Dutta', location: 'Assam' }
  ];

  const galleryImages = [
    'https://images.weserv.nl/?url=http://www.amptech.co.in/images/amptech12.jpg',
    'https://images.weserv.nl/?url=http://www.amptech.co.in/images/img-training.jpg',
    'https://images.weserv.nl/?url=http://www.amptech.co.in/images/training-and-certification.jpg',
    'https://images.weserv.nl/?url=http://www.amptech.co.in/images/training-and-certification2.jpg',
    'https://images.weserv.nl/?url=http://www.amptech.co.in/images/training2.jpg',
    'https://images.weserv.nl/?url=http://www.amptech.co.in/images/t1.jpg',
    'https://images.weserv.nl/?url=http://www.amptech.co.in/images/t2.jpg',
    'https://images.weserv.nl/?url=http://www.amptech.co.in/images/amptech-training.png',
    'https://images.weserv.nl/?url=http://www.amptech.co.in/images/gs.jpeg'
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-primary text-white border-none px-4 py-1 uppercase tracking-widest font-black text-xs">Certified Training</Badge>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-tight uppercase">
              Training <span className="text-primary">Centers</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl font-medium italic mb-12">
              "We provide certified training to professionals to operate 3D wheel alignment, wheel balancing, tyre changing, and nitrogen generators."
            </p>
          </motion.div>
        </div>
        
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent animate-pulse" />
        </div>
      </section>

      {/* Modules Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainingModules.map((module, idx) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full border-none shadow-2xl bg-white group hover:scale-105 transition-all duration-500 rounded-[32px] overflow-hidden">
                <CardContent className="p-8 flex flex-col h-full">
                   <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Zap size={28} />
                   </div>
                   <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">{module.title}</h3>
                   <p className="text-slate-500 text-sm font-medium leading-relaxed italic">"{module.desc}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trainees List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                 <Badge className="bg-primary/10 text-primary border-none px-4 py-1 uppercase tracking-widest font-black text-xs mb-6">Alumni Network</Badge>
                 <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-8 italic leading-none">Global Trainee <br /> Ecosystem.</h2>
                 <p className="text-slate-500 text-lg mb-12 italic font-medium">"From Symbiosis Skill University to international professionals in New Zealand, our certification carries weight across borders."</p>
                 
                 <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    {trainees.map((t, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="flex items-center gap-3 py-2 border-b border-slate-100 group"
                      >
                         <Users size={16} className="text-primary group-hover:scale-125 transition-transform" />
                         <div>
                            <p className="text-slate-900 font-black text-xs uppercase tracking-tight">{t.name}</p>
                            <p className="text-[10px] text-slate-400 font-bold italic">{t.location}</p>
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
                className="grid grid-cols-2 gap-6"
              >
                 {galleryImages.slice(0, 4).map((img, idx) => (
                   <div key={idx} className={cn("rounded-[40px] overflow-hidden shadow-2xl bg-white p-3 border border-slate-100", idx % 3 === 0 ? "aspect-square" : "aspect-[4/3]")}>
                      <img 
                        src={img} 
                        alt="Training" 
                        className="w-full h-full object-cover rounded-[32px] transition-all duration-700 hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                   </div>
                 ))}
              </motion.div>
           </div>
        </div>
      </section>

      {/* Full Gallery */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex flex-col items-center text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 italic">Session Archives</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             {galleryImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square bg-white rounded-[48px] overflow-hidden shadow-2xl border border-slate-100 p-4"
                >
                  <img 
                    src={img} 
                    alt="Training archive" 
                    className="w-full h-full object-cover rounded-[32px] opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* call to action */}
      <section className="py-24 px-6 bg-white overflow-hidden relative">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto bg-slate-900 rounded-[64px] p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
           
           <div className="relative z-10 flex flex-col items-center">
              <ShieldCheck size={64} className="text-primary mb-8" />
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 italic">Get Certified Now.</h2>
              <p className="text-slate-400 text-xl max-w-2xl mb-12 font-medium italic">"Join the thousands of engineers who have mastered advanced automotive equipment with AMPTECH."</p>
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-12 py-8 rounded-[24px] font-black text-lg uppercase tracking-widest shadow-2xl shadow-primary/40">
                Enroll in Training
              </Button>
           </div>
        </motion.div>
      </section>
    </div>
  );
}
