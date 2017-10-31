import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import randomWords from 'random-words';








ReactDOM.render(
  <App word={randomWords()} />,
  document.getElementById('root')
);
