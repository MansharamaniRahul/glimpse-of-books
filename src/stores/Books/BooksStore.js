import { decorate, observable, action } from 'mobx';

import makeInspectable from 'mobx-devtools-mst';

import BooksStoreServiceAPI from '../../services/BooksStoreServices/BooksStoreService';

var convert = require('xml-js');

class BooksStore {
	bookName = '';

	booksList = [];

	selectedBookDesc = '';

	errorCode = '';
	showLoader = false;

	fetchBooksListFromServer = bookName => {
		if (this.booksList.length > 0) this.booksList.length = 0;
		this.setLoader();
		BooksStoreServiceAPI.getBooksList(bookName)

			.then(
				res => {
					var jsonConvertedData = convert.xml2json(res.data, {
						compact: true,

						spaces: 4
					});

					this.setBooksList(jsonConvertedData);
					this.setLoader();
				},

				error => {
					console.log(`http error here
	${error}`);
					this.setLoader();

					this.setErrorCode(error.message);
				}
			)

			.catch(error => {
				console.log('other error here', error);
			});
	};

	setBooksList = data => {
		data = JSON.parse(data);

		if (data) this.booksList.push(data);
		else alert('No Books received');
	};

	setErrorCode = errorCode => {
		this.errorCode = errorCode;
	};

	getErrorCode = () => {
		return this.errorCode;
	};

	fetchSelectedBookDesc = id => {
		if (this.selectedBookDesc !== '') this.selectedBookDesc = '';
		this.setLoader();
		BooksStoreServiceAPI.getBookDesc(id)

			.then(
				res => {
					this.setLoader();

					var jsonConvertedData = convert.xml2json(res.data, {
						compact: true,

						spaces: 4
					});

					this.setSelectedBookDesc(jsonConvertedData);
				},

				error => {
					console.log(`http error here
    ${error}`);

					this.setErrorCode(error.message);
				}
			)

			.catch(error => {
				console.log('other error here', error);
			});
	};

	setSelectedBookDesc = data => {
		this.selectedBookDesc = JSON.parse(data);
	};

	getSelectedBookDesc = () => {
		return this.selectedBookDesc;
	};

	setLoader = () => {
		this.showLoader = !this.showLoader;
	};
}

decorate(BooksStore, {
	bookName: observable,

	selectedBookDesc: observable,

	booksList: observable,
	showLoader: observable,

	errorCode: observable,

	setBooksList: action.bound,

	setErrorCode: action.bound,

	getBooksList: action.bound,

	getErrorCode: action.bound,

	searchBook: action.bound,
	setLoader: action.bound
});

export default makeInspectable(new BooksStore());
