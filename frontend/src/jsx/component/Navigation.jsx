/**
 * Created by volchenkov on 27.02.2022.
 */
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit'
import { useNavigate } from "react-router-dom";
import { signOutUser } from "../slices/authSlice";
import './Navigation.css';

function Navigation() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { user, error, status } = useSelector((state) => state.auth);
    let loc = "";
    let content;
    const handleSignOut = () => {
        dispatch(signOutUser({"id":user.id})).then(unwrapResult)
            .then((result) => {if(result.status == "success"){
                navigate('/')
            }});
    };
    if (user.name != null) {
        content =
            <div className="dropdown">
                <button className="dropbtn">{user.name}</button>
                <div className="dropdown-content">
                    <NavLink className="nav-link dropdown-row" to={loc+"/user"}>Личная карточка</NavLink>
                    <a className="nav-link dropdown-row" onClick={handleSignOut}>Выход</a>
                </div>
            </div>
    }else{
        content =<NavLink className="nav-link" to={loc+"/login"}>Войти</NavLink>
    }
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to={loc+"/"}>
                        Книжная полка
                    </NavLink>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={loc+"/"}>
                                    Каталог
                                    <span className="sr-only">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={loc+"/books"}>
                                    Книги
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={loc+"/userbooks"}>
                                    Мои книги
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                {content}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
