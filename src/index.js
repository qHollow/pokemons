import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import App from './components/App';

const DefaultStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Montserrat, sans-serif;
  }
`

ReactDOM.render(
  <>
    <DefaultStyle />
    <App />
  </>,
  document.querySelector('#root')
);