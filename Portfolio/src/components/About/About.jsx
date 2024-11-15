import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About = ()=>{
    return (
        <section className={styles.container} id= "about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}><img src={getImageUrl("about/img1.png")} alt="Me coding" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}><img src={getImageUrl("about/sdeImg.png")} alt="cursor icon" />
                <div className={styles.aboutItemText}>
                    <h3>Software Engineer</h3>
                    <p>I'm a software developer with experience with pipelines backend forjerive</p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="Server icon"/>
                <div className={styles.aboutItemText}>
                    <h3>backend developer</h3>
                    <p>I'm a software developer with experience with pipelines backend forjerive</p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon"/>
                <div className={styles.aboutItemText}>
                    <h3>UI UX Engineer</h3>
                    <p>I'm a software developer with experience with pipelines backend forjerive</p>
                </div>
                </li>
            </ul>
            </div>
        </section>
    )
}