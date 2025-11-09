'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-intersection-observer';
import { FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import SDMonogram from './SDMonogram';

export default function Couple() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Touch gesture handling
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe || isRightSwipe) {
      // Add visual feedback for swipe
      console.log('Swipe detected:', isLeftSwipe ? 'left' : 'right');
    }
  };

  return (
    <section 
      id="mempelai" 
      className="section relative overflow-hidden min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Additional Decorative Elements */}
      <div className="absolute top-20 right-8 opacity-30 hidden md:block">
        <Image
          src="/image/cabang-kecil-sakura.webp"
          alt="Cherry Blossom"
          width={80}
          height={80}
          className="w-16 h-16 md:w-20 md:h-20"
        />
      </div>
      
      <div className="absolute bottom-20 left-8 opacity-25 hidden md:block">
        <Image
          src="/image/cabang-kecil-sakura.webp"
          alt="Cherry Blossom"
          width={80}
          height={80}
          className="w-16 h-16 md:w-20 md:h-20 transform rotate-180"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-pink-300/60 rounded-full"
            style={{
              left: `${5 + i * 7}%`,
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

      <div className="max-w-6xl mx-auto px-6 py-8 md:py-16 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="mb-6">
            <SDMonogram
              size="sm"
              color="black"
              animate={true}
              delay={0.3}
            />
          </div>

          {/* Quotes Box with Peacock */}
          <div className="relative max-w-3xl mx-auto">
            {/* Peacock Decoration - Top Left Corner */}
            <div className="absolute -left-4 -top-32 sm:-left-6 sm:-top-40 md:-left-8 md:-top-48 z-10">
              <Image
                src="/image/peacoks.webp"
                alt="Peacock Decoration"
                width={400}
                height={400}
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 opacity-75 hover:opacity-90 transition-opacity duration-300"
                priority
              />
            </div>

            <p className="text-lg md:text-xl text-gray-900 mx-auto italic font-medium leading-relaxed px-4 relative z-20" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 8px rgba(255,255,255,0.8)',
              backgroundColor: 'rgba(255,255,255,0.7)',
              padding: '16px 20px',
              borderRadius: '12px',
              backdropFilter: 'blur(8px)'
            }}>
              "Allah telah menetapkan segala sesuatu dengan indah pada waktunya. Dengan kasih dan rahmat-Nya, kini Dia menyatukan putra-putri kami dalam ikatan suci pernikahan"
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="text-center bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 rounded-3xl p-8 md:p-10 min-h-[500px] flex flex-col justify-center touch-manipulation"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="mb-6">
              <div className="relative w-56 h-56 mx-auto mb-8">
                <div className="w-56 h-56 rounded-full overflow-hidden relative z-10 shadow-lg">
                  <Image
                    src="/image/man.png"
                    alt="Groom Photo"
                    width={224}
                    height={224}
                    className="w-100 h-100 object-cover"
                  />
                </div>
                <Image
                  src="/image/frame.webp"
                  alt="Photo Frame"
                  width={240}
                  height={240}
                  className="absolute inset-0 w-full h-full z-20"
                />
              </div>
              <h3 className="font-script text-4xl md:text-5xl text-gray-800 mb-4 font-medium" style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                Moch. Syaiful 'Ulum Dwi Septian
              </h3>
              <p className="text-gray-600 mb-3 font-light text-lg">Putra dari</p>
              <p className="text-gray-700 font-medium text-lg">
                Bpk. Bambang Harto Subroto
              </p>
              <p className="text-gray-700 font-medium text-lg mb-8">
                Ibu Pujiati
              </p>
              <a
                href="https://www.instagram.com/septamuhammad/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-gray-700 hover:text-pink-600 transition-all duration-300 py-4 px-8 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-pink-50 hover:to-pink-100 min-h-[52px] touch-manipulation shadow-lg hover:shadow-xl"
              >
                <FaInstagram className="text-2xl" />
                <span className="font-semibold text-lg">@septamuhammad</span>
              </a>
            </div>
          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            className="text-center bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 rounded-3xl p-8 md:p-10 min-h-[500px] flex flex-col justify-center touch-manipulation"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="mb-6">
              <div className="relative w-56 h-56 mx-auto mb-8">
                <div className="w-56 h-56 rounded-full overflow-hidden relative z-10 shadow-lg">
                  <Image
                    src="/image/girl.png"
                    alt="Bride Photo"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Image
                  src="/image/frame.webp"
                  alt="Photo Frame"
                  width={240}
                  height={240}
                  className="absolute inset-0 w-full h-full z-20"
                />
              </div>
              <h3 className="font-script text-4xl md:text-5xl text-gray-800 mb-4 font-medium" style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                Denita Larasati
              </h3>
              <p className="text-gray-600 mb-3 font-light text-lg">Putri dari</p>
              <p className="text-gray-700 font-medium text-lg">
                Bpk. Mutamaji
              </p>
              <p className="text-gray-700 font-medium text-lg mb-8">
                Ibu Lilin Ernawati
              </p>
              <a
                href="https://www.instagram.com/dntlaras/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-gray-700 hover:text-pink-600 transition-all duration-300 py-4 px-8 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-pink-50 hover:to-pink-100 min-h-[52px] touch-manipulation shadow-lg hover:shadow-xl"
              >
                <FaInstagram className="text-2xl" />
                <span className="font-semibold text-lg">@dntlaras</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

