import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async (user) => {
        const response = await fetch('rest/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json','Accept': 'application/json'
            }
        });
        return response.json();
    }
);

const initialState = {
    booksList: {},
    status: "idle",
    error: ""
}

export const authSlice = createSlice({
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
    }
});