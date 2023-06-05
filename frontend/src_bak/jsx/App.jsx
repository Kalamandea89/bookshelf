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
        super(props);
    }
    render() {
        let loc = document.location.toString().split('/')[3];
        let userp = loc + "/users";
        // location={loc + '/'}
        return(
            <div>
                <Navigation />
                <Routes>
                    <Route index path={loc + '/'} element={<Home />} />
                    <Route path={loc + "/mybooks"} element={<Contact />} />
                    <Route path={loc + "/login"}  element={<UsersList />} />
                </Routes>
            </div>
        );
    }
}

export default App;