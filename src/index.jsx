import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import EventList from './components/sessions';
import EventGroup from './components/event_group';



// const API_KEY = 'AIzaSyAMgGKIuzHAxehv0qXBnc1bb0ODM6qHsJg';

// Create a new component. This component should produce
// some HTML
const App = () => {
    return (
        <div className="col-md-12">
            <div>
                <EventGroup />
            </div>
            <h2 className="text-center">Available Dates</h2>
            <div>
                <EventList />
            </div>
        </div>
    )
}

// var apiKey = "337da68a2d6b2f2679d08eba30d9eec6";
// var dm = "dm6000";
// var baseUrl = "https://dm1.dmdevplatform.com/api/v2/index.php/";
// var myHeaders = {headers: {'api-key': '337da68a2d6b2f2679d08eba30d9eec6', 'dm': 'dm6000'}};

// axios.get('https://dm1.dmdevplatform.com/api/v2/index.php/dm_event_groups', {withCredentials:true}).then(function (response) {
//     console.log(JSON.stringify(response));
//     console.log('DAYUMMMM');
//   })
//   .catch(function (error) {
//     console.log('BRUH'); 
// });



// axios({
//   method:'get',
//   url:'https://dm1.dmdevplatform.com/api/v2/index.php/dm_event_groups',
//   'headers': {
//       'api-key': '337da68a2d6b2f2679d08eba30d9eec6', 
//       'dm': 'dm6000'
//   }
// })
//   .then(function(response) {
//     console.log(JSON.stringify(response));
// });

//   axios('https://dm1.dmdevplatform.com/api/v2/index.php/dm_event_groups', auth: {
//     user: 'dm6000',
//     password: '337da68a2d6b2f2679d08eba30d9eec6'
//   }).then(function (response) {
//     console.log(JSON.stringify(response));
//     console.log('DAYUMMMM');
//   })
//   .catch(function (error) {
//     console.log('BRUH');
//   });

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