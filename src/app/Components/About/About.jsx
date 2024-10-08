import React from 'react'
import styles from "./page.module.css"

const About = () => {
  return (
    <section id="About" className={styles.about}>
    <h1>About Me</h1>
    <div className={styles.info}>
    <div className={styles.img}>
      <img src="" alt="this is a picture" height="350px" width="320px" className={styles.imag}/>
    </div>
    <div className={styles.contents}>
    <div className={styles.content}>
    <div className={styles.content1}>
      Experience :-
      <br />
      0 years
    </div>
    <div className={styles.content2}>
      Education :-
      <br />
       Pursuing your [cousrse]
    </div>
    </div>
    <div className={styles.content3}>
    <p>I’m [name], a passionate [your skill]. With experience in crafting dynamic and responsive [skill], I specialize in creating user-friendly solutions that drive engagement and performance.</p>
    </div>
    </div>
    </div>
  </section>
  )
}

export default About
