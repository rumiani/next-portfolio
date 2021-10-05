import React  from 'react';
import classes from '../../../styles/social.module.css';
const SocialIcons = () => {
    return ( 
            <ul className={classes.social}>
                <li>
                    <a href="https://github.com/rumiani" target='_blank'>
                        <i className="fab fa-github" title='GitHub'></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/Rumianian" target='_blank'>
                        <i className="fab fa-twitter" title='Twitter'></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/maziar-rumiani-b5401416a/" target='_blank'>
                        <i className="fab fa-linkedin" title='LinkedIn'></i>
                    </a>
                </li>
                <li>
                    <a href="https://t.me/rumi_rumi" target='_blank'>
                        <i className="fab fa-telegram" title='Telegram'></i>
                    </a>
                </li>
            </ul>
     );
}
 
export default SocialIcons;