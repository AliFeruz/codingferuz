export enum SelectedPage {
    Home = "home",
    About = "about",
    Skills = "skills",
    Projects = "projects",
    Contact = "contact",
  }

export interface ProjectType {
  id: number;
  image: string;
  title: string;
  description: string;
  github: string;
  live?: string
}