import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import lodash from "lodash";

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
export default class EventGroup extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {event: []};
    }
  
    componentDidMount() {
      this.EventGroup();
    }
    EventGroup() {

      return  $.getJSON(eventGroupsRequest).then((data) => {
        console.log(data);
        console.log('lol');
        this.setState({ event: data.results });
      });
    }
  
    render() {
      const events = this.state.event.map((item, i) => {
        return <div className="text-center" key={item.id}>
          <h1>{item.name}</h1>
          <div>Description</div><div>{item.description}</div><br />
          <div>Sale Date</div><div>{item.sales_end_time} - {item.sales_start_time}</div><br />
        </div>
      });
  
      return <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{ events }</div>
      </div>
    }
  }