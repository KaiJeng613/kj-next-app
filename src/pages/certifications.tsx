import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout';
import React from 'react';
import { motion } from "framer-motion";
import { GITHUB_URL } from '@/util/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCalendar, faAward } from '@fortawesome/free-solid-svg-icons';

const githuburl = `${GITHUB_URL}KJSite/blob/main/README.md#certificates`;

interface CertCardProps {
  certname: string;
  company: string;
  certlink: string;
  date: string;
  details: string;
  details2: string;
  logo: string;
  index: number;
}

const CertCard = ({certname, company, certlink, date, details, details2, logo, index}: CertCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl border border-dark/10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Header with logo */}
      <div className="p-6 border-b border-dark/5 bg-gradient-to-br from-gray-50 to-white">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-white shadow-sm flex items-center justify-center p-2">
            <Image
              src={logo}
              width={48}
              height={48}
              alt={company}
              className="object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-dark/60 mb-1">{company}</p>
            <h3 className='text-lg font-bold text-dark leading-tight'>
              {certname}
            </h3>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark/5 text-sm text-dark/70">
            <FontAwesomeIcon icon={faCalendar} className="w-3 h-3" />
            {date}
          </span>
        </div>

        {/* Details */}
        <ul className="space-y-2 text-dark/70 text-sm mb-6">
          {details && (
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 bg-dark/40 rounded-full flex-shrink-0" />
              <span>{details}</span>
            </li>
          )}
          {details2 && (
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 bg-dark/40 rounded-full flex-shrink-0" />
              <span>{details2}</span>
            </li>
          )}
        </ul>

        {/* View Certificate Link */}
        <Link 
          href={certlink} 
          target="_blank"
          className="inline-flex items-center gap-2 text-sm font-semibold text-dark/70 hover:text-dark transition-colors group/link"
        >
          <FontAwesomeIcon icon={faAward} className="w-4 h-4" />
          View Certificate
          <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3 opacity-50 group-hover/link:opacity-100 transition-opacity" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const certifications = [
    {
      certname: "Developing Cloud-Native Applications with Microservices Architectures",
      company: "Iverson",
      certlink: "https://imgbb.com/Np1jT65",
      date: "July 2023",
      details: "Identify the proper frameworks and tools to build your microservices architecture",
      details2: "Understanding of OpenShift and Kubernetes",
      logo: "/iverson.jpg"
    },
    {
      certname: "Create Web Experiences Using AEM",
      company: "Adobe",
      certlink: "https://ibb.co/xMGt7bx",
      date: "Feb 2022",
      details: "Authoring concepts using the Adobe Experience Manager Touch UI",
      details2: "Creating and Editing responsive web pages with Experience Fragments",
      logo: "/adobe-ex.png"
    }
  ];

  return (
    <div className='min-h-screen gradient-bg pt-24'>
      <Head>
        <title>Kai Jeng | Certifications</title>
        <meta name="description" content="Professional certifications and credentials of Kai Jeng" />
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
            <AnimatedText text="Certifications" className='page-title' />
            <p className="page-subtitle">
              Professional credentials and continuous learning achievements
            </p>
          </motion.div>

          {/* View all on GitHub */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center mb-12"
          >
            <Link 
              href={githuburl} 
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-dark/5 hover:bg-dark/10 text-sm font-medium text-dark/70 hover:text-dark transition-all duration-300"
            >
              <span>View Full Certificates List on GitHub</span>
              <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3" />
            </Link>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
            {certifications.map((cert, index) => (
              <CertCard
                key={index}
                {...cert}
                index={index}
              />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="cta-section">
              <h2 className="text-2xl md:text-3xl font-bold text-light mb-4">Always Learning</h2>
              <p className="mx-auto max-w-xl text-light/80 mb-8">
                I continuously invest in expanding my skill set through professional certifications and hands-on learning experiences.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-light px-8 py-4 text-base font-semibold text-dark transition-all duration-300 hover:bg-light/90 hover:shadow-lg hover:-translate-y-0.5"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </motion.div>
        </div>
      </Layout>
    </div>
  );
}
