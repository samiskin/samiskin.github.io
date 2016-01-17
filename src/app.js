import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from 'App.jsx';
import Main from 'Main.jsx';

const reactHost = global.document.createElement('span');
global.document.body.appendChild(reactHost);

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main}/>
    </Route>
  </Router>
), reactHost);
