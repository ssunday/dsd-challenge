import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'

const User = ({ user }) => {
  return (
    <Box>
      <h1>{user.name}</h1>
    </Box>
  )
}

User.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
  }).isRequired,
}

export default User
