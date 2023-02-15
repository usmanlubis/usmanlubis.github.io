import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

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

        {/* <div className="">

        </div> */}
      </div>
    </div>
  );
}
