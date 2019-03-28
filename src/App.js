
import React, {
  Component } from
  "react";
  
  import { BrowserRouter
  as Router, 
  Route, Switch } 
  from "react-router-dom";
  
  import styles
  from "./App.module.scss";
  
  import theme
  from "./styles/material-ui";
  
  import { MuiThemeProvider }
  from "@material-ui/core/styles";
  
  import { Provider }
  from "mobx-react";
  
  import "./App.css";
  
  import BooksStore
  from "./stores/Books/BooksStore";
  
  import Header
  from "./components/Header/Header";
  
  import Main
  from "./components/Main/Main";
  
  
  
  export default
  class App 
  extends Component {
  
  render() {
  
  return (
  
  <Provider
  BooksStore={BooksStore}>
  
  <Router>
  
  <div className={styles.App}>
  
  <MuiThemeProvider
  theme={theme}>
  
  <Header
  />
  
  <Main 
  />
  
  </MuiThemeProvider>
  
  </div>
  
  </Router>
  
  </Provider>
  
  );
  
  }
  
  }