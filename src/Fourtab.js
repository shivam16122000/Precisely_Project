import React, { useState, useEffect } from 'react';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarIcon from '@material-ui/icons/Star';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import ReactTimeAgo from 'react-time-ago';
import millify from 'millify';

import './Fourtab.css';

function Fourtab({ items, index, videoidarr }) {
    const [details, setDetails] = useState(items[index]);
    const [primitive, setPrimitive] = useState(1);
    const [t1, setT1] = useState(['Overview', 'animatediv']);
    const [t2, setT2] = useState(['', '']);
    const [t3, setT3] = useState(['', '']);
    const [t4, setT4] = useState(['', '']);
    const pageview = millify(videoidarr[index]);
    const [lowerbody, setLowerbody] = useState(
        <LowerBody items={items} index={index} pageview={pageview} />
    );

    // const pageview = millify(videoidarr[index]);

    useEffect(() => {
        if (primitive == 1) {
            setT1(['Overview', 'animatediv']);
            setLowerbody(
                <LowerBody items={items} index={index} pageview={pageview} />
            );
            setT2(['', '']);
            setT3(['', '']);
            setT4(['', '']);
        } else if (primitive == 2) {
            setT1(['', '']);
            setLowerbody('');
            setT2(['Notes', 'animatediv']);
            setT3(['', '']);
            setT4(['', '']);
        } else if (primitive == 3) {
            setT1(['', '']);
            setLowerbody('');
            setT2(['', '']);
            setT3(['Reading Material', 'animatediv']);
            setT4(['', '']);
        } else if (primitive == 4) {
            setT1(['', '']);
            setLowerbody('');
            setT2(['', '']);
            setT3(['', '']);
            setT4(['Discussion Forum', 'animatediv']);
        }
    }, [primitive]);
    const childtab1 = 'childtab ' + t1[1];
    const childtab2 = 'childtab ' + t2[1];
    const childtab3 = 'childtab ' + t3[1];
    const childtab4 = 'childtab ' + t4[1];

    if (primitive == 1) {
        return (
            <div className="fourtab">
                <div className="switchtab">
                    <div
                        className={childtab1}
                        onClick={() => {
                            setPrimitive(1);
                        }}
                    >
                        <InfoOutlinedIcon
                            className="responsive-icon"
                            fontSize="small"
                        />
                        <div>{t1[0]}</div>
                    </div>
                    <div
                        className={childtab2}
                        onClick={() => {
                            setPrimitive(2);
                        }}
                    >
                        <EditOutlinedIcon
                            className="responsive-icon"
                            fontSize="small"
                        />
                        <div>{t2[0]}</div>
                    </div>
                    <div
                        className={childtab3}
                        onClick={() => {
                            setPrimitive(3);
                        }}
                    >
                        <ImportContactsOutlinedIcon
                            className="responsive-icon"
                            fontSize="small"
                        />
                        <div>{t3[0]}</div>
                    </div>
                    <div
                        className={childtab4}
                        onClick={() => {
                            setPrimitive(4);
                        }}
                    >
                        <ChatBubbleOutlineOutlinedIcon
                            className="responsive-icon"
                            fontSize="small"
                        />
                        <div>{t4[0]}</div>
                    </div>
                </div>
                <LowerBody items={items} index={index} pageview={pageview} />
            </div>
        );
    } else {
        return (
            <div className="fourtab">
                <div className="switchtab">
                    <div
                        className={childtab1}
                        onClick={() => {
                            setPrimitive(1);
                        }}
                    >
                        <InfoOutlinedIcon
                            className="responsive-icon"
                            fontSize="small"
                        />
                        <div>{t1[0]}</div>
                    </div>
                    <div
                        className={childtab2}
                        onClick={() => {
                            setPrimitive(2);
                        }}
                    >
                        <EditOutlinedIcon
                            className="responsive-icon"
                            fontSize="small"
                        />
                        <div>{t2[0]}</div>
                    </div>
                    <div
                        className={childtab3}
                        onClick={() => {
                            setPrimitive(3);
                        }}
                    >
                        <ImportContactsOutlinedIcon
                            className="responsive-icon"
                            fontSize="small"
                        />
                        <div>{t3[0]}</div>
                    </div>
                    <div
                        className={childtab4}
                        onClick={() => {
                            setPrimitive(4);
                        }}
                    >
                        <ChatBubbleOutlineOutlinedIcon
                            className="responsive-icon"
                            fontSize="small"
                        />
                        <div>{t4[0]}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Fourtab;

function LowerBody({ items, index, pageview }) {
    const detail = items[index];
    console.log(detail);
    return (
        <div className="lowerbody">
            <div className="relation">
                <div className="relatedterm">
                    <p>universe</p>
                    <p>earth</p>
                    <p>geography</p>
                    <p>galaxies</p>
                </div>
                <div className="addrelation">
                    <AddCircleOutlinedIcon
                        className="responsive-icon"
                        fontSize="small"
                    />
                </div>
            </div>
            <div className="info">
                <div className="title">{detail.snippet.title}</div>
                <div className="info-icon">
                    <ShareOutlinedIcon
                        className="share responsive-icon"
                        fontSize="small"
                    />
                    <TurnedInNotOutlinedIcon
                        className="bookmark responsive-icon"
                        fontSize="small"
                    />
                </div>
            </div>
            <div className="moreinfo">
                <p className="description">{detail.snippet.description}</p>
                <div className="descriptionright">
                    <div className="rating">
                        <div className="stars">⭐</div>
                        <div className="stars">⭐</div>
                        <div className="stars">⭐</div>
                        <div className="stars">⭐</div>
                        <div className="stars">⭐</div>
                    </div>
                    <div className="ratingbottom">
                        <div className="views">
                            <VisibilityIcon
                                className="viewsicon responsive-icon"
                                fontSize="inherit"
                            />
                            <p>{pageview}</p>
                        </div>
                        <div className="published">
                            <FiberManualRecordOutlinedIcon
                                className="publishedicon responsive-icon"
                                fontSize="inherit"
                            />
                            <p>
                                {' '}
                                <ReactTimeAgo
                                    date={detail.snippet.publishedAt}
                                    locale="en-US"
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
