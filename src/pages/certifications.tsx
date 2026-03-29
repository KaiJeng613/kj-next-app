import Image from 'next/image';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText'
import styles from '@/styles/Home.module.css';
import React from 'react';
import {motion, useScroll} from "framer-motion";
import { GITHUB_URL } from '@/util/config';

const githuburl = `${GITHUB_URL}KJSite/blob/main/README.md#certificates`;

const CertDetails = ({certname, company, certlink, date, details, details2}:
  {certname: string, company: string, certlink: string, date:string, details: string, details2: string}) =>
 {
  return <li className='my-8 first:mt-0 last:mb-0 mx-auto flex flex-col'>
      <div>
        <h4 className='capitalize font-bold text-2l'>
          {certname}&nbsp;<a href={certlink} target="_blank">| {company}</a>
        </h4>
        <span className='capitalize font-medium text-dark'>
          {date}
        </span>
        <p className='font-medium w-full'>{details}</p> 
        <p className='font-medium w-full'>{details2}</p> 
      </div>
    </li>
}

export default function Certifications() {
  return (
    <div className=''>
      <div className={styles.container}>
        <main className={styles.main}>
        <AnimatedText text="Certifications" className='dark:text-light text-8xl font-bold w-full capitalize !text-6xl xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl xl:text-6xl' />
          <div className='w-[75%] mx-auto relative'>
              <div className="absolute left-4 top-0 h-full bg-dark origin-top ">
              <motion.a href={`${githuburl}`} target="_blank">
                <h3 className=' mb-4 text-lg font-bold uppercase text-dark/75'>
                  Certificates List
                </h3>
              </motion.a>
                <Image
                  className="my-8 first:mt-0 last:mb-0 flex-col"
                  src="/iverson.jpg"
                  width={75}
                  height={75}
                  alt="iverson"
                />          
                <CertDetails certname="Developing Cloud-Native Applications with Microservices Architectures" 
                company="Iverson" certlink="https://imgbb.com/Np1jT65" 
                date="July 2023"
                details="Identify the proper frameworks and tools to build your microservices architecture"
                details2="Understanding of OpenShift and Kubernetes"/>
                <Image
                  className="my-8 first:mt-0 last:mb-0 flex-col"
                  src="/adobe-ex.png"
                  width={75}
                  height={75}
                  alt="adobe"
                />          
                <CertDetails certname="Create Web Experiences Using AEM" company="Adobe" certlink="https://ibb.co/xMGt7bx" 
                date="Feb 2022"
                details="Authoring concepts using the Adobe Experience Manager Touch UI"
                details2="Creating and Editing responsive web pages with Experience Fragments"/>
             </div>
          </div>
        </main>
      </div>
    </div>
  );
}