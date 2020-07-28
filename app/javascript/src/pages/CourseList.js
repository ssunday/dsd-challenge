import React, { useState, useEffect } from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import axios from 'axios'
import styled from 'styled-components'

const CourseBox = styled(Box)`
  background-color: #cccccc;
  padding: 10px;
  border-radius: 4px;
  width: 350px;
`

const CourseDetail = ({ course }) => {
  return (
    <CourseBox mt={2} mb={2}>
      <Typography variant="h5">{course.name}</Typography>
      <Button>Start Course</Button>
    </CourseBox>
  )
}

const CourseList = () => {
  const [loading, setLoading] = useState(true)
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const loadCourses = async () => {
      const response = await axios.get('api/v1/courses')
      setCourses(response.data)
      setLoading(false)
    }
    loadCourses()
  }, [loading])

  return (
    <Box>
      {loading && <Typography variant="h4">Loading Courses...</Typography>}
      {courses.map((course) => (
        <CourseDetail key={course.id} course={course} />
      ))}
    </Box>
  )
}

export default CourseList
