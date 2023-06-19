import React from 'react';
import {BrowserRouter,RouterProvider, Route, Routes, createBrowserRouter, createRoutesFromElements, Outlet} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Home from "./component/Home.jsx"
import BooksList from "./component/BooksList.jsx"
import Navigation from "./component/Navigation.jsx"
import LoginForm from "./component/LoginForm.jsx"
import {fetchBooks} from "./slices/booksSlice";
import UsersList from "./component/UsersList.jsx"
import UserCard from "./component/UserCard.jsx"

const HeaderLayout = () => (
  <div>
    <Navigation />
    <Outlet />
  </div>
);

function App() {
    let loc = document.location.toString().split('/')[3];
    const dispatch = useDispatch();
    //const {booksList, error, status} = useSelector((state) => state.books);
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HeaderLayout/>,
            children: [
                {
                    path: "/books",
                    element: <BooksList />,
                    loader: ( params ) => {
                        console.log("books")
                        dispatch(fetchBooks("books"));
                        return null;//updateTeam(formData);
                    }

                },
                {
                    path: "/userbooks",
                    element: <BooksList />,
                    loader: ( params ) => {
                        console.log("userbooks")
                        dispatch(fetchBooks("userbooks"));
                        return null; //updateTeam(formData);
                    }
                },
                {
                    path: "/login",
                    element: <LoginForm />
                },
                {
                    path: "/userlist",
                    element: <UsersList />
                },
                {
                    path: "/user",
                    element: <UserCard />
                },
            ]
        }
    ]);
    return (<div>
        <RouterProvider router={router} />
    </div>);
}
export default App;
