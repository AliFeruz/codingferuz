import { useEffect } from 'react';
import Html from '../assets/skills/html.png';
import Css from '../assets/skills/css.png';
import Javascript from '../assets/skills/javascript.png';
import ReactImg from '../assets/skills/react.png';
import Tailwind from '../assets/skills/tailwind.png';
import Github from '../assets/skills/github1.png';
import Firebase from '../assets/skills/firebase.png';
import NextJS from '../assets/skills/nextjs.png';
import MongoDb from '../assets/skills/bxl-mongodb.svg';
import TS from '../assets/skills/bxl-typescript.svg';
import NodeJs from '../assets/skills/bxl-nodejs.svg';
import GraphQL from '../assets/skills/graphql-icon.svg';
import Git from '../assets/skills/bxl-git.svg';
import { useInView } from 'react-intersection-observer';
import { SelectedPage } from '../types';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Skills = ({ setSelectedPage } : Props) => {
    const [refInView, inView] = useInView();

    useEffect(() => {
        if (inView) {
          setSelectedPage(SelectedPage.Skills);
        }
      }, [inView, setSelectedPage]);

  return (
    <div id='skills' ref={refInView} className='w-full min-h-screen flex items-center justify-center
    contrast-200 bg-gradient-to-tl from-lime-950 from-20% via-lime-900 via-50% to-lime-950 to-80%'>
      <div className='absolute h-full w-5/6 hidden md:flex items-center justify-center 
      border-r-2 border-l-2 border-gray-600'/>
      <div className='absolute h-5/6 w-full hidden md:flex items-center justify-center 
      border-t-2 border-b-2 border-gray-600'/>
      <div className='md:w-5/6 flex flex-col justify-center mt-14 px-10 h-full'>
        <p className='text-xl tracking-widest px-4 uppercase text-lime-500'>
         Tech Skills
        </p>
        <h2 className='p-4'>What I Can Do</h2>
        <div className='p-4 rounded-xl shadow drop-shadow-xl border border-gray-500 text-center my-6 
        flex flex-col items-center justify-center w-full'>
            <p className='text-gray-300 font-semibold'>I studied at Code Academy Berlin | Berlin <br /> September 2023 - February 2024</p>
            <p className='text-sm text-gray-400 mt-2'>Web Development Bootcamp (full-time on-site) | Front-end + Back-end</p>
            <p className='text-sm text-gray-400 mt-1'>Completed an 840-hour intensive course focusing on practical, project-based work
            following the agile / SCRUM framework within the cohort, including code reviews, spikes,
            presentations.</p>
          </div>
        <div className='grid grid-cols-2 lg:grid-cols-5 gap-8'>
          <div className='border-2 border-gray-500 contrast-100 
          rounded-xl bg-lime-900 hover:scale-105 ease-in duration-300'>
            <div className='flex gap-1 p-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Html} width='28' height='28' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center md:mr-5'>
                <p>HTML</p>
                <p className='text-gray-500 uppercase md:text-sm text-xs'>Advanced</p>
              </div>
            </div>
          </div>
          <div className='border-2 border-gray-500 contrast-100 rounded-xl bg-lime-900 hover:scale-105 ease-in duration-300'>
            <div className='flex gap-1 p-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Css} width={'28'} height='28' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center md:mr-5'>
                <h4>CSS</h4>
                <h4 className='text-gray-500 uppercase md:text-sm text-xs'>Advanced</h4>
              </div>
            </div>
          </div>
          <div className='border-2 border-gray-500 contrast-100 rounded-xl bg-lime-900 hover:scale-105 ease-in duration-300'>
            <div className='flex gap-1 p-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Javascript} width='28' height='28' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center md:mr-5'>
                <h4>JavaScript</h4>
                <h4 className='text-gray-500 uppercase md:text-sm text-xs'>Advanced</h4>
              </div>
            </div>
          </div>
          <div className='border-2 border-gray-500 contrast-100 rounded-xl bg-lime-900 hover:scale-105 ease-in duration-300'>
            <div className='flex gap-1 p-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={TS} width='28' height='28' alt='/' className='bg-blue-500'/>
              </div>
              <div className='flex flex-col items-center justify-center md:mr-5'>
                <h4>TypeScript</h4>
                <h4 className='text-gray-500 uppercase md:text-sm text-xs'>Advanced</h4>
              </div>
            </div>
          </div>
          <div className='border-2 border-gray-500 contrast-100 rounded-xl bg-lime-900 hover:scale-105 ease-in duration-300'>
            <div className='flex gap-1 p-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={ReactImg} width='28' height='28' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center md:mr-5'>
                <h4>React</h4>
                <h4 className='text-gray-500 uppercase md:text-sm text-xs'>Advanced</h4>
              </div>
            </div>
          </div>
          <div className='border-2 border-gray-500 contrast-100 rounded-xl bg-lime-900 hover:scale-105 ease-in duration-300'>
            <div className='flex gap-1 p-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={NextJS} width='28' height='28' alt='/' className='bg-white rounded-full'/>
              </div>
              <div className='flex flex-col items-center justify-center md:mr-5'>
                <h4>Next</h4>
                <h4 className='text-gray-500 uppercase md:text-sm text-xs'>Advanced</h4>
              </div>
            </div>
          </div>
          <div className='border-2 border-gray-500 contrast-100 rounded-xl bg-lime-900 hover:scale-105 ease-in duration-300'>
            <div className='flex gap-1 p-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Tailwind} width='28' height='28' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center md:mr-5'>
                <h4>Tailwind</h4>
                <h4 className='text-gray-500 uppercase md:text-sm text-xs'>Advanced</h4>
              </div>
            </div>
          </div>
          <div className='border-2 border-gray-500 contrast-100 rounded-xl bg-lime-900 hover:scale-105 ease-in duration-300'>
            <div className='flex gap-1 p-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={NodeJs} width='28' height='28' alt='/' className='bg-white rounded-full' />
              </div>
              <div className='flex flex-col items-center justify-center md:mr-5'>
                <h4>NodeJS</h4>
                <h4 className='text-gray-500 uppercase md:text-sm text-xs'>Advanced</h4>
              </div>
            </div>
          </div>
          <div className='border-2 border-gray-500 contrast-100 rounded-xl bg-lime-900 hover:scale-105 ease-in duration-300'>
            <div className='flex gap-1 p-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={MongoDb} width='28' height='28' alt='/' className='bg-white rounded-full'/>
              </div>
              <div className='flex flex-col items-center justify-center md:mr-5'>
                <h4>MongoDB</h4>
                <h4 className='text-gray-500 uppercase md:text-sm text-xs'>Advanced</h4>
              </div>
            </div>
          </div>
          <div className='border-2 border-gray-500 contrast-100 rounded-xl bg-lime-900 hover:scale-105 ease-in duration-300'>
            <div className='flex gap-1 p-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Firebase} width='28' height='28' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center md:mr-5'>
                <h4>Firebase</h4>
                <h4 className='text-gray-500 uppercase md:text-sm text-xs'>Basic</h4>
              </div>
            </div>
          </div>
          <div className='border-2 border-gray-500 contrast-100 rounded-xl bg-lime-900 hover:scale-105 ease-in duration-300'>
            <div className='flex gap-1 p-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={GraphQL} width='28' height='28' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center md:mr-5'>
                <h4>GraphQL</h4>
                <h4 className='text-gray-500 uppercase md:text-sm text-xs'>Basic</h4>
              </div>
            </div>
          </div>
          <div className='border-2 border-gray-500 contrast-100 rounded-xl bg-lime-900 hover:scale-105 ease-in duration-300'>
            <div className='flex gap-1 p-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Git} width='28' height='28' alt='/' className='bg-red-300 rounded-full'/>
              </div>
              <div className='flex flex-col items-center justify-center md:mr-5'>
                <h4>Git</h4>
                <h4 className='text-gray-500 uppercase md:text-sm text-xs'>Basic</h4>
              </div>
            </div>
          </div>
          <div className='border-2 border-gray-500 contrast-100 rounded-xl bg-lime-900 hover:scale-105 ease-in duration-300'>
            <div className='flex gap-1 p-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Github} width='28' height='28' alt='/' className='bg-white rounded-full'/>
              </div>
              <div className='flex flex-col items-center justify-center md:mr-5'>
                <h4>Github</h4>
                <h4 className='text-gray-500 uppercase md:text-sm text-xs'>Basic</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;