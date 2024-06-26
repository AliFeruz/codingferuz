import { useEffect } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { SelectedPage } from '../types';



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
    <div id='home' className='w-full contrast-200
    bg-gradient-to-tl from-lime-950 from-20% via-lime-900 via-50% to-lime-950 to-80% min-h-screen
    flex items-center justify-center pt-14' ref={refInView}>
      <div className='absolute h-full w-5/6 hidden md:flex items-center justify-center 
      border-r-2 border-l-2 border-gray-600'/>
      <div className='absolute h-5/6 w-full hidden md:flex items-center justify-center 
      border-t-2 border-b-2 border-gray-600'/>
      <div className='pt-10 flex flex-col justify-center items-center'>
          <p className='uppercase text-sm tracking-widest text-gray-300'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-200'>
            Hi, I&#39;m <span className='text-lime-500'> Ali</span>
          </h1>
          <h1 className='py-2 text-gray-200 text-center'>A Full Stack <br/>Web Developer</h1>
          <p className='py-4 px-8 text-gray-400 overflow-hidden text-center sm:max-w-[70%] m-auto'>
            I’m focused on building responsive full-stack web applications
            using modern technologies.
          </p>
          {/* <div className='p-4 flex gap-8 items-center justify-center'>
            <a href={CV} target='_blank' type='application/octet-stream' 
            download={'myCV.pdf'}
            className='w-40 text-center btn h-7'>Download CV</a>
          </div> */}
          <div className='flex items-center justify-center gap-10 max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/aliferuz'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full bg-lime-800 contrast-150 border-2 border-gray-500 p-4 cursor-pointer 
              hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn size={24}/>
              </div>
            </a>
            <a
              href='https://github.com/aliferuz'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full border-2 contrast-150 bg-lime-800 border-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub size={24}/>
              </div>
            </a>
          </div>
          
        
      </div>
    </div>
  )
}

export default Home