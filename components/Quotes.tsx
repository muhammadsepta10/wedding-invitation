'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-intersection-observer';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import SDMonogram from './SDMonogram';

export default function Quotes() {
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
    const timeInterval = setInterval(updateTime, 60000); // Update every minute
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <section id="quotes" className="section relative overflow-hidden h-screen">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            y: scrollY * 0.5,
          }}
        >
          <Image
            src="/image/background-no-peacoks.webp"
            alt="Background"
            fill
            className="object-cover object-left scale-100"
            priority
          />
        </motion.div>
        {/* Enhanced Gradient Overlay - Seasonal Theme */}
        <div 
          className={`absolute inset-0 transition-all duration-1000 ${
            currentHour >= 6 && currentHour < 12 
              ? 'bg-gradient-to-br from-orange-900/40 via-pink-900/30 to-yellow-900/50' // Morning
              : currentHour >= 12 && currentHour < 18
              ? 'bg-gradient-to-br from-blue-900/50 via-purple-900/40 to-indigo-900/60' // Afternoon
              : currentHour >= 18 && currentHour < 22
              ? 'bg-gradient-to-br from-purple-900/60 via-blue-900/50 to-indigo-900/70' // Evening
              : 'bg-gradient-to-br from-indigo-900/70 via-purple-900/60 to-black/50' // Night
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Subtle Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-pink-300/30 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center px-6 h-full flex flex-col justify-center relative z-10"
      >
        <div className="mb-8">
          <SDMonogram
            size="md"
            color="white"
            animate={true}
            delay={0.3}
          />
        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="font-script text-4xl md:text-5xl text-white mb-6"
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(255,255,255,0.3)',
          }}
        >
          Septa & Denita
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-lg text-white font-bodoni font-weight-bold md:text-xl mb-4"
          style={{
            textShadow: '1px 1px 3px rgba(0,0,0,0.7), 0 0 6px rgba(255,255,255,0.2)',
          }}
        >
          Jumat, 21 November 2025
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-8 p-8 bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl relative overflow-hidden"
        >
          {/* Cherry Blossom Ornament - Left Side */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
            <Image
              src="/image/cabang-kecil-sakura.webp"
              alt="Cherry Blossom Ornament"
              width={120}
              height={120}
              className="w-24 h-24 md:w-32 md:h-32 opacity-60"
            />
          </div>

          {/* Floating Cherry Blossoms Around Quote Box */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-pink-300 rounded-full opacity-70"
                style={{
                  left: `${5 + i * 15}%`,
                  top: `${10 + (i % 3) * 30}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  x: [0, 5, 0],
                  opacity: [0.7, 0.9, 0.7],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              />
            ))}
          </div>

          <div className="relative z-20">
            <p className="text-base md:text-lg text-gray-700 italic leading-relaxed mb-4">
              "Istri-istrimu adalah ladang bagimu, maka datangilah ladangmu itu kapan saja dan dengan cara yang kamu sukai. Dan utamakanlah (yang baik) untuk dirimu. Bertakwalah kepada Allah dan ketahuilah bahwa kamu (kelak) akan menemui-Nya. Dan sampaikanlah kabar gembira kepada orang yang beriman."
            </p>
            <p className="font-semibold text-primary">(Surah Al-Baqoroh : 223)</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

