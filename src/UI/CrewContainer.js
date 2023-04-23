import React, { useState } from 'react';

import useCrewsForQuery from './crewHooks/crewsForQuery';
import { FAILED } from './crewHooks/CREW_STATUS';

function CrewContainer() {
    const [pageIndex, setPageIndex] = useState(0);
    const [enteriesPerPage, setEnteriesPerPage] = useState(10);

    const [crewsForQueryStatus, crewsForQueryResults, retry] = useCrewsForQuery('', '', '', pageIndex, enteriesPerPage);

    return (
        <>
            {crewsForQueryResults.crews.map(c => {
                if (c) {
                    return <div>here is the crew</div>;
                } else {
                    if (crewsForQueryStatus === FAILED) {
                        return <div onClick={retry}>failed, retry</div>;
                    }
                    return <div>loading...</div>;
                }
            })}
            <div>total results: {crewsForQueryResults.crewInfoQueryResults.total}</div>
        </>
    );
}
