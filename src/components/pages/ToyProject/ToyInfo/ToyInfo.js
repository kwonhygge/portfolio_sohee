import React, { useState } from 'react';
import Colors from '../../../UI/Colors/Colors';
import styles from '../../../../containers/Portfolio/InfoStyle.module.css';
import bookStyles from './ToyInfo.module.css';

const ToyInfo = (props) => {
  const { colorNum, length, item, isStory } = props;
  const indx = colorNum % length;
  const [showStory, setShowStory] = useState(false);

  const handleClickStory = () => {
    setShowStory(!showStory);
  };

  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Header}>
          <h1>{item.index}</h1>
          <div>
            <h2>{item.name}</h2>
            {isStory && (
              <div className={bookStyles.StroyBtn}>
                <input
                  type="checkbox"
                  id="story"
                  onClick={handleClickStory}
                ></input>
                <label for="story">
                  {showStory ? (
                    <span>스토리 닫기</span>
                  ) : (
                      <span>스토리 보기</span>
                    )}
                </label>
                {showStory && (
                  <div className={bookStyles.Story}>
                    <h3>푸른 안개가 내려앉은 흰 겨울밤,</h3>
                    <h3>담벼락 밑에 쌓인 눈을 보며 </h3>
                    <h3>고백하지 못한 사랑에 대한 고백이</h3>
                    <h3>눈덩이처럼 쌓여있음을 깨달은 여자의 이야기</h3>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className={bookStyles.ContentContainer}>
          <div className={styles.Content}>
            <div>
              <h1>인원</h1>
              <span>{item.member} 프로젝트</span>
            </div>
            {item.role && <div>
              <h1>역할</h1>
              <span>{item.role}</span>
            </div>}
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
          <Colors
            colorlist={colorNum === undefined ? item.colors : item.colors[indx]}
          />
        </div>
      </div>
    </>
  );
};

export default ToyInfo;
