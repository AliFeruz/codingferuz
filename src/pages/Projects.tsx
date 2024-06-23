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
    <div id='projects' ref={refInView} className='w-full min-h-screen contrast-200 flex items-center justify-center
    bg-gradient-to-tr from-lime-950 from-20% via-lime-900 via-50% to-lime-950 to-80%'>
      <div className='absolute h-full w-5/6 hidden md:flex items-center justify-center 
      border-r-2 border-l-2 border-gray-600'/>
      <div className='absolute h-5/6 w-full hidden md:flex items-center justify-center 
      border-t-2 border-b-2 border-gray-600'/>
      <div className='flex flex-col justify-center md:w-5/6 px-10 h-full my-14'>
        <p className='uppercase text-xl px-4 tracking-widest text-lime-500'>
        Projects
        </p>
        <h2 className='p-4 py-6'>Some of my projects</h2>
        <div className='mt-16 grid md:grid-cols-2
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