import React from 'react'
import Link from 'gatsby-link'

const SecondPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <div className='container'>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to='/'>Go back to the homepage</Link>
    </div>
  </div>
)

export default SecondPage
