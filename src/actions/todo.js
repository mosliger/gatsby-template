"use strict";
require('babel-polyfill');
import fetchApi from '../helpers/api'

export const addTodo = (value) => dispatch => dispatch({
  type: 'TODO_ADD',
 	value
})


export const testApi = () => {
	return (dispatch) => {
		fetchApi('localhost:8080/service-app/todo').then((response) => {
			console.log('testApi >>', response)
			dispatch({
			  type: 'GET_TODO',
			 	response
			})
		});
	}
}


export const removeTodo = (id) => dispatch => dispatch({
	type: 'DELETE_TODO',
	id
})