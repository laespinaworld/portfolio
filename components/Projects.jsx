import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import licitei from '../public/assets/projects/licitei.jpg'
import haxn from '../public/assets/projects/haxn.png'
import vixe from '../public/assets/projects/vixe.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Licitei - Public Tenders App'
            backgroundImg={licitei}
            projectUrl='/licitei'
            tech='React JS/ NextJS/Firenase/Api/Stripe'
          />
          <ProjectItem
            title='Company Site'
            backgroundImg={haxn}
            projectUrl='/haxn'
            tech='Vue/ Javascript'

          />
          <ProjectItem
            title='Pregnant Blog'
            backgroundImg={vixe}
            projectUrl='/vixe'
            tech='Next JS/ GraphCML'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
