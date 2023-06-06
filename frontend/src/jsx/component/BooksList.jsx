/**
 * Created by volchenkov on 27.02.2022.
 */

import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
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
        //document.getElementById("book1").src = "data:image/png;base64,"
    };
    let cover = book.cover == null ? `./img/user${  i  }.jpg` : "data:image/png;base64," + book.cover;
    return(
        <div className="book-card">
            <div>
                <i className={"glyphicon glyphicon- "}></i>
                <img
                    src={cover}  //user.png"
                    className="user-avatar-list rounded mb-4 mb-lg-0"
                    alt=""
                />
                <input type="file" name="#uploadCover" onChange={e=>setCoverFile(e.target.files[0])}/>
                <button id="load_cover" className="btn btn-info btn-sm" onClick={handleUpdateCover}>Загрузить обложку</button>
            </div>
            <div>
                <div className="book-card-row"><span>Название</span><span>{book.title}</span></div>
                <div className="book-card-row"><span>Автор</span><span>{book.author.name}</span></div>
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
    if (status === 'loading') {
        content = <Spinner text="Loading..." />
    }else{
        content = booksList.map((book)=>{
            return <Book key={book.id} book={book} />
        });
    }

    // content = <div className="text-center my-5">Loading...</div>


    return (
        <div className="container">
            <h2>Книги</h2>
            {content}
        </div>
    );
}

export default BooksList;