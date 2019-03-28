export default {
	GET_BOOKS_LIST_BASE_URL:
		'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search.xml?key=clGuIdnX6PF0XYaOcxGog&q=',

	GET_BOOK_DESC_BASE_URL: data => {
		return `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/show/${data}.xml?key=clGuIdnX6PF0XYaOcxGog`;
	}
};
