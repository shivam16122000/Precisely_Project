import React, { useEffect } from 'react';
import './RightVideoComponent.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import ReactTimeAgo from 'react-time-ago';
import millify from 'millify';

function RightVideoComponent({
    county,
    image,
    title,
    name,
    rating,
    timeago,
    views,
    changeindex,
    index
}) {
    console.log(county);
    const noOfView = millify(county);
    console.log(noOfView);

    return (
        <div
            className="rightvideocomponent"
            onClick={() => {
                changeindex(index);
            }}
        >
            <div className="thumbnail">
                <img src={image} alt="thumbnail" />
            </div>
            <div className="thumbnailright">
                <div className="titlee" id="titlee">
                    {title}
                </div>
                <div className="name">{name}</div>
                <div className="rating">{rating}</div>
                <div className="remaining">
                    <div className="timestamp">
                        <FiberManualRecordOutlinedIcon
                            className="responsiveicon1"
                            fontSize="inherit"
                        />
                        <ReactTimeAgo date={timeago} locale="en-US" />
                    </div>
                    <div className="views">
                        <VisibilityIcon
                            className="responsiveicon2"
                            fontSize="inherit"
                        />
                        {noOfView}
                    </div>
                </div>
            </div>
            <div>
                <MoreVertOutlinedIcon />
            </div>
        </div>
    );
}

export default RightVideoComponent;
