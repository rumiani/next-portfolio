import { useEffect } from 'react';
import classes from '../../styles/UnderNav.module.css'
import Rocket from './Rocket/Rocket';
import React, { Component }  from 'react';
// const email = 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=maziar9170@gmail.com'

const UnderNav = () => {
    useEffect(()=>{
        let getElement = document.querySelector(`.${classes.whoIAm}`)
        let fullText = `Hi,<br> my name is <strong>Maziar Rumiani</strong>.<br>
                        I am a passionate Front End web developer.`
        let currentText = ``
        let i = 0;
        let interval = setInterval(()=>{
            currentText = currentText + fullText[i];
            getElement.innerHTML = currentText+'_';
            i++;
            if (i >= fullText.length){        
                getElement.innerHTML = currentText;
                clearInterval(interval);
            }
        }, 50);         
    },[])
    
    return ( 
        <div className={classes.container} id='#/top'
        style={{backgroundImage: `url(./assets/pic-2.jpg)`}}>
                    <p className={classes.whoIAm}></p>
                <div className={classes.intruduce}>
                    <p>I am a motivated self taught programmer who loves learning and facing new challenges. 
                        I'm fluent in English so I don't have any problem learning new things. 
                        Now, I'd like to work in a team to learn more and gain experience. 
                        I'm open to work if your company has a position for me.                    
                        
                    </p>
                <a className={classes.contactMe}href='#contact'> 
                    Get In Touch
                </a>
                </div>
                <div className={classes.about}>

                   <p><strong>ABOUT ME: </strong>
                        I used to work in a web hosting company but,
                        last year because of my passion for programming I chose to change my 
                        career then I started to take some courses from Coursera and FreeCodeCamp
                        Here are few technologies I've been working with recently: <br />
                       <ul>
                           <li>React.js & Redux</li>
                           <li>Next.js</li>
                           <li>JavaScript (ES6+)</li>
                           <li>TypeScript</li>
                           <li>Git & GitHub </li>
                           <li>CSS</li>
                           <li>HTML</li>
                           <li>WordPress</li>
                       </ul>

                    </p>
                    <img id={classes.myPic} src="./assets/rumi.png" alt="Maziar Rumiani" />
                </div>
                <Rocket/>
        </div>
     );
}
 
export default UnderNav;