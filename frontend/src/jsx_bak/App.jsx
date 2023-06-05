/**
 * Created by volchenkov on 19.12.2022.
 */

import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation.jsx"
import UsersList from "./UsersList.jsx"
import Contact from "./Contact.jsx"
import Home from "./Home.jsx"


class App extends React.Component {
    constructor(props) {
        super(props);mybooks
    }
    render() {
        let loc = document.location.toString().split('/')[3];
        let userp = loc + "/users";
        // location={loc + '/'}
        return(
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route index path={loc + '/'} element={<Home />} />
                    <Route path={users} element={<UsersList />} />
                    <Route path={loc + "/contact"}  element={<Contact />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;