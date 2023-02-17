import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function ProjectsItem({
  thumbnail, title, tech, link,
}) {
  return (
    <div className="flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl p-4 group hover:bg-[#39BCF9]/80">
      <Image src={thumbnail} alt="Project preview iage" width={1000} height={1000} className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute">
        <h3 className="text-2xl text-white text-center tracking-wider">{title}</h3>
        <p className="text-white text-center mt-4 mb-8">{tech}</p>
        <Link href={link}>
          <p className="text-center py-2 px-4 bg-white text-gray-700 font-bold text-lg rounded-xl hover:scale-105">More info</p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectsItem;
