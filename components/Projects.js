import Project from "./Project";
import classes from '../styles/Projects.module.css'
const ProjectsArr = [
    {
        name:'Simon',
        img:'assets/simon.png',
        link:'https://rumiani.github.io/my-simon-react/',
        srcCode:'https://github.com/rumiani/my-simon-react',
        text:'I used React & firebase to build a Full Stack memory game with sign up form and real time database.'
    },
    {   
        name:'Dictionary',
        img:'assets/dictionary.gif',
        link:'https://rumiani.github.io/dictionary/',
        srcCode:'https://github.com/rumiani/dictionary',
        text:'A dictionary built with owlbot.info API using TypeScript and React.'
    },
    {   
        name:'Next landing',
        img:'assets/next.png',
        link:'https://rumiani.github.io/landing_next/',
        srcCode:'https://github.com/rumiani/landing_next',
        text:'A landing page with Next.js.'
    },]
const Projects = () => {
    return ( 
        <div className={classes.projects}>
            {
                ProjectsArr.map((project,index)=>{
                    return <Project
                    name={project.name}
                    img={project.img}
                    srcCode={project.srcCode}
                    text={project.text}
                    link={project.link}
                    key={index}
                        />
                })
            }
        </div>
     );
}
 
export default Projects;