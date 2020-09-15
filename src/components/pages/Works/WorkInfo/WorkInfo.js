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
        <div>
          <div>
            <span>인원</span>
            <span>{post.member} 프로젝트</span>
          </div>
          <div>
            <span>기간</span>
            <span>{post.period.date}</span>
            <span>{post.period.explanation}</span>
          </div>
          <div>
            <span>목표</span>
            <span>{post.objective}</span>
          </div>
          <div>
            <span>역할</span>
            <span>{post.role.role}</span>
            <span>{post.role.explanation}</span>
          </div>
          <div>
            <span>사용 프로그램</span>
            <span>{post.program}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
