import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import styles from "./BooksList.module.scss";
import { inject, observer } from "mobx-react";
import { withRouter, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
class BooksList extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    bookTitle: PropTypes.string,

    imageURL: PropTypes.string,

    imageURLSmall: PropTypes.string,

    rating: PropTypes.string,

    author: PropTypes.string,

    pubYear: PropTypes.string,

    pubMonth: PropTypes.string,

    pubDate: PropTypes.string
  };

  bookSelected = evt => {
    evt.preventDefault();

    const { BooksStore } = this.props;

    BooksStore.fetchSelectedBookDesc(evt.currentTarget.id);

    this.props.history.push(`/bookDetails`);
  };
  render() {
    const {
      id,

      bookTitle,

      imageURL,

      imageURLSmall,

      rating,

      author,

      pubYear,

      pubMonth,

      pubDate
    } = this.props;

    return (
      <React.Fragment>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <div id={id} className={styles.book} onClick={this.bookSelected}>
            <div id="img-Parent" className={styles.imgContainer}>
              <img className={styles.img} src={imageURLSmall} />
            </div>

            <div className={styles.titleContainer}>
              <h4>{bookTitle}</h4>
            </div>

            <div className={styles.container}>
              Is written by:<h5>{author}</h5>
            </div>

            <div className={styles.container}>
              Rated:<h5>{rating}</h5>
            </div>

            <div className={styles.container}>
              Published On:
              <h5>
                {pubDate}/{pubMonth}/{pubYear}
              </h5>
            </div>
          </div>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withRouter(inject("BooksStore")(observer(BooksList)));
