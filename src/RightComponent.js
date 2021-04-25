import React from 'react';
import './RightComponent.css';
import RightVideoComponent from './RightVideoComponent';

function RightComponent({ items, changeindex, videoidarr }) {
    const info = [
        {
            image: items[0].snippet.thumbnails.default.url,
            title: items[0].snippet.title,
            name: items[0].snippet.channelTitle,
            rating: '⭐⭐⭐⭐⭐',
            timeago: items[0].snippet.publishedAt,
            views: '15k',
            count: videoidarr[0]
        },
        {
            image: items[1].snippet.thumbnails.default.url,
            title: items[1].snippet.title,
            name: items[1].snippet.channelTitle,
            rating: '⭐⭐⭐⭐⭐',
            timeago: items[1].snippet.publishedAt,
            views: '15k',
            count: videoidarr[1]
        },
        {
            image: items[2].snippet.thumbnails.default.url,
            title: items[2].snippet.title,
            name: items[2].snippet.channelTitle,
            rating: '⭐⭐⭐⭐⭐',
            timeago: items[2].snippet.publishedAt,
            views: '15k',
            count: videoidarr[2]
        },
        {
            image: items[3].snippet.thumbnails.default.url,
            title: items[3].snippet.title,
            name: items[3].snippet.channelTitle,
            rating: '⭐⭐⭐⭐⭐',
            timeago: items[3].snippet.publishedAt,
            views: '15k',
            count: videoidarr[3]
        },
        {
            image: items[4].snippet.thumbnails.default.url,
            title: items[4].snippet.title,
            name: items[4].snippet.channelTitle,
            rating: '⭐⭐⭐⭐⭐',
            timeago: items[4].snippet.publishedAt,
            views: '15k',
            count: videoidarr[4]
        },
        {
            image: items[5].snippet.thumbnails.default.url,
            title: items[5].snippet.title,
            name: items[5].snippet.channelTitle,
            rating: '⭐⭐⭐⭐⭐',
            timeago: items[5].snippet.publishedAt,
            views: '15k',
            count: videoidarr[5]
        },
        {
            image: items[6].snippet.thumbnails.default.url,
            title: items[6].snippet.title,
            name: items[6].snippet.channelTitle,
            rating: '⭐⭐⭐⭐⭐',
            timeago: items[6].snippet.publishedAt,
            views: '15k',
            count: videoidarr[6]
        }
    ];
    return (
        <div className="rightcomponent">
            <div className="recommended">Recommended</div>
            <div>
                <RightVideoComponent
                    county={videoidarr[0]}
                    image={info[0].image}
                    title={info[0].title}
                    name={info[0].name}
                    rating={info[0].rating}
                    timeago={info[0].timeago}
                    views={info[0].views}
                    changeindex={changeindex}
                    index="0"
                />

                <RightVideoComponent
                    county={videoidarr[1]}
                    image={info[1].image}
                    title={info[1].title}
                    name={info[1].name}
                    rating={info[1].rating}
                    timeago={info[1].timeago}
                    views={info[1].views}
                    changeindex={changeindex}
                    index="1"
                />
                <RightVideoComponent
                    county={videoidarr[2]}
                    image={info[2].image}
                    title={info[2].title}
                    name={info[2].name}
                    rating={info[2].rating}
                    timeago={info[2].timeago}
                    views={info[2].views}
                    changeindex={changeindex}
                    index="2"
                />
                <RightVideoComponent
                    county={videoidarr[3]}
                    image={info[3].image}
                    title={info[3].title}
                    name={info[3].name}
                    rating={info[3].rating}
                    timeago={info[3].timeago}
                    views={info[3].views}
                    changeindex={changeindex}
                    index="3"
                />
                <RightVideoComponent
                    county={videoidarr[4]}
                    image={info[4].image}
                    title={info[4].title}
                    name={info[4].name}
                    rating={info[4].rating}
                    timeago={info[4].timeago}
                    views={info[4].views}
                    changeindex={changeindex}
                    index="4"
                />
                <RightVideoComponent
                    county={videoidarr[5]}
                    image={info[5].image}
                    title={info[5].title}
                    name={info[5].name}
                    rating={info[5].rating}
                    timeago={info[5].timeago}
                    views={info[5].views}
                    changeindex={changeindex}
                    index="5"
                />

                <RightVideoComponent
                    county={videoidarr[6]}
                    image={info[6].image}
                    title={info[6].title}
                    name={info[6].name}
                    rating={info[6].rating}
                    timeago={info[6].timeago}
                    views={info[6].views}
                    changeindex={changeindex}
                    index="6"
                />
            </div>
        </div>
    );
}

export default RightComponent;
