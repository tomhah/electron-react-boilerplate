import React from 'react';
import { render } from 'react-dom';
import controller from './controller.js';
import { Container } from 'cerebral-view-react';
import App from './App';
import './app.css';

render(
  <Container controller={controller}>
    <App/>
  </Container>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  // Use require because imports can't be conditional.
  // In production, you should ensure process.env.NODE_ENV
  // is envified so that Uglify can eliminate this
  // module and its dependencies as dead code.
  // require('./createDevToolsWindow')(store);
}
