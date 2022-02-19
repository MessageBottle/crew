import { createSelector, createSlice } from '@reduxjs/toolkit';

import store from '../store';

const initialState = { auth: null, userSettings: null };

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userSignedIn: (state, { payload }) => {
            state.auth = payload;
        },
        userSignedOut: state => {
            state.auth = initialState.auth;
        },
        userSettings: (state, { payload }) => {
            state.userSettings = payload;
        },
    },
});

export const { userSignedIn, userSignedOut, userSettings } = slice.actions;

const selectUser = createSelector(
    state => state.user,
    user => user
);

export function getUserFromStore() {
    return selectUser(store.getState());
}

export default slice.reducer;
