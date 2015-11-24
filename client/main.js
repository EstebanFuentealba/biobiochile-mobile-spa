import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, History } from 'react-router';
import { createHistory, useBasename } from 'history';
import App from './components/App';
import Portada from './components/portada/Portada';
import NotFound from './components/NotFound';
import Nota from './components/nota/Nota';


const history = useBasename(createHistory)({
  basename: '/'
});

const target = document.getElementById('bbcl-app');
var routes = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Portada} />
      <Route path="notas/:year/:month/:day/:postname.shtml" component={Nota} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
ReactDOM.render(routes, target);
