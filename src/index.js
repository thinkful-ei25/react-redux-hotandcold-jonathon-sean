import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; 

import * as actions from './actions/actions'; 
import store from './store'; 

import './reset.css';
import './index.css';

import Game from './components/game';

// console.log(store.getState()); 

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);


