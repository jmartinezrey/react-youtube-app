import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => { 
    const videoItems = props.videos.map((video) => { // getting the value inside videos from app.js
        return (
            <VideoListItem 
                onUserSelected={props.onVideoSelect}           
                key={video.key} // asked by react when we have arrays
                video={video} />
        );
    });

        return (
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
    );
};

export default VideoList;