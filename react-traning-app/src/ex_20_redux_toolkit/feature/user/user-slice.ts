import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UserState {
    name: string;
    ip: string;
    isIPLoading: boolean;
}

interface IPResponse {
    ip: string;
}

const initialState: UserState = {
    name: '',
    ip: '',
    isIPLoading: false,
}

interface SetNameAction {
    payload: string;
}

export const getUserIPAddress = createAsyncThunk('user/getIP', async() => {
    const response = await fetch('https://api.ipify.org?format=json');
    const result: IPResponse = await response.json();
    return result.ip;
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName: (state, action: SetNameAction) => {
            state.name = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserIPAddress.fulfilled, (state, action) => {
            state.ip = action.payload;
            state.isIPLoading = false;
        })
        builder.addCase(getUserIPAddress.pending, (state, action) => {
            state.isIPLoading = true;
        })
    }
})

export const { setName } = userSlice.actions;