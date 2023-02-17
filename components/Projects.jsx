import React from 'react';
import ProjectsItem from './ProjectsItem';

function Projects() {
  return (
    <section className="w-full md:h-screen">
      <div className="max-w-[1240px] mt-8 m-auto px-8 md:px-20">
        <h2 className="text-center">What I&apos;ve built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectsItem
            thumbnail="/../public/assets/projects/crypto.jpg"
            title="Crypto"
            tech="Reacts JS"
            link="/"
          />
          <ProjectsItem
            thumbnail="/../public/assets/projects/twitch.jpg"
            title="Twitch"
            tech="Reacts JS, Node JS"
            link="/"
          />
          <ProjectsItem
            thumbnail="/../public/assets/projects/property.jpg"
            title="Property"
            tech="Reacts JS, Tailwind"
            link="/"
          />
          <ProjectsItem
            thumbnail="/../public/assets/projects/netflix.jpg"
            title="Netflix"
            tech="Reacts JS, Express JS"
            link="/"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
