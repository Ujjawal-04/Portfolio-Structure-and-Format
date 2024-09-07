import React from 'react'
import styles from "./page.module.css"

const Skills = () => {
  return (
    <section id="Skills" className={styles.skills}>
    <h1>Skills</h1>
    <div className={styles.skill}>
    <div className={styles.language}>
     <h2>Languages :-</h2>
     <br />
      • Python
      <br />
      • C
      <br />
      • C++
      <br />
      • Java
    </div>
    <div className={styles.web}>
    <h2>Web Development :- </h2>
      <br />
      • HTML &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Next
      <br />
      • CSS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Mern Stack
      <br />
      • Javascript&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Mongo DB
      <br />
      • Tailwind CSS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • SQL 
      <br />
      • React&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Firebase
      <br />
    </div>
    </div>
    </section>
  )
}

export default Skills
