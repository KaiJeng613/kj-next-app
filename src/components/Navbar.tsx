import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Component, useState } from 'react';
import Logo from '../components/Logo';
import {GithubSvg, LinkedInSvg} from './Icons';
import {motion} from 'framer-motion';
import {HireMeButton} from '@/components/HireMeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate} from '@fortawesome/free-solid-svg-icons';
import { GITHUB_PROFILE } from '@/util/config';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
      setIsOpen(!isOpen)
    }
  
    return (
      <header className='w-full px-32 py-8 font-medium flex items-center justify-between
      text-primary dark:text-light relative'>

        <button className='flex-col justify-center hidden lg:flex items-center' onClick={handleClick}>
          <span className={`block w-6 h-0.5 bg-gray-500 bg-dark dark:bg-light transition-all duration-300 ease-out rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : 'translate-y-0.5'}}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-500 bg-dark dark:bg-light transition-all duration-300 ease-out opacity-100 rounded-sm my-0.5 ${isOpen ? 'hidden' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-500 bg-dark dark:bg-light transition-all duration-300 ease-out rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}}`}></span>
        </button> 
        <HireMeButton />

        <div className="w-full flex justify-between items-center lg:hidden">
          <Logo />
          <nav>
            <Link href="/" className='mr-[2rem]'>Home</Link>
            <Link href="/about" className='mr-[2rem]'>About</Link>
            <Link href="/contact" className='mr-[2rem]'>Contact</Link>
            <Link href="/experiences" className='mr-[2rem]'>Experiences</Link>
          </nav>
          <nav className="flex items-center justify-center flex-wrap">
            <motion.a href={GITHUB_PROFILE} target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className="w-8 mx-3">
              <GithubSvg className='w-full' />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/wong-kai-jeng/" target={"_blank"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className="w-6 ml-3">
              <LinkedInSvg className='w-full' />
            </motion.a>
            <motion.a href="/certifications"
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className="w-8 mx-3">
              <FontAwesomeIcon icon={faCertificate} className="fa-2rem w-8 mx-3" />
            </motion.a>
          </nav>
        </div>

        {/* Responsive Navbar */}
        {
          isOpen ? 
          <div className="min-w-[70vw] flex flex-col justify-between hidden md:block items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-dark/90 border-2 border-zinc-400 hover:border-zinc-950 dark:bg-light/75 bg-white rounded-lg backdrop-blur-md py-32 z-50">
            <nav className="flex items-center flex-col justify-center">
              <Link href="/" className='mr-4'>Home</Link>
              <Link href="/about" className='mr-4'>About</Link>
              <Link href="/contact" className='mr-4'>Contact</Link>
              <Link href="/experiences" className='mr-4'>Experiences</Link>
            </nav>
            <nav className="flex items-center justify-center flex-wrap pt-2 mr-4">
              <motion.a href={GITHUB_PROFILE} target={"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className="w-6 mx-3">
                <GithubSvg className='w-full' />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/wong-kai-jeng/" target={"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className="w-6 mx-3">
                <LinkedInSvg className='w-full' />
              </motion.a>
              <motion.a href="/certifications"
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className="w-6 mx-3">
              <FontAwesomeIcon icon={faCertificate} className="fa-2rem w-8 mx-3" />
              </motion.a>
            </nav>

          </div>
          : null
        }
       
        
      </header>
        
    );
  }

export default Navbar
