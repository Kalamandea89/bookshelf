import { combineReducers } from "redux";
import auth from "./authSlice";
import message from "./message";


export default {
    auth: auth,
    //message: message,
};