import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';

const wellStyles = {maxWidth: 400, margin: '0 auto 10px', marginTop:50};
// const buttonsInstance = (
//   <div className="well" style={wellStyles}>
//     <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
//     <Button bsSize="large" block>Block level button</Button>
//   </div>
// );
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
    // testy test
    render() {
    // "event" can be named anything
      return  <div className="well" style={wellStyles}>
                <Button bsStyle="primary" bsSize="large" block>Testing 1</Button>
                <Button bsSize="large" block>Testing 2</Button>
              </div>
    }
}

// ReactDOM.render(<buttonsInstance />, document.querySelector('.buttonsInstance'));
export default SearchBar;