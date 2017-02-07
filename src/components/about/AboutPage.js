import React from 'react';
import {Link} from 'react-router';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div className="main">
      <h2 className="alt-header">About</h2>
      <p>
        This App uses React, Redux, React Router and other useful libs
      </p>
    </div>
  );
};

export default AboutPage;