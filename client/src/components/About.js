import React from 'react'
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1>Make up and hair beauty salon</h1>
        <button>Appointment</button>
      </div>
    </div>
    /*<div>
        <h3 className={styles.about_title}>Welcome to <span className={styles.about_beauty}>BeautyCC</span></h3>
        <h3 className={styles.about_title}>hair and make up artist</h3>
        <img className={styles.about_img} src="/images/1.jpg" alt="" />
    </div>*/
  )
}

export default About