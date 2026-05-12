import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Grid, 
  Layout, 
  Users, 
  Bell, 
  Settings, 
  ChevronRight, 
  Zap, 
  Trophy, 
  Clock, 
  BookOpen, 
  BarChart3,
  Calendar,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const courses = [
    { name: 'Full Stack Web Architecture', progress: 65, instructor: 'Dr. Sarah K.', icon: Zap },
    { name: 'Advanced System Design', progress: 20, instructor: 'Markus Chen', icon: Layout },
    { name: 'Professional Agile Lab', progress: 95, icon: Users },
  ];

  const activities = [
    { type: 'Assignment', title: 'Enterprise Auth Module', status: 'Due in 2 days', urgency: 'high' },
    { type: 'Certification', title: 'AWS Cloud Practitioner', status: 'In Review', urgency: 'low' },
    { type: 'Live Session', title: 'System Scalability Q&A', status: 'Today, 8 PM', urgency: 'today' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-slate-50 text-slate-900 p-4 md:p-8 flex flex-col gap-8"
    >
      {/* Top Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-6"
      >
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-black tracking-tighter text-slate-900 uppercase">Welcome back, Alex.</h1>
          <p className="text-slate-400 text-sm font-medium">Industrial Trainee ID: #AMP-2401-443</p>
        </div>
        <div className="flex items-center gap-4">
           <div className="relative hidden md:block">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
              <input type="text" placeholder="Search resources..." className="bg-white border border-slate-200 rounded-xl py-2.5 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-64 shadow-sm" />
           </div>
           <Button variant="outline" size="icon" className="rounded-xl border-slate-200 bg-white relative shadow-sm hover:bg-slate-50">
              <Bell size={18} className="text-slate-600" />
              <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white" />
           </Button>
           <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop" alt="User" />
           </div>
        </div>
      </motion.header>

      {/* Stats Quick View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         {[
           { label: 'Courses Active', val: '04', icon: BookOpen, color: 'bg-blue-50 text-blue-600' },
           { label: 'Points Earned', val: '1,280', icon: Trophy, color: 'bg-yellow-50 text-yellow-600' },
           { label: 'Time Spent', val: '42h', icon: Clock, color: 'bg-purple-50 text-purple-600' },
           { label: 'Learning Velocity', val: '92%', icon: BarChart3, color: 'bg-green-50 text-green-600' },
         ].map((stat, idx) => (
           <motion.div
             key={idx}
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.4, delay: idx * 0.1 }}
           >
             <Card className="bg-white border-slate-200 p-4 md:p-5 flex items-center justify-between hover:shadow-xl hover:border-primary/20 transition-all shadow-sm rounded-2xl h-full">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] uppercase font-black tracking-widest text-slate-400">{stat.label}</span>
                  <span className="text-xl font-black text-slate-900">{stat.val}</span>
                </div>
                <div className={`p-3 md:p-3.5 rounded-xl ${stat.color} shadow-inner`}>
                  <stat.icon size={20} />
                </div>
             </Card>
           </motion.div>
         ))}
      </div>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-8 flex-grow">
          {/* Main Feed */}
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Continued Learning</h3>
                <Link to="/programs" className="text-xs uppercase tracking-widest font-black text-slate-400 hover:text-primary transition-colors">View Catalog</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {courses.map((course, idx) => (
                   <motion.div
                     key={course.name}
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                   >
                     <Card className="bg-white border-slate-200 p-4 md:p-5 hover:shadow-xl hover:border-primary/30 transition-all flex flex-col gap-4 group rounded-2xl shadow-sm h-full">
                        <div className="flex items-center justify-between">
                           <div className="p-2.5 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                              <course.icon size={20} />
                           </div>
                           <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full hover:bg-slate-100 text-slate-400 group-hover:text-slate-900">
                              <ChevronRight size={16} />
                           </Button>
                        </div>
                        <div className="flex flex-col gap-0.5">
                           <h4 className="font-black text-slate-900 tracking-tight uppercase text-sm">{course.name}</h4>
                           <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Inst: {course.instructor || 'AMP Expert Team'}</p>
                        </div>
                        <div className="flex flex-col gap-1.5">
                           <div className="flex justify-between text-[9px] font-black uppercase text-slate-400">
                              <span>Progress</span>
                              <span className="text-slate-900">{course.progress}%</span>
                           </div>
                           <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                              <motion.div initial={{ width: 0 }} animate={{ width: `${course.progress}%` }} transition={{ duration: 1, delay: 1 }} className="h-full bg-primary" />
                           </div>
                        </div>
                     </Card>
                   </motion.div>
                 ))}
                 <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="p-5 md:p-6 rounded-2xl md:rounded-[32px] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center gap-3 hover:bg-white hover:border-primary/50 hover:border-solid transition-all cursor-pointer group shadow-sm bg-slate-50/50 min-h-[140px]"
                 >
                    <div className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-300 group-hover:border-primary group-hover:text-primary transition-colors font-bold text-lg">+</div>
                    <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 group-hover:text-slate-600">Enroll in Course</span>
                 </motion.div>
              </div>
            </motion.div>

            {/* Achievement Timeline */}
            <motion.div 
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="p-6 md:p-8 rounded-3xl md:rounded-[40px] bg-white border border-slate-200 shadow-sm"
            >
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-8">Professional Trajectory</h3>
                <div className="flex flex-col gap-8 relative pl-6 border-l-2 border-slate-100">
                   {[
                     { date: 'Oct 24, 2026', title: 'Rubric Passed: Backend Architecture', type: 'checkpoint' },
                     { date: 'Oct 12, 2026', title: 'Project Deployed: FinCore Microservice', type: 'deployment' },
                     { date: 'Sep 30, 2026', title: 'Certification Earned: AWS Associate', type: 'certification' },
                   ].map((item, idx) => (
                     <motion.div 
                       key={idx} 
                       initial={{ opacity: 0, x: -10 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.5, delay: idx * 0.1 }}
                       className="relative"
                     >
                        <div className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-primary" />
                        <div className="flex flex-col gap-1">
                           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.date}</span>
                           <h4 className="font-bold text-slate-700">{item.title}</h4>
                        </div>
                     </motion.div>
                   ))}
                </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-8">
             {/* Up Next / Assignments */}
             <motion.div 
               initial={{ x: 20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: 0.6 }}
               className="p-6 md:p-8 rounded-3xl md:rounded-[40px] bg-slate-900 text-white flex flex-col gap-8 shadow-2xl relative overflow-hidden"
             >
                <div className="flex justify-between items-center relative z-10">
                   <h3 className="font-black text-xl uppercase tracking-tight">Next Objectives</h3>
                   <Calendar size={20} className="text-white/20" />
                </div>
                <div className="flex flex-col gap-4 relative z-10">
                   {activities.map(activity => (
                     <div key={activity.title} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2 hover:bg-white/10 transition-colors">
                        <div className="flex items-center justify-between">
                           <Badge variant="outline" className={`border-none px-0 text-[10px] uppercase font-black tracking-widest ${
                             activity.urgency === 'high' ? 'text-red-400' : activity.urgency === 'today' ? 'text-blue-400' : 'text-white/40'
                           }`}>
                              {activity.type}
                           </Badge>
                           <Clock size={12} className="text-white/20" />
                        </div>
                        <h4 className="font-bold text-sm leading-tight text-white">{activity.title}</h4>
                        <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{activity.status}</p>
                     </div>
                   ))}
                </div>
                <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 rounded-2xl py-8 text-lg font-black z-10 shadow-xl">
                   Open Daily Planner
                </Button>
                <motion.div 
                   animate={{ 
                     scale: [1, 1.1, 1],
                     rotate: [0, 5, 0]
                   }}
                   transition={{ 
                     duration: 5, 
                     repeat: Infinity,
                     ease: "easeInOut"
                   }}
                   className="absolute -top-12 -right-12 p-8 opacity-[0.05] pointer-events-none"
                >
                   <Zap size={250} className="text-white" fill="currentColor" />
                </motion.div>
             </motion.div>

             {/* Mentorship Slot */}
             <motion.div 
               initial={{ x: 20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: 0.8 }}
               className="p-6 md:p-8 rounded-3xl md:rounded-[40px] border border-slate-200 flex flex-col gap-6 bg-white shadow-sm"
             >
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Active Mentorship</h4>
                <div className="flex items-center gap-4">
                   <div className="w-14 h-14 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                      <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" alt="Mentor" className="w-full h-full object-cover" />
                   </div>
                   <div>
                      <p className="font-black text-slate-900 uppercase tracking-tight">Dr. Sarah K.</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">Next Slot: Wed, 4 PM</p>
                   </div>
                </div>
                <div className="flex gap-2">
                   <Button size="sm" variant="outline" className="flex-grow border-slate-200 bg-white hover:bg-slate-50 rounded-xl text-xs font-bold py-5">Message</Button>
                   <Button size="sm" variant="outline" className="flex-grow border-slate-200 bg-white hover:bg-slate-50 rounded-xl text-xs font-bold py-5">Book Slot</Button>
                </div>
             </motion.div>

             {/* Placement Tracker */}
             <motion.div 
               initial={{ x: 20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: 1 }}
               className="p-6 md:p-8 rounded-3xl md:rounded-[40px] bg-primary/5 border border-primary/20 flex flex-col gap-6 shadow-sm"
             >
                <div className="flex items-center gap-3 text-primary">
                   <ShieldCheck size={24} />
                   <h4 className="font-black text-sm uppercase tracking-widest">Accelerator Status</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                   Finish the "Enterprise Auth" block to unlock placement introductions for FinTech roles.
                </p>
                <div className="flex items-center gap-2">
                   <CheckCircle2 size={16} className="text-primary opacity-50" />
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest line-through">Profile Audit</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-[14px] h-[14px] rounded-full border-2 border-primary/50" />
                   <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Rubric Evaluation</span>
                </div>
             </motion.div>
          </div>
      </div>
    </motion.div>
  );
}
