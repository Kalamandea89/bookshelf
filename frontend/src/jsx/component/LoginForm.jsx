import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { unwrapResult } from '@reduxjs/toolkit'
//import {login} from "../reducers/authSlice";
import { fetchUserByEmail } from "../reducers/authSlice";
import {signinUser, signinUserStatus} from "../reducers/authSlice";

/**
 * Created by volchenkov on 27.04.2023.
 */
//function LoginForm() => {
const LoginForm = () => {
    const dispatch = useDispatch();
    // const status = useSelector(signinUserStatus);
    const { user, error, status } = useSelector((state) => state.auth)
    //const status = useSelector((state) => state.auth);
    const navigate = useNavigate()

    const handleSubmit = () => {
        // const status = useSelector(signinUserStatus);
        //const status = "";
        //<form onSubmit={handleSubmit}>
        try {
            //dispatch(deletePost({ id })).unwrap();
            dispatch(fetchUserByEmail({"userEmail":"ivan@test.ru","userPass":"123"})).then(unwrapResult)
                .then((result) => {if(result.status == "success"){
                    // navigate(document.location.toString().split('/')[3])
                    navigate('..')
                }});
            console.log(status);
            if (status == "success"){
                navigate(document.location.toString().split('/')[3]);
            }
            let content;
            if (status === "loading") {
                content = <div className="text-center my-5">Loading...</div>
            }
        } catch (error) {
            console.log(`Failed to delete the post ${error}`)
        }
    }

    return(
        <div className="login-wrapper container">
            <h1>Пожалуйста войдите</h1>
            <div className="login-form">
                <label>
                    <p>Пользователь</p>
                    <input type="text" className="form-control" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Пароль</p>
                    <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button onClick={handleSubmit} className="btn btn-dark">Вход</button>
                </div>
            </div>
        </div>
    );
}
export default LoginForm;