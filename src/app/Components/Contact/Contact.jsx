import React from 'react'
import Link from 'next/link'
import styles from "./page.module.css"

const Contact = () => {
  return (
    <section id="Contact" className={styles.contact}>
    <h1>For Contacting Me</h1>
    <div className={styles.main}>
    <div className={styles.a}>
         <a href="https://mail.google.com/mail" target='_blank'>
         <img src="email.png" alt="img" height="50px" width="50px" className={styles.img}/>
         Mail me
         </a>
        </div>
        <div className={styles.break}>
          <h2>or</h2>
        </div>
        <div className={styles.forms}>
     <div className={styles.form}>
       <form method="POST">
       <input type="hidden" name="access_key" value="e56d223e-f4dd-4827-a563-65e31c01753c"></input>
          <p>Name</p>
          <input placeholder='Enter Your Name'  name="First Name"></input>
          <p>Email</p>
          <input placeholder='Enter Your Email' type="email" name="email"></input>
          <p>Message</p>
          <textarea placeholder='Enter Your Message' style={{height:'50px'}} name="message"></textarea>
          <button type="submit" className={styles.submit}>SUBMIT</button>
       </form>
      </div>
      </div>
      </div>
     <div className={styles.social}>Also You Can Connect With Me On:-</div>
     <div className={styles.handles}>  
             <a href="https://www.linkedin.com/in/ujjawal-5b86a8291" target='_blank'><img src="linkedin.png" alt="Linkedin profile" height="50px" width="50px"/></a>    
              <a href="https://www.instagram.com/_ujjawal_04/?igsh=eGw2emE0MXo3N3Ex" target='_blank'><img src="instagram.png" alt="picture" height="50px" width="50px"/></a>
            <a href="https://www.whatsapp.com" target='_blank'><img src="whatsapp.png" alt="picture" height="50px" width="50px"/></a>
            </div>
    <div className={styles.navs}>
    <Link href="#About">About</Link>
    <Link href="#Skills">Skills</Link>
    <Link href="#Projects">Projects</Link>
    <Link href="#Contact">Contact</Link>
    </div>
    <p className={styles.footer}>Copyright © 2024 Ujjawal. All Rights Reserved.</p>
    </section>
  )
}

export default Contact
