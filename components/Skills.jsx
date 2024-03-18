import React from 'react';
import Image from 'next/image';
import TypeScriptLogo from '../public/assets/skills/typescript.png';
import ReactJSLogo from '../public/assets/skills/react.png';
import TailwindLogo from '../public/assets/skills/tailwind.png';
import NextJSLogo from '../public/assets/skills/nextjs.png';
import NodeJSLogo from '../public/assets/skills/node.png';
import PHPLogo from '../public/assets/skills/php.png';
import LaravelLogo from '../public/assets/skills/laravel.png';
import GitLogo from '../public/assets/skills/git.png';

function Skills() {
  return (
    <section id="skills" className="w-full md:h-screen md:flex md:items-center">
      <div className="max-w-[1240px] m-auto pt-[5.5rem] px-8 md:px-16 md:basis-[100%]">
        <div className="flex flex-col justify-center items-center">
          <h2 className="mb-8">What I can do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 w-full gap-4 skills">
            <div className="flex justify-between items-center p-4 shadow-lg shadow-gray-500 rounded-lg hover:scale-105 ease-in duration-100">
              <Image src={TypeScriptLogo} alt="Typescript Logo" width={50} height={50} />
              <p>TypeScript</p>
            </div>
            <div className="flex justify-between items-center p-4 shadow-lg shadow-gray-500 rounded-lg hover:scale-105 ease-in duration-100">
              <Image src={ReactJSLogo} alt="React JS logo" width={50} height={50} />
              <p>ReactJS</p>
            </div>
            <div className="flex justify-between items-center p-4 shadow-lg shadow-gray-500 rounded-lg hover:scale-105 ease-in duration-100">
              <Image src={TailwindLogo} alt="Tailwind logo" width={50} height={50} />
              <p>Tailwind CSS</p>
            </div>
            <div className="flex justify-between items-center p-4 shadow-lg shadow-gray-500 rounded-lg hover:scale-105 ease-in duration-100">
              <Image src={NextJSLogo} alt="Next logo" width={50} height={50} />
              <p>NextJS</p>
            </div>
            <div className="flex justify-between items-center p-4 shadow-lg shadow-gray-500 rounded-lg hover:scale-105 ease-in duration-100">
              <Image src={GitLogo} alt="Git logo" width={50} height={50} />
              <p>Git</p>
            </div>
            <div className="flex justify-between items-center p-4 shadow-lg shadow-gray-500 rounded-lg hover:scale-105 ease-in duration-100">
              <Image src={PHPLogo} alt="PHP logo" width={50} height={50} />
              <p>PHP</p>
            </div>
            <div className="flex justify-between items-center p-4 shadow-lg shadow-gray-500 rounded-lg hover:scale-105 ease-in duration-100">
              <Image src={LaravelLogo} alt="Laravel logo" width={50} height={50} />
              <p>Laravel</p>
            </div>
            <div className="flex justify-between items-center p-4 shadow-lg shadow-gray-500 rounded-lg hover:scale-105 ease-in duration-100">
              <Image src={NodeJSLogo} alt="Node logo" width={50} height={50} />
              <p>NodeJS</p>
            </div>
            {/* <div className="flex justify-between items-center p-4 shadow-lg shadow-gray-500 rounded-lg hover:scale-105 ease-in duration-100">
              <Image src={ExpressJSLogo} alt="Express logo" width={100} height={50} />
              <p>ExpressJS</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
