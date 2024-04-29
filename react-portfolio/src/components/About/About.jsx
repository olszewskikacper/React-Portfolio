import React from 'react'
import { getImageUrl } from '../../../utils'
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}> 
        {/* !react script!
          <script type="module" src="https://unpkg.com/@splinetool/viewer@1.1.9/build/spline-viewer.js"></script>
        <spline-viewer url="https://prod.spline.design/nXaTGRjkEq8N1-2a/scene.splinecode"></spline-viewer>
        classname={}
        */}
      </div>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon"></img>
          <div className={styles.aboutItemsText}>
            <h3>Frontend Developer</h3>
            <p>Frontend developer xxx </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")} alt="server icon"></img>
          <div className={styles.aboutItemsText}>
            <h3>Backend Developer</h3>
            <p>I'm currently learning fullstack development with the MERN stack xyz </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/uiIcon.png")} alt="ui icon"></img>
          <div className={styles.aboutItemsText}>
            <h3>Team player</h3>
            <p> xyz </p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default About
//<img src={getImageUrl()}></img>