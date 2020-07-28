import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@material-ui/core'
import axios from 'axios'
import styled from 'styled-components'
import CourseDetail from '../courses/CourseDetail'

const CourseList = () => {
  const [loading, setLoading] = useState(true)
  const [courses, setCourses] = useState([])
  const loadCourses = async () => {
    const response = await axios.get('api/v1/courses')
    setCourses(response.data)
    setLoading(false)
  }

  useEffect(() => {
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
