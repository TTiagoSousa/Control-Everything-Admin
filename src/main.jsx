import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ThemeContext from './Context/Theme_Context.jsx';
import './i18n/index.js';
import DataBaseContext from './Context/DataBase_Context.jsx';
import NavsContext from './Context/Navs_Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
    <ThemeContext>
      <NavsContext>
        <DataBaseContext>
          <App />
        </DataBaseContext>
      </NavsContext>
    </ThemeContext>
  </BrowserRouter>,
)
