import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { Provider } from 'react-redux'
import configureStore from '../store/configStore'

import '../styles/styles.scss'
import App from './App'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem'
    }}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}>
      <h1 style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: 'white',
            textDecoration: 'none'
          }}>
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='Gatsby Default Starter'
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}>
      <div className='wrap'>{children()}</div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default props => {
  /* Get initialstate */
  const initialState = {}
  const store = configureStore(initialState)
  return (
    <Provider store={store} key='provider'>
      <App {...props} />
    </Provider>
  )
}

//       <TemplateWrapper />
