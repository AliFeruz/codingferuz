import { useEffect } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { SelectedPage } from '../types';
import CV from '../assets/updatedCV.29.02.pdf'


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}


const Home = ({setSelectedPage}: Props) => {
    const [refInView, inView] = useInView();

    useEffect(() => {
        if (inView) {
          setSelectedPage(SelectedPage.Home);
        }
      }, [inView, setSelectedPage]);


  return (
    <div id='home' className='w-full min-h-screen flex items-center justify-center md:mt-12 pt-12' ref={refInView}>
      <div className='pt-10 flex flex-col justify-center items-center'>
          <p className='uppercase text-sm tracking-widest text-gray-700'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-800'>
            Hi, I&#39;m <span className='text-lime-400'> Ali</span>
          </h1>
          <h1 className='py-2 text-gray-800 text-center'>A Full Stack <br/>Web Developer</h1>
          <p className='py-4 px-2 text-gray-700 text-center sm:max-w-[70%] m-auto'>
            I’m focused on building responsive full-stack web applications
            using modern technologies.
          </p>
          <div className='p-4 flex gap-8 items-center justify-center'>
            <a href={CV} target='_blank' type='application/octet-stream' 
            download={'myCV.pdf'}
            className='w-40 text-center btn h-7'>Download CV</a>
          </div>
          <div className='flex items-center justify-center gap-10 max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/aliferuz'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer 
              hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn size={20}/>
              </div>
            </a>
            <a
              href='https://github.com/aliferuz'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub size={20}/>
              </div>
            </a>
          </div>
          
        
      </div>
    </div>
  )
}

export default Home