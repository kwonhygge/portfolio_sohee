import React from "react";

const LazyImage = (props) => {
    return (
        <img src={props.src} alt={props.alt} />
    )
}
export default LazyImage;