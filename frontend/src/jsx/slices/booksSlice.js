import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async (location) => {
        const response = await fetch('rest/' + location, {
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
    error: "",
    curPath: ""
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchBooks.pending, (state, action) => {
                state.curPath = action.meta.arg;
                state.status = "loading";
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
                state.booksList = [];
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                console.log(action.payload);
                /*return {
                    ...state,
                    ...action.payload,
                }*/
                //state.user.push(action.payload);
                state.curPath = action.meta.arg;
                state.status = "successed";
                state.booksList = action.payload;
            })
            .addCase(uploadCover.fulfilled, (state, action) => {})
            .addCase(uploadCover.pending, (state, action) => {})
            .addCase(uploadCover.rejected, (state, action) => {})
    }
});

export default booksSlice.reducer