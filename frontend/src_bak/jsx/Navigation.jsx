/**
 * Created by volchenkov on 27.02.2022.
 */
import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    let loc = document.location.toString().split('/')[3];
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to={loc+"/"}>
                        Внутренний сайт Криста
                    </NavLink>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={loc+"/"}>
                                    Home
                                    <span className="sr-only">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={loc+"/users"}>
                                    Мои книги
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={loc+"/contact"}>
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={loc+"/blog"}>
                                    Войти
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
