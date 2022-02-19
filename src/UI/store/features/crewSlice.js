import { createSlice } from '@reduxjs/toolkit';

const initialState = { data: {} };

const slice = createSlice({
    name: 'crew',
    initialState,
    reducers: {
        getCrewSucceded: (state, { payload }) => {
            state.data = { ...state.data, ...payload.wholeCrewData };
        },
        postCrewSucceded: (state, { payload }) => {
            state.data[payload.crewId] = payload.crewData;
        },
    },
});

export const { getCrewSucceded, postCrewSucceded } = slice.actions;

export function selectCrew(pathFn = x => x) {
    return state => pathFn(state.crew);
}

export default slice.reducer;
