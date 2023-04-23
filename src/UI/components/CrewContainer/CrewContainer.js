import React, { useContext, useReducer } from 'react';
import CrewDetails from '../CrewDetails/CrewDetails';
import CrewList from '../CrewList/CrewList';
import { initialState, reducer } from './reducer';

export const CrewContainerContext = useContext(null);

const CrewContainer = () => {
    const [crewStore, crewDispatch] = useReducer(reducer, initialState);

    return (
        <CrewContainerContext.Provider value={{ crewStore, crewDispatch }}>
            <CrewList />
            <CrewDetails />
        </CrewContainerContext.Provider>
    );
};

export default CrewContainer;
