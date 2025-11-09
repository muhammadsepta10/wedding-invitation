'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-intersection-observer';
import { FaCalendar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import Countdown from 'react-countdown';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import SDMonogram from './SDMonogram';

export default function Events() {
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

  const weddingDate = new Date('2025-11-21T07:00:00');

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return (
        <span className="text-2xl md:text-3xl font-semibold" style={{
          textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 10px rgba(255,255,255,0.2)'
        }}>
          Acara telah berlangsung!
        </span>
      );
    } else {
      return (
        <div className="grid grid-cols-4 gap-4 md:gap-8">
          <div className="countdown-item bg-white/20 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/30">
            <div className="countdown-value text-white" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 10px rgba(255,255,255,0.2)'
            }}>{days}</div>
            <div className="countdown-label text-white/90" style={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}>Hari</div>
          </div>
          <div className="countdown-item bg-white/20 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/30">
            <div className="countdown-value text-white" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 10px rgba(255,255,255,0.2)'
            }}>{hours}</div>
            <div className="countdown-label text-white/90" style={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}>Jam</div>
          </div>
          <div className="countdown-item bg-white/20 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/30">
            <div className="countdown-value text-white" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 10px rgba(255,255,255,0.2)'
            }}>{minutes}</div>
            <div className="countdown-label text-white/90" style={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}>Menit</div>
          </div>
          <div className="countdown-item bg-white/20 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/30">
            <div className="countdown-value text-white" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 10px rgba(255,255,255,0.2)'
            }}>{seconds}</div>
            <div className="countdown-label text-white/90" style={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}>Detik</div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      {/* Akad Section */}
      <section id="akad" className="section relative overflow-hidden min-h-screen">
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
            Akad Nikah
          </h2>

          <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl p-8 md:p-10 border border-gray-200/50">
            <div className="text-center mb-6">
              <div className="inline-block bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl px-6 py-8 mb-4 shadow-lg" style={{
                boxShadow: '0 4px 15px rgba(0,0,0,0.2), 0 0 20px rgba(79, 70, 229, 0.3)'
              }}>
                <FaCalendar className="text-5xl mx-auto mb-3" />
                <div className="text-4xl font-bold" style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}>21</div>
                <div className="text-xl font-semibold">November 2025</div>
                <div className="text-lg mt-2 font-medium">JUM'AT</div>
              </div>
            </div>

            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-3 text-lg">
                <FaClock className="text-blue-600 text-2xl" />
                <span className="font-semibold text-gray-800" style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                }}>Pukul 07.00 WIB</span>
              </div>

              <div className="flex items-start justify-center gap-3 text-lg">
                <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1" />
                <div>
                  <p className="font-semibold text-gray-800" style={{
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                  }}>Rumah Orang Tua Mempelai Wanita</p>
                  <p className="text-gray-600">Jl. Munginsidi Gang II No. 11</p>
                  <p className="text-gray-600">RT.24/RW.6, Ds. Sukorejo</p>
                  <p className="text-gray-600">Bojonegoro, Jawa Timur</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Reception Section */}
      <section id="resepsi" className="section relative overflow-hidden min-h-screen">
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
        <div className="absolute top-8 right-8 opacity-30 z-10">
          <Image
            src="/image/cabang-kecil-sakura.webp"
            alt="Cherry Blossom"
            width={120}
            height={120}
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </div>
        
        <div className="absolute bottom-8 left-8 opacity-25 z-10">
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
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 py-8 md:py-16 relative z-10"
        >
          <p className="text-center text-lg md:text-xl text-gray-700 mb-8 italic font-medium leading-relaxed" style={{
            textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
            backgroundColor: 'rgba(255,255,255,0.7)',
            padding: '16px 20px',
            borderRadius: '12px',
            backdropFilter: 'blur(8px)'
          }}>
            Dengan penuh rasa syukur atas kasih dan karunia Allah kami bermaksud menyelenggarakan Resepsi Pernikahan putra-putri kami, yang akan diselenggarakan pada :
          </p>

          <h2 className="font-script text-5xl md:text-6xl text-center text-gray-800 mb-12" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.1), 0 0 8px rgba(255,255,255,0.5)',
            letterSpacing: '0.05em'
          }}>
            Resepsi
          </h2>

          <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl p-8 md:p-10 border border-gray-200/50 mb-8">
            <div className="text-center mb-6">
              <div className="inline-block bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl px-6 py-8 mb-4 shadow-lg" style={{
                boxShadow: '0 4px 15px rgba(0,0,0,0.2), 0 0 20px rgba(79, 70, 229, 0.3)'
              }}>
                <FaCalendar className="text-5xl mx-auto mb-3" />
                <div className="text-4xl font-bold" style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}>21</div>
                <div className="text-xl font-semibold">November 2025</div>
                <div className="text-lg mt-2 font-medium">JUM'AT</div>
              </div>
            </div>

            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-3 text-lg">
                <FaClock className="text-blue-600 text-2xl" />
                <span className="font-semibold text-gray-800" style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                }}>13.00 - 15.00 WIB</span>
              </div>

              <div className="flex items-start justify-center gap-3 text-lg">
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
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-8 md:p-10 shadow-xl backdrop-blur-sm" style={{
            boxShadow: '0 10px 30px rgba(0,0,0,0.3), 0 0 40px rgba(79, 70, 229, 0.4)'
          }}>
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 10px rgba(255,255,255,0.2)'
            }}>Menghitung Hari</h3>
            <div className="flex justify-center">
              <Countdown date={weddingDate} renderer={renderer} />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

