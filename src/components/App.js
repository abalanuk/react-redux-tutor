import React, { PropTypes } from 'react'
import Header from './common/Header'
import Home from './home/HomePage'

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
// this.props.children will be passed in from React Router
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
}

App.defaultProps = {
  children: Home
}

export default App