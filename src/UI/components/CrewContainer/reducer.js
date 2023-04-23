const initialState = {
    selected: '1',
    list: {
        1: { data: 'Crew1' },
        2: { data: 'Crew2' },
        3: { data: 'Crew3' },
        4: { data: 'Crew4' },
    },
};

const actions = {};

function reducer(currentState, action) {
    switch (action.type) {
        case actions.PUSH:
            return [...currentState, action.value];
        default:
            return currentState;
    }
}

export { initialState, actions, reducer };
