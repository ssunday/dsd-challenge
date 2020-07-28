import React from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import styled from 'styled-components'

const CourseBox = styled(Box)`
  background-size: cover;
  border-radius: 4px;
  width: 350px;
`
const CourseContentWrapper = styled(Box)`
  background-color: rgba(200, 200, 200, 0.4);
  padding: 1em;
`

const CourseDetail = ({ course }) => {
  return (
    <CourseBox mt={2} mb={2} style={{ backgroundImage: `url(${course.image_url})` }}>
      <CourseContentWrapper>
        <Typography variant="h5">{course.name}</Typography>
        <Button>Start Course</Button>
      </CourseContentWrapper>
    </CourseBox>
  )
}

export default CourseDetail;
