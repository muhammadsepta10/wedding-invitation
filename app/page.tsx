'use client';

import { useState, Suspense } from 'react';
import Opening from '@/components/Opening';
import Quotes from '@/components/Quotes';
import Couple from '@/components/Couple';
import Events from '@/components/Events';
import Maps from '@/components/Maps';
import RSVP from '@/components/RSVP';
import Gift from '@/components/Gift';
import Thanks from '@/components/Thanks';
import Navigation from '@/components/Navigation';
import MusicPlayer from '@/components/MusicPlayer';

function HomeContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative">
      {!isOpen && <Opening onOpen={() => setIsOpen(true)} />}
      
      {isOpen && (
        <>
          <Navigation />
          <div className="pt-16 md:pt-20 pb-16 md:pb-0">
            <Quotes />
            <Couple />
            <Events />
            <Maps />
            <RSVP />
            <Gift />
            <Thanks />
          </div>
          <MusicPlayer />
        </>
      )}
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}

