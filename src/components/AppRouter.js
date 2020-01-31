import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomePage from './home/HomePage';
import CoursesPage from './courses/CoursesPage';
import ManageCoursesPage from './courses/ManageCoursesPage';
import AboutPage from './about/AboutPage';

const routes = [
  {
    path: "/",
    exact: true,
    //sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/courses",
    //sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>courses</h2>
  },
  {
    path: "/create-course",
    //sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>create course</h2>
  },
  {
    path: "/course/:id",
    //sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Manage Courses Page</h2>
  },
  {
    path: "/about",
    //sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>AboutPage</h2>
  }
];

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CoursesPage}/>
          <Route exact path="/courses" component={CoursesPage}/>
          <Route path="/home" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/create-course" component={ManageCoursesPage}/>
          <Route exact path="/courses/:id" component={ManageCoursesPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
