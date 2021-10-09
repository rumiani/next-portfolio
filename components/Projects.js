import Project from "./Project";
import classes from '../styles/Projects.module.css'
import { useRouter } from "next/dist/client/router";
import { fa } from "../public/locals/fa";
import { en } from "../public/locals/en";
import { ProjectsArr } from "./projectsArr";

const Projects = () => {
    const router = useRouter();
    const {locale} = router
    let t = locale === 'en'?en:fa
    return ( 
        <div className={classes.container} >
                <h2 className={classes.projectsTitle} id='portfolio'>{t.myProjects}</h2>
            <div className={classes.projects}>
                <br />
                {
                    ProjectsArr.map((project,index)=>{
                        return <Project
                        name={locale === 'en'?project.nameEn:project.nameFa}
                        png={project.png}
                        gif={project.gif}
                        srcCode={project.srcCode}
                        text={locale === 'en'?project.textEn:project.textFa}
                        link={project.link}
                        key={index}
                        id={project.id}
                        />
                    })
                }
            </div>
                {/* <h2 className={classes.seeMore}>See more</h2> */}
        </div>
     );
}
 
export default Projects;