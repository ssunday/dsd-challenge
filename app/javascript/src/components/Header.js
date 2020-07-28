import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core'
import styled from 'styled-components'

import { colors } from '~/theme'

const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${colors.white};
  margin-left: 15px;
`

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6">Dream See Do</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/courses">Courses</NavLink>
              <NavLink to="/users/me">My Account</NavLink>
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
