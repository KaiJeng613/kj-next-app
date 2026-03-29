import Image from 'next/image';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText'
import styles from '@/styles/Home.module.css';
import React from 'react';
import {motion, useScroll} from "framer-motion";
import { PositionType } from "@/util/ExperienceModel"
import Layout from '@/components/Layout';
import Link from 'next/link';

const Details = ({position, company, companysite, startyear, endyear, startmonth, endmonth, current, work, worklink, worklinkdesc, work2, worklink2, worklinkdesc2, work3}:
  {position: string, company: string, companysite: string, startyear:string, endyear:string, startmonth:string, endmonth:string, current: string, work: string, worklink: string, worklinkdesc: string, 
   work2: string, worklink2: string, worklinkdesc2: string, work3: string}) =>
{
  return <li className='my-8 first:mt-0 last:mb-0 mx-auto flex flex-col'>
      <div>
        <h3 className='capitalize font-bold text-2xl'>
          {position}&nbsp;<a href={companysite}>@ {company}</a>
        </h3>
        <div className="flex flex-nowrap lg:justify-start whitespace-nowrap">
        <span className='capitalize font-medium text-dark'>
        {endyear != '' &&  <div><i>{startyear}</i> <b>{startmonth}</b> - <i>{endyear}</i> <b>{endmonth}</b></div>}
        {endyear == '' &&  <div><i>{startyear}</i> <b>{startmonth}</b> - {current}</div>}
 
        </span>
        </div>
        <p className='font-medium w-full'>{work}<Link className="highlight" href={worklink} target="_blank">{worklinkdesc}</Link></p>
        <p className='font-medium w-full'>{work2}<Link className="highlight" href={worklink} target="_blank">{worklinkdesc2}</Link></p>
        <p className='font-medium w-full'>{work3}</p>
      </div>
    </li>
}

const EducationDetails = ({course, institution, time, sidecourse, sidecourselink, sidecourse2, sidecourselink2, sidecourse3}:
  {course: string, institution: string, time:string, sidecourse: string, sidecourselink: string, sidecourse2: string, sidecourselink2: string, sidecourse3: string}) =>
{
  return <li className='my-8 first:mt-0 last:mb-0 mx-auto flex flex-col'>
      <div>
        <h3 className='capitalize font-bold text-2xl'>
          {course}&nbsp;<br>
          </br>{institution}
        </h3>
        <span className='capitalize font-medium text-dark'>
          {time}
        </span>
        <p className='font-medium w-full'><Link className="highlight" href={sidecourselink} target="_blank">{sidecourse}</Link></p>
        <p className='font-medium w-full'><Link className="highlight" href={sidecourselink2} target="_blank">{sidecourse2}</Link></p>
      </div>
    </li>
}

export default function Experiences() {
  return (
    <div className=''>
      <div className={styles.container}>
        <Layout>  
          <main className={styles.main}>
          <AnimatedText text="Experiences" className='dark:text-light text-8xl font-bold w-full capitalize !text-6xl xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl xl:text-6xl' />
            <div className='w-[75%] mx-auto relative'>
              <div className="absolute left-4 top-0 h-full bg-dark origin-top ">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">My Career</h2>

              <Image
                  className="my-8 first:mt-0 last:mb-0 flex-col"
                  src="https://etherscan.io/images/brandassets/etherscan-logo-circle.svg"
                  width={75}
                  height={75}
                  alt="etherscan"
                />          
                <Details position="Software Developer" company="Etherscan" companysite="https://etherscan.io/" startyear="2025" endyear="" current="Current" startmonth='November' endmonth=''
                work="Developing and maintaining blockchain explorer features for Ethereum network"
                worklink= ""
                worklinkdesc= ""
                work2="Building scalable web applications to display real-time blockchain data and analytics"
                worklink2 = ""
                worklinkdesc2=''
                work3="Collaborating with cross-functional teams to enhance user experience and platform performance"/>

              <Image
                  className="my-8 first:mt-0 last:mb-0 flex-col"
                  src="/aeoncredit.jpg"
                  width={75}
                  height={75}
                  alt="aeoncredit"
                />          
                <Details position="Senior .NET Developer" company="Aeon Credit Service " companysite="https://www.aeoncredit.com.my/" startyear="2023" endyear="2025" current="" startmonth='November' endmonth='November'
                work="Web & Wallet Team"
                worklink= "h"
                worklinkdesc= ""
                work2="Governs most of the in-house applications such as Loan System, Membership Sign Up system, Documents Management System"
                worklink2 = ""
                worklinkdesc2=''
                work3="Collaborates with Vendors such as Finology, Softspace, Wander, Tookitaki, Tess, Silverlake to enhance on systems"/>

              <Image
                  className="my-8 first:mt-0 last:mb-0 flex-col"
                  src="/micron.png"
                  width={75}
                  height={75}
                  alt="micron"
                />          
                <Details position="Software Engineer" company="Micron Technology" companysite="https://www.micron.com/" startyear="2022" endyear="2023" current="" startmonth='April' endmonth='November'
                work="Maintaining the Micron Backend Advanced Scheduler (BEMAS) Application focusing on Planning and "
                worklink= "https://www.vms-solutions.com/en/solutions/optimized-scheduling.php"
                worklinkdesc= "Optimized Scheduling"
                work2="Migrating Applications from VMs to Cloud using Tools for Containerization such as Docker and Openshift"
                worklink2 = ""
                worklinkdesc2=''
                work3="Migrating API Gateway from WSO2 to Apigee"/>


                <Image
                  className="my-8 first:mt-0 last:mb-0 flex-col"
                  src="/ars.jpg"
                  width={50}
                  height={50}
                  alt="ars"
                />          
                <Details position="Software Developer" company="Alpha Red Solutions" companysite="https://www.alphareds.com/" startyear="2019" endyear="2022" current="" startmonth='March' endmonth='April'
                work="Frontend Development of e-commerce Hotel/Travel Booking Sites such as "
                worklink= "https://www.mayflower.com.my/"
                worklinkdesc= "Mayflower"
                work2="Creating Core Components in Migration of the legacy CMS in collaboration with "
                worklink2="https://business.adobe.com/"
                worklinkdesc2= "Adobe Experience Cloud"
                work3="Kickoff of A universal e-wallet service In Collaboration with U Mobile"/>
            
                
                </div>
            </div>
          </main>
          <main className={styles.mainspace}>

          </main>
          <main className={styles.main}>
            <div className='my-10 '>
            <AnimatedText text="Education" className='dark:text-light text-8xl font-bold w-full capitalize !text-6xl xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl xl:text-6xl' />
              <div className='w-[75%] mx-auto relative '>         
                <div className="absolute left-4 top-0 h-full bg-dark origin-top ">
                <Image
                      className="my-8 first:mt-0 last:mb-0 flex-col"
                      src="/monash.png"
                      width={50}
                      height={50}
                      alt="monash"
                    />          
                  <EducationDetails course="Bachelor of Computer Science" institution="Monash University" time="2015-2018" 
                  sidecourse="Data Analytics"
                  sidecourselink="https://handbook.monash.edu/2021/units/FIT3152"
                  sidecourselink2="https://handbook.monash.edu/2023/units/FIT2004"
                  sidecourse2="Algorithms and Data Structures"
                  sidecourse3="Modelling for Data Analysis"/>
                  </div>  
              </div>  
            </div>
          </main>
        </Layout>  
      </div>
    </div>
  );
}