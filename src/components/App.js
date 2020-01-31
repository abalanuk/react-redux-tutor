import React from 'react';
import Header from './common/Header';
import AppRouter from './AppRouter';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <AppRouter/>
      </div>
    );
  }
}

export default App
