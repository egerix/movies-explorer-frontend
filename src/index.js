import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './vendor/normalize.css';
import './vendor/fonts/inter/inter.css';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);