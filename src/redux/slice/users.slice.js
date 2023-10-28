import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: "users",
    initialState:{
        loading: false,
        data: null,
        error: null
    },
    reducers: {
        setUsersLoading: (state) => {
            return{
                ...state,
                loading: true,
                error: null
            }
        },
        setUsersSuccess: (state, action) => {
            return{
                ...state,
                loading: false,
                data: action.payload,
            }
        },
        setUsersError: (state, action) => {
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        },
        clearUsers: (state) =>{
            return{
                ...state,
                loading: false,
                data: null,
                error: null
            }
        }
    }
})


export const { setUsersLoading, setUsersSuccess, setUsersError, clearUsers } = usersSlice.actions
export default usersSlice.reducer