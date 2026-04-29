import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout';
import React from 'react';
import { motion } from "framer-motion"; 

const netlifyImageLoader = ({ src }: {src: string}) => {
  return `https://kaijeng.netlify.app/Content/img/${src}`
}

interface FeaturedProjectProps {
  year: string;
  title: string;
  summary: string;
  img: string;
  link: string;
  index: number;
}

const FeaturedProject = ({year, title, summary, img, link, index}: FeaturedProjectProps) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -8 }}
      className="group w-full flex flex-col lg:flex-row items-center gap-8 rounded-2xl border border-dark/10 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <Link className='w-full lg:w-1/2 overflow-hidden rounded-xl' href={link} target="_blank">
        <motion.div 
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="relative aspect-video"
        >
          <Image 
            loader={netlifyImageLoader}
            fill
            src={img} 
            alt={title}
            className="object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors duration-300 rounded-xl" />
        </motion.div>
      </Link>

      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between"> 
        <span className='inline-flex items-center px-3 py-1 rounded-full bg-dark/5 text-sm font-medium text-dark/70 mb-3'>{year}</span>
        <Link href={link} target="_blank" className="group/link">
          <h2 className='text-2xl lg:text-3xl font-bold text-dark mb-3 group-hover/link:text-dark/80 transition-colors'>{title}</h2>
        </Link>     
        <p className='text-dark/70 mb-6 leading-relaxed'>{summary}</p>
        <Link 
          href={link} 
          target="_blank" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-dark text-light text-sm font-semibold hover:bg-dark/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        > 
          Visit Project
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
      </div>
    </motion.article>
  )
}

const SmallProjectCard = ({year, title, summary, img, link, index}: FeaturedProjectProps) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -8 }}
      className="group w-full flex flex-col rounded-2xl border border-dark/10 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <Link className='relative aspect-video overflow-hidden' href={link} target="_blank">
        <Image 
          loader={netlifyImageLoader}
          fill
          src={img} 
          alt={title}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      <div className="p-6 flex flex-col flex-1"> 
        <span className='inline-flex items-center self-start px-2.5 py-1 rounded-full bg-dark/5 text-xs font-medium text-dark/70 mb-3'>{year}</span>
        <Link href={link} target="_blank" className="group/link">
          <h3 className='text-xl font-bold text-dark mb-2 group-hover/link:text-dark/80 transition-colors'>{title}</h3>
        </Link>
        <p className='text-dark/70 text-sm mb-4 flex-1'>{summary}</p> 

        <Link 
          href={link} 
          target="_blank" 
          className="inline-flex items-center gap-1 text-sm font-semibold text-dark/80 hover:text-dark transition-colors"
        > 
          View Project
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </motion.article>
  )
}

export default function About() {
  return (
    <div className='min-h-screen gradient-bg pt-24'>
      <Head>
        <title>Kai Jeng | About</title>
        <meta name="description" content="About Kai Jeng - Software Developer with expertise in full-stack development, cloud migration, and enterprise applications"></meta>  
      </Head>
      
      <Layout>
        <div className='max-w-6xl mx-auto px-4 py-12'>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <AnimatedText text="About Me" className='page-title' />
            <p className="page-subtitle">
              Software Developer passionate about building exceptional digital experiences
            </p>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-20"
          >
            <div className="p-8 bg-white rounded-2xl border border-dark/10 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-wider text-dark/50 mb-6">Portfolio</h2>
              <div className="space-y-4 text-dark/80 leading-relaxed">
                <p>
                  Hello, I&apos;m Kai Jeng Wong, a Software Developer with over 6 years of experience specializing in full-stack development, cloud migration, and enterprise application architecture. I have a proven track record of delivering scalable solutions across diverse industries, including blockchain technology, financial services, and e-commerce.
                </p>
                <p>
                  My expertise spans .NET technologies, modern web frameworks, and cloud platforms, with a strong focus on building robust, user-centric applications. I&apos;m passionate about leveraging cutting-edge technologies to solve complex business challenges and drive digital transformation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-sm font-bold uppercase tracking-wider text-dark/50 mb-8 text-center">Featured Projects</h2>
          </motion.div>

          <div className="space-y-8 mb-16">
            <FeaturedProject 
              img="rwgenting.png"
              title="Resorts World Genting"
              summary="CMS Project developed in collaboration with Adobe AEM, delivering a seamless digital experience for one of Malaysia's premier entertainment destinations."
              link="https://www.rwgenting.com"
              year="2022"
              index={0}
            />
          </div>

          {/* More Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
            <SmallProjectCard 
              img="mrs.png"
              title="MrsEasy"
              summary="Food ordering system with intuitive user experience"
              link="https://www.mrseasy.com"
              year="2021"
              index={0}
            />
            <SmallProjectCard 
              img="gopay.png"
              title="GoPayz"
              summary="Financial e-wallet application for seamless transactions"
              link="https://www.gopayz.com.my/"
              year="2022"
              index={1}
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}
