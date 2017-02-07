import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>React Starter Flow</h1>
      <p>React, Redux, React Router in ES6</p>
      <Link to="about" className="btn btn-primary btn-lg">About us</Link>
    </div>
  );
};

export default HomePage;