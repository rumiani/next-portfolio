import { useRouter } from 'next/dist/client/router';
import React  from 'react';
import { en } from '../../../public/locals/en';
import { fa } from '../../../public/locals/fa';
import classes from '../../../styles/social.module.css';
const SocialIcons = () => {
    const router = useRouter();
    const {locale} = router
    let t = locale === 'en'?en:fa
    return ( 
            <ul className={classes.social}>
                <li>
                    <a href="https://github.com/rumiani" target='_blank' rel="noreferrer">
                        <i className="fab fa-github" title={t.github}></i>
                    </a>
                </li>
                <li>
                    <a href="https://codepen.io/maziar-rumiani/" target='_blank' rel="noreferrer">
                        <i className="fab fa-codepen" title={t.codepen}></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/maziar-rumiani-b5401416a/" target='_blank' rel="noreferrer">
                        <i className="fab fa-linkedin" title={t.linkedin}></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/Rumianian" target='_blank' rel="noreferrer">
                        <i className="fab fa-twitter" title={t.twitter}></i>
                    </a>
                </li>
            </ul>
     );
}
 
export default SocialIcons;