import { useEffect, useRef, useState } from 'react';
import React  from 'react';
import classes from '../../styles/Navbar.module.css'
import Image from 'next/image'
import { en } from '../../locals/en';
import { fa } from '../../locals/fa';
import { useRouter } from 'next/dist/client/router';

const Navbar = () => {
const [menu, setMenu] = useState(false);
const mobileMenu = ()=>setMenu(!menu)
const router = useRouter();
const {locale} = router
const t = locale === 'en'?en:fa;
const changeLanguage = () =>{
    console.log(locale);
switch(locale){
  case 'en' :
      router.push('/','/',{locale:'fa'})
    break;
  case 'fa' :
      router.push('/','/',{locale:'en'})
    break;
}
}
// const refMenu = useRef()
useEffect(() =>{
    document.body.style.direction=locale === 'fa'?'rtl':'ltr'
});


    return ( 
            <nav className={classes.navbar}>
                    <div className={classes.logo}>
                    </div>
                    <div className={classes.lang} onClick={changeLanguage}>
                        <Image  src={locale ==='en'?fa.flag:en.flag} alt="flag" className={classes.flag}
                        height='20px' width='40px' title={locale ==='en'?fa.language:en.language} /> 
                        &nbsp;{locale ==='en'?fa.lang:en.lang}
                    </div>
                    <div className={classes.menuIcon} onClick={mobileMenu}>
                        <i className={menu?'fas fa-times':'fas fa-bars'}></i>
                    </div>
                    <ul 
                    // ref={refMenu} 
                    className={menu?`${classes.menu} ${classes.active}`:`${classes.menu}`} 
                    onClick={mobileMenu} >
                        <li>
                            <a to='/portfolio' onClick={()=> window.scrollTo(0, 0)} >
                                {t.Home}
                            </a>
                        </li>
                        <li>
                            <a href='#contact'  >
                                {t.contactMe}
                            </a>
                        </li>
                        <li>
                            <a href='#portfolio'  >
                                {t.portfolio}
                            </a>
                        </li>
                        <li>
                            <a href='/assets/Maziar_Rumiani_Resume.pdf'  >
                                {t.resume}
                            </a>
                        </li>
                    </ul>
            </nav>
     );
}
 
export default Navbar;
