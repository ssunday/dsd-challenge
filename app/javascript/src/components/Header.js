import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

const Header = ({}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Dream See Do</Typography>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/users/me">My Account</Link>
        </nav>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
