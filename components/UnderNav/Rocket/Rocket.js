import classes from '../../../styles/Rocket.module.css';
import {useState, useEffect, useRef} from "react"
const Rocket = () => {
    // const [audio, setAudio] = useState(null)
    const player = useRef()
    // console.log(player);
    let audio;
    useEffect(() => {
         audio = new Audio('./assets/rocket.wav');

        // setAudio(new Audio('./assets/rocket.wav')) // only call client
    })
    let rocket = useRef()
    const launchHandler = ()=>{
        console.log(rocket.current);
        console.log(classes.rocket);
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
            <img ref={rocket} className={classes.rocket}
             onClick={launchHandler} src="https://twemoji.maxcdn.com/2/72x72/1f680.png"
              alt="Space Ship" title='Click me to fly' />
     );
}
 
export default Rocket;