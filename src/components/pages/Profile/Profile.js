import React from 'react';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import styles from './Profile.module.css';
import sideStyles from '../../../containers/SideStyle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profileImg from '../../../assets/images/profile.jpg';
import LazyItem from "../../LazyItems/LazyItem/LazyItem";
const Profile = () => (
  <>
    <SideDrawer>
      <div className={sideStyles.SideBigType}>
        <h1>About </h1>
        <FontAwesomeIcon
          className={sideStyles.Caret}
          icon="caret-down"
          size="1x"
        />
      </div>
      <h2 className={sideStyles.SideSmallType}>Profile</h2>
    </SideDrawer>
    <div className={styles.Contents}>
      <div className={styles.ImgContainer}>
        <LazyItem src={profileImg} alt="profileImg" />
      </div>
      <div className={styles.Profile}>
        <div className={styles.Header}>
          <h1>Profile</h1>
          <div className={styles.InfoContainer}>
            <div className={styles.Bar}></div>
            <div className={styles.Info}>
              <div>
                <span>이름</span>
                <span>박소희</span>
              </div>
              <div>
                <span>생년월일</span>
                <span>1993년 3월 31일</span>
              </div>
              <div>
                <span>좋아하는 것</span>
                <span>여행, 책, 전시</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Msg}>
          <div className={styles.MsgHeader}>
            <span className={styles.QuoteLeft}>“</span>
            <h1>
              <span>안녕하세요.</span> 박소희입니다.”
            </h1>
          </div>

          <div className={styles.MsgFooter}>
            <h2>생각의 퍼즐을 주워모아 말과 글, 그림으로 완성하는 일을 좋아합니다. 새로운 경험과 가치를 발견하는 일에 관심이 많습니다. </h2>
            <h2>
              <br></br>
            </h2>
            <h2>현재는 일상에서 가치를 발견하는 연습을 하는 중입니다. 새로 생긴 카페나 식당에 방문하거나, 서점과 전시를 구경하고, 친구를 만나는 일을 좋아합니다. 새롭고 즐거운 제안을 기다리고 있습니다.</h2>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Profile;
