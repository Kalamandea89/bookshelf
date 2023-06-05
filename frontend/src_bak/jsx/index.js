import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import store from './store/store';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('content_app')
);

