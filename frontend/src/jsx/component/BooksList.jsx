/**
 * Created by volchenkov on 27.02.2022.
 */

import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {useMatch } from 'react-router-dom'
import { Spinner } from './Spinner.jsx';
import { fetchBooks, uploadCover } from "../slices/booksSlice";
import getRandom from "./utils";
import "./BooksList.css";

const Book = ({ book }) => {
    let i = getRandom(1, 5);
    const dispatch = useDispatch();
    const [coverFile, setCoverFile] = useState('');
    const handleUpdateCover = () =>{
        console.log("Ид книги: " + book.id);
        dispatch(uploadCover({"bookid": book.id, "cover":coverFile}))
            .then((result)=>{console.log(result)});
    };
    let cover = book.cover == null ? `./img/default_book_cover.jpg` : "data:image/png;base64," + book.cover;
    return(
        <div className="book-card">
            <div>
                <i className={"glyphicon glyphicon- "}></i>
                <img
                    src={cover}
                    className="book-cover rounded mb-4 mb-lg-0"
                    alt=""
                />
                <input type="file" name="#uploadCover" onChange={e=>setCoverFile(e.target.files[0])}/>
                <button id="load_cover" className="btn btn-upload-cover btn-sm" onClick={handleUpdateCover}>Загрузить обложку</button>
            </div>
            <div>
                <div className="book-card-row"><span>Название</span><span>{book.title}</span></div>
                <div className="book-card-row"><span>Автор</span><span>{book.author.name}</span></div>
                <div className="book-card-row"><span>Жанр</span><span>{book.genre.name}</span></div>
                <div className="book-card-row"><span>Дата публикации</span><span>{new Date(book.publishedDate).toLocaleDateString()}</span></div>
            </div>
        </div>
    )
}

const BooksList = () => {
    const {booksList, error, status} = useSelector((state) => state.books)
    const dispatch = useDispatch();
    const routeMatch = useMatch({
        path: 'books',
        end: true
    });
    console.log(routeMatch ? 'books': 'userbooks');

    useEffect(() => {
        if (status === 'idle') {
            // dispatch(fetchBooks(routeMatch))
            dispatch(fetchBooks(routeMatch ? 'books': 'userbooks'))
        }
    }, [status, dispatch])

    let content;
    if (status === 'loading') {
        content = <Spinner text="Загрузка..." />
    }else{
        content = booksList.map((book)=>{
            return <Book key={book.id} book={book} />
        });
    }

    // content = <div className="text-center my-5">Loading...</div>
    return (
        <div className="container">
            <div className="row align-items-center my-5">
                <div className="col-lg-7">
                    <img
                        className="img-fluid rounded mb-4 mb-lg-0"
                        src=""
                        alt=""
                    />
                </div>
                <div className="col-lg-5">
                    <h1 className="font-weight-light">Книги</h1>
                </div>
            </div>
            {content}
        </div>
    );
}

export default BooksList;