import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import { switchLanguage } from '../actions/actions'
import { multiLanguage, withRedux } from '../tool'

const mapStateToProps = state => {
  const { language } = state
  return {
    languages: language.languages
  }
}

const actions = {
  switchLanguage
}

@multiLanguage()
@withRedux(mapStateToProps, actions)
export default class Header extends React.Component {
  static propTypes = {
    getDataWithLanguage: PropTypes.func,
    languages: PropTypes.array
    // actions: PropTypes.shape({})
  }

  handleSwitchLanguage = obj => {
    const { switchLanguage } = this.props.actions
    switchLanguage(obj.key)
  }

  render() {
    const { getDataWithLanguage, languages, language } = this.props
    return (
      <header>
        <div className='navigation'>
          <div className='logo'>
            <Link to='/'>APP</Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to='/page-2'>{getDataWithLanguage({ en: 'Page 2', th: 'หน้า 2' })}</Link>
              </li>
              <li className='language'>
                {languages.map(value => {
                  return (
                    <a
                      href='Javascript:;'
                      className={language === value.key ? 'active' : ''}
                      onClick={() => this.handleSwitchLanguage(value)}>
                      {value.fullName}
                    </a>
                  )
                })}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
