'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-intersection-observer';
import { useState, useEffect } from 'react';
import { FaPaperPlane, FaHeart } from 'react-icons/fa';
import Image from 'next/image';
import SDMonogram from './SDMonogram';

interface Message {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export default function RSVP() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [scrollY, setScrollY] = useState(0);
  const [currentHour, setCurrentHour] = useState(12);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    attendance: 'hadir',
    guestCount: '1',
  });

  const [messageData, setMessageData] = useState({
    name: '',
    message: '',
  });

  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

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

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleRSVPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          attendance: 'hadir',
          guestCount: '1',
        });
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
      });

      if (response.ok) {
        setMessageData({ name: '', message: '' });
        fetchMessages();
      }
    } catch (error) {
      console.error('Error submitting message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="section relative overflow-hidden min-h-screen">
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

      <div className="absolute bottom-8 left-8 opacity-25 z-10">
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
          RSVP
        </h2>
        <p className="text-center text-lg text-gray-700 mb-12 font-medium" style={{
          textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
          backgroundColor: 'rgba(255,255,255,0.7)',
          padding: '12px 16px',
          borderRadius: '12px',
          backdropFilter: 'blur(8px)',
          display: 'inline-block'
        }}>
          Kirim ucapan untuk mempelai dan konfirmasi kehadiran
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* RSVP Form */}
          <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl p-8 md:p-10 border border-gray-200/50">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center" style={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            }}>
              Konfirmasi Kehadiran
            </h3>
            <form onSubmit={handleRSVPSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Nama Anda"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="08xx xxxx xxxx"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Konfirmasi Kehadiran *
                </label>
                <select
                  required
                  value={formData.attendance}
                  onChange={(e) =>
                    setFormData({ ...formData, attendance: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="hadir">Hadir</option>
                  <option value="tidak_hadir">Tidak Hadir</option>
                  <option value="belum_pasti">Belum Pasti</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jumlah Tamu
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={formData.guestCount}
                  onChange={(e) =>
                    setFormData({ ...formData, guestCount: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-full py-3 rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2), 0 0 20px rgba(79, 70, 229, 0.3)',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                }}
              >
                {loading ? 'Mengirim...' : 'Kirim Konfirmasi'}
              </button>

              {success && (
                <div className="text-center text-green-600 font-semibold">
                  Terima kasih! Konfirmasi Anda telah diterima.
                </div>
              )}
            </form>
          </div>

          {/* Message Form and List */}
          <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl p-8 md:p-10 border border-gray-200/50">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center" style={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            }}>
              Kirim Ucapan
            </h3>
            <form onSubmit={handleMessageSubmit} className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama *
                </label>
                <input
                  type="text"
                  required
                  value={messageData.name}
                  onChange={(e) =>
                    setMessageData({ ...messageData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Nama Anda"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ucapan *
                </label>
                <textarea
                  required
                  rows={4}
                  value={messageData.message}
                  onChange={(e) =>
                    setMessageData({ ...messageData, message: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tulis ucapan Anda..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white w-full py-3 rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2), 0 0 20px rgba(236, 72, 153, 0.3)',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                }}
              >
                <FaPaperPlane />
                <span>{loading ? 'Mengirim...' : 'Kirim Ucapan'}</span>
              </button>
            </form>

            {/* Messages List */}
            <div className="border-t pt-4 max-h-96 overflow-y-auto">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <FaHeart className="text-red-500" />
                Ucapan dari Tamu
              </h4>
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200/50 shadow-sm"
                  >
                    <div className="font-semibold text-blue-600 mb-1" style={{
                      textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                    }}>
                      {msg.name}
                    </div>
                    <div className="text-gray-700 text-sm">{msg.message}</div>
                    <div className="text-xs text-gray-500 mt-2">
                      {new Date(msg.createdAt).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

