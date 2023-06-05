import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";


export default {
    auth: auth,
    message: message,
};