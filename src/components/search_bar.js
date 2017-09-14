import React, { Component } from 'react';

// Define a new class and give it all the functionality that
// the React.Component has.
class SearchBar extends Component {
    // Syntax for finding methods on a class
    // Render function, every class must have one
    // Must return JSX or it will fail
    render() {
    // "event" can be named anything
        return <input onChange={(event) => console.log(event.target.value)} />;
    }
}
export default SearchBar;