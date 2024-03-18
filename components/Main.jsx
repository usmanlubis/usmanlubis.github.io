import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillMail } from 'react-icons/ai';
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';

function Main() {
  return (
    <main className="w-full h-screen">
      <div className="w-full max-w-[1240px] h-full pt-[5.5rem] text-center mx-auto px-8 flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest my-2">Let&apos;s build something cool together</p>
          <h1>
            Hi, I am
            <span className="text-[#38BDF8]"> Usman</span>
          </h1>
          <h1>A Fullstack Web Developer</h1>
          <p className="max-w-xl m-auto my-4">
            I&apos;m a fullstack web developer specializing in building. Currently,
            I&apos;m focused on building progressive web application using various technologies.
          </p>
          <div href="/" className="flex justify-between items-center w-[80%] mx-auto mt-8">
            <Link
              href="/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 ease-in duration-100 rounded-full shadow-xl shadow-gray-500 p-4 md:p-5 md:shadow-2xl md:shadow-gray-500"
            >
              <FaLinkedinIn size={20} />
            </Link>
            <Link
              href="https://www.github.com/usmanlubis"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 ease-in duration-100 rounded-full shadow-xl shadow-gray-500 p-4 md:p-5 md:shadow-2xl md:shadow-gray-500"
            >
              <AiFillGithub size={20} />
            </Link>
            <Link
              href="mailto:usmanlubis11@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 ease-in duration-100 rounded-full shadow-xl shadow-gray-500 p-4 md:p-5 md:shadow-2xl md:shadow-gray-500"
            >
              <AiFillMail size={20} />
            </Link>
            <Link
              href="https://t.me/uslubis"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 ease-in duration-100 rounded-full shadow-xl shadow-gray-500 p-4 md:p-5 md:shadow-2xl md:shadow-gray-500"
            >
              <FaTelegramPlane size={20} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
