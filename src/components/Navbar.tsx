import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import {GithubSvg, LinkedInSvg} from './Icons';
import {motion, AnimatePresence} from 'framer-motion';
import Circle from '@/components/Circle';
import {HireMeButton} from '@/components/HireMeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { GITHUB_PROFILE } from '@/util/config';

const NavLink = ({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  
  return (
    <Link 
      href={href} 
      className={`relative py-2 px-1 text-dark/80 hover:text-dark transition-colors duration-300 ${isActive ? 'text-dark font-semibold' : ''} ${className}`}
    >
      {children}
      <span 
        className={`absolute bottom-0 left-0 h-0.5 bg-dark transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
      />
      <span 
        className={`absolute bottom-0 left-0 h-0.5 bg-dark/30 w-0 hover:w-full transition-all duration-300 ease-out`}
      />
    </Link>
  );
};

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`relative py-3 px-4 text-lg transition-all duration-300 rounded-lg ${isActive ? 'bg-dark text-light font-semibold' : 'text-dark/80 hover:bg-dark/5 hover:text-dark'}`}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`w-full px-8 md:px-6 py-6 font-medium flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-dark/5' 
          : 'bg-transparent'
      }`}
    >
      {/* Mobile Menu Button */}
      <button 
        className='flex-col justify-center hidden lg:flex items-center z-50 p-2 rounded-lg hover:bg-dark/5 transition-colors' 
        onClick={handleClick}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-dark transition-all duration-300 ease-out rounded-full ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-dark transition-all duration-300 ease-out rounded-full my-1.5 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100'}`}></span>
        <span className={`block w-6 h-0.5 bg-dark transition-all duration-300 ease-out rounded-full ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      <HireMeButton />

      {/* Desktop Navigation */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <div className="flex items-center gap-4">
          <Circle />
          <Logo />
        </div>
        
        <nav className="flex items-center gap-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/experiences">Experiences</NavLink>
        </nav>

        <nav className="flex items-center gap-2">
          <motion.a 
            href={GITHUB_PROFILE} 
            target="_blank"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-xl hover:bg-dark/5 transition-colors"
          >
            <GithubSvg className='w-6 h-6' />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/wong-kai-jeng/" 
            target="_blank"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-xl hover:bg-dark/5 transition-colors"
          >
            <LinkedInSvg className='w-5 h-5' />
          </motion.a>
          <motion.a 
            href="/certifications"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-xl hover:bg-dark/5 transition-colors"
          >
            <FontAwesomeIcon icon={faCertificate} className="w-6 h-6 text-dark" />
          </motion.a>
        </nav>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-dark/20 backdrop-blur-sm z-40 lg:block hidden"
              onClick={closeMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-dark/10 p-6 z-50 lg:block hidden"
            >
              <nav className="flex flex-col gap-2 mb-6">
                <MobileNavLink href="/" onClick={closeMenu}>Home</MobileNavLink>
                <MobileNavLink href="/about" onClick={closeMenu}>About</MobileNavLink>
                <MobileNavLink href="/contact" onClick={closeMenu}>Contact</MobileNavLink>
                <MobileNavLink href="/experiences" onClick={closeMenu}>Experiences</MobileNavLink>
                <MobileNavLink href="/certifications" onClick={closeMenu}>Certifications</MobileNavLink>
              </nav>
              
              <div className="pt-4 border-t border-dark/10">
                <p className="text-sm text-dark/50 mb-4">Connect with me</p>
                <div className="flex items-center gap-3">
                  <motion.a 
                    href={GITHUB_PROFILE} 
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl bg-dark/5 hover:bg-dark/10 transition-colors"
                  >
                    <GithubSvg className='w-5 h-5' />
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/wong-kai-jeng/" 
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl bg-dark/5 hover:bg-dark/10 transition-colors"
                  >
                    <LinkedInSvg className='w-5 h-5' />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar
