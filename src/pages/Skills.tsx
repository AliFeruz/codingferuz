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
    <div id='skills' ref={refInView} className='w-full mx-auto px-4 md:px-10 lg:min-h-screen mt-24'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-greenblue-500'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='p-4 rounded-xl shadow drop-shadow-xl border border-lime-400 text-center my-8 flex flex-col items-center justify-center w-full'>
            <p className='text-lime-500 font-semibold'>I studied at Code Academy Berlin | Berlin <br /> September 2023 - February 2024</p>
            <p className='text-sm text-gray-700'>Web Development Bootcamp (full-time on-site) | Front-end + Back-end</p>
            <p className='text-sm text-gray-700'>Completed an 840-hour intensive course focusing on practical, project-based work
            following the agile / SCRUM framework within the cohort, including code reviews, spikes,
            presentations.</p>
          </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Html} width='40' height='40' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
                <h4 className='text-lime-500 uppercase text-sm'>Advanced</h4>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Css} width={'40'} height='40' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
                <h4 className='text-lime-500 uppercase text-sm'>Advanced</h4>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Javascript} width='40' height='40' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
                <h4 className='text-lime-500 uppercase text-sm'>Advanced</h4>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={TS} width='40' height='40' alt='/' className='bg-blue-500'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>TypeScript</h3>
                <h4 className='text-lime-500 uppercase text-sm'>Advanced</h4>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={ReactImg} width='40' height='40' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
                <h4 className='text-lime-500 uppercase text-sm'>Advanced</h4>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={NextJS} width='40' height='40' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
                <h4 className='text-lime-500 uppercase text-sm'>Advanced</h4>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Tailwind} width='40' height='40' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
                <h4 className='text-lime-500 uppercase text-sm'>Advanced</h4>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={NodeJs} width='40' height='40' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NodeJS</h3>
                <h4 className='text-lime-500 uppercase text-sm'>Advanced</h4>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={MongoDb} width='40' height='40' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MongoDB</h3>
                <h4 className='text-lime-500 uppercase text-sm'>Advanced</h4>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Firebase} width='40' height='40' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
                <h4 className='text-lime-500 uppercase text-sm'>Basic</h4>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={GraphQL} width='40' height='40' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>GraphQL</h3>
                <h4 className='text-lime-500 uppercase text-sm'>Basic</h4>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Git} width='40' height='40' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Git</h3>
                <h4 className='text-lime-500 uppercase text-sm'>Basic</h4>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Github} width='40' height='40' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
                <h4 className='text-lime-500 uppercase text-sm'>Basic</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;