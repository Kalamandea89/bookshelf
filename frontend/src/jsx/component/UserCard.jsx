/**
 * Created by volchenkov on 14.06.2023.
 */
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import getRandom from './utils.js';

const UserCard = () => {
    const {user} = useSelector((state) => state.auth);
	let i = getRandom(1, 5);
return(
    <div className="container">
        <div className="col-lg-5">
            <h1 className="font-weight-light">Личная карточка</h1>
        </div>
        <div className="user-card row align-items-center my-5">
            <i className={"glyphicon glyphicon-"}></i>
            <img
                src={`./img/user${  i  }.jpg`}  //user.png"
                className="user-avatar-list rounded mb-4 mb-lg-0"
                alt=""
            />
            <div>
                <div className="user-card-row"><span>Имя</span><span>{user.name}</span></div>
                <div className="user-card-row"><span>Почта</span><span>{user.email}</span></div>
                <div className="user-card-row"><span>Возраст</span><span>{user.age}</span></div>
            </div>
        </div>
    </div>
)
}

export default UserCard;