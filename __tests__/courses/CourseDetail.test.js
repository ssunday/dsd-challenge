import React from 'react'
import { render, screen } from '@testing-library/react'
import CourseDetail from '../../app/javascript/src/courses/CourseDetail'
import { courseFactory } from '../__mocks__/factory'

describe('CourseDetail', () => {
  it('renders start course button', () => {
    render(<CourseDetail course={courseFactory} />);
    expect(screen.getByText('Start Course')).toBeDefined()
  });
});
