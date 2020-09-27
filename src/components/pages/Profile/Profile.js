import React from 'react';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import styles from './Profile.module.css';
import sideStyles from '../../../containers/SideStyle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profileImg from '../../../assets/images/profile.png';
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
        <img src={profileImg} />
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
              <span>안녕하세요.</span> 박소희입니다.
            </h1>
            <h1>콘텐츠와 나의 삶의 주체가 되고 싶습니다.</h1>
            <span className={styles.QuoteRight}>”</span>
          </div>

          <div className={styles.MsgFooter}>
            <h2>도서관 사서, 디자이너, 독립출판 에디터까지.</h2>
            <h2>여러 분야에 부딪치며 성장해왔습니다.</h2>
            <h2>
              <br></br>
            </h2>
            <h2>이제는 나의 이야기를 담은 콘텐츠로</h2>
            <h2>콘텐츠와 나의 삶의 주체가 되고 싶습니다.</h2>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Profile;
