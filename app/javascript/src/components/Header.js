import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Dream See Do</Typography>
        <Link to="/">
          <Typography variant="body1">Home</Typography>
        </Link>{' '}
        <Link to="/courses">
          <Typography variant="body1">Courses</Typography>
        </Link>{' '}
        <Link to="/users/me">
          <Typography variant="body1">My Account</Typography>
        </Link>{' '}
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
