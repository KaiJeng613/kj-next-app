import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import '@/styles/styles.css'
import '@/app/globals.css'

export default function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navbar />
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
      <Footer />
    </Layout>
  )
}
