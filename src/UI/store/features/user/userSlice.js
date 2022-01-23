import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'crew',
    initialState: { data: null },
    reducers: {
        postCrewSucceded: (state, { payload }) => {
            state.data = payload;
        },
        postCrewFailed: () => {},
    },
});

export const { postCrewSucceded, postCrewFailed } = slice.actions;

export const selectCrew = state => state.user;

export default slice.reducer;
