import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Auth0Provider} from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider 
    domain="dev-c3t90vqa.us.auth0.com"
    clientId="MdXmpM9HVQ2oFNavkBxw8KnMkBemtkPj"
    redirectUri={window.location.origin}>
        <App />
    </Auth0Provider>
   
  </React.StrictMode>
);

