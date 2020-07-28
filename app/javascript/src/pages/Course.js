import React from 'react'
import { Box, Button } from '@material-ui/core'

const Course = ({ course }) => {
  return (
    <Box>
      <h1>{course.name}</h1>
      <Button>Start Course</Button>
    </Box>
  )
}

export default Course
