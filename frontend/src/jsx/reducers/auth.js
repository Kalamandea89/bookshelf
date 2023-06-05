import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: 0,
    },
    reducers: {
        register: (state) => {
            return fetch('loginweb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json','Accept': 'application/json'
                },
                body:  JSON.stringify({email: "ivan@test.ru55", pass: "123"})
            }).then((response) => response.json())
                .then(data => console.log(data))

        },
        login: (state) => {
            return fetch('loginweb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json','Accept': 'application/json'
                },
                body:  JSON.stringify({email: "ivan@test.ru55", pass: "123"})
            }).then((response) => response.json())
                .then(data => console.log(data))
        }
    }
})
export const {register, login} = authSlice.actions

export default authSlice.reducer