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
    <div className="layout min-h-screen">
      <Head>
        <title>Kai Jeng | Contact</title>
        <meta
          name="description"
          content="Get in touch with Kai Jeng — email, phone, GitHub and LinkedIn."
        />
      </Head>

      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10">
        <AnimatedText
          text="Contact"
          className="dark:text-light text-8xl font-bold w-full capitalize !text-6xl xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl"
        />

        <div className="mx-auto -mt-2 max-w-2xl text-center text-dark/70">
          I'm open to new opportunities and collaborations. Feel free to reach out through any of the channels below.
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <a
            href={`mailto:${contacts.email}`}
            className="group rounded-2xl border border-dark/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-dark text-light">
                  <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-dark/70">Email</div>
                  <div className="text-lg font-bold text-dark group-hover:underline group-hover:underline-offset-4">
                    {contacts.email}
                  </div>
                </div>
              </div>
              <span className="text-sm font-medium text-dark/50">Open →</span>
            </div>
            <p className="mt-4 text-sm text-dark/70">
              Best for opportunities, questions, or project discussions.
            </p>
          </a>

          <a
            href={`tel:${contacts.phone}`}
            className="group rounded-2xl border border-dark/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-dark text-light">
                  <FontAwesomeIcon icon={faPhone} className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-dark/70">Phone</div>
                  <div className="text-lg font-bold text-dark group-hover:underline group-hover:underline-offset-4">
                    {contacts.phone}
                  </div>
                </div>
              </div>
              <span className="text-sm font-medium text-dark/50">Call →</span>
            </div>
            <p className="mt-4 text-sm text-dark/70">
              Great for quick clarifications and scheduling.
            </p>
          </a>

          <a
            href={contacts.github}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-dark/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-dark text-light">
                  <GithubSmallSvg className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-dark/70">GitHub</div>
                  <div className="text-lg font-bold text-dark group-hover:underline group-hover:underline-offset-4">
                    {new URL(contacts.github).pathname.replace(/\//g, "") || "Profile"}
                  </div>
                </div>
              </div>
              <span className="text-sm font-medium text-dark/50">View →</span>
            </div>
            <p className="mt-4 text-sm text-dark/70">
              Code samples, projects, and contributions.
            </p>
          </a>

          <a
            href={contacts.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-dark/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#0A66C2] text-white">
                  <LinkedInSmallSvg className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-dark/70">LinkedIn</div>
                  <div className="text-lg font-bold text-dark group-hover:underline group-hover:underline-offset-4">
                    Connect
                  </div>
                </div>
              </div>
              <span className="text-sm font-medium text-dark/50">Open →</span>
            </div>
            <p className="mt-4 text-sm text-dark/70">
              Professional profile, experience, and messaging.
            </p>
          </a>
        </div>

        <div className="mt-10 rounded-2xl border border-dark/10 bg-gradient-to-br from-white to-zinc-50 p-6 shadow-sm">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h2 className="text-xl font-bold text-dark">Prefer email?</h2>
              <p className="mt-1 text-sm text-dark/70">
                Click below to start a message with a pre-filled subject.
              </p>
            </div>
            <a
              href={`mailto:${contacts.email}?subject=${encodeURIComponent("Portfolio inquiry")}`}
              className="inline-flex items-center justify-center rounded-xl bg-dark px-5 py-3 text-sm font-semibold text-light transition hover:bg-dark/90"
            >
              Send an email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}