export const actions = {};

const reducer = (currentState, action) => {
    switch (action.type) {
        case actions.PUSH:
            return [...currentState, action.value];
        default:
            return currentState;
    }
};
export default reducer;
