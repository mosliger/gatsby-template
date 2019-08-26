import React from 'react'
import Helmet from 'react-helmet'

export default class Page extends React.Component {
  static propTypes = {
    // name: PropTypes.string,
  }

  render() {
    const { transition } = this.props
    return (
      <div style={transition && transition.style}>
        <Helmet
          title='Page'
          meta={[
            { name: 'description', content: 'Page word!' },
            { name: 'keywords', content: 'Page, word' }
          ]}
        />
        <div className='container'>Page</div>
      </div>
    )
  }
}
