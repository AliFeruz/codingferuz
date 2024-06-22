import { SelectedPage } from '../types';
import Link from '../lib/Link';

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const NavBar = ({ selectedPage, setSelectedPage }: Props) => {
    return (
        <div className='fixed top-14 inset-x-0 flex justify-center z-[100]'>
            <div className='flex items-center justify-center space-x-3 contrast-200 
                bg-gradient-to-r from-lime-900 via-lime-950 to-lime-900
                rounded-full border-2 border-gray-600 h-16 md:h-20 px-4 md:px-10'>
                <Link 
                    page="Home" 
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}>
                    <span className='text-xs md:text-sm md:font-semibold uppercase hover:border-b'>Home</span>
                </Link>
                <Link 
                    page="About" 
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}>
                    <span className='text-xs md:text-sm md:font-semibold uppercase hover:border-b'>About</span>
                </Link>
                <Link 
                    page="Skills" 
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}>
                    <span className='text-xs md:text-sm md:font-semibold uppercase hover:border-b'>Skills</span>
                </Link>
                <Link 
                    page="Projects" 
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}>
                    <span className='text-xs md:text-sm md:font-semibold uppercase hover:border-b'>Projects</span>
                </Link>
                <Link 
                    page="Contact" 
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}>
                    <span className='text-xs md:text-sm md:font-semibold uppercase hover:border-b'>Contact</span>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
