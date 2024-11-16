import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";


export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Purva</h1>
            <p className={styles.description}>A final-year Computer Science student at IIIT Kota, I’m passionate about solving complex problems and building impactful solutions. With experience as an Amazon SDE intern and expertise in web development, AWS, and problem solving, I thrive on innovation and collaboration. <br></br><br></br>Explore my work, achievements, and journey—I’m excited to connect and create something amazing together!</p>
            <a href="mailto:sharmapurva5598@gmail.com" className={styles.contactBtn}>contact me</a>
        </div>
        <img src={getImageUrl("hero/heroImage1.png")} alt="Hero image of me " className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
}