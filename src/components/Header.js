import React from 'react'
import Link from 'gatsby-link'

const mainMenus = [
  { name: 'Home', to: '/' },
  { name: 'Page', to: '/page' }
]

export default class Header extends React.Component {
  render() {
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
                    <Link exact activeStyle={{ color: 'red' }} to={menu.to}>{menu.name}</Link>
                  </li>
                )
              })}
              <li>
                <Link exact activeClassName='active' to='/'>EN</Link>
              </li>
              <li>
                <Link exact activeClassName='active' to='/th'>TH</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
