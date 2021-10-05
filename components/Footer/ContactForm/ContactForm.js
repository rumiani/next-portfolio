import classes from '../../../styles/ContactForm.module.css'
const ContactForm = ()=> {
    
    return (
        <form   className={classes.formClass}
            action="https://formspree.io/f/xjvjarkb"
            method="POST"> 
            
            <h2  id='contact'>Get In Touch</h2>
            <p>Whether you have a question or just want to say hi, I'll try my best to get back to you soon!</p>       
        <div className={classes.formGroup}>
            {/* <label for="Name" className="label">Your name</label> */}
            <div className={classes.formGroup}>
                <input type="text" id="Name" name="Name" className={classes.formControl} required placeholder='Enter your name'/>
            </div>
        </div>

        <div className={classes.formGroup}>
            {/* <label for="Email" className="label">Your email address</label> */}
            <div className={classes.inputGroup}>
                <input type="email" id="Email" name="Email" className={classes.formControl} required placeholder='Enter your email'/>
            </div>
        </div>

        <div className={classes.formGroup}>
            {/* <label for="Message" className="label">Your message</label> */}
            <div className={classes.inputGroup}>
                <textarea id="Message" name="Message" className={classes.formControl} rows="6" maxLength="3000" required placeholder='Write your message'></textarea>
            </div>
        </div>

            <button className={classes.btn} type="submit" id="button">Send Message</button>
    </form>
    );
  }
  export default ContactForm;