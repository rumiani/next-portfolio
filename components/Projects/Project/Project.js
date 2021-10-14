import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import classes from '../../../styles/Project.module.css';
import Image from 'next/image'
import { en } from '../../../locals/en';
import { fa } from '../../../locals/fa';
const Project = (props) => {
    const [play, setplay] = useState(false)
    const router = useRouter();
    const {locale} = router
    let t = locale === 'en'?en:fa

    return ( 
            <div className={classes.project} >
                    <div className={classes.picDiv} onClick = {()=>setplay(!play)}>
                        <Image src={play?props.gif:props.png}
                            alt='Project pic' width='500px' height='300px'
                            className={`${classes.projectPic} ${play?classes.show:classes.hide}`}
                            title={t.playDemo}
                            id={props.id}
                        />
                        <span className={classes.paly}>
                            {play?<i className="far fa-pause-circle"></i>:
                                <i className="fas fa-play-circle"  title='Play'></i>
                            }
                        </span>
                        <span className={classes.projectName} style={{left:locale === 'en'?0:'unset',right:locale === 'fa'?0:'unset'}}>{props.name}</span>
                    </div>
                    <div className={classes.projectsInfo}>
                        <p className={classes.projectText} >{props.text}</p>
                        <div className={classes.infoLinks}>
                            <a href={props.srcCode} target='_blank' rel="noreferrer">
                                <i className="fab fa-github"></i> 
                                <span>{t.openSrc}</span>
                            </a>
                            <a href={props.link} target='_blank' rel="noreferrer">
                                <i className="fas fa-external-link-alt"/>
                                <span>{t.openApp}</span>
                            </a>
                        </div>
                    </div>
            </div>
     );
}
 
export default Project;