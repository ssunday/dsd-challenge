import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core'
import styled from 'styled-components'

import { colors } from '~/theme'

const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${colors.white};
  margin-left: ${(props) => (props.noLeftMargin ? 0 : '15px')};
`

const Brand = styled(Typography)`
  color: ${colors.white};
`

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Grid container alignItems="center">
              <Grid item>
                <NavLink to="/" noLeftMargin>
                  <img
                    src="https://s3.amazonaws.com/assets.dreamseedo.org/challenge/cloud-logo.png"
                    width="60"
                  />
                </NavLink>
              </Grid>
              <Grid item>
                <Brand variant="h6" color={colors.white}>
                  <NavLink to="/">Dream See Do</NavLink>
                </Brand>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body1">
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
