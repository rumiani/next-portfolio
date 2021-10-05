import React from 'react';
import classes from '../styles/Project.module.css';
const Project = (props) => {
    return ( 
            <div className={classes.project} >
                    <div className={classes.picDiv}>
                        <img src={props.img} alt="project_pic" className={classes.projectPic} />
                        <span className={classes.projectName}>{props.name}</span>
                    </div>
                    <div className={classes.projectsInfo}>
                        <p className={classes.projectText} >{props.text}</p>
                        <div className={classes.infoLinks}>
                            <a href={props.srcCode} target='_blank'>
                                <i className="fab fa-github"></i> 
                                <span>open the src code</span>
                            </a>
                            <a href={props.link} target='_blank'>
                                <i class="fas fa-external-link-alt"/>
                                <span>open the app</span>
                            </a>
                        </div>
                    </div>
            </div>
     );
}
 
export default Project;