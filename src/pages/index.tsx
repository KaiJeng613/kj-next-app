import Link from "next/link";
import Layout from '@/components/Layout';
import {DownloadSvg} from '../components/Icons';
import AnimatedText from '@/components/AnimatedText'
import styles from '@/styles/Home.module.css';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
};

interface ExploreCardProps {
  href: string;
  title: string;
  description: string;
  details: string;
  external?: boolean;
  className?: string;
  index: number;
}

const ExploreCard = ({ href, title, description, details, external = false, className = '', index }: ExploreCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className={`group w-full rounded-2xl border border-dark/10 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl ${className}`}
  >
    <Link href={href} className="block" target={external ? "_blank" : undefined}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-xl font-semibold text-dark group-hover:text-dark/80 transition-colors">{title}</h3>
        {external && (
          <span className="text-dark/40 group-hover:text-dark/60 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </span>
        )}
      </div>
      <p className="text-dark/70">{description}</p>
    </Link>
    <details className="mt-4">
      <summary className="cursor-pointer select-none text-sm font-medium text-dark/60 hover:text-dark/80 transition-colors">
        Learn more
      </summary>
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        className="mt-3 text-sm text-dark/60 pl-2 border-l-2 border-dark/10"
      >
        {details}
      </motion.div>
    </details>
  </motion.div>
);

export default function Home() {
  return (
    <div className={styles.container}>
      <main className="w-full min-h-screen text-dark pt-24">
        <Layout>  
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center text-dark w-full min-h-[85vh] text-center px-4 relative">
            {/* Background Gradient Accent */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"
              />
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center space-y-8"
            >
              {/* Badge */}
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark/5 border border-dark/10"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-dark/70">Available for opportunities</span>
              </motion.div>

              {/* Main Heading */}
              <motion.div variants={fadeInUp}>
                <AnimatedText
                  text="Turning Ideas into Code"
                  className="!text-7xl !text-center !leading-tight xl:!text-6xl lg:!text-5xl md:!text-4xl sm:!text-3xl font-bold bg-gradient-to-r from-dark via-dark to-dark/70 bg-clip-text"
                />
              </motion.div>
              
              {/* Description */}
              <motion.p 
                variants={fadeInUp}
                className="max-w-3xl text-lg leading-relaxed text-dark/70 md:text-base sm:text-sm"
              >
                Software Engineer with 6+ years of experience specializing in full-stack development, cloud migration, and enterprise solutions. 
                Passionate about building scalable, high-performing applications using modern technologies across blockchain, fintech, and e-commerce domains.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap items-center justify-center gap-4 pt-4"
              >
                <Link 
                  href="/Resume.pdf" 
                  target={"blank"}
                  className="group flex items-center gap-2 bg-dark text-light px-8 py-4 rounded-xl text-base font-semibold 
                  hover:bg-dark/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                  download={false}
                >
                  <span>View Resume</span>
                  <DownloadSvg className='w-5 h-5 group-hover:translate-y-0.5 transition-transform'/>
                </Link>
                
                <Link 
                  href="mailto:kaijengre2@gmail.com"
                  className="flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-dark 
                  border-2 border-dark/20 hover:border-dark hover:bg-dark/5 transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-3 gap-8 pt-8 w-full max-w-2xl border-t border-dark/10 mt-8"
              >
                {[
                  { value: '6+', label: 'Years Experience' },
                  { value: '10+', label: 'Projects Delivered' },
                  { value: '5+', label: 'Technologies' }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-dark md:text-2xl">{stat.value}</div>
                    <div className="text-sm text-dark/60 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </Layout>
      </main>
      
      {/* Explore Section */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark md:text-3xl mb-3">Explore My Work</h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto">
            Discover my professional journey, technical expertise, and featured projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 place-items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ExploreCard 
            href="/about"
            title="About Me"
            description="A quick intro, featured projects, and background."
            details="Highlights of recent work and a curated project list."
            index={0}
          />
          
          <ExploreCard 
            href="/experiences"
            title="Experiences"
            description="Roles, impact, and the technologies I've used."
            details="A timeline of positions, responsibilities, and outcomes."
            index={1}
          />
          
          <ExploreCard 
            href="/certifications"
            title="Certifications"
            description="Professional learning and credentials."
            details="Selected certificates with links and completion dates."
            index={2}
          />
          
          <ExploreCard 
            href="/contact"
            title="Contact"
            description="Ways to reach me and quick social links."
            details="Email, phone, LinkedIn, and GitHub."
            index={3}
          />
          
          <ExploreCard 
            href="https://kaijeng.netlify.app/"
            title="Netlify Portfolio"
            description="My earlier portfolio version hosted on Netlify."
            details="Useful if you want to compare layout/style evolution over time."
            external
            className="lg:col-span-2"
            index={4}
          />
        </div>
      </section>
    </div>
  );
}
