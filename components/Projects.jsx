import React from 'react';
import ProjectsItem from './ProjectsItem';
import RewriteBMKAThumbnail from '../public/assets/projects/rewritebmka.png';
import AirBnbCloneThumbnail from '../public/assets/projects/airbnb-clone.png';
import SimpleNotesAppThumbnail from '../public/assets/projects/simple-notes.png';


function Projects() {
  return (
    <section id="projects" className="w-full">
      <div className="max-w-[1240px] pt-[5.5rem] m-auto px-8 md:px-16">
        <h2 className="text-center mb-8">What I&apos;ve built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectsItem
            thumbnail={RewriteBMKAThumbnail}
            title="Rewrite BMKA Salman Website"
            tech="NextJS | TypeScript | TailwindCSS | RadixUI"
            link="/bmka-rewrite-project"
          />
          <ProjectsItem
            thumbnail={AirBnbCloneThumbnail}
            title="AirBnb Clone"
            tech="Reacts JS | TailwindCSS | MongoDB | Express"
            link="/airbnb-clone-project"
          />
          <ProjectsItem
            thumbnail={SimpleNotesAppThumbnail}
            title="Simple Notes App"
            tech="Reacts JS | CSS"
            link="/simple-app-project"
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
