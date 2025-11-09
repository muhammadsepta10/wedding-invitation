'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-intersection-observer';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import SDMonogram from './SDMonogram';

export default function Thanks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [scrollY, setScrollY] = useState(0);
  const [currentHour, setCurrentHour] = useState(12);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Seasonal theme based on time
    const updateTime = () => {
      const now = new Date();
      setCurrentHour(now.getHours());
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 60000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <section id="thanks" className="section relative overflow-hidden min-h-screen">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            y: scrollY * 0.3,
          }}
        >
          <Image
            src="/image/background.webp"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        {/* Enhanced Gradient Overlay - Seasonal Theme (darker for white text) */}
        <div 
          className={`absolute inset-0 transition-all duration-1000 ${
            currentHour >= 6 && currentHour < 12 
              ? 'bg-gradient-to-br from-blue-900/70 via-purple-900/60 to-indigo-900/80'
              : currentHour >= 12 && currentHour < 18
              ? 'bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-indigo-900/90'
              : currentHour >= 18 && currentHour < 22
              ? 'bg-gradient-to-br from-purple-900/80 via-blue-900/70 to-indigo-900/90'
              : 'bg-gradient-to-br from-indigo-900/90 via-purple-900/80 to-black/70'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-purple-900/50 to-blue-900/70" />
      </div>

      {/* Sakura Decorations */}
      <div className="absolute top-8 left-8 opacity-30 z-10">
        <Image
          src="/image/cabang-kecil-sakura.webp"
          alt="Cherry Blossom"
          width={120}
          height={120}
          className="w-24 h-24 md:w-32 md:h-32 brightness-0 invert opacity-50"
        />
      </div>
      
      <div className="absolute top-8 right-8 opacity-30 z-10">
        <Image
          src="/image/cabang-kecil-sakura.webp"
          alt="Cherry Blossom"
          width={120}
          height={120}
          className="w-24 h-24 md:w-32 md:h-32 transform rotate-180 brightness-0 invert opacity-50"
        />
      </div>

      <div className="absolute bottom-8 left-8 opacity-25 z-10">
        <Image
          src="/image/cabang-kecil-sakura.webp"
          alt="Cherry Blossom"
          width={120}
          height={120}
          className="w-24 h-24 md:w-32 md:h-32 brightness-0 invert opacity-50"
        />
      </div>

      <div className="absolute bottom-8 right-8 opacity-25 z-10">
        <Image
          src="/image/cabang-kecil-sakura.webp"
          alt="Cherry Blossom"
          width={120}
          height={120}
          className="w-24 h-24 md:w-32 md:h-32 transform rotate-180 brightness-0 invert opacity-50"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-pink-200/60 rounded-full"
            style={{
              left: `${5 + i * 9}%`,
              top: `${10 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 py-8 md:py-16 text-center relative z-10"
      >
        <div className="mb-8">
          <SDMonogram
            size="md"
            color="white"
            animate={true}
            delay={0.3}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl mb-8 leading-relaxed text-white" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(255,255,255,0.3)'
          }}
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/I berkenan hadir untuk memberikan do'a restu kepada
          putra-putri kami.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mb-8"
        >
          <p className="text-xl font-semibold mb-6 text-white" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(255,255,255,0.3)'
          }}>Salam Hormat Kedua Mempelai</p>
          <p className="text-2xl font-script mb-8 text-white" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(255,255,255,0.3)',
            letterSpacing: '0.05em'
          }}>Kami yang berbahagia</p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 shadow-lg">
              <p className="text-lg font-semibold mb-2 text-white" style={{
                textShadow: '1px 1px 3px rgba(0,0,0,0.7)'
              }}>Keluarga Mempelai Pria</p>
              <p className="text-base text-white/90" style={{
                textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
              }}>Bpk. Bambang Harto Subroto</p>
              <p className="text-base text-white/90" style={{
                textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
              }}>Ibu Pujiati</p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 shadow-lg">
              <p className="text-lg font-semibold mb-2 text-white" style={{
                textShadow: '1px 1px 3px rgba(0,0,0,0.7)'
              }}>Keluarga Mempelai Wanita</p>
              <p className="text-base text-white/90" style={{
                textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
              }}>Bpk. Mutamaji</p>
              <p className="text-base text-white/90" style={{
                textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
              }}>Ibu Lilin Ernawati</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-12 pt-8 border-t border-white/30"
        >
          <p className="text-sm text-white/80" style={{
            textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
          }}>
            © 2025 Septa & Denita | Made with ❤️
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

