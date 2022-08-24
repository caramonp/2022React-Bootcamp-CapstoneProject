import React from 'react';

import './slider-content.styles.scss';

const SliderContent = ({ translate, transition, width, children }) => {
    return (
        <div
            className='slider-content'
            style={{
                transform: `translateX(-${translate}px)`,
                transition: `transform ease-out ${transition}s`,
                width: `${width}px`,
            }}
        >
            {children}
        </div>
    );
};

export default SliderContent;
