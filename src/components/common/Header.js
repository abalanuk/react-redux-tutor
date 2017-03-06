import React from 'react'
import {Link, IndexLink} from 'react-router'

const Header = () => {
  return (
    <nav>
      <IndexLink to="/courses" activeClassName="active">Courses</IndexLink>
      {" | "}
      <Link to="/welcome" activeClassName="active">Welcome</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  );
}

export default Header