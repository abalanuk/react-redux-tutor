import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import HomePage from './components/home/HomePage'
import CoursesPage from './components/courses/CoursesPage'
import ManageCoursesPage from './components/courses/ManageCoursesPage'
import AboutPage from './components/about/AboutPage'

//first line is says that App is the entry point and then depending on route
//we should pass child component as prop into App
export default (
  <Route path="/" component={App}>
    <IndexRoute component={CoursesPage}/>
    <Route path="courses" component={CoursesPage}/>
    <Route path="welcome" component={HomePage}/>
    <Route path="create-course" component={ManageCoursesPage}/>
    <Route path="course/:id" component={ManageCoursesPage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
)