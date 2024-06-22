import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full flex items-center justify-center py-10 h-20 contrast-200 
    bg-gradient-to-r from-lime-900 via-lime-950 to-lime-900 '>
    <div className="w-5/6 flex items-center justify-between ">
    <p className="md:p-2 text-sm text-gray-400 md:mx-8">© Ali Feruz {new Date().getFullYear()}. All Rights Reserved.</p>
    <div className='flex gap-8 items-center px-4 md:px-10 py-4'>
            <a
              href='https://www.linkedin.com/in/aliferuz'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full bg-lime-900 border-2 border-gray-500 p-2 cursor-pointer 
              hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn size={16}/>
              </div>
            </a>
            <a
              href='https://github.com/aliferuz'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full border-2 bg-lime-900 border-gray-500 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub size={16}/>
              </div>
            </a>
          </div>
    </div>
    </footer>
    
  )
}

export default Footer