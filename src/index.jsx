import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
const apiKey = "337da68a2d6b2f2679d08eba30d9eec6";
const dm = "dm6000";
const baseUrl = "https://dm1.dmdevplatform.com/api/v2/index.php/";
axios.get('https://jsonplaceholder.typicode.com/posts', 'headers':{'api-key': apiKey,'dm': dm,'cache-control': 'no-cache',})
  .then(function (response) {
    console.log(JSON.stringify(response));
  })
  .catch(function (error) {
    console.log(error);
  });

// axios({	
//     method: 'get',
//     url: "https://jsonplaceholder.typicode.com/posts", 
//     auth:
//         {
//             username: 'dm6000',
//             password: '337da68a2d6b2f2679d08eba30d9eec6'
//         }
// }).then(function(response){console.log(JSON.stringify(response))})
// Take this compenent's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));