import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './index.scss';
import 'bootstrap/scss/bootstrap.scss';
// import 'assets/css/bootstrap.min.css';
import 'assets/scss/paper-kit.scss';
import 'assets/css/paper-kit.css';
import 'assets/demo/demo.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import 'font-awesome/css/font-awesome.min.css';

// Others
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();