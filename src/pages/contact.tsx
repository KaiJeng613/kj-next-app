import Image from 'next/image';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import {motion} from 'framer-motion';
import styles from '../styles/Home.module.css';
import {GithubSmallSvg, LinkedInSmallSvg} from '../components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import {useRouter} from 'next/router';
import { loadContactold } from '../pages/api/loadContact'

type Contact = {
  github: string
  linkedin: string
  email: string
  phone: string
}

export async function getStaticProps() {

  const contacts = await loadContactold()
  return {
      props: {
          contacts
      }
  }
}

const fadein = {
  initial: {
      opacity: 0,
  },
  animate: {
      opacity: 1,
  }
}

export default function Contact({contacts}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()

  if (router.isFallback){
    return <p>Loading...</p>
  }
  else{
    return (
      <div className='layout'>
        <Head>
          <title>Kai Jeng | Contact</title>
          <meta name="description" content="My personal Portfolio built with nextjs which showcases my career background and experiences"></meta>  
        </Head>
        <div className={styles.container}>
          <main className={styles.main}>
            <AnimatedText text="Contact Me" className='dark:text-light text-8xl font-bold w-full capitalize !text-6xl xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl xl:text-6xl' />
                <div className='w-[75%] mx-auto relative '>
                  <div className="absolute left-4 top-0 h-full bg-dark origin-top">
                    <div className="grid w-full gap-16 ">
                      <div className="col-span-3 flex flex-col items-start justify-start">
                        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Get in Touch</h2>
                        <div className="z-0 inline-block ">
                          <div className="flex justify-between float-left">
                            <motion.a href={contacts.github} target={"_blank"}
                            whileHover={{y:-2}}
                            whileTap={{scale:0.9}}
                            className="w-8 mx-3">
                              <GithubSmallSvg className='w-8 mx-3' />
                            </motion.a>
                            <motion.a className="github" href={contacts.github} target="_blank"
                              variants={fadein}
                              initial="initial"
                              animate="animate"
                            >KyleWong613</motion.a>
                          </div>
                          <br></br>
                          <br></br>
                          <div className="flex justify-between float-left">
                            <motion.a href={contacts.linkedin} target={"_blank"}
                            whileHover={{y:-2}}
                            whileTap={{scale:0.9}}
                            className="w-8 mx-3">
                              <LinkedInSmallSvg className='w-8 mx-3' />
                            </motion.a> 
                            <motion.a className="linkedin" href={contacts.linkedin} target="_blank"
                            variants={fadein}
                            initial="initial"
                            animate="animate">LinkedIn</motion.a>
                          </div>
                          <br></br>
                          <br></br>
                          <div className="flex justify-between float-left">          
                            <FontAwesomeIcon icon={faPhone}  
                            className="w-8 mx-3" />
                            <motion.a className="phone" href={`tel:${contacts.phone}`} target="_blank"
                            variants={fadein}
                            initial="initial"
                            animate="animate">{contacts.phone}</motion.a>
                          </div>
                          <br></br>
                          <br></br>
                          <div className="flex justify-between float-left">          
                            <FontAwesomeIcon icon={faEnvelope}  
                            className="w-8 mx-3" />
                            <motion.a className="mail" href={`mailto:${contacts.email}`} target="_blank"
                            variants={fadein}
                            initial="initial"
                            animate="animate">{contacts.email}</motion.a>
                          </div>
                          <br></br>
                          <br></br>
                          <div className="github-stats">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Stats</h2>
                            <div className="flex justify-between float-left -mt-4">
                              <motion.a href={contacts.github} target={"_blank"}
                                whileHover={{y:-2}}
                                whileTap={{scale:0.9}}
                                className="w-8 mx-3 pt-6">
                              <GithubSmallSvg className='w-8 mx-3' />
                              </motion.a>
                              <iframe className='github-frame' src="https://github-readme-stats.vercel.app/api?username=kylewong613&count_private=true&show_icons=true&hide=contribs,issues)](https://github.com/anuraghazra/github-readme-stats
                              " title="github-frame"></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </main>
        </div>
      </div>
  
    );
  }
}