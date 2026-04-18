import Link from "next/link";
import Layout from '@/components/Layout';
import {DownloadSvg} from '../components/Icons';
import AnimatedText from '@/components/AnimatedText'
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className="w-full min-h-screen text-dark">
        <Layout>  
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center text-dark w-full min-h-[85vh] text-center px-4 relative">
            {/* Background Gradient Accent */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
            </div>

            <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark/5 border border-dark/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {/* <span className="text-sm font-medium text-dark/70">Available for opportunities</span> */}
              </div>

              {/* Main Heading */}
              <AnimatedText
                text="Turning Ideas into Code"
                className="!text-7xl !text-center !leading-tight xl:!text-6xl lg:!text-5xl md:!text-4xl sm:!text-3xl font-bold bg-gradient-to-r from-dark via-dark to-dark/70 bg-clip-text"
              />
              
              {/* Description */}
              <p className="max-w-3xl text-lg leading-relaxed text-dark/70 md:text-base sm:text-sm">
                Software Engineer with 6+ years of experience specializing in full-stack development, cloud migration, and enterprise solutions. 
                Passionate about building scalable, high-performing applications using modern technologies across blockchain, fintech, and e-commerce domains.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
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
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 w-full max-w-2xl border-t border-dark/10 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-dark md:text-2xl">6+</div>
                  <div className="text-sm text-dark/60 mt-1">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-dark md:text-2xl">10+</div>
                  <div className="text-sm text-dark/60 mt-1">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-dark md:text-2xl">5+</div>
                  <div className="text-sm text-dark/60 mt-1">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
      
      {/* Explore Section */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark md:text-3xl mb-3">Explore My Work</h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto">
            Discover my professional journey, technical expertise, and featured projects
          </p>
        </div>

        <div className="grid grid-cols-1 place-items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full rounded-2xl border border-dark/10 bg-white p-6 shadow-sm transition hover:shadow-lg">
            <Link href="/about" className="block">
              <h3 className="text-xl font-semibold text-dark">About Me</h3>
              <p className="mt-2 text-dark/70">A quick intro, featured projects, and background.</p>
            </Link>
            <details className="mt-4">
              <summary className="cursor-pointer select-none text-sm font-medium text-dark/80">Details</summary>
              <div className="mt-2 text-sm text-dark/70">
                Highlights of recent work and a curated project list.
              </div>
            </details>
          </div>

          <div className="w-full rounded-2xl border border-dark/10 bg-white p-6 shadow-sm transition hover:shadow-lg">
            <Link href="/experiences" className="block">
              <h3 className="text-xl font-semibold text-dark">Experiences</h3>
              <p className="mt-2 text-dark/70">Roles, impact, and the technologies I’ve used.</p>
            </Link>
            <details className="mt-4">
              <summary className="cursor-pointer select-none text-sm font-medium text-dark/80">Details</summary>
              <div className="mt-2 text-sm text-dark/70">
                A timeline of positions, responsibilities, and outcomes.
              </div>
            </details>
          </div>

          <div className="w-full rounded-2xl border border-dark/10 bg-white p-6 shadow-sm transition hover:shadow-lg">
            <Link href="/certifications" className="block">
              <h3 className="text-xl font-semibold text-dark">Certifications</h3>
              <p className="mt-2 text-dark/70">Professional learning and credentials.</p>
            </Link>
            <details className="mt-4">
              <summary className="cursor-pointer select-none text-sm font-medium text-dark/80">Details</summary>
              <div className="mt-2 text-sm text-dark/70">
                Selected certificates with links and completion dates.
              </div>
            </details>
          </div>

          <div className="w-full rounded-2xl border border-dark/10 bg-white p-6 shadow-sm transition hover:shadow-lg">
            <Link href="/contact" className="block">
              <h3 className="text-xl font-semibold text-dark">Contact</h3>
              <p className="mt-2 text-dark/70">Ways to reach me and quick social links.</p>
            </Link>
            <details className="mt-4">
              <summary className="cursor-pointer select-none text-sm font-medium text-dark/80">Details</summary>
              <div className="mt-2 text-sm text-dark/70">
                Email, phone, LinkedIn, and GitHub.
              </div>
            </details>
          </div>

          <div className="w-full rounded-2xl border border-dark/10 bg-white p-6 shadow-sm transition hover:shadow-lg lg:col-span-2">
            <Link href="https://kaijeng.netlify.app/" className="block" target="_blank">
              <h3 className="text-xl font-semibold text-dark">Netlify Portfolio</h3>
              <p className="mt-2 text-dark/70">My earlier portfolio version hosted on Netlify.</p>
            </Link>
            <details className="mt-4">
              <summary className="cursor-pointer select-none text-sm font-medium text-dark/80">Details</summary>
              <div className="mt-2 text-sm text-dark/70">
                Useful if you want to compare layout/style evolution over time.
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}