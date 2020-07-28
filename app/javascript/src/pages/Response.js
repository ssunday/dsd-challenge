import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'

const Response = ({ course, response }) => {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid container item xs={4}>
          <Typography variant="h3">{course.name}</Typography>
          Started by {response.user.name}
          {/* List steps here */}
        </Grid>
        <Grid container item xs={8}>
          {/* Show current step here */}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Response
