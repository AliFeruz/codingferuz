import { useEffect, useState } from 'react';
import { SelectedPage } from './types';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';


const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSelectedPage(SelectedPage.Home);
      }
      
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <main className='w-full h-auto'>
    <NavBar 
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}/>
    <Home setSelectedPage={setSelectedPage}/>
    <About setSelectedPage={setSelectedPage}/>
    <Skills setSelectedPage={setSelectedPage}/>
    <Projects setSelectedPage={setSelectedPage}/>
    </main>
  );
};

export default App;