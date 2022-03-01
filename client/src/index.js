import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import 'bootstrap/scss/bootstrap.scss';
import 'assets/css/bootstrap.min.css';
import 'assets/scss/paper-kit.scss';
import 'assets/css/paper-kit.css';
import 'assets/demo/demo.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

// Others
import reportWebVitals from './reportWebVitals';
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
