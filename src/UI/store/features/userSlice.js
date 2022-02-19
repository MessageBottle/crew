import { createSlice } from '@reduxjs/toolkit';

const initialState = { data: null };

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userSignedIn: (state, { payload }) => {
            state.data = payload;
        },
        userSignedOut: state => {
            state.data = initialState.data;
        },
    },
});

export const { userSignedIn, userSignedOut } = slice.actions;

export function selectUser(pathFn = x => x) {
    return state => pathFn(state.user);
}

export default slice.reducer;
