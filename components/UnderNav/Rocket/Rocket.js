import classes from '../../../styles/Rocket.module.css';
import { useEffect, useRef} from "react"
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router';
import { fa } from '../../../public/locals/fa';
import { en } from '../../../public/locals/en';
const Rocket = () => {
    const router = useRouter();
    const {locale} = router
    let t = locale === 'en'?en:fa

    const player = useRef()
    // console.log(player);
    let audio;
    useEffect(() => {
         audio = new Audio('./assets/rocket.wav');

        // setAudio(new Audio('./assets/rocket.wav')) // only call client
    })
    let rocket = useRef()
    const launchHandler = ()=>{
        rocket.current.classList.remove(`${classes.rocket}`)
        rocket.current.classList.add(`${classes.fly}`)
        audio.play()
        setTimeout(() => {
            rocket.current.style.display= 'none';
            audio.pause();
            audio.currentTime=0;
        }, 12000);
    }

    return ( 
        <div className={classes.pad}>
            <img ref={rocket} className={classes.rocket}
            //  src="/assets/rocket.png"
             src="https://twemoji.maxcdn.com/2/72x72/1f680.png"
                width='50px'
             height= '50px'
             alt="Space Ship" onClick={launchHandler}  title={t.launch} />
        </div>
     );
}
 
export default Rocket;