import React from 'react'
import PropTypes from 'prop-types'
import { getDataWithLanguage } from '../utils'

const defaultLanguage = 'en'
const languages = ['en', 'th']

export default () => Component => {
  class MultiLanguage extends React.PureComponent {
    static contextTypes = {
      store: PropTypes.object
    }
    state = {
      language: defaultLanguage
    }

    componentDidMount = () => {
      const { getState, subscribe } = this.context.store
      // มีการ dispatch
      subscribe(() => this.switchLanguage(getState().language.currentActive))
      this.switchLanguage(getState().language.currentActive)
    }

    switchLanguage = language => {
      if (this.multiLang) {
        this.setState({
          language
        })
      }
    }

    getDataWithLanguage = content => {
      const { language } = this.state
      return getDataWithLanguage(content, language, defaultLanguage, languages)
    }

    render() {
      return (
        <Component
          ref={dom => (this.multiLang = dom)}
          {...this.props}
          language={this.state.language}
          getDataWithLanguage={this.getDataWithLanguage}
        />
      )
    }
  }
  return MultiLanguage
}
