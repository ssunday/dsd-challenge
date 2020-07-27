import React from 'react'
import { Box, Grid } from 'material-ui'

const Response = ({}) => {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid container item xs={4}>
          <h1>{response.course.name}</h1>
          [...steps...]
        </Grid>
        <Grid container item xs={8}>
          Current Step
        </Grid>
      </Container>
    </Box>
  )
}

export default Course
