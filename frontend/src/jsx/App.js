import React from 'react';
//import logo from './logo.svg';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home.jsx"
import Contact from "./component/Contact.jsx"
import BooksList from "./component/BooksList.jsx"
import UsersList from "./component/UsersList.jsx"
import Navigation from "./component/Navigation.jsx"
import LoginForm from "./component/LoginForm.jsx"


function App() {
  let loc = document.location.toString().split('/')[3];
  return (
      <BrowserRouter>
          <div>
              <Navigation/>
              <Routes>
                  <Route index path={loc + '/'} element={<Home />} />
                  <Route path={loc + "/books"} element={<BooksList />} />
                  <Route path={loc + "/mybooks"}  element={<BooksList />} />
                  {/*<Route path={loc + "/mybooks"}  element={<UsersList />} />*/}
                  <Route path={loc + "/login"}  element={<LoginForm />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
