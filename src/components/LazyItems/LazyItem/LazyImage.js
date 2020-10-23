import React from "react";

const LazyImage = (props) => {
    return (
        <img onClick={props.handleClick} src={props.src} alt={props.alt} />
    )
}
export default LazyImage;