import React, { useState, useEffect } from 'react';
import Fourtab from './Fourtab';
import './LeftComponent.css';

function LeftComponent({ items, index, videoidarr }) {
    const srcstr = `https://www.youtube.com/embed/${items[index].id.videoId}`;

    return (
        <div className="leftcomponent">
            <div className="mainvideo container">
                <iframe className="responsive-iframe" src={srcstr}></iframe>
            </div>
            {console.log('index is ' + index)};
            <Fourtab items={items} index={index} videoidarr={videoidarr} />
        </div>
    );
}

export default LeftComponent;
