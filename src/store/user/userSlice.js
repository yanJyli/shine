import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import usersCollection from '../../services/users-services';

export const getUser = createAsyncThunk('/user/getUserStatus', async (username) => {

    const response = usersCollection.getUser(username)

    return response
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
    },
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {
        state.data = action.payload
        })

    },
})

export default userSlice.reducer