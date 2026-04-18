import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import { GithubSmallSvg, LinkedInSmallSvg } from '../components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import type { InferGetStaticPropsType } from 'next'
import { loadContactold } from '../pages/api/loadContact'

export async function getStaticProps() {

  const contacts = await loadContactold()
  return {
      props: {
          contacts
      }
  }
}

export default function Contact({contacts}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="layout min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Head>
        <title>Kai Jeng | Contact</title>
        <meta
          name="description"
          content="Get in touch with Kai Jeng — email, phone, GitHub and LinkedIn."
        />
      </Head>

      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <AnimatedText
            text="Get In Touch"
            className="dark:text-light text-8xl font-bold w-full capitalize !text-6xl xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl"
          />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-dark/70">
            I'm open to new opportunities and collaborations. Feel free to reach out through any of the channels below.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Email Card */}
          <a
            href={`mailto:${contacts.email}`}
            className="group relative overflow-hidden rounded-2xl border border-dark/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-dark text-light transition-transform group-hover:scale-110">
                <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-dark/60 mb-2">Email</h3>
              <p className="text-base font-bold text-dark break-words">{contacts.email}</p>
              <div className="mt-4 flex items-center text-sm font-medium text-dark/50 group-hover:text-dark transition-colors">
                <span>Send message</span>
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </a>

          {/* Phone Card */}
          <a
            href={`tel:${contacts.phone}`}
            className="group relative overflow-hidden rounded-2xl border border-dark/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-dark text-light transition-transform group-hover:scale-110">
                <FontAwesomeIcon icon={faPhone} className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-dark/60 mb-2">Phone</h3>
              <p className="text-base font-bold text-dark">{contacts.phone}</p>
              <div className="mt-4 flex items-center text-sm font-medium text-dark/50 group-hover:text-dark transition-colors">
                <span>Call now</span>
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={contacts.github}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-dark/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-dark text-light transition-transform group-hover:scale-110">
                <GithubSmallSvg className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-dark/60 mb-2">GitHub</h3>
              <p className="text-base font-bold text-dark">
                {new URL(contacts.github).pathname.replace(/\//g, "") || "Profile"}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-dark/50 group-hover:text-dark transition-colors">
                <span>View profile</span>
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={contacts.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-dark/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl overflow-hidden transition-transform group-hover:scale-110">
                <LinkedInSmallSvg className="h-12 w-12" />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-dark/60 mb-2">LinkedIn</h3>
              <p className="text-base font-bold text-dark">Connect</p>
              <div className="mt-4 flex items-center text-sm font-medium text-dark/50 group-hover:text-dark transition-colors">
                <span>View profile</span>
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </a>
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-3xl border border-dark/10 bg-gradient-to-br from-dark to-dark/90 p-12 text-center shadow-xl md:p-8">
          <h2 className="text-3xl font-bold text-light mb-4 md:text-2xl">Ready to Start a Project?</h2>
          <p className="mx-auto max-w-xl text-lg text-light/80 mb-8">
            Let's discuss how we can work together to bring your ideas to life. Send me an email to get started.
          </p>
          <a
            href={`mailto:${contacts.email}?subject=${encodeURIComponent("Project Inquiry")}`}
            className="inline-flex items-center justify-center rounded-xl bg-light px-8 py-4 text-base font-semibold text-dark transition-all duration-300 hover:bg-light/90 hover:shadow-lg hover:-translate-y-0.5"
          >
            Send an Email
          </a>
        </div>
      </div>
    </div>
  );
}