import React from 'react';

const VideoListItem = (props) => {
    const video = props.video; // property that comes from the VideoList component
    const onUserSelected = props.onUserSelected;
    const image = video.snippet.thumbnails.default.url;

    return ( // when the user clicks on the video they want
        <li onClick={() => onUserSelected(video)} className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img alt='img' className="media-object" src={image} />
            </div>
            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </div>
    </li>
    );
};

export default VideoListItem;