import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ProjectType, SelectedPage } from '../types';
import { Data } from '../lib/data';
import ProjectCard from '../components/ProjectCard';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Projects = ({ setSelectedPage } : Props) => {
    const [refInView, inView] = useInView();

    useEffect(() => {
        if (inView) {
          setSelectedPage(SelectedPage.Projects);
        }
      }, [inView, setSelectedPage]);

  return (
    <div id='projects' ref={refInView} className='w-full mx-auto p-4 md:px-10 lg:min-h-screen mt-24'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-greenblue-500'>
          Projects
        </p>
        <h2 className='py-4'>Some of my projects</h2>
        <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 
        sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-10'>
          {Data.map((project: ProjectType) => (
            <div key={project.id}>
            <ProjectCard project={project} />
            </div>
          ))}
        </div>  
      </div>
    </div>
  );
};

export default Projects;