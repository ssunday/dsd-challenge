/* eslint global-require: 0 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '~/Routes'

const RenderApp = (inner) => {
  ReactDOM.render(
    <Router>{inner}</Router>,
    document.getElementById('react-root')
  )
}

document.addEventListener('DOMContentLoaded', () => {
  RenderApp(<Routes />)
})
