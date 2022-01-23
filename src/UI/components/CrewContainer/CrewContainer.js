import React, { useContext, useReducer } from 'react';
import CrewDetails from '../CrewDetails/CrewDetails';
import CrewList from '../CrewList/CrewList';
import reducer from './reducer';

export const CrewContainerContext = useContext(null);

const CrewContainer = () => {
    const [crewStore, crewDispatch] = useReducer(reducer, {
        selected: '1',
        list: {
            1: { data: 'Crew1' },
            2: { data: 'Crew2' },
            3: { data: 'Crew3' },
            4: { data: 'Crew4' },
        },
    });

    return (
        <CrewContainerContext.Provider value={{ crewStore, crewDispatch }}>
            <CrewList />
            <CrewDetails />
        </CrewContainerContext.Provider>
    );
};

export default CrewContainer;
