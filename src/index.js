import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './Accessories/Sass/base.scss'
import App from './Components/App';



ReactDOM.render(
  <Router>
    <App />
  </Router>,document.getElementById('root'))
