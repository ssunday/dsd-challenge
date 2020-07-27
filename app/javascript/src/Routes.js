import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Course from '~/pages/Course'
import CourseList from '~/pages/CourseList'
import Home from '~/pages/Home'
import Response from '~/pages/Response'
import User from '~/pages/User'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/users/me">My Account</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/responses/:id">
            <Response />
          </Route>
          <Route path="/courses/:id">
            <Course />
          </Route>
          <Route path="/courses">
            <CourseList />
          </Route>
          <Route path="/users/:id">
            <User />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
