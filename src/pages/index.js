import React from 'react'
import PropTypes from 'prop-types'

import { multiLanguage } from '../tool'

@multiLanguage()
export default class Home extends React.Component {
  static propTypes = {
    getDataWithLanguage: PropTypes.func
    // actions: PropTypes.shape({})
  }

  render() {
    const { getDataWithLanguage } = this.props
    return (
      <div className='container'>
        <h1>{getDataWithLanguage({ en: 'Hello word!', th: 'สวัสดีชสวโลก' })}</h1>
      </div>
    )
  }
}
