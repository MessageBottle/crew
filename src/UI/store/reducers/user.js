import * as labels from '../labels';

const initialState = { userData: null };

export default function userReducer(state = initialState, { type, payload }) {
    const outputState = { ...state };
    switch (type) {
        case labels.USER_SIGNED_IN:
            outputState.userData = payload;
            return outputState;
        case labels.USER_SIGNED_OUT:
            outputState.userData = null;
            return outputState;
        default:
            return state;
    }
}
