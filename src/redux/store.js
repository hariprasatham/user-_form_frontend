import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slice/users.slice'
import userReducer from './slice/user.slice'

const store = configureStore({
    reducer:{
        users: usersReducer,
        user: userReducer
    }
})

export default store;