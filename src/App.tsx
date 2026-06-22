import { useEffect, useState } from 'react';
import { ArrowUpRight, Globe, Users } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const domains = [
    {
      title: 'Brand & Businesses',
      subtitle: 'nexovide.com',
      url: 'https://grow.nexvoide.com',
      icon: Globe,
      tag: 'Main Platform',
      description:
        'Built for individuals, solo founders, and growing brands who want a powerful presence without the complexity.',
      pills: ['Solo Founders', 'Creators', 'Startups', 'Small Businesses', 'Personal Brands'],
      cta: 'Visit Platform',
      gradient: 'from-[#0d1440] via-[#1a237e] to-[#2642ff]',
    },
    {
      title: 'Production Houses',
      subtitle: 'partner.nexvoide.com',
      url: 'https://partners.nexvoide.com',
      icon: Users,
      tag: 'Enterprise',
      description:
        'Engineered for media houses, content agencies, and marketing teams managing high-volume output across multiple clients.',
      pills: ['Media Houses', 'Content Agencies', 'Marketing Teams', 'Multi-Client Studios'],
      cta: 'Apply for Access',
      gradient: 'from-[#080a1a] via-[#0d1025] to-[#11142e]',
    },
  ];

  return (
    <div className="min-h-screen bg-[#010333] relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #2642ff 0%, transparent 70%)',
            left: mousePosition.x - 400,
            top: mousePosition.y - 400,
          }}
          animate={{
            left: mousePosition.x - 400,
            top: mousePosition.y - 400,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 50 }}
        />
        
        {/* Static gradient orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#2642ff]/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#2642ff]/15 blur-[100px]" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-[#cccccc]/5 blur-[80px]" />

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(#cccccc 1px, transparent 1px),
              linear-gradient(90deg, #cccccc 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#2642ff]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-12 md:pt-0">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <img
              src="/logo1.png"
              alt="Nexvoide logo 1"
              className="h-12 w-auto object-contain"
            />
           
          </div>
          <p className="text-[#cccccc]/70 text-lg max-w-md mx-auto">
            Choose your destination to continue
          </p>
        </motion.div>

        {/* Domain Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {domains.map((domain, index) => (
            <motion.a
              key={domain.url}
              href={domain.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + index * 0.15,
                ease: 'easeOut'
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#2642ff] to-[#4a6bff] rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative bg-[#010333]/60 backdrop-blur-xl border border-[#cccccc]/10 rounded-2xl p-8 lg:p-10 overflow-hidden group-hover:border-[#2642ff]/50 transition-all duration-500">
                {/* Card Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${domain.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#2642ff]/20 to-[#2642ff]/5 border border-[#2642ff]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <domain.icon className="w-8 h-8 text-[#2642ff] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Text */}
                  <div className="mb-6">
                    <span className="text-[#2642ff] text-sm font-medium uppercase tracking-wider">
                      {domain.subtitle}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#cccccc] transition-all duration-300">
                      {domain.title}
                    </h2>
                    <p className="text-[#cccccc]/60 text-base">
                      {domain.description}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="flex items-center gap-2 text-[#cccccc] group-hover:text-white transition-colors duration-300">
                    <span className="font-medium">Visit Website</span>
                    <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#2642ff]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-[#cccccc]/40 text-sm">
            © 2026 Nexvoide. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
