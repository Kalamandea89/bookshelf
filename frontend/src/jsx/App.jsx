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
  return (
      <BrowserRouter>
          <div>
              <Navigation/>
              <Routes>
                  <Route index path={loc + '/'}
                         loader={(a)=>{console.log("hb;sdfds;fndsf'ds")}}
                         element={<Home />} />
                  <Route path={loc + "/books"}
                         loader={({ params }) => {
                             console.log("userbooks")
                             dispatch(fetchBooks("books"));
                             return null;//updateTeam(formData);
                         }}
                         element={<BooksList />} />
                  <Route path={loc + "/userbooks"}
                         loader={({ params }) => {
                             console.log("userbooks")
                             dispatch(fetchBooks("userbooks"))
                             return booksList;
                         }}
                         element={<BooksList />} />
                  <Route path={loc + "/user"}  element={<UserCard/>} />
                  <Route path={loc + "/login"}  element={<LoginForm />} />
                  <Route path={loc + "/userlist"}  element={<UsersList />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}


function App2() {
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

function App3() {
    let loc = document.location.toString().split('/')[3];
	const dispatch = useDispatch();
    const {booksList, error, status} = useSelector((state) => state.books);
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<HeaderLayout/>} >
				<Route index element={<Home />} />
				<Route path={loc + "books"}
                           element={<BooksList />} />
						   loader={({ params }) => {
							   console.log("books")
							   //dispatch(fetchBooks("books"));
							   return booksList;//updateTeam(formData);
						   }}

				  <Route path={loc + "userbooks"}
						   loader={({ params }) => {
							   console.log("userbooks")
							   dispatch(fetchBooks("userbooks"))
							   return booksList;
						   }}
						   element={<BooksList />} />

				<Route path="login" element={<LoginForm />} />
			</Route>
            
        )
    );
	/*loader={(a)=>{console.log("hb;sdfds;fndsf'ds")
						 return null}}*/
    /*return (<div>
                <Navigation/>
                <RouterProvider router={router} />
            </div>);*/
			
    return <RouterProvider router={router} >
		       </RouterProvider>
}

export default App2;
