import Image from 'next/image';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText'
import styles from '@/styles/Home.module.css';
import React from 'react';
import {motion} from "framer-motion";
import Layout from '@/components/Layout';
import Link from 'next/link';

interface DetailsProps {
  position: string;
  company: string;
  companysite: string;
  startyear: string;
  endyear: string;
  startmonth: string;
  endmonth: string;
  current: string;
  work: string;
  worklink: string;
  worklinkdesc: string;
  work2: string;
  worklink2: string;
  worklinkdesc2: string;
  work3: string;
  logo: string;
  index: number;
}

const Details = ({position, company, companysite, startyear, endyear, startmonth, endmonth, current, work, worklink, worklinkdesc, work2, worklink2, worklinkdesc2, work3, logo, index}: DetailsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 flex items-center justify-center">
        <span className="absolute w-4 h-4 bg-dark rounded-full" />
        <span className="absolute w-4 h-4 bg-dark/30 rounded-full animate-ping" />
      </div>
      
      {/* Content Card */}
      <motion.div 
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="ml-6 p-6 bg-white rounded-2xl border border-dark/10 shadow-sm hover:shadow-lg transition-shadow duration-300"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
            <Image
              src={logo}
              width={56}
              height={56}
              alt={company}
              className="object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className='text-xl font-bold text-dark mb-1'>
              {position}
            </h3>
            <a 
              href={companysite} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark/70 hover:text-dark hover:underline transition-colors text-sm font-medium"
            >
              @ {company}
            </a>
          </div>
        </div>
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark/5 text-sm text-dark/70 mb-4">
          <span>{startmonth} {startyear}</span>
          <span>-</span>
          <span>{endyear ? `${endmonth} ${endyear}` : current}</span>
          {!endyear && (
            <span className="ml-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          )}
        </div>
        
        <ul className="space-y-2 text-dark/80">
          {work && (
            <li className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 bg-dark/40 rounded-full flex-shrink-0" />
              <span>{work}{worklink && <Link className="text-blue-600 hover:underline ml-1" href={worklink} target="_blank">{worklinkdesc}</Link>}</span>
            </li>
          )}
          {work2 && (
            <li className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 bg-dark/40 rounded-full flex-shrink-0" />
              <span>{work2}{worklink2 && <Link className="text-blue-600 hover:underline ml-1" href={worklink2} target="_blank">{worklinkdesc2}</Link>}</span>
            </li>
          )}
          {work3 && (
            <li className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 bg-dark/40 rounded-full flex-shrink-0" />
              <span>{work3}</span>
            </li>
          )}
        </ul>
      </motion.div>
    </motion.div>
  );
}

interface EducationDetailsProps {
  course: string;
  institution: string;
  time: string;
  sidecourse: string;
  sidecourselink: string;
  sidecourse2: string;
  sidecourselink2: string;
  logo: string;
  index: number;
}

const EducationDetails = ({course, institution, time, sidecourse, sidecourselink, sidecourse2, sidecourselink2, logo, index}: EducationDetailsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 flex items-center justify-center">
        <span className="absolute w-4 h-4 bg-dark rounded-full" />
      </div>
      
      {/* Content Card */}
      <motion.div 
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="ml-6 p-6 bg-white rounded-2xl border border-dark/10 shadow-sm hover:shadow-lg transition-shadow duration-300"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
            <Image
              src={logo}
              width={56}
              height={56}
              alt={institution}
              className="object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className='text-xl font-bold text-dark mb-1'>
              {course}
            </h3>
            <p className="text-dark/70 text-sm font-medium">{institution}</p>
          </div>
        </div>
        
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-dark/5 text-sm text-dark/70 mb-4">
          {time}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {sidecourse && (
            <Link 
              href={sidecourselink} 
              target="_blank"
              className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
            >
              {sidecourse}
            </Link>
          )}
          {sidecourse2 && (
            <Link 
              href={sidecourselink2} 
              target="_blank"
              className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
            >
              {sidecourse2}
            </Link>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experiences() {
  const experiences = [
    {
      position: "Software Developer",
      company: "Etherscan",
      companysite: "https://etherscan.io/",
      startyear: "2025",
      endyear: "",
      current: "Current",
      startmonth: "November",
      endmonth: "",
      work: "Developing and maintaining blockchain explorer features for Ethereum network",
      worklink: "",
      worklinkdesc: "",
      work2: "Building scalable web applications to display real-time blockchain data and analytics",
      worklink2: "",
      worklinkdesc2: "",
      work3: "Collaborating with cross-functional teams to enhance user experience and platform performance",
      logo: "https://etherscan.io/images/brandassets/etherscan-logo-circle.svg"
    },
    {
      position: "Senior .NET Developer",
      company: "Aeon Credit Service",
      companysite: "https://www.aeoncredit.com.my/",
      startyear: "2023",
      endyear: "2025",
      current: "",
      startmonth: "November",
      endmonth: "November",
      work: "Web & Wallet Team",
      worklink: "",
      worklinkdesc: "",
      work2: "Governs most of the in-house applications such as Loan System, Membership Sign Up system, Documents Management System",
      worklink2: "",
      worklinkdesc2: "",
      work3: "Collaborates with Vendors such as Finology, Softspace, Wander, Tookitaki, Tess, Silverlake to enhance on systems",
      logo: "/aeoncredit.jpg"
    },
    {
      position: "Software Engineer",
      company: "Micron Technology",
      companysite: "https://www.micron.com/",
      startyear: "2022",
      endyear: "2023",
      current: "",
      startmonth: "April",
      endmonth: "November",
      work: "Maintaining the Micron Backend Advanced Scheduler (BEMAS) Application focusing on Planning and ",
      worklink: "https://www.vms-solutions.com/en/solutions/optimized-scheduling.php",
      worklinkdesc: "Optimized Scheduling",
      work2: "Migrating Applications from VMs to Cloud using Tools for Containerization such as Docker and Openshift",
      worklink2: "",
      worklinkdesc2: "",
      work3: "Migrating API Gateway from WSO2 to Apigee",
      logo: "/micron.png"
    },
    {
      position: "Software Developer",
      company: "Alpha Red Solutions",
      companysite: "https://www.alphareds.com/",
      startyear: "2019",
      endyear: "2022",
      current: "",
      startmonth: "March",
      endmonth: "April",
      work: "Frontend Development of e-commerce Hotel/Travel Booking Sites such as ",
      worklink: "https://www.mayflower.com.my/",
      worklinkdesc: "Mayflower",
      work2: "Creating Core Components in Migration of the legacy CMS in collaboration with ",
      worklink2: "https://business.adobe.com/",
      worklinkdesc2: "Adobe Experience Cloud",
      work3: "Kickoff of A universal e-wallet service In Collaboration with U Mobile",
      logo: "/ars.jpg"
    }
  ];

  return (
    <div className='min-h-screen gradient-bg pt-24'>
      <Head>
        <title>Kai Jeng | Experiences</title>
        <meta name="description" content="Professional experience and career journey of Kai Jeng" />
      </Head>
      
      <div className={styles.container}>
        <Layout>  
          {/* Experiences Section */}
          <main className="py-12 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <AnimatedText text="Experiences" className='page-title' />
              <p className="page-subtitle">My professional journey and career milestones</p>
            </motion.div>
            
            <div className='max-w-3xl mx-auto'>
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm font-bold uppercase tracking-wider text-dark/50 mb-8"
              >
                Career Timeline
              </motion.h2>
              
              {/* Timeline line */}
              <div className="relative">
                <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-dark/20 via-dark/10 to-transparent" />
                
                {experiences.map((exp, index) => (
                  <Details
                    key={index}
                    {...exp}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </main>

          {/* Education Section */}
          <main className="py-12 px-4 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <AnimatedText text="Education" className='page-title' />
              <p className="page-subtitle">Academic background and qualifications</p>
            </motion.div>
            
            <div className='max-w-3xl mx-auto'>
              <div className="relative">
                <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-dark/20 to-transparent" />
                
                <EducationDetails 
                  course="Bachelor of Computer Science" 
                  institution="Monash University" 
                  time="2015-2018" 
                  sidecourse="Data Analytics"
                  sidecourselink="https://handbook.monash.edu/2021/units/FIT3152"
                  sidecourselink2="https://handbook.monash.edu/2023/units/FIT2004"
                  sidecourse2="Algorithms and Data Structures"
                  logo="/monash.png"
                  index={0}
                />
              </div>
            </div>
          </main>
        </Layout>  
      </div>
    </div>
  );
}
