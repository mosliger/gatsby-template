import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { Provider } from 'react-redux'
import configureStore from '../store/configStore'

import './index.css'

const Header = () => (
  <nav className='main-header'>
    <div className='logo'>
      <h1>
        <Link to='/'>Gatsby</Link>
      </h1>
    </div>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/page-2'>Page 2</Link></li>
    </ul>
  </nav>
)

const App = ({ children }) => (
  <div>
    <Helmet
      title='Gatsby Default Starter'
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div className='wrap'>
      {children()}
    </div>
  </div>
)

App.propTypes = {
  children: PropTypes.func,
}

export default (props) => {
  /* Get initialstate */
  const initialState = {};
  const store = configureStore(initialState)
  return (
    <Provider store={store} key='provider'>
      <App {...props} />
    </Provider>
  )
}

