import * as ActionType from '../actions/actionType'

export const switchLanguage = language => ({
  type: ActionType.SWITCH_LANGUAGE,
  language
})
