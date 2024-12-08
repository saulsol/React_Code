import {createSlice} from "@reduxjs/toolkit"
 

const initState = {
    email: ''
}

// state => 기존의 상태
// action => 

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: initState,
    reducers: {
        login: (state, action) => {
            console.log("login....", action.payload)

            return {email: action.payload.email}
        },
        logout: (state, action) => {
            console.log("logout....")
        }
    }

})

export const {login, logout} = loginSlice.actions

export default loginSlice.reducer