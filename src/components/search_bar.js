import React, { Component } from 'react';

// Define a new class and give it all the functionality that
// the React.Component has.
class SearchBar extends Component {
    // Each class has a State object
    // State is plain javascript object that is used to record and react to user events events
    // Anytime it changes it immedietely re-renders and all of its children
    // You must initialise state to use it.
    constructor(props) {
        // "super" class the parent method of the parent class e.g. Component.
        // if not called in this example an error will be flagged
        super(props);

        this.state = { term: '' };
    }
    // Syntax for finding methods on a class
    // Render function, every class must have one
    // Must return JSX or it will fail
    render() {
    // "event" can be named anything
        return <input onChange={(event) => this.setState({ term: event.target.value})} />;
    }
}
export default SearchBar;