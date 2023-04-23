import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'crew',
    initialState: {},
    reducers: {
        addCrew: (state, { payload }) => {
            if (state[payload.id] === undefined) {
                state[payload.id] = { metaData: null, data: payload };
            }
        },
        addCrewGivenInList: (state, { payload }) => {
            if (state[payload.id] === undefined) {
                state[payload.id] = payload;
            }
        },
        updateCrewAddIf: (state, { payload }) => {
            state[payload.id] = payload;
        },
        addOrUpdateCrewGivenInList: (state, { payload }) => {
            payload.forEach(e => {
                state[e.id] = e;
            });
        },
        removeCrewWithId: (state, { payload: crewId }) => {
            delete state[crewId];
        },
        removeCrewWithIdGivenInList: (state, { payload: crewIds }) => {
            crewIds.forEach(id => {
                delete state[id];
            });
        },
    },
});

export function selectCrew(crewState, crewId) {
    return crewState[crewId];
}

export const { addOrUpdateCrew, addOrUpdateCrewGivenInList, removeCrewWithId, removeCrewWithIdGivenInList } =
    slice.actions;

export default slice.reducer;
