import React from 'react';
import Colors from '../../../UI/Colors/Colors';
import styles from '../../../../containers/Portfolio/InfoStyle.module.css';
import bookStyles from './ToyInfo.module.css';

const ToyInfo = (props) => {
  const item = props.item;
  return (
    <>
      <div className={styles.Header}>
        <h1>{item.index}</h1>
        <h2>{item.name}</h2>
      </div>
      <div className={bookStyles.ContentContainer}>
        <div className={styles.Content}>
          <div>
            <h1>인원</h1>
            <span>{item.member} 프로젝트</span>
          </div>
          <div>
            <h1>기간</h1>
            <span>{item.period}</span>
          </div>
          <div>
            <h1>목표</h1>
            <span>{item.objective}</span>
            <span style={{ fontWeight: '700' }}>{item.boldObj}</span>
          </div>
          <div>
            <h1>사용 프로그램</h1>
            <span>{item.program}</span>
          </div>
        </div>
        <Colors colorlist={item.colors} />
      </div>
    </>
  );
};

export default ToyInfo;
