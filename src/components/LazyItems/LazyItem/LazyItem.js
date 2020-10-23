import React, { lazy, Suspense } from 'react';
const LazyImage = lazy(() => import("./LazyImage"));

const LazyItem = (props) => {

    return (<>
        <Suspense fallback={<img onClick={props.handleClick} src={props.lazyImg.src} alt={props.lazyImg.alt} />}>
            <LazyImage handleClick={props.handleClick} src={props.realImg.src} alt={props.realImg.alt} />
        </Suspense>
    </>)

}

export default LazyItem;