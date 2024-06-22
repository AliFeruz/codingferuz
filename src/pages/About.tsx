import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { SelectedPage } from '../types';
import ProfilPic from '../assets/profile1.jpeg'


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const About = ({ setSelectedPage } : Props) => {
    const [refInView, inView] = useInView();

    useEffect(() => {
        if (inView) {
          setSelectedPage(SelectedPage.About);
        }
      }, [inView, setSelectedPage]);

  return (
    <div id='about' ref={refInView} className='w-full min-h-screen flex items-center justify-center contrast-200
    bg-gradient-to-tr from-lime-950 from-20% via-lime-900 via-50% to-lime-950 to-80%'>
      <div className='absolute h-full w-5/6 flex items-center justify-center 
      border-r-2 border-l-2 border-gray-600'/>
      <div className='absolute h-5/6 w-full flex items-center justify-center 
      border-t-2 border-b-2 border-gray-600'/>
      <div className='flex w-5/6 px-10'>
        <div className='flex flex-col md:w-1/2'>
          <p className='uppercase text-xl px-4 tracking-widest text-lime-500'>
            About
          </p>
          <h2 className='py-6 px-4'>Who I Am</h2>
          <p className='p-4 text-gray-400'>
          Enthusiastic Junior Full Stack Developer with a strong 
          foundation in web development technologies. 
          Proficient in HTML, CSS, and JavaScript, with hands-on experience 
          in building responsive and dynamic web applications using React and Node.js. 
          Well-versed in the modern development workflow, 
          utilizing Git/Github for version control.
          </p>
          <p className='p-4 text-gray-400'>
          Specialized in crafting sleek and intuitive user interfaces with 
          proficiency in styling frameworks like Tailwind CSS. Experienced in 
          database management, with a solid understanding of MongoDB and Firebase, 
          ensuring seamless integration of data-driven functionalities
          </p>
          <p className='p-4 text-gray-400'>
          Eager to contribute my technical skills and passion for 
          innovation to a dynamic development team at [Company/Organization]. 
          Excited about the opportunity to apply and expand my expertise in 
          full-stack development to drive impactful solutions and deliver exceptional 
          user experiences.
          </p>
          <a href='/#projects'>
            <p className='p-4 text-lime-600 cursor-pointer'>
              Check out my latest projects.
            </p>
          </a>
        </div>
        <div className='md:w-1/2 h-auto m-auto p-10 flex items-center justify-center'>
          <img src={ProfilPic} alt="/"
          className='hover:scale-105 w-full h-full object-cover ease-in 
          duration-300 shadow-md shadow-gray-500 rounded-xl contrast-75'/>
        </div>
      </div>
    </div>
  );
};

export default About;