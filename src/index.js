import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAMgGKIuzHAxehv0qXBnc1bb0ODM6qHsJg';

// Create a new component. This component should produce
// some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

// Take this compenent's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));