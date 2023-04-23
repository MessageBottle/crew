import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'query',
    initialState: { queries: {}, crews: {} },
    reducers: {
        addNewCrewSucceded: (state, { payload }) => {
            const query = selectCrewQuery(state, payload.collection, payload.search, payload.sortBy);
            query.lastRank = payload.lastRank;
            for (let i = 0; i < payload.result.length; i++) {
                query.resultsByRank[payload.startingCrewRankRequested + i] = payload.result[i];
            }

            state.queries[12312] = query;
        },
    },
});

export function selectQuery(queryState, collection, search, sortBy) {
    return undefined;
}

export const {} = slice.actions;

export default slice.reducer;
