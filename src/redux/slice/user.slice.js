import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState:{
        loading: false,
        data: null,
        error: null
    },
    reducers: {
        setUserLoading: (state) => {
            return{
                ...state,
                loading: true,
                error: null
            }
        },
        setUserSuccess: (state, action) => {
            return{
                ...state,
                loading: false,
                data: action.payload,
            }
        },
        setUserError: (state, action) => {
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        },
        clearUser: (state) =>{
            return{
                ...state,
                loading: false,
                data: null,
                error: null
            }
        }
    }
})

export const { setUserLoading, setUserSuccess, setUserError, clearUser } = userSlice.actions

export default userSlice.reducer