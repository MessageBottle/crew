import * as labels from '../labels';

const initialState = {};

export default function crewReducer(state = initialState, { type, payload }) {
    const outputState = { ...state };
    switch (type) {
        case labels.POST_CREW_SUCCEDED:
            outputState.data = payload.data;
            return outputState;
        case labels.POST_CREW_FAILED:
            return state;
        default:
            return state;
    }
}
