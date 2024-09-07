import React from 'react'
import styles from "./page.module.css"

const Projects = () => {
  return (
   <section id="Projects" className={styles.projects}>
   <h1>Projects</h1>
   <div className={styles.project}> 
   <div className={styles.project1}>
    <img src="Capturess.JPG" alt="picture" height="300px" width="450px"  className={styles.img}/>
    <br />
  <h3>WebNotes</h3>
  <div className={styles.a}>
  <a href="https://github.com/Ujjawal-04" target='_blank'>Code</a>
  <a href="https://web-notess.vercel.app/" target='_blank'>Live</a>
  </div>
   </div>
   <div className={styles.project2}>
   <img src="Capture.JPG" alt="picture" height="300px" width="450px" className={styles.img}/>
   <br />
  <h3>Acme Rockets</h3>
  <div className={styles.a}>
  <a href="https://github.com/Ujjawal-04/Tailwind-CSS" target='_blank'>Code</a>
  <a href="https://tailwind-css-steel.vercel.app/" target='_blank'>Live</a>
   </div>
   </div>
   </div>
   <div className={styles.projectt}>
   <div className={styles.project3}>
   <img src="Captures.JPG" alt="picture" height="300px" width="450px" className={styles.img}/>
   <br />
   <h3>  Color Finder </h3>
   <div className={styles.A}>
  <a href="https://github.com/Ujjawal-04/Color-Finder" target='_blank'>Code</a>
  <a href="https://color-finder-ruby.vercel.app/" target='_blank'>Live</a>
   </div>
   </div>
   </div>
   </section>
  )
}

export default Projects
