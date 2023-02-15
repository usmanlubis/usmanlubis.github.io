import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
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
          <div className="md:hidden">
            <AiOutlineMenu size={30} className="cursor-pointer hover:opacity-70" />
          </div>
        </div>

        <div className="fixed left-0 top-0 h-screen w-full bg-black/60">
          <div className="fixed top-0 left-0 h-screen w-[75%] sm:w-[60%] bg-[#f5f5f5] p-6 ease-in duration-100">
            <div className="flex justify-between items-center">
              <div>
                <Image src="/../public/assets/NavbarLogo.png" alt="Logo Image" height={50} width={50} />
              </div>
              <div className="shadow-lg shadow-gray-500 rounded-full p-2 cursor-pointer">
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className="my-4 ">
              <p className="border-b-2 py-1">Let&apos;s build something together.</p>
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
          </div>
        </div>
      </div>
    </div>
  );
}
