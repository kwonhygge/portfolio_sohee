import React from 'react';
import styles from './Contact.module.css';

const Contact = () => (
  <>
    <div className={styles.Contact}>
      <div className={styles.CardContainer}>
        <div className={styles.CardHeader}>
          <div className={styles.Pic}></div>
          <div className={styles.Name}>박소희</div>
          <div className={styles.Pos}>콘텐츠 기획 & 프로젝트 매니저</div>
        </div>
        <div className={styles.CardFooter}>
          <span className={styles.Phone}>010-0000-0000</span>
          <span className={styles.Email}>chubycheeks01@gmail.com</span>
        </div>
      </div>
    </div>
  </>
);

export default Contact;
