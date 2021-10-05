import { useState } from 'react';
import React  from 'react';
import classes from '../../styles/Navbar.module.css'
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/dist/client/router';
// import { Router } from 'next/dist/client/router';
const Navbar = () => {
const [menu, setMenu] = useState(false);
const [changeLang,setChangeLang] =useState(false)
const { t, i18n } = useTranslation();
const router = useRouter()

const {locale} = router

// locale==='en'?setChangeLang(false):setChangeLang(true)

const changeLanguage = () =>{
    setChangeLang(!changeLang)
    let language = changeLang?'fa':'en'
    i18n.changeLanguage(language)
}
const mobileMenu = ()=>setMenu(!menu)


    return ( 
            <nav className={classes.navbar}>
                    <div className={classes.logo}>
                        {/* Rumiani  */}
                        <Trans i18nKey="description.lang">
                        english {t('english')}
                        </Trans>
                    </div>
                    <div className={classes.lang}>
                        <img  src={changeLang?'./assets/en.png':'./assets/ir.png'} 
                            title={changeLang?'English':'فارسی'} alt="flag"
                            onClick={changeLanguage} /> &nbsp;{changeLang?'En':'Fa'}
                    </div>
                    <div className={classes.menuIcon} onClick={mobileMenu}>
                        <i className={menu?'fas fa-times':'fas fa-bars'}></i>
                    </div>
                    <ul className={menu?`${classes.menu} ${classes.active}`:`${classes.menu}`} onClick={mobileMenu} >
                        <li>
                                <a to='/portfolio' onClick={()=> window.scrollTo(0, 0)} >
                                    Home
                                </a>
                        </li>
                        <li>
                                <a href='#contact'  >
                                    Contact Me
                                </a>
                        </li>
                        <li>
                                <a href='#portfolio'  >
                                    Portfolio
                                </a>
                        </li>
                        <li>
                                <a href='/assets/Maziar_Rumiani_Resume.pdf'  >
                                Resume
                                </a>
                        </li>
                    </ul>
            </nav>
     );
}
 
export default Navbar;
