'use client';

import { useState, useEffect } from 'react';
import { FaHome, FaHeart, FaCalendar, FaMapMarkerAlt, FaEnvelope, FaGift } from 'react-icons/fa';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { id: 'quotes', label: 'Opening', icon: FaHome },
    { id: 'mempelai', label: 'Mempelai', icon: FaHeart },
    { id: 'akad', label: 'Akad', icon: FaCalendar },
    { id: 'resepsi', label: 'Resepsi', icon: FaCalendar },
    { id: 'maps', label: 'Maps', icon: FaMapMarkerAlt },
    { id: 'rsvp', label: 'RSVP', icon: FaEnvelope },
    { id: 'gift', label: 'Gift', icon: FaGift },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-40 md:top-0 md:bottom-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around items-center py-3 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors min-w-fit ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-gray-500 hover:text-primary'
                }`}
              >
                <Icon className="text-xl" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

