import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){ 
        super(props); 
        this.state = {videoterm: ''}; 
        this.onInputHandler = this.onInputHandler.bind(this);
    }

    onInputHandler(event) { // this gets triggered when the user types something
        this.setState({videoterm: event.target.value}); // the state is changed to the value that the user wrote
        this.props.onSearchTermChange(event.target.value);
    }

    render(){
        return (
            <div className='search-bar'>
                <input   
                    className='input'   
                    placeholder='Search...'          
                    value={this.state.videoterm}
                    onChange={this.onInputHandler} 
                />               
            </div>       
        );        
    }
}

export default SearchBar;