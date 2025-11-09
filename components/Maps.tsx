'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-intersection-observer';
import { FaMapMarkerAlt, FaDirections } from 'react-icons/fa';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import SDMonogram from './SDMonogram';

export default function Maps() {
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

  const openGoogleMaps = () => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=-7.163756,111.882469',
      '_blank'
    );
  };

  return (
    <section id="maps" className="section relative overflow-hidden min-h-screen">
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
        {/* Enhanced Gradient Overlay - Seasonal Theme */}
        <div 
          className={`absolute inset-0 transition-all duration-1000 ${
            currentHour >= 6 && currentHour < 12 
              ? 'bg-gradient-to-br from-blue-900/50 via-purple-900/40 to-indigo-900/60'
              : currentHour >= 12 && currentHour < 18
              ? 'bg-gradient-to-br from-blue-900/60 via-purple-900/50 to-indigo-900/70'
              : currentHour >= 18 && currentHour < 22
              ? 'bg-gradient-to-br from-purple-900/60 via-blue-900/50 to-indigo-900/70'
              : 'bg-gradient-to-br from-indigo-900/70 via-purple-900/60 to-black/50'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/90 to-white/85" />
      </div>

      {/* Sakura Decorations */}
      <div className="absolute top-8 left-8 opacity-30 z-10">
        <Image
          src="/image/cabang-kecil-sakura.webp"
          alt="Cherry Blossom"
          width={120}
          height={120}
          className="w-24 h-24 md:w-32 md:h-32"
        />
      </div>
      
      <div className="absolute bottom-8 right-8 opacity-25 z-10">
        <Image
          src="/image/cabang-kecil-sakura.webp"
          alt="Cherry Blossom"
          width={120}
          height={120}
          className="w-24 h-24 md:w-32 md:h-32 transform rotate-180"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-pink-300/60 rounded-full"
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
        className="max-w-4xl mx-auto px-6 py-8 md:py-16 relative z-10"
      >
        <div className="mb-8 text-center">
          <SDMonogram
            size="md"
            color="black"
            animate={true}
            delay={0.3}
          />
        </div>

        <h2 className="font-script text-5xl md:text-6xl text-center text-gray-800 mb-12" style={{
          textShadow: '2px 2px 4px rgba(0,0,0,0.1), 0 0 8px rgba(255,255,255,0.5)',
          letterSpacing: '0.05em'
        }}>
          Denah Lokasi
        </h2>

        <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl p-8 md:p-10 border border-gray-200/50">
          <div className="aspect-video w-full bg-gray-200 rounded-xl mb-6 overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3953.123!2d111.882469!3d-7.163756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDknNDkuNSJTIDExMcKwNTInNTYuOSJF!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="text-center">
            <div className="flex items-start justify-center gap-3 text-lg mb-6">
              <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1" />
              <div>
                <p className="font-semibold text-xl text-gray-800" style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                }}>Rumah Orang Tua Mempelai Wanita</p>
                <p className="text-gray-600">Jl. Munginsidi Gang II No. 11</p>
                <p className="text-gray-600">RT.24/RW.6, Ds. Sukorejo</p>
                <p className="text-gray-600">Bojonegoro, Jawa Timur</p>
              </div>
            </div>

            <button
              onClick={openGoogleMaps}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: '0 4px 15px rgba(0,0,0,0.2), 0 0 20px rgba(79, 70, 229, 0.3)',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
              }}
            >
              <FaDirections className="text-xl" />
              <span>Petunjuk Ke Lokasi</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

