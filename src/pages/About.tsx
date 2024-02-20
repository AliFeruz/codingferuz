import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { SelectedPage } from '../types';
import ProfilPic from '../assets/profile.jpeg'


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
    <div id='about' ref={refInView} className='w-full md:h-screen flex items-center px-14'>
      <div className='m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-greenblue-500'>
            About
          </p>
          <h2 className='py-6'>Who I Am</h2>
          <p className='py-4 text-gray-700'>
          Enthusiastic Junior Full Stack Developer with a strong 
          foundation in web development technologies. 
          Proficient in HTML, CSS, and JavaScript, with hands-on experience 
          in building responsive and dynamic web applications using React and Node.js. 
          Well-versed in the modern development workflow, 
          utilizing Git/Github for version control.
          </p>
          <p className='py-4 text-gray-700'>
          Specialized in crafting sleek and intuitive user interfaces with 
          proficiency in styling frameworks like Tailwind CSS. Experienced in 
          database management, with a solid understanding of MongoDB and Firebase, 
          ensuring seamless integration of data-driven functionalities
          </p>
          <p className='py-4 text-gray-700'>
          Eager to contribute my technical skills and passion for 
          innovation to a dynamic development team at [Company/Organization]. 
          Excited about the opportunity to apply and expand my expertise in 
          full-stack development to drive impactful solutions and deliver exceptional 
          user experiences.
          </p>
          <a href='/#projects'>
            <p className='py-4 text-lime-400 cursor-pointer'>
              Check out my latest projects.
            </p>
          </a>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl 
        flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img src={ProfilPic} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;