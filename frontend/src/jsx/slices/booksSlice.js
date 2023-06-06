import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async (user) => {
        const response = await fetch('rest/books', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json','Accept': 'application/json'
            }
        });
        return response.json();
    }
);

export const uploadCover = createAsyncThunk(
    'book/uploadCover',
    async (book) => {
        //console.log(book.bookid);
        console.log(book.cover);
        const formData = new FormData();
        formData.append('cover', book.cover);
        formData.append("bookid", book.bookid);
        //const response  = await fetch(`uploadcover?bookid=${ book.bookid }`, {
        /*,
            headers: {
                'Content-Type': 'multipart/form-data; charset="utf-8"',
            }
        * */
        const response  = await fetch("uploadcover", {
            method: 'POST',
            body: formData
        });
        return response.json();
    }
);

const initialState = {
    booksList: [],
    status: "idle",
    error: ""
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchBooks.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                console.log(action.payload);
                /*return {
                    ...state,
                    ...action.payload,
                }*/
                state.status = "successed";
                state.booksList = action.payload;
                //state.user.push(action.payload);
            })
            .addCase(uploadCover.fulfilled, (state, action) => {})
            .addCase(uploadCover.pending, (state, action) => {})
            .addCase(uploadCover.rejected, (state, action) => {})
    }
});

export default booksSlice.reducer