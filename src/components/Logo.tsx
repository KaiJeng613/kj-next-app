import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <header>
      <div className="flex items-center justify-center mt-2 lg:hidden">
        <MotionLink
          href="/"
          aria-label="Kai J. — Home"
          className="group flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {/* Monogram mark */}
          <motion.svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-sm"
          >
            <defs>
              <linearGradient id="kj-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.55" />
              </linearGradient>
            </defs>

            {/* Outer ring */}
            <circle
              cx="28"
              cy="28"
              r="26"
              className="fill-dark dark:fill-light"
            />
            {/* Subtle accent ring */}
            <circle
              cx="28"
              cy="28"
              r="24"
              fill="none"
              stroke="url(#kj-stroke)"
              strokeWidth="0.75"
              className="text-primary opacity-70"
            />

            {/* K */}
            <g className="fill-light dark:fill-dark">
              <path
                d="M16 16 H20 V26.5 L28.5 16 H33.5 L24.2 27.5 L34 40 H28.8 L21.2 30 L20 31.4 V40 H16 Z"
              />
            </g>

            {/* J */}
            <g className="fill-primary">
              <path
                d="M38 16 H42 V35 C42 38.2 39.8 40.4 36.6 40.4 C34.2 40.4 32.4 39.2 31.6 37.2 L34.8 35.6 C35.2 36.6 35.8 37.1 36.6 37.1 C37.5 37.1 38 36.5 38 35.4 Z"
              />
            </g>

            {/* Accent dot */}
            <circle cx="42.5" cy="13.5" r="1.6" className="fill-primary" />
          </motion.svg>

          {/* Wordmark */}
          <div className="flex flex-col leading-none">
            <span className="font-bold text-base tracking-tight text-primary dark:text-light">
              Kai Jeng
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-primary/70 dark:text-light/60">
              Software Engineer
            </span>
          </div>
        </MotionLink>
      </div>
    </header>
  );
};

export default Logo;
