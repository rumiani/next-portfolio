import { useRouter } from 'next/dist/client/router';
import { en } from '../../../public/locals/en';
import { fa } from '../../../public/locals/fa';
import classes from '../../../styles/ContactForm.module.css'
const ContactForm = ()=> {
    const router = useRouter();
    const {locale} = router
    let t = locale === 'en'?en:fa

    return (
        <form   className={classes.formClass}
            action="https://formspree.io/f/xjvjarkb"
            method="POST"> 
            
            <h2  id='contact'>{t.getInTouch}</h2>
            <p>{t.contactPoint}</p>       
        <div className={classes.formGroup}>
            {/* <label for="Name" className="label">Your name</label> */}
            <div className={classes.formGroup}>
                <input type="text" id="Name" name="Name" className={classes.formControl} required placeholder={t.enterName}/>
            </div>
        </div>

        <div className={classes.formGroup}>
            {/* <label for="Email" className="label">Your email address</label> */}
            <div className={classes.inputGroup}>
                <input type="email" id="Email" name="Email" className={classes.formControl} required placeholder={t.enterEmail}/>
            </div>
        </div>

        <div className={classes.formGroup}>
            {/* <label for="Message" className="label">Your message</label> */}
            <div className={classes.inputGroup}>
                <textarea id="Message" name="Message" className={classes.formControl} rows="6" maxLength="3000" required placeholder={t.writeHere}></textarea>
            </div>
        </div>

            <button className={classes.btn} type="submit" id="button">{t.sendMessage}</button>
    </form>
    );
  }
  export default ContactForm;