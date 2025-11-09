'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-intersection-observer';
import Image from 'next/image';

interface SDMonogramProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'white' | 'black' | 'auto';
  className?: string;
  animate?: boolean;
  delay?: number;
}

export default function SDMonogram({
  size = 'md',
  color = 'auto',
  className = '',
  animate = true,
  delay = 0.3,
}: SDMonogramProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Size mapping - simplified
  const sizeMap = {
    sm: { width: 96, height: 96, className: 'w-24 h-24 md:w-28 md:h-28' },
    md: { width: 128, height: 128, className: 'w-32 h-32 md:w-36 md:h-36' },
    lg: { width: 160, height: 160, className: 'w-40 h-40 md:w-48 md:h-48' },
    xl: { width: 192, height: 192, className: 'w-48 h-48 md:w-56 md:h-56' },
  };

  const sizeConfig = sizeMap[size];

  // Simple color filter - no complex borders
  const colorFilter = color === 'white' ? 'brightness-0 invert' : '';

  const content = (
    <div ref={ref} className={`inline-block ${className}`}>
      <Image
        src="/image/icon.svg"
        alt="SD Monogram"
        width={sizeConfig.width}
        height={sizeConfig.height}
        className={`${sizeConfig.className} ${colorFilter} drop-shadow-lg`}
        priority={size === 'lg'}
      />
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay, type: 'spring', stiffness: 200 }}
        className="flex justify-center"
      >
        {content}
      </motion.div>
    );
  }

  return <div className="flex justify-center">{content}</div>;
}

