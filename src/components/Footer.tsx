import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GithubSvg, LinkedInSvg } from './Icons';
import { GITHUB_PROFILE } from '@/util/config';

const Footer = () => {
    const siteName = 'Kai Jeng';
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Experiences', href: '/experiences' },
        { name: 'Contact', href: '/contact' },
    ];

    const socialLinks = [
        { name: 'GitHub', href: GITHUB_PROFILE, icon: GithubSvg },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/wong-kai-jeng/', icon: LinkedInSvg },
    ];

    return (
        <footer className='w-full bg-gradient-to-t from-gray-50 to-white border-t border-dark/10'>
            <div className='max-w-6xl mx-auto px-8 py-12'>
                {/* Main Footer Content */}
                <div className='flex flex-col md:flex-row items-center justify-between gap-8 mb-8'>
                    {/* Brand */}
                    <div className='text-center md:text-left'>
                        <h3 className='text-xl font-bold text-dark mb-2'>{siteName}</h3>
                        <p className='text-sm text-dark/60'>Software Engineer</p>
                    </div>

                    {/* Navigation Links */}
                    <nav className='flex flex-wrap items-center justify-center gap-6'>
                        {footerLinks.map((link) => (
                            <Link 
                                key={link.name}
                                href={link.href}
                                className='text-sm text-dark/60 hover:text-dark transition-colors duration-300 relative group'
                            >
                                {link.name}
                                <span className='absolute -bottom-1 left-0 w-0 h-px bg-dark transition-all duration-300 group-hover:w-full' />
                            </Link>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className='flex items-center gap-3'>
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='p-2.5 rounded-xl bg-dark/5 hover:bg-dark/10 transition-colors duration-300'
                                aria-label={social.name}
                            >
                                <social.icon className='w-5 h-5' />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className='h-px bg-gradient-to-r from-transparent via-dark/10 to-transparent mb-6' />

                {/* Bottom Bar */}
                <div className='flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dark/50'>
                    <span>{currentYear} &copy; {siteName}. All rights reserved.</span>
                    <span className='hidden sm:block'>Best viewed in Chrome, Safari, Firefox and Edge.</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer
