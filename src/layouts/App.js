import React from 'react'
import Helmet from 'react-helmet'
import { Header } from '../components'

export default class App extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Helmet
          title='Gatsby Default Starter'
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />
        <Header />
        <div className='wrap'>{children()}</div>
      </div>
    )
  }
}
