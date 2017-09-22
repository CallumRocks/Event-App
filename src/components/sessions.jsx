import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
  // event is the aray
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