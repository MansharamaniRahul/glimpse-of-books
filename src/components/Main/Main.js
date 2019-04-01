import React, { Component } from "react";

import { Switch, Route } from "react-router";

import NotFound from "../../components/NotFound/NotFound";

import Books from "../../components/Books/Books";

import BookDetails from "../../components/BookDetails/BookDetails";

import { observer, inject } from "mobx-react";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Books} />

        <Route exact path="/bookDetails" component={BookDetails} />

        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default inject("BooksStore")(observer(Main));
