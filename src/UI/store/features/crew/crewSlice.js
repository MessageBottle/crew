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

export function selectInCrew(pathFn = x => x) {
    return state => pathFn(state.crew);
}

export default slice.reducer;
