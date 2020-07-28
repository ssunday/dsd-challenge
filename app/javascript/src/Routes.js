import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'

import Header from './components/Header'
import Course from './pages/Course'
import CourseList from './pages/CourseList'
import Home from './pages/Home'
import Response from './pages/Response'
import User from './pages/User'
import theme from './theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route path="/responses/:id" component={Response} />
          <Route path="/courses/:id" component={Course} />
          <Route path="/courses" component={CourseList} />
          <Route path="/users/:id" component={User} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
