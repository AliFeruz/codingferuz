import { ProjectType } from "../types"


type Props = {
    project: ProjectType
}

const ProjectCard = ({project}: Props) => {
  return (
    <div className='relative flex flex-col items-center justify-center h-auto contrast-100
    w-full shadow-lg shadow-gray-400 rounded-xl group 
    hover:bg-gradient-to-t from-greenblue-300 to-lime-600'>
    <div className="h-[500px] relative w-full">
    <img src={project.image} alt="project image" 
    className='rounded-t-xl w-full h-full object-cover group-hover:opacity-10' />
    <div className='hidden group-hover:block absolute top-[50%] 
    left-[50%] translate-x-[-50%] translate-y-[-50%]'>
    <div>
    <h4 className='text-2xl text-gray-400 tracking-wider text-center'>{project.title}</h4>
    <p className='pb-4 pt-2 mt-4 font-bold uppercase 
    text-gray-500 text-center'>{project.description}</p>
    </div>
    </div>
    </div>
    <div className="p-4 px-10 flex w-full justify-between items-center 
    bg-lime-800 contrast-150">
    <a href={project.github}
    className='border-2 border-gray-600 rounded-xl bg-lime-700
    font-semibold text-sm m-1 p-1 mx-2 px-4 uppercase py-2 hover:text-gray-600 
    text-greenblue-500 cursor-pointer'>code</a>
    <a href={project.live}
    className='border-2 border-gray-600 rounded-xl bg-lime-700
    font-semibold text-sm m-1 p-1 mx-2 px-4 uppercase py-2 hover:text-gray-600 
    text-greenblue-500 cursor-pointer'>demo</a>
    </div>
    </div>
  )
}

export default ProjectCard