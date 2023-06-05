/**
 * Created by volchenkov on 10.10.2021.
 */

import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx"



ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('content_bud_app')
);