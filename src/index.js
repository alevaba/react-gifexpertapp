import React from 'react';
import ReactDOM from 'react-dom';
import { GifExpertApp } from './GifExpertApp';
import './index.css';

// render el index.hmtl , manda un div que es el root de la página
ReactDOM.render(
   <GifExpertApp />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
