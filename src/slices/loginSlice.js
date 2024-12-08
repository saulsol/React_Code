import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { loginPost } from "../api/memberApi"

 

const initState = {
    email: ''
}

export const loginPostAsync = createAsyncThunk('loginPostAsync', (param) => {
    return loginPost(param)
})

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: initState,
    reducers: {
        login: (state, action) => {
            console.log("login....", action.payload)

            return {email: action.payload.email}
        },
        logout: (state, action) => {
            console.log("logout....", state)
            return {...initState}
        }
    },

    extraReducers: (builder) => {
        builder.addCase(loginPostAsync.fulfilled, (state, action)=> {
            console.log('fulfilled')
        })
        .addCase(loginPostAsync.pending, (state, action) => {
            console.log('pending')
        })
        .addCase(loginPostAsync.rejected, (state, action) => {
            console.log('rejected')
        })
    }

})

export const {login, logout} = loginSlice.actions

export default loginSlice.reducer