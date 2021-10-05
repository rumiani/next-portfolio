import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import classes from '../../styles/Footer.module.css'
import SocialIcons from './SocialIcons/SocialIcons'
const Footer = () => {
    return ( 
        <div className={classes.footerContainer} id='#/footer'>
            <ContactForm />
            <SocialIcons/>
            <div className={classes.logoWebRights}>
                <div className={classes.webRights}>
                    Rumiani &copy; 2020
                </div>
            </div>
        </div>
     );
}
 
export default Footer;