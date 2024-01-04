import styles from "./ContactForm.module.css"
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function ContactForm(){
    return(
        <section className={styles.container}>
        
        <div className={styles.contact_form}>

            <div className={styles.top_btn}>
       <Button text="VIA SUPPORT CHAT" icon={<MdMessage  fontSize="24px"/>}/>
       <Button text="VIA CALL" icon={<IoMdCall fontSize="24px"/>}/>
       </div>

       <Button
       isOutline ={true}
        text="VIA EMAIL FORM" icon={<MdEmail fontSize="24px"/>}/>


        <form>
            <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            </div>
            <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            </div>
            <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" />
            </div>
        </form>


<div className={styles.submit}>
        <Button text="SUBMIT" />
        </div>

        </div>


        <div className={styles.contact_Image}>
        <img src="./images/Service 24_7-pana 1.svg" alt="" />
        </div>



        </section>
    )
}


export default ContactForm;