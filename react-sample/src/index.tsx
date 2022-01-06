import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CurrentWeather from './pages/CurrentWeather';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <CurrentWeather />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();