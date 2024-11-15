import React, { useState } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedHistory, setSelectedHistory] = useState(null);

  const openModal = (historyItem) => {
    setSelectedHistory(historyItem);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedHistory(null);
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li
                key={id}
                className={styles.historyItem}
                onClick={() => openModal(historyItem)}
              >
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Modal for displaying details */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={`${styles.modalContent} ${styles.historyItem}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={styles.closeBtn} onClick={closeModal}>&times;</span>
            <img
              src={getImageUrl(selectedHistory.myImg)}
              alt={`${selectedHistory.organisation} Logo`}
            />
            <div className={styles.historyItemDetails}>
              <h3>Work description</h3>
              <ul>
                {selectedHistory.projectDetails.map((detail, id) => (
                  <li key={id}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
