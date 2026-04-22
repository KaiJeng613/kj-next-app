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
    <div className="layout min-h-screen gradient-bg">
      <Head>
        <title>Kai Jeng | Contact</title>
        <meta
          name="description"
          content="Get in touch with Kai Jeng — email, phone, GitHub and LinkedIn."
        />
      </Head>

      <div className="section-container">
        {/* Header Section */}
        <div className="page-header">
          <AnimatedText
            text="Get In Touch"
            className="page-title"
          />
          <p className="page-subtitle">
            I'm open to new opportunities and collaborations. Feel free to reach out through any of the channels below.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Email Card */}
          <a href={`mailto:${contacts.email}`} className="info-card">
            <div className="info-card-gradient"></div>
            <div className="relative">
              <div className="info-card-icon">
                <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
              </div>
              <h3 className="info-card-label">Email</h3>
              <p className="info-card-value break-words">{contacts.email}</p>
              <div className="info-card-action">
                <span>Send message</span>
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </a>

          {/* Phone Card */}
          <a href={`tel:${contacts.phone}`} className="info-card">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="info-card-icon">
                <FontAwesomeIcon icon={faPhone} className="h-6 w-6" />
              </div>
              <h3 className="info-card-label">Phone</h3>
              <p className="info-card-value">{contacts.phone}</p>
              <div className="info-card-action">
                <span>Call now</span>
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </a>

          {/* GitHub Card */}
          <a href={contacts.github} target="_blank" rel="noreferrer" className="info-card">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="info-card-icon">
                <GithubSmallSvg className="h-6 w-6" />
              </div>
              <h3 className="info-card-label">GitHub</h3>
              <p className="info-card-value">
                {new URL(contacts.github).pathname.replace(/\//g, "") || "Profile"}
              </p>
              <div className="info-card-action">
                <span>View profile</span>
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a href={contacts.linkedin} target="_blank" rel="noreferrer" className="info-card">
            <div className="info-card-gradient"></div>
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl overflow-hidden transition-transform group-hover:scale-110">
                <LinkedInSmallSvg className="h-12 w-12" />
              </div>
              <h3 className="info-card-label">LinkedIn</h3>
              <p className="info-card-value">Connect</p>
              <div className="info-card-action">
                <span>View profile</span>
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </a>
        </div>

        {/* CTA Section */}
        <div className="cta-section mt-16">
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