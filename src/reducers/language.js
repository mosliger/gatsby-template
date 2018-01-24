import * as ActionType from '../actions/actionType'

const initialState = {
  languages: [
    {
      name: 'ENG',
      fullName: 'English',
      key: 'en'
    },
    {
      name: 'ไทย',
      fullName: 'ภาษาไทย',
      key: 'th'
    }
  ],
  currentActive: 'en'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SWITCH_LANGUAGE: {
      return {
        ...state,
        currentActive: action.language
      }
    }
    default:
      return state
  }
}
