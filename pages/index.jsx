import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Usman Lubis</title>
        <meta name="description" content="I&apos;m a front-end web developer specializing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/Favicon.png" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <footer className="text-center pt-8 pb-4 bottom-0">
        <p>&copy; Usman Lubis {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
