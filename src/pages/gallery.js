import React from 'react'

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <div className='container'>
      <div className='row'>
        <div className='D-3 M-12'>
          <img src='images/385x230.png' alt='' />
        </div>
        <div className='D-3 M-12'>
          <img src='images/385x230.png' alt='' />
        </div>
        <div className='D-3 M-12'>
          <img src='images/385x230.png' alt='' />
        </div>
        <div className='D-3 M-12'>
          <img src='images/385x230.png' alt='' />
        </div>
      </div>
    </div>
  </div>
)
