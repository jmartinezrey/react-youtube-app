import React, { Component } from 'react';

import YTSearch from 'youtube-api-search'; // package from npm

import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAa-X6v3C0k3E68LdYteXBJIe7qr-8-o-M';

// I use a constructor to initialize the state with an object, with videos as an array because I will have more than one 
class App extends Component {
  constructor(props){
    super(props); 
    this.state = { 
        videos: [], 
        selectedVideo: null
    };

    this.videoSearch('The Grand Hotel Budapest Movie Trailer');
}

// using the youtube-api-search package
videoSearch(searchTerm) {
  YTSearch({key: API_KEY, term: searchTerm}, (data) => { // data -> where the value of the search goes
      this.setState({ 
          videos: data,
          selectedVideo: data[0] // defaults to the first video when the search is done in YTSearch
      });
  });
}

render() {
  return (
      <div>
        <div className='title-container'>
          <h3 className='title'>YouTube Video Player made with ReactJS</h3>
        </div>
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
          videos={this.state.videos} />
      </div>

    );
  }
}


export default App;

