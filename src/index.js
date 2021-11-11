import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from '../App';
import Main from './pages/main'
import Result from './pages/result'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="result" element={<Result />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);