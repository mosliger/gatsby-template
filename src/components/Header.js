import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import { switchLanguage } from '../actions/actions'
import { multiLanguage, withRedux } from '../hoc'

const mapStateToProps = state => {
  const { language, navigation } = state
  return {
    languages: language.languages,
    mainMenus: navigation.mainMenus
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
    languages: PropTypes.array,
    mainMenus: PropTypes.array
    // actions: PropTypes.shape({})
  }

  handleSwitchLanguage = obj => {
    const { switchLanguage } = this.props.actions
    switchLanguage(obj.key)
  }

  render() {
    const { getDataWithLanguage, languages, language, mainMenus } = this.props
    return (
      <header>
        <div className='navigation'>
          <div className='logo'>
            <Link exact activeClassName='logo-active' to='/'>APP</Link>
          </div>
          <nav>
            <ul>
              {mainMenus.map((menu, index) => {
                return (
                  <li key={index}>
                    <Link exact activeClassName='active' to={menu.to}>{getDataWithLanguage(menu.name)}</Link>
                  </li>
                )
              })}
              <li className='language'>
                {languages.map((value, index) => {
                  return (
                    <a
                      key={index}
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
