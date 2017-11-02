import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Todo from '../actions/todo'

// State
function mapStateToProps(state) {
  console.log('mapStateToProps >>', state)
  return {
    todo: state.todo,
  }
}

// Action
const actions = {
  addTodo: Todo.addTodo,
  testApi: Todo.testApi,
  removeTodo: Todo.removeTodo,
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

  handleTextApi = () => {
    const { actions } = this.props;
    actions.testApi();
  }

  render() {
    const { todo } = this.props;
    return (
      <div className='_center'>
        <br />
        <h1>Hello, I am React</h1>
        <button onClick={() => this.handleAddTodo()}>addTodo</button>
        <button onClick={() => this.handleTextApi()}>Text Api</button>
        <ul>
        {
          todo.map((obj, index) => {
            return (
              <li key={index}>{obj.text}</li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}
