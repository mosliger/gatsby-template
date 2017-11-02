
const todo = (state = [], action) => {
  switch (action.type) {
    case 'TODO_ADD': {
      return [...state, action.value]
    }
    case 'DELETE_TODO': {
      return state.filter(todo => todo.id !== action.id)
    }
    case 'GET_TODO': {
      return [
        ...action.response
      ];
    }
    default: {
      return state
    }
  }
}

export default todo
