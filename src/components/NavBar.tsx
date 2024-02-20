import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { SelectedPage } from '../types';
import Link from '../lib/Link';

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const NavBar = ({ selectedPage, setSelectedPage}: Props) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  
  

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div className={shadow ? 'fixed w-full bg-greenblue-100 h-20 shadow-xl top-0 z-[100] ease-in-out duration-300'
          : 'fixed w-full bg-greenblue-100 top-0 h-20 z-[100]'}>
      <div className='flex justify-between items-center w-full h-full px-10 2xl:px-16'>
        <Link page= "Home" 
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}>
        <p className='md:ml-10 text-lime-500 text-3xl font-bold hover:scale-105 
        tracking-wide transition duration-300 ease-in-out'><span className='text-greenblue-500'>|</span>Feruz</p>
        </Link>
        <div>
          <div  className='hidden md:flex'>
            <Link 
            page= "Home" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <span className='ml-10 text-sm font-semibold uppercase hover:border-b'>Home</span>
            </Link>
            <Link 
            page= "About" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <span className='ml-10 text-sm font-semibold uppercase hover:border-b'>About</span>
            </Link>
            <Link 
            page= "Skills" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <span className='ml-10 text-sm font-semibold uppercase hover:border-b'>Skills</span>
            </Link>
            <Link 
            page= "Projects" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <span className='ml-10 text-sm font-semibold uppercase hover:border-b'>Projects</span>
            </Link>
            <Link 
            page= "Contact" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <span className='ml-10 text-sm font-semibold uppercase hover:border-b'>Contact</span>
            </Link>
          </div>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} color='#A3E636'/>
          </div>
        </div>
      </div>
      <div className={nav ? 'md:hidden fixed right-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
            nav
              ? ' fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-greenblue-100 p-10 ease-in duration-500'
              : 'fixed right-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-end'>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose size={18}/>
              </div>
            </div>
          </div>
          <div className='py-6 mt-14 flex flex-col justify-center items-center'>
            <Link page= "Home" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <h4 onClick={() => setNav(false)} 
            className='py-4 font-semibold uppercase'>Home</h4>
            </Link>
            <Link page= "About" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <h4 onClick={() => setNav(false)} 
            className='py-4 font-semibold uppercase'>About</h4>
            </Link>
            <Link page= "Skills" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <h4 onClick={() => setNav(false)} 
            className='py-4 font-semibold uppercase'>Skills</h4>
            </Link>
            <Link page= "Projects" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <h4 onClick={() => setNav(false)} 
            className='py-4 font-semibold uppercase'>Projects</h4>
            </Link>
            <Link page= "Resume" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <h4 onClick={() => setNav(false)} 
            className='py-4 font-semibold uppercase'>Resume</h4>
            </Link>
            <Link page= "Contact" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}>
            <h4 onClick={() => setNav(false)} 
            className='py-4 font-semibold uppercase'>Contact</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;