import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";

import PAGES from '../content';

import '../scss/layouts/_app.scss';

import logo from '../images/logo.svg';

const Page = props => (
  <div className="app__page">
    <h1>{props.title}</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <ul className="app__menu">
            {PAGES.map((page, index) => {
              return (
                <li key={index} >
                  <Link
                    to={page.path}
                    aria-label={page.title}>{page.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </header>
        <Switch>
          {PAGES.map((page, index) => {
            return <Route
              key={index}
              exact={index > 0 ? false : true}
              path={page.path}
              component={props => <Page {...props} title={page.title} />}
            />
          })}
        </Switch>
      </div>
    );
  }
}

export default App;
