import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed w-full h-20 shadow-xl z=[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/../public/assets/NavbarLogo.png" alt="Navbar Logo" width={50} height={50} />

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:opacity-80">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:opacity-80">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:opacity-80">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:opacity-80">Projects</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:opacity-80">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
