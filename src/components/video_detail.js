import React from 'react';

const VideoDetail = (props) => {
    const video = props.video;

    // to wait until we have a value in video, because if not it shows null 
    if(!video){
        return <div>Loading</div>
    }
    
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title='title' className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;