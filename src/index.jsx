import React from 'react';
import ReactDOM from 'react-dom';

import './saas/styles';

import { App } from './App';

window.addEventListener('load', () => {
  ReactDOM.render(
    <React.Fragment>
      <App />
    </React.Fragment>,
    document.getElementById('root')
  );
});
