import React, { useContext } from 'react';
import { CrewContainerContext } from '../CrewContainer/CrewContainer';
import CrewWrapper from '../CrewWrapper/CrewWrapper';

const CrewList = () => {
    const crewObjectsList = useContext(CrewContainerContext);

    return (
        <div>
            {crewObjectsList.map(crew => (
                <CrewWrapper key={crew.key} />
            ))}
        </div>
    );
};

export default CrewList;
