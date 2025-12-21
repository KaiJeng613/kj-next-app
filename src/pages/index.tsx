import Link from "next/link";
import Layout from '@/components/Layout';
import {DownloadSvg} from '../components/Icons';
import AnimatedText from '@/components/AnimatedText'
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className="w-full min-h-screen text-dark xl:p-24">
        <Layout >  
          <div className="flex flex-col items-center justify-center text-dark w-full min-h-[70vh] text-center">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
              <AnimatedText
                text="Turning Ideas into Code"
                className="!text-6xl !text-center xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-dark/80 md:text-lg">
                As a Software Engineer with over 6 years of experience, I specialize in transforming innovative ideas into scalable web applications. With a strong background in both front-end and back-end development, 
                I have successfully led AWS cloud migration projects and developed robust solutions using .NET technologies. I am passionate about building efficient, high-performing, and user-friendly software. Explore my portfolio to discover a diverse range of projects that showcase my expertise in AWS migration, .NET development, and delivering impactful software solutions across various domains.              
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <Link href="/Resume.pdf" target={"blank"}
                className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border border-soldi border-transparent hover:border-dark
                "
                download={false}>Resume <DownloadSvg className='w-6 ml-1'/></Link>
                <Link href="mailto:kaijengre2@gmail.com"
                className="text-lg font-medium capitalize text-dark underline underline-offset-4 hover:opacity-80"
                >Email Me</Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
      
      <section className="mx-auto w-full max-w-6xl pb-16">
        <h2 className="text-center text-2xl font-bold text-dark md:text-3xl">Explore</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-dark/70">
          Quick links to the main sections of the portfolio. Expand a card for details, or click through.
        </p>

        <div className="mt-8 grid grid-cols-1 place-items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
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