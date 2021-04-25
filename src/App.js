import React, { useState, useEffect } from 'react';
import LeftComponent from './LeftComponent';
import RightVideoComponent from './RightVideoComponent';
import RightComponent from './RightComponent';
import './App.css';
//image, title, name, rating, timeago, views;

function App() {
    const objarr = [
        {
            kind: 'youtube#searchResult',
            etag: 'xRvTJrNADQeooNE2sMlwibQLTKk',
            id: {
                kind: 'youtube#video',
                videoId: 'JySWJwDmRHc'
            },
            snippet: {
                publishedAt: '2019-11-25T02:30:47Z',
                channelId: 'UC9dyrsYEmD4iGJ8Oz1G5dpw',
                title:
                    '7 Short Tricks In 1 Video | Maths Tricks | Math Tricks For Fast Calculation | Mathematics Tricks',
                description:
                    'Hey! In this video, we are going to learn 7 Maths Short Tricks in just one video. We have explained different calculation methods which can save a lot of time in ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/JySWJwDmRHc/default.jpg',
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/JySWJwDmRHc/mqdefault.jpg',
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/JySWJwDmRHc/hqdefault.jpg',
                        width: 480,
                        height: 360
                    }
                },
                channelTitle: 'Dear Sir',
                liveBroadcastContent: 'none',
                publishTime: '2019-11-25T02:30:47Z'
            }
        },
        {
            kind: 'youtube#searchResult',
            etag: '83zZTfDeT3ZSHW8DtKUcJs8SGgc',
            id: {
                kind: 'youtube#video',
                videoId: 'RY2wQY70TeY'
            },
            snippet: {
                publishedAt: '2019-10-28T02:45:00Z',
                channelId: 'UC1SaV8cJ5u5U9iEZS6QRbpg',
                title: '26 FAST MATHS TRICKS YOU MUST KNOW',
                description:
                    'TIMESTAMPS: 00:04 Useful math tricks 01:45 Multiply with your fingers 02:15 The “Butterfly” method ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/RY2wQY70TeY/default.jpg',
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/RY2wQY70TeY/mqdefault.jpg',
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/RY2wQY70TeY/hqdefault.jpg',
                        width: 480,
                        height: 360
                    }
                },
                channelTitle: '5-Minute Crafts TEENS',
                liveBroadcastContent: 'none',
                publishTime: '2019-10-28T02:45:00Z'
            }
        },
        {
            kind: 'youtube#searchResult',
            etag: 'vON6gFQqILVSN82Mlxy80Gm0Tpk',
            id: {
                kind: 'youtube#video',
                videoId: 'si0gWd5PJM8'
            },
            snippet: {
                publishedAt: '2019-08-29T16:55:52Z',
                channelId: 'UC2lFeDqQqnewQ9_szUlsZGA',
                title:
                    'Maths Puzzle | how to solve maths puzzle | imran sir maths',
                description:
                    'imransirmaths Hello Friends for more Puzzles and Maths Tricks Maths Puzzle (Part 2) https://youtu.be/XCvSVohCGGM Maths Puzzle (Part 3) ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/si0gWd5PJM8/default.jpg',
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/si0gWd5PJM8/mqdefault.jpg',
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/si0gWd5PJM8/hqdefault.jpg',
                        width: 480,
                        height: 360
                    }
                },
                channelTitle: 'imran sir maths',
                liveBroadcastContent: 'none',
                publishTime: '2019-08-29T16:55:52Z'
            }
        },
        {
            kind: 'youtube#searchResult',
            etag: 'ZSQREtWh2mamPJPnU2CKqqoLD8A',
            id: {
                kind: 'youtube#video',
                videoId: 'N0_TWQTrJ-k'
            },
            snippet: {
                publishedAt: '2014-07-17T01:52:52Z',
                channelId: 'UCFCbjNyMJqEWKQEhFwfUjkA',
                title:
                    'Basic Math For Kids: Addition and Subtraction, Science games, Preschool and Kindergarten Activities',
                description:
                    'Annie and Jose have fun with Addition and Subtraction in their new garden. Addition and subtraction are the most basic things of Mathematics. In this basic math ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/N0_TWQTrJ-k/default.jpg',
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/N0_TWQTrJ-k/mqdefault.jpg',
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/N0_TWQTrJ-k/hqdefault.jpg',
                        width: 480,
                        height: 360
                    }
                },
                channelTitle: 'KidsEduc – Kids Educational Games',
                liveBroadcastContent: 'none',
                publishTime: '2014-07-17T01:52:52Z'
            }
        },
        {
            kind: 'youtube#searchResult',
            etag: 'TD2CFXqYmkTvGstkXM_3qCt0V_A',
            id: {
                kind: 'youtube#video',
                videoId: 'VzdEhL44MRQ'
            },
            snippet: {
                publishedAt: '2017-02-13T12:44:05Z',
                channelId: 'UCc-BG8L5o7yqQjM81yHePnA',
                title:
                    'Addition of Three Digit Numbers | Addition | Maths For Class 2 | Maths Basics For CBSE Children',
                description:
                    'Pebbles present, Learn Maths For Kids. Live Teacher explanation, Classroom Teaching Lessons to Learn Maths Basics For Class 2 Children. Visit Pebbles ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/VzdEhL44MRQ/default.jpg',
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/VzdEhL44MRQ/mqdefault.jpg',
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/VzdEhL44MRQ/hqdefault.jpg',
                        width: 480,
                        height: 360
                    }
                },
                channelTitle: 'Pebbles Kids Learning',
                liveBroadcastContent: 'none',
                publishTime: '2017-02-13T12:44:05Z'
            }
        },
        {
            kind: 'youtube#searchResult',
            etag: 'WByuYNElpAzY1Ed-pivhfPraa6c',
            id: {
                kind: 'youtube#video',
                videoId: 'KoXEiWGMgQw'
            },
            snippet: {
                publishedAt: '2019-12-09T12:30:08Z',
                channelId: 'UCX7rDVuI7fyFqrYjQwvswHw',
                title: 'Math important Questions for All Exams.',
                description: '',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/KoXEiWGMgQw/default.jpg',
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/KoXEiWGMgQw/mqdefault.jpg',
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/KoXEiWGMgQw/hqdefault.jpg',
                        width: 480,
                        height: 360
                    }
                },
                channelTitle: 'Sujeet Solution',
                liveBroadcastContent: 'none',
                publishTime: '2019-12-09T12:30:08Z'
            }
        },
        {
            kind: 'youtube#searchResult',
            etag: 'RbVQ1kIMez231Jfo67tCgWSUyu8',
            id: {
                kind: 'youtube#video',
                videoId: '6e0UJmm7baQ'
            },
            snippet: {
                publishedAt: '2021-02-01T06:00:00Z',
                channelId: 'UCJplp5SjeGSdVdwsfb9Q7lQ',
                title: 'Nastya and dad are learning math',
                description:
                    'Nastya and dad are learning mathematics by playing with toys. Subscribe to Like Nastya - https://is.gd/gdv8uX https://www.instagram.com/likenastya/ Tik Tok ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/6e0UJmm7baQ/default.jpg',
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/6e0UJmm7baQ/mqdefault.jpg',
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/6e0UJmm7baQ/hqdefault.jpg',
                        width: 480,
                        height: 360
                    }
                },
                channelTitle: 'Like Nastya',
                liveBroadcastContent: 'none',
                publishTime: '2021-02-01T06:00:00Z'
            }
        }
    ];
    const [arr, setArr] = useState(objarr);
    const [view0, setView0] = useState('5755756575');
    const [view1, setView1] = useState('5755756575');
    const [view2, setView2] = useState('5755756575');
    const [view3, setView3] = useState('5755756575');
    const [view4, setView4] = useState('5755756575');
    const [view5, setView5] = useState('5755756575');
    const [view6, setView6] = useState('5755756575');

    const [videoId, setVideoId] = useState([
        view0,
        view1,
        view2,
        view3,
        view4,
        view5,
        view6
    ]);

    const [index, setIndex] = useState(6);
    const apikey = 'AIzaSyCSeTPvT1nvhMFuZnNfDp7keKhC9Zs_uOw';
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apikey}&part=snippet&maxResults=7&type=video&q=universe`;

    const changeindex = (newindex) => {
        setIndex(newindex);
    };

    useEffect(() => {
        setVideoId([view0, view1, view2, view3, view4, view5, view6]);
    }, [view6]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((responsejson) => {
                setArr(responsejson.items);
            })
            .catch((error) => console.log(error));
    }, []);
    if (arr == undefined) {
        return <div>...Loading</div>;
    } else if (arr.length == 7) {
        arr.map((element, position) => {
            let idof = element.id.videoId;
            fetch(
                `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${idof}&key=${apikey}`
            )
                .then((response) => response.json())
                .then((responsejson) => {
                    if (position == 0) {
                        setView0(responsejson.items[0].statistics.viewCount);
                    } else if (position == 1) {
                        setView1(responsejson.items[0].statistics.viewCount);
                    } else if (position == 2) {
                        setView2(responsejson.items[0].statistics.viewCount);
                    } else if (position == 3) {
                        setView3(responsejson.items[0].statistics.viewCount);
                    } else if (position == 4) {
                        setView4(responsejson.items[0].statistics.viewCount);
                    } else if (position == 5) {
                        setView5(responsejson.items[0].statistics.viewCount);
                    } else if (position == 6) {
                        setView6(responsejson.items[0].statistics.viewCount);
                    }
                })
                .catch((error) => console.log(error));
        });
        console.log(videoId);

        return (
            <div className="App">
                <LeftComponent items={arr} index={index} videoidarr={videoId} />
                <RightComponent
                    items={arr}
                    changeindex={changeindex}
                    videoidarr={videoId}
                />
            </div>
        );
    } else {
        return <div>unknown issue</div>;
    }
}

export default App;
