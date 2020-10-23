import React from 'react'
import { Element } from 'react-scroll';
import ToyInfo from "../ToyInfo/ToyInfo";
import styles from "./WebPages.module.css"
import { ToyItems } from "../../../../store/contents/portfolio/ToyItems";
import webpageList from "../../../../assets/images/webpages"
import LazyItem from "../../../LazyItems/LazyItem/LazyItem";
const WebPages = () => {
    return <>
        <Element>
            <ToyInfo item={ToyItems[0][0]} />
            <div className={styles.Imgs}>
                {
                    webpageList.map((page) => {
                        return <LazyItem src={page.src} alt={page.alt} />
                    })
                }
            </div>
        </Element></>
}

export default WebPages;