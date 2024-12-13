import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { loginPost } from "../api/memberApi"
import { getCookie, removeCookie, setCookie } from './../util/cookieUtil';

 

const initState = {
    email: ''
}

const loadMemberCookie = () => {
    const memberInfo = getCookie('member'); 
    return memberInfo; 
}


export const loginPostAsync = createAsyncThunk('loginPostAsync', (param) => {
    return loginPost(param)
})

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: loadMemberCookie() || initState,
    reducers: {
        login: (state, action) => {
            console.log("login....", action.payload)

            return {email: action.payload.email}
        },
        logout: (state, action) => {
            console.log("logout....", state)
            removeCookie('member'); 
            return {...initState}
        }
    },

    extraReducers: (builder) => {
        builder.addCase(loginPostAsync.fulfilled, (state, action)=> {
            console.log('fulfilled')
            const payload = action.payload
            
            if(!payload.error){
                setCookie("member", 
                    JSON.stringify(payload),
                    { expires: new Date(Date.now() + 3600), path: '/' } )
            }

            return payload;

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