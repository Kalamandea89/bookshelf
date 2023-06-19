import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

// Сначала создаем `thunk`
export const fetchUserByEmail = createAsyncThunk(
    'signin/fetchUserByEmail',
    async (user) => {
        const response = await fetch('signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json','Accept': 'application/json'
            },
            body:  JSON.stringify({email: user.userEmail, pass: user.userPass})
        });
        return response.json();
    }
);

export const signOutUser = createAsyncThunk(
    'signout/fetchUserById',
    async (user) => {
        const response = await fetch('signout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json','Accept': 'application/json'
            },
            body:  JSON.stringify({userId: user.id})
        });
        return response.json();
    }
);

const initialState = {
    user: {},
    status: "idle",
    error: ""
}

export const authSlice = createSlice({
    name: 'signin',
    initialState,
    reducers: {
        register: (state, action) => {
            return fetch('loginweb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 'Accept': 'application/json'
                },
                body: JSON.stringify({email: "ivan@test.ru55", pass: "123"})
            }).then((response) => response.json())
                .then(data => console.log(data))

        },
        login: (state, action) => {
            return fetch('loginweb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 'Accept': 'application/json'
                },
                body: JSON.stringify({email: "ivan@test.ru55", pass: "123"})
            }).then((response) => response.json())
                .then(data => console.log(data))
        },
    },
    extraReducers(builder) {
            // Добавляем редукторы для дополнительных операций и обрабатываем состояние загрузки
            builder
                .addCase(fetchUserByEmail.pending, (state, action) => {
                    state.status = "loading";
                })
                .addCase(fetchUserByEmail.rejected, (state, action) => {
                    state.status = "failed";
                    state.error = action.error.message;
                })
                .addCase(fetchUserByEmail.fulfilled, (state, action) => {
                    console.log(action.payload);
                    /*return {
                        ...state,
                        ...action.payload,
                    }*/
                    state.status = "successed";
                    state.user = action.payload;
                    //state.user.push(action.payload);
                })
                .addCase(signOutUser.pending, (state, action) => {
                    state.status = "loading";
                })
                .addCase(signOutUser.rejected, (state, action) => {
                    state.status = "failed";
                })
                .addCase(signOutUser.fulfilled, (state, action) => {
                    state.status = "loading";
                    state.user = {};
                })
        }

})
export const {register, login} = authSlice.actions;
export const signinUser = (state) => state.signin.user;
export const signinUserError = (state) => state.signin.error;
export const signinUserStatus = (state) => state.signin.status;

export default authSlice.reducer