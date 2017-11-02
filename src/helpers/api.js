import fetch from 'isomorphic-fetch'
import config from '../../config'
import _ from 'lodash'

require('es6-promise').polyfill()

function setParams (params) {
	const options = {
		method: _.get(params, 'method', 'GET'),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	}

	options.headers = {
		...options.headers,
		..._.get(params, 'headers', {})
	}
  if (params.method && params.method !== 'GET' && params.body) {
    options.body = JSON.stringify(params.body)
  }
  return options;
}

function handleURL(url) {
	console.log('handleURL >>', config);
	// return url;
	return `http://localhost:1337/${url}`;
}

const fetchApi = (url = '', params = {}) => {
  return fetch(handleURL(url), setParams(params))
  .then((response) => {
  	return response.json()
  })
}

export default fetchApi;