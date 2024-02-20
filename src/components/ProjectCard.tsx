import { ProjectType } from "../types"


type Props = {
    project: ProjectType
}

const ProjectCard = ({project}: Props) => {
  return (
    <div className='relative flex flex-col items-center justify-center h-auto 
    w-full shadow-xl shadow-gray-400 rounded-xl group 
    hover:bg-gradient-to-r from-greenblue-300 to-[#709dff]'>
    <div className="h-[425px] relative w-full">
    <img src={project.image} alt="project image" 
    className='rounded-t-xl w-full h-full object-cover group-hover:opacity-10' />
    <div className='hidden group-hover:block absolute top-[50%] 
    left-[50%] translate-x-[-50%] translate-y-[-50%]'>
    <div>
    <h4 className='text-2xl text-lime-400 tracking-wider text-center'>{project.title}</h4>
    <p className='pb-4 pt-2 mt-4 text-gray-600 text-center'>{project.description}</p>
    </div>
    </div>
    </div>
    <div className="p-2 m-2 flex justify-between items-center">
    <a href={project.github}
    className='shadow-xl shadow-gray-400 border border-gray-400 rounded-xl 
    font-semibold text-sm m-1 p-1 mx-2 px-2.5 uppercase hover:text-gray-600 text-lime-400 cursor-pointer'>code</a>
    <a href={project.live}
    className='shadow-xl shadow-gray-400 border border-gray-400 rounded-xl 
    font-semibold text-sm m-1 p-1 mx-2 px-2.5 uppercase hover:text-gray-600 text-greenblue-500 cursor-pointer'>demo</a>
    </div>
    </div>
  )
}

export default ProjectCard