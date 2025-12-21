import Link from "next/link";
import Layout from '@/components/Layout';
import {DownloadSvg} from '../components/Icons';
import AnimatedText from '@/components/AnimatedText'
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className='flex items-center text-dark w-full min-h-screen xl:p-24 '>
        <Layout >  
          <div className="flex flex-col items-center justify-center text-dark w-full min-h-screen">
            <div className='w-full max-w-4xl flex flex-col items-center justify-center'>
              <AnimatedText text="Turning Ideas into Code" className='!text-6xl !text-center xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className="text-center">
                As a Software Engineer with over 6 years of experience, I specialize in transforming innovative ideas into scalable web applications. With a strong background in both front-end and back-end development, 
                I have successfully led AWS cloud migration projects and developed robust solutions using .NET technologies. I am passionate about building efficient, high-performing, and user-friendly software. Explore my portfolio to discover a diverse range of projects that showcase my expertise in AWS migration, .NET development, and delivering impactful software solutions across various domains.              
              </p>
              <div className='flex items-center justify-center mt-2'>
                <Link href="/Resume.pdf" target={"blank"}
                className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border border-soldi border-transparent hover:border-dark
                "
                download={false}>Resume <DownloadSvg className='w-6 ml-1'/></Link>
                <Link href="mailto:kaijengre2@gmail.com"
                className="ml-4 text-lg font-medium capitalize text-dark"
                >Email Me</Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
      
      <div className={styles.grid}>
        <Link className={styles.card} href="/about"><h2>About Me</h2>
          <br />
          <p>More about me</p>
        </Link>

        <Link className={styles.card} href="/experiences"><h2>My Experiences</h2>
          <br />
          <p>Check out my Experiences</p>
        </Link>

        <Link className={styles.card} href="/certifications"><h2>My Certifications</h2>
          <br />
          <p>Check out my Certifications here</p>
        </Link>

        <Link className={styles.card} href="/contact"><h2>My Contact</h2>
          <br />
          <p>Contact Me Here</p>
        </Link>

        {/* <Link className={styles.card} href="/sorting"><h2>Sorting</h2>
          <br />
          <p>Go to this page to learn about Sorting Algorithm</p>
        </Link> */}
        <Link className={styles.card} href="https://kaijeng.netlify.app/"><h2>My Netlify App</h2>
          <br />
          <p>Go to this page to Check out my Netlify Portfolio</p>
        </Link>
      </div>
    </div>
  );
}