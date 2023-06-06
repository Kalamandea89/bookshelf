import { combineReducers } from "redux";
import auth from "./authSlice";
import books from "./booksSlice";


export default {
    auth: auth,
    books: books,
};