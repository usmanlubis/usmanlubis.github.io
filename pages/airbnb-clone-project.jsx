import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import AirBnbClone from '../public/assets/projects/airbnb-clone.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function AirbnbClone() {
  return (
    <>
      <Head>
        <title>AirBnb Clone - Usman Lubis</title>
        <meta name="description" content="Air Bnb Clone project by Usman Lubis" />
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
            src={AirBnbClone}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">AirBnb Clone</h2>
            <h3>React JS | TailwindCSS | MongoDB | Express</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <h2 className="mb-2">Project Overview</h2>
            <p>
              This app was built using React JS and TailwindCSS for UI building, NodeJS and Express for routing and MongoDB for database. This project is currently under development, but you can try some of the features on demo.
            </p>
            <a
              href="https://github.com/usmanlubis/airbnb-clone/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="mr-4 px-8 py-2 mt-4 bg-[#39BCF9] hover:bg-[#39BCF9]/70 rounded-xl shadow-xl text-white/90 font-semibold">Code</button>
            </a>
            <a
              href="https://usmanlubis.github.io/airbnb-clone/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 bg-[#39BCF9] hover:bg-[#39BCF9]/70 rounded-xl shadow-xl text-white/90 font-semibold">Demo</button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> React
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className='pr-1' /> Tailwind
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> MongoDB
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Express
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

export default AirbnbClone;