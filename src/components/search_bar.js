import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){ // or creating and initializing an object created with a class
        super(props); // the super keyword to call the constructor of the super class
        this.state = {videoterm: ''}; // object with key-value pair

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
                    value={this.state.term}
                    onChange={this.onInputChange} 
                />               
            </div>

        
        
        );        
    }

}

export default SearchBar;