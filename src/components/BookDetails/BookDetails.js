import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styles from './BookDetails.module.scss';
import Loader from 'react-loader-spinner';

class BookDetails extends Component {
	render() {
		const { BooksStore } = this.props;

		return (
			<React.Fragment>
				<div className={styles.container}>
					{BooksStore.showLoader && (
						<div className={styles.loader}>
							{' '}
							<Loader
								type="Puff"
								color="#00BFFF"
								height="100"
								width="100"
							/>
						</div>
					)}
					{BooksStore.selectedBookDesc && (
						<div>
							<div className={styles.img}>
								<img
									src={
										BooksStore.selectedBookDesc
											.GoodreadsResponse.book.image_url
											._text
									}
								/>
							</div>

							<div className={styles.bookDescContainer}>
								<div className={styles.bookName}>
									{
										BooksStore.selectedBookDesc
											.GoodreadsResponse.book.title._text
									}
								</div>

								<div className={styles.bookAuthor}>
									by :
									{
										BooksStore.selectedBookDesc
											.GoodreadsResponse.book.authors
											.author.name._text
									}
								</div>

								<div className={styles.rating}>
									{
										BooksStore.selectedBookDesc
											.GoodreadsResponse.book
											.average_rating._text
									}{' '}
									&nbsp;&nbsp;&nbsp; Rating Details:{' '}
									{
										BooksStore.selectedBookDesc
											.GoodreadsResponse.book
											.ratings_count._cdata
									}{' '}
									ratings. &nbsp;&nbsp;&nbsp;
									{
										BooksStore.selectedBookDesc
											.GoodreadsResponse.book
											.text_reviews_count._cdata
									}{' '}
									reviews.
								</div>

								<div className={styles.bookDesc}>
									{
										BooksStore.selectedBookDesc
											.GoodreadsResponse.book.description
											._cdata
									}
								</div>
							</div>
						</div>
					)}
				</div>
			</React.Fragment>
		);
	}
}

export default inject('BooksStore')(observer(BookDetails));
