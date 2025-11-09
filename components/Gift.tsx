'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-intersection-observer';
import { useState, useEffect } from 'react';
import { FaGift, FaCopy, FaCheck } from 'react-icons/fa';
import Image from 'next/image';
import SDMonogram from './SDMonogram';

export default function Gift() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [scrollY, setScrollY] = useState(0);
  const [currentHour, setCurrentHour] = useState(12);

  const [copied, setCopied] = useState<string | null>(null);

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

  const bankAccounts = [
    {
      id: '1',
      bank: 'BCA',
      accountNumber: '3010143852',
      accountName: "MOCH. SYAIFUL 'ULUM DWI SEPTIAN",
    },
    {
      id: '2',
      bank: 'BSI',
      accountNumber: '7173498246',
      accountName: 'DENITA LARASATI',
    },
  ];

  const shippingAddress = 'Jalan Munginsidi Gang II No. 11, RT.24/RW.6, Ds. Sukorejo, Bojonegoro, Jawa Timur';

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="gift" className="section relative overflow-hidden min-h-screen">
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
      
      <div className="absolute top-8 right-8 opacity-30 z-10">
        <Image
          src="/image/cabang-kecil-sakura.webp"
          alt="Cherry Blossom"
          width={120}
          height={120}
          className="w-24 h-24 md:w-32 md:h-32 transform rotate-180"
        />
      </div>

      <div className="absolute bottom-8 right-8 opacity-25 z-10">
        <Image
          src="/image/cabang-kecil-sakura.webp"
          alt="Cherry Blossom"
          width={120}
          height={120}
          className="w-24 h-24 md:w-32 md:h-32"
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

        <h2 className="font-script text-5xl md:text-6xl text-center text-gray-800 mb-4" style={{
          textShadow: '2px 2px 4px rgba(0,0,0,0.1), 0 0 8px rgba(255,255,255,0.5)',
          letterSpacing: '0.05em'
        }}>
          Tanda Kasih
        </h2>
        <p className="text-center text-lg text-gray-700 mb-12 font-medium" style={{
          textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
          backgroundColor: 'rgba(255,255,255,0.7)',
          padding: '12px 16px',
          borderRadius: '12px',
          backdropFilter: 'blur(8px)',
          display: 'inline-block'
        }}>
          Terima kasih telah menambah semangat kegembiraan pernikahan kami dengan kehadiran dan hadiah indah Anda.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {bankAccounts.map((account) => (
            <motion.div
              key={account.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl p-8 md:p-10 border border-gray-200/50"
            >
              <div className="text-center mb-4">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg" style={{
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2), 0 0 20px rgba(79, 70, 229, 0.3)'
                }}>
                  <FaGift className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2" style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                }}>
                  {account.bank}
                </h3>
                <p className="text-gray-600 mb-2">{account.accountName}</p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-gray-800" style={{
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                  }}>
                    {account.accountNumber}
                  </span>
                  <button
                    onClick={() =>
                      copyToClipboard(account.accountNumber, account.id)
                    }
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    title="Copy nomor rekening"
                  >
                    {copied === account.id ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      <FaCopy className="text-blue-600" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl p-8 md:p-10 border border-gray-200/50 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4" style={{
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
          }}>
            Kirim Kado
          </h3>
          <p className="text-gray-700 mb-4">
            Anda dapat mengirim kado ke:
          </p>
          <div className="bg-gray-50 p-6 rounded-xl mb-4 border border-gray-200/50">
            <p className="text-lg font-medium text-gray-800">{shippingAddress}</p>
          </div>
          <button
            onClick={() => copyToClipboard(shippingAddress, 'address')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{
              boxShadow: '0 4px 15px rgba(0,0,0,0.2), 0 0 20px rgba(79, 70, 229, 0.3)',
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
            }}
          >
            {copied === 'address' ? <FaCheck /> : <FaCopy />}
            <span>
              {copied === 'address' ? 'Alamat Tersalin' : 'Salin Alamat'}
            </span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

