import React from 'react'
import styles from "./page.module.css"

const Projects = () => {
  return (
   <section id="Projects" className={styles.projects}>
   <h1>Projects</h1>
   <div className={styles.project}> 
   <div className={styles.project1}>
    <img src="" alt="picture" height="300px" width="450px"  className={styles.img}/>
    <br />
  <h3>[project 1]</h3>
  <div className={styles.a}>
  <a href="" target='_blank'>Code</a>
  <a href="" target='_blank'>Live</a>
  </div>
   </div>
   <div className={styles.project2}>
   <img src="" alt="picture" height="300px" width="450px" className={styles.img}/>
   <br />
  <h3>project 2</h3>
  <div className={styles.a}>
  <a href="" target='_blank'>Code</a>
  <a href="" target='_blank'>Live</a>
   </div>
   </div>
   </div>
   <div className={styles.projectt}>
   <div className={styles.project3}>
   <img src="" alt="picture" height="300px" width="450px" className={styles.img}/>
   <br />
   <h3>[project 3]</h3>
   <div className={styles.A}>
  <a href="" target='_blank'>Code</a>
  <a href="" target='_blank'>Live</a>
   </div>
   </div>
   </div>
   </section>
  )
}

export default Projects
