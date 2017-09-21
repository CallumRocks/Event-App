import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Button from 'react-bootstrap';
import $ from "jquery";
import lodash from "lodash";

var apiKey = "46ed9d8301df391c49ea0e6231ece710";
var dm = "demo";
var baseUrl = "http://localhost:8888/api/v2/index.php/";

var apiKeyRequest = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:8888/api/v2/index.php/delegateSystemNames",
  "method": "GET",
  "headers": {
    "dm": "demo",
    "auth": "g8kmz",
    // "platform": "test",
    // "u_id": "test",
    // "agent": "test",
    // "Cache-Control": "no-cache",
    // "Postman-Token": "015fc6ab-49a7-5fc8-03a4-b6b6c1860043",
    // 'Content-Type':'application/x-www-form-urlencoded'
    "cache-control": "no-cache"
  }
}
var eventGroupsRequest = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:8888/api/v2/index.php/dm_event_groups",
  "method": "GET",
  "headers": {
    "Api-Key": "46ed9d8301df391c49ea0e6231ece710",
    "Dm": "demo",
    // "auth": "g8kmz",
    "cache-control": "no-cache"
  }
}
var eventRequest = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:8888/api/v2/index.php/dm_events",
  "method": "GET",
  "headers": {
    "Api-Key": "46ed9d8301df391c49ea0e6231ece710",
    "Dm": "demo",
    "Event-Group-Id": "1",
    "cache-control": "no-cache",
  }
}
export default class EventList extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {event: []};
    }
  
    componentDidMount() {
      this.EventList();
    }
    EventList() {

      return  $.getJSON(eventRequest).then((data) => {
        console.log(data);
        console.log('lol');
        this.setState({ event: data.results });
      });
    }
  
    render() {
      const events = this.state.event.map((item, i) => {
        console.log(item);
        return <div className="col-md-6 text-center" key={item.id}>
          <h1>{item.name}</h1>
          <span>{item.event}</span><br />
          <span>Attendee Count: {item.attendees_count}</span><br />
          <span>Capacity: {item.capacity}</span>
        </div>
      });
  
      return <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{ events }</div>
      </div>
    }
  }

// ReactDOM.render(<buttonsInstance />, document.querySelector('.buttonsInstance'));
// export default SearchBar;



// const wellStyles = {maxWidth: 400, margin: '0 auto 10px', marginTop:50};
// const buttonsInstance = (
//   <div className="well" style={wellStyles}>
//     <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
//     <Button bsSize="large" block>Block level button</Button>
//   </div>
// );
// Define a new class and give it all the functionality that
// the React.Component has.

// class SearchBar extends Component {
//     // Each class has a State object
//     // State is plain javascript object that is used to record and react to user events events
//     // Anytime it changes it immedietely re-renders and all of its children
//     // You must initialise state to use it.
//     constructor(props) {
//         // "super" class the parent method of the parent class e.g. Component.
//         // if not called in this example an error will be flagged
//         super(props);

//         this.state = { term: '' };
//     }
//     // Syntax for finding methods on a class
//     // Render function, every class must have one
//     // Must return JSX or it will fail
//     // testy test
//     render() {
//     // "event" can be named anything
//       return  <div className="well" style={wellStyles}>
//                 <Button bsStyle="primary" bsSize="large" block>Testing 1</Button>
//                 <Button bsSize="large" block>Testing 2</Button>
//               </div>
//     }
// // }