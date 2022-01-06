import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FirstPage from './pages/FirstPage';
import CurrentWeather from './pages/CurrentWeather';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route exact path="/currentweather" component={CurrentWeather} />
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();