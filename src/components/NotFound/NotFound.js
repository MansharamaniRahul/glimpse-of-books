import React, { Component } from 'react';

import styles from './NotFound.module.css';

export default class NotFound extends Component {
	render() {
		return (
			<div className={styles.PageNotFoundMain}>
				<div className={styles.PageNotFoundTitle}>
					We couldn't find the page
					<br />
					you requested.
				</div>

				<div className={styles.PageNotFoundHomeLink}>
					<a href={'/'}>home</a>
				</div>
			</div>
		);
	}
}
