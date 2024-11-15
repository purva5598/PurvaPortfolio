import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";


export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Purva</h1>
            <p className={styles.description}>I am a btech 4th year student  with 2 month intern experience at amazon</p>
            <a href="mailto:sharmapurva5598@gmail.com" className={styles.contactBtn}>contact me</a>
        </div>
        <img src={getImageUrl("hero/heroImage1.png")} alt="Hero image of me " className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
}