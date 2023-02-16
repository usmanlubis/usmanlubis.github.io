import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AiOutlineMenu, AiOutlineClose, AiFillGithub, AiFillMail,
} from 'react-icons/ai';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Navbar() {
  const [navbarSide, setNavbarSide] = useState(false);

  const navbarSideHandler = () => {
    setNavbarSide(!navbarSide);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-1">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/../public/assets/NavbarLogo.png" alt="Navbar Logo" width={50} height={50} />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:opacity-70">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:opacity-70">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:opacity-70">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:opacity-70">Projects</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:opacity-70">Contact</li>
            </Link>
          </ul>
          <button type="button" className="md:hidden hover:opacity-70" onClick={navbarSideHandler}>
            <AiOutlineMenu size={30} />
          </button>
        </div>
      </div>

      <div className={navbarSide && 'md:hidden fixed left-0 top-0 h-screen w-full bg-black/60 duration-500'}>
        <div className={navbarSide
          ? 'fixed top-0 left-0 h-screen w-[75%] sm:w-[60%] bg-[#f5f5f5] p-6 ease-in duration-500'
          : 'fixed top-0 -left-[100%] p-6 ease-in duration-500'}
        >
          <div>
            <div className="flex justify-between items-center">
              <div>
                <Image src="/../public/assets/NavbarLogo.png" alt="Logo Image" height={50} width={50} />
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
              <Link href="/" className="hover:opacity-70">
                <li>About</li>
              </Link>
              <Link href="/" className="hover:opacity-70">
                <li>Skills</li>
              </Link>
              <Link href="/" className="hover:opacity-70">
                <li>Project</li>
              </Link>
              <Link href="/" className="hover:opacity-70">
                <li>Contact</li>
              </Link>
            </ul>
          </div>

          <div className="mt-16 text-center">
            <p>Let&apos;s Connect</p>
          </div>
          <div href="/" className="flex justify-between items-center w-[80%] mx-auto mt-4">
            <Link href="/" className="hover:scale-125 ease-in duration-100 rounded-full shadow-xl shadow-gray-500 p-2">
              <FaLinkedinIn size={20} />
            </Link>
            <Link href="/" className="hover:scale-125 ease-in duration-100 rounded-full shadow-xl shadow-gray-500 p-2">
              <AiFillGithub size={20} />
            </Link>
            <Link href="/" className="hover:scale-125 ease-in duration-100 rounded-full shadow-xl shadow-gray-500 p-2">
              <AiFillMail size={20} />
            </Link>
            <Link href="/" className="hover:scale-125 ease-in duration-100 rounded-full shadow-xl shadow-gray-500 p-2">
              <FaTwitter size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
