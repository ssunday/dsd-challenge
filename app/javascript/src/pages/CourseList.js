import React, { useState, useEffect } from 'react'
import { Box, Button } from '@material-ui/core'
import axios from 'axios'
import styled from 'styled-components'

const Course = styled.div`
  background-color: #cccccc;
`

const CourseDetail = (course) => {
  console.log('course', course)
  return (
    <Course>
      <h1>{course.name}</h1>
      <Button>Start Course</Button>
    </Course>
  )
}

const CourseList = ({}) => {
  const [loading, setLoading] = useState(true)
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const loadCourses = async () => {
      const response = await axios.get('api/v1/courses')
      console.log('response', response.data)
      setCourses(response.data)
      setLoading(false)
    }
    loadCourses()
  }, [loading])

  return (
    <Box>
      {loading && <h5>Loading Courses...</h5>}
      {courses.map((course) => (
        <CourseDetail course={course} />
      ))}
    </Box>
  )
}

export default CourseList
