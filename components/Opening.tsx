'use client';

import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import SDMonogram from './SDMonogram';

interface OpeningProps {
  onOpen: () => void;
}

export default function Opening({ onOpen }: OpeningProps) {
  const searchParams = useSearchParams();
  const guestName = searchParams.get('to') || 'Nama Tamu';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/image/background.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-purple-900/50 to-blue-900/70" />
      </div>

      {/* Decorative Ornaments */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cherry blossom branch - top left */}
        <Image src="/image/cabang-sakura.webp" alt="" width={300} height={300} className="absolute -top-20 left-0 opacity-30 transform -rotate-0" />
        
        {/* Cherry blossom branch - top right */}
        {/* <Image src="/image/cabang-sakura-top.webp" alt="" width={300} height={300} className="absolute top-0 right-0 opacity-30 transform rotate-0" /> */}
        
        {/* Falling sakura petals */}
        <div className="sakura-petals">
          <div className="petal petal-1"></div>
          <div className="petal petal-2"></div>
          <div className="petal petal-3"></div>
          <div className="petal petal-4"></div>
          <div className="petal petal-5"></div>
          <div className="petal petal-6"></div>
          <div className="petal petal-7"></div>
          <div className="petal petal-8"></div>
          <div className="petal petal-9"></div>
          <div className="petal petal-10"></div>
          <div className="petal petal-11"></div>
          <div className="petal petal-12"></div>
          <div className="petal petal-13"></div>
          <div className="petal petal-14"></div>
          <div className="petal petal-15"></div>
          <div className="petal petal-16"></div>
          <div className="petal petal-17"></div>
          <div className="petal petal-18"></div>
          <div className="petal petal-19"></div>
          <div className="petal petal-20"></div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-white px-6 z-10"
      >
        <div className="mb-8">
          <SDMonogram
            size="lg"
            color="white"
            animate={true}
            delay={0.3}
            className="mb-4"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <p className="font-bodoni text-xl md:text-2xl mb-2" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.1)',
            letterSpacing: '0.1em'
          }}>THE WEDDING OF</p>
          <h2 className="font-script text-4xl md:text-5xl mb-4" style={{
            textShadow: '3px 3px 6px rgba(0,0,0,0.9), 0 0 15px rgba(255,255,255,0.4), 0 0 30px rgba(255,255,255,0.2)',
            letterSpacing: '0.05em'
          }}>
            Septa & Denita
          </h2>
            <p className="font-script text-lg md:text-xl mb-6 font-weight-bold" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(255,255,255,0.3), 0 0 16px rgba(255,255,255,0.1)',
              letterSpacing: '0.05em'
            }}>Jumat, 21 November 2025</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mb-8"
        >
          <p className="text-sm md:text-base mb-2 font-bodoni font-weight-bold" style={{
            textShadow: '1px 1px 3px rgba(0,0,0,0.7), 0 0 8px rgba(255,255,255,0.2)'
          }}>Kepada Yth;</p>
          <p className="text-sm md:text-base mb-1 font-bodoni font-weight-bold" style={{
            textShadow: '1px 1px 3px rgba(0,0,0,0.7), 0 0 8px rgba(255,255,255,0.2)'
          }}>Bapak/Ibu/Saudara/i</p>
          <p className="font-semibold text-xl md:text-2xl mb-4" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 12px rgba(255,255,255,0.4), 0 0 24px rgba(255,255,255,0.2)'
          }}>{guestName}</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="bg-white text-primary px-8 py-3 rounded-full font-semibold flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl transition-all"
          style={{
            boxShadow: '0 4px 15px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.2), inset 0 1px 0 rgba(255,255,255,0.3)',
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
          }}
        >
          <FaEnvelope />
          <span>Open Invitation</span>
        </motion.button>
      </motion.div>
    </div>
  );
}

