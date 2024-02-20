import pokedex from '../assets/projectsimg/pokedex.jpeg'
import rakhudu from '../assets/projectsimg/rakhudu.jpeg'
import nextintro from '../assets/projectsimg/next-intro.jpeg'
import crudnote from '../assets/projectsimg/crud-note.jpeg'
import portfolio from '../assets/projectsimg/portfolio.jpeg'
import { ProjectType } from '../types'



export const Data: Array<ProjectType> = [
    {
        id: 1,
        image: pokedex,
        title: 'Pokemon',
        description: 'This project builded with HTML, CSS and JS',
        github: 'https://github.com/AliFeruz/pokedex',
        live: 'https://pokedex1gen.vercel.app/index.html'
    },
    {
        id: 2,
        image: rakhudu,
        title: 'Rakhudu',
        description: 'This is React project on which Im still working with young artist Rakhudu',
        github: 'https://github.com/AliFeruz/Rakhudu',
        live: 'https://marggraff.vercel.app/'
    },
    {
        id: 3,
        image: crudnote,
        title: 'CRUD',
        description: 'Mern Stack project. To build this project I used technologies like TS, JS, TailwindCSS, Express, NodeJS, Mongoose, MongoDB and more',
        github: 'https://github.com/AliFeruz/mern_notes',
        live: 'https://crudnotes.vercel.app/sign-in'
    },
    {
        id: 4,
        image: nextintro,
        title: 'Ricky and Morty',
        description: 'During rhis project I learned how to use GraphQL api requests and NextJS basics',
        github: 'https://github.com/AliFeruz/rickandmorty',
        live: 'https://rickandmorty-roan.vercel.app/'
    },
    {
        id: 5,
        image: portfolio,
        title: 'Portfolio',
        description: 'My first porfolio website builded with HTML, CSS and JS. It has theme mode :)',
        github: 'https://github.com/AliFeruz/portfolio',
        live: 'https://ali-feruz.vercel.app/'
    },
]