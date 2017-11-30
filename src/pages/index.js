import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Todo from '../actions/todo'
import Link from "gatsby-link"


// State
function mapStateToProps(state) {
  return {
    todo: state.todo,
  }
}

// Action
const actions = {
  addTodo: Todo.addTodo,
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends React.Component {
  static propTypes = {
    todo: PropTypes.array,
    actions: PropTypes.shape({
      addTodo: PropTypes.func.isRequired,
      testApi: PropTypes.func,
    }),
  };

  handleAddTodo = () => {
    const { actions } = this.props;
    actions.addTodo({
      "id": 1,
      "text": "woem",
      "active": 0,
      "created_at": "2017-10-31 10:32:00",
      "updated_at": "2017-10-31 10:32:00"
    });
  }

  render() {
    const { todo } = this.props;
    return (
      <div className='container'>
        <h1>Hello word</h1>
        <button onClick={() => this.handleAddTodo()} className="button">addTodo</button>
        <Link to="/page-2/" className="button">Page 2</Link>
      </div>
    )
  }
}
