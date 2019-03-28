import axios from 'axios';

import appConstants from '../../constants/app-constants';

export default {
	getBooksList: bookName => {
		const url = appConstants.GET_BOOKS_LIST_BASE_URL + bookName;

		return axios.get(url, {
			method: 'GET',

			mode: 'no-cors',

			headers: {
				'Access-Control-Allow-Origin': '*',

				'Content-Type': 'application/json'
			}
		});
	},

	getBookDesc: id => {
		const url = appConstants.GET_BOOK_DESC_BASE_URL(id);

		return axios.get(url, {
			method: 'GET',

			mode: 'no-cors',

			headers: {
				'Access-Control-Allow-Origin': '*',

				'Content-Type': 'application/json'
			}
		});
	}
};
