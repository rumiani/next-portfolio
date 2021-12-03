import { useEffect, useRef } from 'react';
import classes from '../../styles/UnderNav.module.css'
import Rocket from './Rocket/Rocket';
import { useRouter } from 'next/dist/client/router';
import { en } from '../../locals/en';
import { fa } from '../../locals/fa';

const UnderNav = () => {
    const router = useRouter();
    const {locale} = router
    let t = locale === 'en'?en:fa
    useEffect(()=>{
        let getElement = document.querySelector(`.${classes.whoIAm}`)
        let currentText = ``
        let i = 0;
        let interval = setInterval(()=>{
            currentText = currentText + t.myNameIs[i];
            getElement.innerHTML = currentText+'_';
            i++;
            if (i >= t.myNameIs.length){        
                clearInterval(interval);
                return getElement.innerHTML = t.myNameIs;
            }
        }, 50);         

        const el = document.querySelector('.containerPic')
        el.addEventListener("mousemove", (e) => {
            el.style.backgroundPositionX = -(0.1 * e.offsetX )+ "px";
            // el.style.backgroundPositionY = -(0.02*e.offsetY )+ "px";
          });



    },[])

const whoIAmText = useRef()
if(whoIAmText.current)whoIAmText.current.innerHTML = t.myNameIs
    
    return ( 
        <div className={`${classes.container} containerPic`} id='#/top'>
                <div className={classes.intruduce}>
                    <p className={classes.whoIAm} ref={whoIAmText}
                        style={{textAlign:locale==='en'?'left':'right'}}>
                    </p>
                    <p>{t.whoIAm}</p>
                    <a className={classes.contactMe}href='#contact'> 
                        {t.getInTouch}
                    </a>
                </div>
                <div className={classes.about}>
                   <p>{t.aboutMe} <br />
                    </p>
                    <ul>
                    {t.skills.map((skill,index)=>{
                        return <li key={index}>{skill}</li>
                    })}
                    </ul>
                </div>
                <Rocket/>
        </div>
     );
}
 
export default UnderNav;