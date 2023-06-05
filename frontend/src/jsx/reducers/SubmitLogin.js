import {createSlice} from "@reduxjs/toolkit";

export const loginSubmit = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        handleSubmit: (state) => {
            return fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            }).then(data => data.json())

            return fetch('loginweb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json','Accept': 'application/json'
                },
                body:  JSON.stringify({email: "ivan@test.ru55", pass: "123"})
            }).then((response) => response.json())
                .then(data => console.log(data))

            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        },
    },
})

export const { handleSubmit } = loginSubmit.actions
