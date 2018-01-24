import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export default (mapStateToProps, actions = {}) => Component => {
  const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) })
  @connect(mapStateToProps, mapDispatchToProps)
  class WithRedux extends React.PureComponent {
    render() {
      return <Component {...this.props} />
    }
  }

  return WithRedux
}
