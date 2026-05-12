import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, ArrowRight, Clock, User, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'The Rise of System Design in Modern Hiring',
      excerpt: 'Why MNCs are moving away from simple coding tests to complex architectural evaluations.',
      category: 'Career Strategy',
      author: 'Markus Chen',
      date: 'May 10, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Mastering the AWS Cloud Practitioner Exam',
      excerpt: 'A step-by-step roadmap to earning one of the most valuable entry-level cloud credentials.',
      category: 'Certifications',
      author: 'Sarah Jenkins',
      date: 'May 05, 2026',
      readTime: '12 min read',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jPXLkb8yqQxEHx7ZdljcnJk1ryh45INupw&s'
    },
    {
      id: 3,
      title: 'How to Build a Portfolio that Recruiters Love',
      excerpt: 'Forget generic counter apps. Learn what real projects should look like in a professional setting.',
      category: 'Productivity',
      author: 'Alex Rivera',
      date: 'Apr 28, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-24 px-4 overflow-hidden relative bg-white"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-8 bg-primary/10 text-primary border-none px-4 py-1 uppercase tracking-widest font-black text-xs">Pulse & Perspectives</Badge>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter mb-8 text-slate-900 uppercase leading-[1.1]">Industrial Insights.</h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed italic font-medium">
              "Expert commentary on the shifting landscape of engineering, management, and elite hiring."
            </p>
          </motion.div>
        </div>
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </motion.section>

      {/* Blog Feed */}
      <section className="py-24 px-4 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          {/* Main List */}
          <div className="flex flex-col gap-12 flex-grow">
             {posts.map((post, idx) => (
               <motion.div
                 key={post.id}
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: idx * 0.1 }}
                 className="group cursor-pointer"
               >
                 <div className="flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-[400px] aspect-[16/9] rounded-[32px] overflow-hidden relative border border-white/5 group-hover:border-white/20 transition-all">
                       <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                       <div className="absolute top-6 left-6">
                          <Badge className="bg-white text-black font-black uppercase text-[10px] tracking-widest">{post.category}</Badge>
                       </div>
                    </div>
                    <div className="flex-grow flex flex-col justify-center gap-6">
                       <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                          <span className="flex items-center gap-2"><Clock size={14} className="text-primary" /> {post.readTime}</span>
                          <span className="flex items-center gap-2"><User size={14} className="text-primary" /> {post.author}</span>
                       </div>
                       <h3 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 group-hover:text-primary transition-colors leading-tight uppercase">
                          {post.title}
                       </h3>
                       <p className="text-slate-500 leading-relaxed max-w-xl italic font-medium">"{post.excerpt}"</p>
                       <div className="flex items-center gap-4 mt-4">
                          <Button variant="link" className="text-slate-900 px-0 font-black uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-4 transition-all">
                             Read Full Article <ArrowRight size={18} className="text-primary" />
                          </Button>
                       </div>
                    </div>
                 </div>
               </motion.div>
             ))}
          </div>

          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-80 shrink-0 flex flex-col gap-12"
          >
             <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="Search insights..." className="w-full bg-slate-100 border border-slate-200 rounded-2xl py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-primary/30" />
             </div>

             <div className="flex flex-col gap-8">
                <h4 className="text-[10px] uppercase font-black tracking-[0.4em] opacity-30">Trending Categories</h4>
                <div className="flex flex-wrap gap-2">
                   {['Hiring Patterns', 'System Design', 'Cloud', 'AI Foundations', 'Product Sense', 'Interview Prep'].map(tag => (
                     <Badge key={tag} variant="outline" className="border-slate-200 px-4 py-2 hover:bg-primary hover:text-white transition-all cursor-pointer rounded-lg">
                        {tag}
                     </Badge>
                   ))}
                </div>
             </div>

             <div className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm flex flex-col gap-6">
                <h4 className="text-xl font-bold">Join the Pulse.</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Weekly deep-dives into industry outcomes delivered straight to your inbox.</p>
                <input type="email" placeholder="Email address" className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs w-full focus:outline-none focus:border-primary/20" />
                <Button className="w-full bg-primary text-white hover:bg-primary/90 rounded-xl font-bold py-6">Subscribe</Button>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Marquee */}
      <section className="py-24 px-4 text-slate-900">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto rounded-[60px] bg-slate-950 text-white p-12 md:p-24 flex flex-col items-center text-center gap-8 relative overflow-hidden"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tight relative z-10 leading-[0.9]">Elevate Your Industrial IQ.</h2>
            <p className="text-xl text-white/60 max-w-xl relative z-10 italic">
               Thousands of students and professionals stay ahead by reading our weekly trajectory reports.
            </p>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/80 rounded-full px-12 font-bold relative z-10 py-7">Start Reading</Button>
            <div className="absolute -bottom-20 -right-20 opacity-[0.05]">
               <MessageCircle size={400} />
            </div>
          </motion.div>
      </section>
    </div>
  );
}
