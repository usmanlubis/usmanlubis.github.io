import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import RewriteBMKA from '../public/assets/projects/rewritebmka.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function BMKARewriteProject() {
  return (
    <>
      <Head>
        <title>
          Rewrite BMKA Salman ITB Website (Collaboration - Under Development)
        </title>
        <meta
          name="description"
          content="Rewrite BMKA Salman ITB Website (Collaboration)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/Favicon.png" />
      </Head>
      <Navbar />
      <div className="w-full mt-[50px]">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={RewriteBMKA}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Rewrite BMKA Salman ITB Website</h2>
            <h3>NextJS | TypeScript | TailwindCSS | RadixUI</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <h2 className="mb-2">Project Overview</h2>
            <p>
              The project to rewrite this website is undertaken due to numerous
              bugs that appeared on the{' '}
              <a
                href="https://kaderisasi.salmanitb.com/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                old website
              </a>
              , prompting us to rewrite it using TypeScript for security reasons
              and to avoid bugs.
            </p>
            <a
              href="https://github.com/salman-digital-lab/new-web-kaderisasi"
              target="_blank"
              rel="noreferrer"
            >
              <button className="mr-4 px-8 py-2 mt-4 bg-[#39BCF9] hover:bg-[#39BCF9]/70 rounded-xl shadow-xl text-white/90 font-semibold">
                Code
              </button>
            </a>
            <a
              href="https://kaderisasi-dev.salmanitb.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 bg-[#39BCF9] hover:bg-[#39BCF9]/70 rounded-xl shadow-xl text-white/90 font-semibold">
                Demo
              </button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> NextJS
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> TypeScript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> TailwindCSS
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> RadixUI
                </p>
              </div>
            </div>
          </div>
          <Link href="/#projects">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
      <footer className="text-center pt-8 pb-4 bottom-0">
        <p>&copy; Usman Lubis {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}

export default BMKARewriteProject;
