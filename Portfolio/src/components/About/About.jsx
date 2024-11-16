import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About = ()=>{
    return (
        <section className={styles.container} id= "about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}><img src={getImageUrl("about/img1.png")} alt="Me coding" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                <div className={styles.aboutItemText}>
                    <h3>Software Developer Engineer</h3>
                    <p>As a Software Development Engineer, I craft innovative solutions leveraging my expertise in C++, JavaScript, and frameworks like React and Node.js. Skilled in AWS, MongoDB, MySQL, and API development, I focus on building modular, scalable applications and streamlining processes. My passion lies in tackling challenges with a smart-working approach, ensuring robust performance, and delivering seamless user experiences.</p>
                </div>
                </li>
            </ul>
            </div>
        </section>
    )
}