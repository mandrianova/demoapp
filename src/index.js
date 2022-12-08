import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RouterProvider} from 'react-router-dom';

import {ThemeProvider} from '@mui/material';

import theme from './theme';
import router from './router';
import APIContext from './apiContext';
import ToDoService from './ToDoService';

const api = new ToDoService();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <APIContext.Provider value={api}>
              <RouterProvider router={router} />
          </APIContext.Provider>
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
