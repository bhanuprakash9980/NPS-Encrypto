import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.css';
import M from 'materialize-css/dist/js/materialize.js';
import Navbar from './components/Navbar';
import OTP from './components/OTP';
import AES from './components/AES';
import RSA from './components/RSA';
import threeDES from './components/threeDES';
import XOR from './components/XOR';
import Home from './components/Home';
import './App.css';
function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <Fragment>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/aes' component={AES} />
          <Route exact path='/otp' component={OTP} />
          <Route exact path='/rsa' component={RSA} />
          <Route exact path='/3des' component={threeDES} />
          <Route exact path='/xor' component={XOR} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
