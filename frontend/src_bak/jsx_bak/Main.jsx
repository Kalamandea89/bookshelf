/**
 * Created by volchenkov on 10.10.2021.
 */

import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation.jsx"
import UsersList from "./UsersList.jsx"
import Contact from "./Contact.jsx"
import Home from "./Home.jsx"


class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let loc = document.location.toString().split('/')[3];
        let userp = loc + "/users";
        //console.log(userp);
        // location={loc + '/'}
        return(
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route index path={loc + '/'} element={<Home />} />
                    <Route path={userp} element={<UsersList />} />
                    <Route path={loc + "/contact"}  element={<Contact />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <Main/>,
    document.getElementById('content_bud_app')
);