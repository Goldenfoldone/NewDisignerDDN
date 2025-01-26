import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom';
import UserStore from './store/UserStore';
import PostStore from './store/PostStore';
import { CookiesProvider } from 'react-cookie';

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <HashRouter>
      <Context.Provider value ={{user: new UserStore(), new_post: new PostStore()}}>
        <CookiesProvider defaultSetOptions={{ path: '/' }}>
          <App/>
        </CookiesProvider>
      </Context.Provider>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
