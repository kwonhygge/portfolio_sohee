import React from 'react';
import Colors from '../Colors/Colors';
import styles from './WorkInfo.module.css';

const Works = (props) => {
  const post = props.post;
  return (
    <>
      <div className={styles.WorkInfo}>
        <div className={styles.Header}>
          <h1>{post.index}</h1>
          <h2>{post.name}</h2>
          <Colors colorlist={post.colors} />
        </div>
        <div className={styles.Content}>
          <div>
            <h1>인원</h1>
            <span>{post.member} 프로젝트</span>
          </div>
          <div>
            <h1>기간</h1>
            <span>{post.period.date}</span>
            <h2>{post.period.explanation}</h2>
          </div>
          <div>
            <h1>목표</h1>
            <span>{post.objective}</span>
          </div>
          <div>
            <h1>역할</h1>
            <span>{post.role.role}</span>
            <h2>{post.role.explanation}</h2>
          </div>
          <div>
            <h1>사용 프로그램</h1>
            <span>{post.program}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
