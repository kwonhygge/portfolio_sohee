import React, { lazy, Suspense } from 'react';
import LoadElement from "../../UI/LoadElement/ImageLoadElement"
const LazyImage = lazy(() => import("./LazyImage"));

const LazyItem = (props) => {

    return (<>
        <Suspense fallback={<LoadElement />}>
            <LazyImage src={props.src} alt={props.alt} />
        </Suspense>
    </>)

}

export default LazyItem;