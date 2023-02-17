import React from 'react';
import Image from 'next/image';

function Skills() {
  return (
    <section id="skills" className="w-full md:h-screen md:flex md:items-center">
      <div className="max-w-[1240px] m-auto pt-[5.5rem] px-8 md:px-16 md:basis-[100%]">
        <div className="flex flex-col justify-center items-center">
          <h2 className="mb-8">What I can do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 w-full gap-4 skills">
            <div className="flex justify-between items-center p-4 shadow-lg shadow-gray-500 rounded-lg hover:scale-105 ease-in duration-100">
              <Image src="/../public/assets/skills/html.png" alt="Html logo" width={50} height={50} />
              <p>HTML</p>
            </div>
            <div className="flex justify-between items-center p-4 shadow-lg shadow-gray-500 rounded-lg hover:scale-105 ease-in duration-100">
              <Image src="/../public/assets/skills/css.png" alt="Css logo" width={50} height={50} />
              <p>CSS</p>
            </div>
            <div className="flex justify-between items-center p-4 shadow-lg shadow-gray-500 rounded-lg hover:scale-105 ease-in duration-100">
              <Image src="/../public/assets/skills/javascript.png" alt="JavaScript logo" width={50} height={50} />
              <p>JavaScript</p>
            </div>
            <div className="flex justify-between items-center p-4 shadow-lg shadow-gray-500 rounded-lg hover:scale-105 ease-in duration-100">
              <Image src="/../public/assets/skills/react.png" alt="React logo" width={50} height={50} />
              <p>ReactJS</p>
            </div>
            <div className="flex justify-between items-center p-4 shadow-lg shadow-gray-500 rounded-lg hover:scale-105 ease-in duration-100">
              <Image src="/../public/assets/skills/tailwind.png" alt="Tailwind logo" width={50} height={50} />
              <p>Tailwind CSS</p>
            </div>
            <div className="flex justify-between items-center p-4 shadow-lg shadow-gray-500 rounded-lg hover:scale-105 ease-in duration-100">
              <Image src="/../public/assets/skills/nextjs.png" alt="Next logo" width={50} height={50} />
              <p>NextJS</p>
            </div>
            <div className="flex justify-between items-center p-4 shadow-lg shadow-gray-500 rounded-lg hover:scale-105 ease-in duration-100">
              <Image src="/../public/assets/skills/git.png" alt="Git logo" width={50} height={50} />
              <p>Git</p>
            </div>
            <div className="flex justify-between items-center p-4 shadow-lg shadow-gray-500 rounded-lg hover:scale-105 ease-in duration-100">
              <Image src="/../public/assets/skills/node.png" alt="Node logo" width={50} height={50} />
              <p>NodeJS</p>
            </div>
            <div className="flex justify-between items-center p-4 shadow-lg shadow-gray-500 rounded-lg hover:scale-105 ease-in duration-100">
              <Image src="/../public/assets/skills/express.png" alt="Express logo" width={100} height={50} />
              <p>ExpressJS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
