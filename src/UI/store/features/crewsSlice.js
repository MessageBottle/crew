import { createSelector, createSlice } from '@reduxjs/toolkit';

import store from '../store';

const initialState = { data: {} };

const slice = createSlice({
    name: 'crews',
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

const selectCrews = createSelector(
    state => state.crews,
    crews => crews
);

export function getCrewsFromStore() {
    return selectCrews(store.getState());
}

export default slice.reducer;
