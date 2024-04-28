import React from 'react'
import { getImageUrl } from '../../../utils'
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kacper</h1>
        <p className={styles.description}>I'm a frontend developer looking for an internship. xyz </p>
        <a href="mailto:olszews.kacper@gmail.com"className={styles.contactBtn} >Contact Me</a>
      </div>
      <img src={getImageUrl("hero/cartoonAviNoBg.png")} alt="hero image" className={styles.heroImg} ></img>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
