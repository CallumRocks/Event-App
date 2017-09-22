import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import EventList from './components/sessions';
import EventGroup from './components/event_group';


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

ReactDOM.render(<App />, document.querySelector('.container'));