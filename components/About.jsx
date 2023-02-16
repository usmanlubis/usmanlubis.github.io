import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <section className="w-full md:h-screen md:flex md:justify-center md:items-center">
      <div className="max-w-[1240px] px-8 mx-auto md:px-16">
        <h2 className="text-center mb-16 md:mt-20">Who I am</h2>
        <div className="grid md:grid-cols-2 justify-center gap-4 items-center">
          <div className="md:w-[100] md:text-sm lg:text-base">
            <p>
              I am a front end web developer. I am self-taught developer
              who learn through tutorials, reading documentation
              and books. I am also an active administrator of community
              of JCC (Jabar Coding
              Camp) alumni, a programmer scholarship from the provincial
              government.
            </p>
            <p className="mt-4 mb-4">
              I started learning html and css over a year ago. Impressed by the
              potential of what web programming can do, I was quickly drawn to
              learn more. I started learn javascript and I love it and more
              enthused when creating interactive websites. Then I started
              learning ReactJS and TailwindCSS for easier developing and
              styling, then I also learned JavaScript framework NextJS and still learning.
            </p>
            <p className="mb-4 md:mb-0">
              I am now spending my time building more project with ReactJS and
              Tailwind and learning database and back-end technologies focusing
              on JavaScript like NodeJS and ExpressJS, also I am still improving
              my front-end skills
            </p>
          </div>
          <Image
            src="/../public/assets/NavbarLogo.png"
            alt="My Photo"
            width={300}
            height={300}
            className="md:justify-self-end -order-1 md:order-1 justify-self-center"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
