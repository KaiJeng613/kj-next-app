import React, { Component } from 'react';
import '@/styles/styles.css'
import Head from 'next/head';
import Favicon from '../components/Favicon';

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  
  <div className="layouthome w-full">
  <Head>
    <title>Kai Jeng | Portfolio</title>
    <meta name="description" content="My personal Portfolio built with nextjs which showcases my career background and experiences"></meta>  
    <Favicon/>
  </Head>
  {children}</div>
)
export default Layout