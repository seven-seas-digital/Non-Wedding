import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import App from './components/App';
import Resources from './components/Resources'
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import requireAuth from './components/require_authentication';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/signIn' component={requireAuth(Resources)} />
      </Switch>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
