import React, { PropTypes } from 'react';
// import { Link, IndexLink } from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
// this.props.children will be passed in from React Router
class App extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <header>Header here...</header>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;