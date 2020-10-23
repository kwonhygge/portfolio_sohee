import React from 'react'
import { Element } from 'react-scroll';
import ToyInfo from "../ToyInfo/ToyInfo";
import styles from "../Book/Book.module.css"
import { ToyItems } from "../../../../store/contents/portfolio/ToyItems";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import web1 from "../../../../assets/images/webpages/1.png";
const WebPages = () => {
    return <>
        <Element>
            <ToyInfo item={ToyItems[0][0]} />
            <div className={styles.Img}>
                <div className={styles.More}>
                    <span>이동하기&nbsp;&nbsp;</span>
                    <FontAwesomeIcon icon="caret-down" size="1x" />
                </div>
                <a href="https://mandart.herokuapp.com/" target="_blank"><img src={web1} /></a>
            </div>
        </Element></>
}

export default WebPages;