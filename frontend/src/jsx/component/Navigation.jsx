/**
 * Created by volchenkov on 27.02.2022.
 */
import React from "react";
import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm.jsx";
import {useSelector} from "react-redux";

function Navigation() {
    //let loc = document.location.toString().split('/')[3];
    const { user, error, status } = useSelector((state) => state.auth);
    let loc = "";
    let content;
    if (user.name != null) {
        content =<NavLink className="nav-link" to={loc+"/login"}>{user.name}</NavLink>
    }else{
        content =<NavLink className="nav-link" to={loc+"/login"}>Войти</NavLink>
    }
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to={loc+"/"}>
                        Картотека книг
                    </NavLink>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={loc+"/"}>
                                    Книги
                                    <span className="sr-only">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={loc+"/mybooks"}>
                                    Мои книги
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={loc+"/contact"}>
                                    Контакты
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
