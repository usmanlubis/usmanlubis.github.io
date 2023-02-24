import React from 'react';
import ProjectsItem from './ProjectsItem';
import AirBnbCloneThumbnail from '../public/assets/projects/airbnb-clone.png';


function Projects() {
  return (
    <section id="projects" className="w-full">
      <div className="max-w-[1240px] pt-[5.5rem] m-auto px-8 md:px-16">
        <h2 className="text-center mb-8">What I&apos;ve built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectsItem
            thumbnail={AirBnbCloneThumbnail}
            title="Crypto"
            tech="Reacts JS"
            link="/"
          />
          <ProjectsItem
            thumbnail={AirBnbCloneThumbnail}
            title="Twitch"
            tech="Reacts JS, Node JS"
            link="/"
          />
          {/* <ProjectsItem
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
          /> */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
