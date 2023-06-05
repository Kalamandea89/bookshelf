import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

/**
 * Created by volchenkov on 27.04.2023.
 */
function LoginForm() {

    function handleClick() {
        const navigate = useNavigate()
        navigate("/");
    }
    //<form onSubmit={handleSubmit}>
    const dispatch = useDispatch();
    return(
        <div className="login-wrapper container">
            <h1>Пожалуйста войдите</h1>
            <form className="login-form">
                <label>
                    <p>Пользователь</p>
                    <input type="text" className="form-control" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Пароль</p>
                    <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button onClick={handleClick} className="btn btn-dark">Вход</button>
                </div>
            </form>
        </div>
    );
}
export default LoginForm;