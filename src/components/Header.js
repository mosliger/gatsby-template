import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import { switchLanguage } from '../actions/actions'
import { withRedux } from '../hoc'

const mapStateToProps = state => {
  const { navigation } = state
  return {
    mainMenus: navigation.mainMenus
  }
}

const actions = {
  switchLanguage
}

@withRedux(mapStateToProps, actions)
export default class Header extends React.Component {
  static propTypes = {
    mainMenus: PropTypes.array
    // actions: PropTypes.shape({})
  }

  handleSwitchLanguage = obj => {
    const { switchLanguage } = this.props.actions
    switchLanguage(obj.key)
  }

  render() {
    const { mainMenus } = this.props
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
                    <Link exact activeClassName='active' to={menu.to}>{menu.name}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
