import React from 'react'
import { Element } from 'react-scroll';
import ToyInfo from "../ToyInfo/ToyInfo";
import { ToyItems } from "../../../../store/contents/portfolio/ToyItems";

const WebPages = () => {
    return <>
        <Element>
            <ToyInfo item={ToyItems[0][0]} />
        </Element></>
}

export default WebPages;