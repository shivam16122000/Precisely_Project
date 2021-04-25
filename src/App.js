import React, { useState, useEffect } from 'react';
import LeftComponent from './LeftComponent';
import RightVideoComponent from './RightVideoComponent';
import RightComponent from './RightComponent';
import './App.css';
//image, title, name, rating, timeago, views;

function App() {
    const [arr, setArr] = useState([]);
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
    const apikey = 'AIzaSyBXrqOesOfsxbyOsljq77P1Z3XH0OtRHOg';
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
        return <div>api key issue</div>;
    }
}

export default App;
