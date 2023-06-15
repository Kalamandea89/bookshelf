/**
 * Created by volchenkov on 27.02.2022.
 */
import React from "react";
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux";
import './Navigation.css';

function Navigation() {
    //let loc = document.location.toString().split('/')[3];
    const { user, error, status } = useSelector((state) => state.auth);
    let loc = "";
    let content;
    if (user.name != null) {
        content =<NavLink className="nav-link" to={loc+"/user"}>{user.name}</NavLink>
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
