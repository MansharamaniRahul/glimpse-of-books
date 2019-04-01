import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import styles from "./Books.module.scss";
import BooksList from "../BooksList/BooksList";
import Loader from "react-loader-spinner";

class Books extends Component {
  render() {
    const { BooksStore } = this.props;
    return (
      <React.Fragment>
        <div className={styles.container}>
          {BooksStore.showLoader && (
            <Loader type="Puff" color="#00BFFF" height="100" width="100" />
          )}
          {BooksStore.booksList.length > 0 && (
            <div className={styles.parentDiv}>
              {BooksStore.booksList.map((obj, index) => {
                return (
                  <React.Fragment>
                    {obj.GoodreadsResponse.search.results.work.map(
                      (booksList, count) => {
                        return (
                          <React.Fragment>
                            <BooksList
                              id={booksList.best_book.id._text}
                              bookTitle={booksList.best_book.title._text}
                              imageURL={booksList.best_book.image_url._text}
                              imageURLSmall={
                                booksList.best_book.small_image_url._text
                              }
                              rating={booksList.average_rating._text}
                              author={booksList.best_book.author.name._text}
                              pubYear={
                                booksList.original_publication_year._text
                              }
                              pubMonth={
                                booksList.original_publication_month._text
                              }
                              pubDate={booksList.original_publication_day._text}
                            />
                          </React.Fragment>
                        );
                      }
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default inject("BooksStore")(observer(Books));
