/**
 * Created by volchenkov on 27.02.2022.
 */

import React, { useEffect }  from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from './Spinner';
import { fetchBooks } from "../slices/booksSlice";

const Book = ({ book }) => {
    return(
        <div className="user-card">
            <i className={"glyphicon glyphicon-"}></i>
            <img
                src={`./img/user${  i  }.jpg`}  //user.png"
                className="user-avatar-list rounded mb-4 mb-lg-0"
                alt=""
            />
            <div>
                <div className="user-card-row"><span>Название</span><span>{book.title}</span></div>
                <div className="user-card-row"><span>Автор</span><span>{book.author.name}</span></div>
            </div>
        </div>
    )
}

const BooksList = () => {
    const {booksList, error, status} = useSelector((state) => state.books)
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchBooks())
        }
    }, [status, dispatch])

    let content;
    if (booksStatus === 'loading') {
        content = <Spinner text="Loading..." />
    }else{
        content = booksList.map((book)=>{
            <Book key={book.id} book={book} />
        });
    }

    // content = <div className="text-center my-5">Loading...</div>


    return (
        <section className="posts-list">
            <h2>Книги</h2>
            {content}
        </section>
    );
}