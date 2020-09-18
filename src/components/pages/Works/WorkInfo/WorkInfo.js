import React from 'react';
import Colors from '../../../UI/Colors/Colors';
import styles from '../../../../containers/Portfolio/InfoStyle.module.css';

const Works = (props) => {
  const item = props.item;
  return (
    <>
      <div className={styles.Header}>
        <h1>{item.index}</h1>
        <h2>{item.name}</h2>
        <Colors colorlist={item.colors} />
      </div>
      <div className={styles.Content}>
        <div>
          <h1>인원</h1>
          <span>{item.member} 프로젝트</span>
        </div>
        <div>
          <h1>기간</h1>
          <span>{item.period.date}</span>
          <h2>&nbsp;{item.period.explanation}</h2>
        </div>
        <div>
          <h1>목표</h1>
          <span>{item.objective}</span>
          <span style={{ fontWeight: '700' }}>{item.boldObj}</span>
        </div>
        <div>
          <h1>역할</h1>
          <span>{item.role.role}</span>
          <h2>&nbsp;{item.role.explanation}</h2>
        </div>
        <div>
          <h1>사용 프로그램</h1>
          <span>{item.program}</span>
        </div>
      </div>
    </>
  );
};

export default Works;
