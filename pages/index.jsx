import React from 'react';
import Head from 'next/head';
// import Image from 'next/image';
// import { Inter } from '@next/font/google';
// import Main from '@/components/Main';
import Navbar from '../components/Navbar';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Usman Lubis</title>
        <meta name="description" content="I’m a front-end web developer specializing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Favicon.png" />
      </Head>
      <Navbar />
    </>
  );
}
