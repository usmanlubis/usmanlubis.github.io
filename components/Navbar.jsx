import React, { useState } from 'react';
import Image from 'next/image';
import LogoNavbar from '../public/assets/NavbarLogo4.png';
import Link from 'next/link';
import {
  AiOutlineMenu, AiOutlineClose, AiFillGithub, AiFillMail,
} from 'react-icons/ai';
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';

export default function Navbar() {
  const [navbarSide, setNavbarSide] = useState(false);

  const navbarSideHandler = () => {
    setNavbarSide(!navbarSide);
  };

  return (
    <nav className="fixed top-0 w-full h-20 shadow-xl z-50 bg-[#ecf0f3] mb-1">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={LogoNavbar} alt="Navbar Logo" width={70} height={70} />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:opacity-70">Home</li>
            </Link>
            <Link href="#about">
              <li className="ml-10 text-sm uppercase hover:opacity-70">About</li>
            </Link>
            <Link href="#skills">
              <li className="ml-10 text-sm uppercase hover:opacity-70">Skills</li>
            </Link>
            <Link href="#projects">
              <li className="ml-10 text-sm uppercase hover:opacity-70">Projects</li>
            </Link>
            <Link href="#contact">
              <li className="ml-10 text-sm uppercase hover:opacity-70">Contact</li>
            </Link>
          </ul>
          <button type="button" className="md:hidden hover:opacity-70" onClick={navbarSideHandler}>
            <AiOutlineMenu size={30} />
          </button>
        </div>
      </div>

      <div className={navbarSide && 'md:hidden md:ease-in md:duration-300 fixed left-0 top-0 h-screen w-full bg-black/60 duration-300'}>
        <div className={navbarSide
          ? 'fixed top-0 left-0 h-screen w-[75%] sm:w-[60%] bg-[#f5f5f5] p-6 ease-in duration-300'
          : 'fixed top-0 -left-[100%] ease-in duration-300'}
        >
          <div>
            <div className="flex justify-between items-center">
              <div>
                <Image src={LogoNavbar} alt="Logo Image" height={50} width={50} />
              </div>
              <button type="button" className="shadow-lg shadow-gray-500 rounded-full p-2 hover:opacity-70" onClick={navbarSideHandler}>
                <AiOutlineClose size={20} />
              </button>
            </div>
            <div className="my-4 ">
              <p className="border-b-2 py-1">Let&apos;s build something together.</p>
            </div>
          </div>
          <div>
            <ul className="uppercase flex flex-col items-center gap-4">
              <Link href="/" className="hover:opacity-70">
                <li>Home</li>
              </Link>
              <Link href="#about" className="hover:opacity-70">
                <li>About</li>
              </Link>
              <Link href="#skills" className="hover:opacity-70">
                <li>Skills</li>
              </Link>
              <Link href="#projects" className="hover:opacity-70">
                <li>Project</li>
              </Link>
              <Link href="#contact" className="hover:opacity-70">
                <li>Contact</li>
              </Link>
            </ul>
          </div>

          <div className="mt-16 text-center">
            <p>Let&apos;s Connect</p>
          </div>
          <div href="/" className="flex justify-between items-center w-[80%] mx-auto mt-4">
            <Link
              href="/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 ease-in duration-100 rounded-full shadow-xl shadow-gray-500 p-2"
            >
              <FaLinkedinIn size={20} />
            </Link>
            <Link
              href="https://www.github.com/usmanlubis"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 ease-in duration-100 rounded-full shadow-xl shadow-gray-500 p-2"
            >
              <AiFillGithub size={20} />
            </Link>
            <Link
              href="mailto:usmanlubis11@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 ease-in duration-100 rounded-full shadow-xl shadow-gray-500 p-2"
            >
              <AiFillMail size={20} />
            </Link>
            <Link
              href="https://t.me/uslubis"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 ease-in duration-100 rounded-full shadow-xl shadow-gray-500 p-2"
            >
              <FaTelegramPlane size={20} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
