import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => { // using the properties I set on app.js
    const videoItems = props.videos.map((video) => { // getting the value inside videos from app.js
// I map it (because it's an array) to iterate the videos
// videos now it's separateds
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