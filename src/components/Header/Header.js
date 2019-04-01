import React, { Component } from "react";

import PropTypes from "prop-types";

import { withRouter, Link } from "react-router-dom";

import { observer, inject } from "mobx-react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

class Header extends Component {
  constructor(props) {
    super(props);

    this.bookNameRef = null;

    this.setBookNameRef = element => {
      this.bookNameRef = element;
    };

    this.fetchBooksListFromServer = () => {
      const { BooksStore } = this.props;

      BooksStore.fetchBooksListFromServer(this.bookNameRef.value);
    };
  }

  render() {
    return (
      <AppBar position="fixed" colo="primary">
        <Toolbar>
          <input
            ref={this.setBookNameRef}
            id="book-name"
            label="Enter Book Name"
            margin="normal"
          />
          &nbsp;&nbsp;&nbsp;
          <input
            color="primary"
            type="submit"
            onClick={this.fetchBooksListFromServer}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(inject("BooksStore")(observer(Header)));
