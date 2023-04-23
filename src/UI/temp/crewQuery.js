import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectCrewQuery } from '../store/query/slice';

function useCrewQuery(collection, search, sortBy, page, enteriesPerPage) {
    const activeQuery = useSelector(store => selectCrewQuery(store.crew, collection, search, sortBy));

    const [hasFailed, setHasFailed] = useState(false);

    function fetchQueryResults() {
        setHasFailed(false);
        // fetch activeQuery from backend, collection, search, sortBy, from rank this to this
        setHasFailed(true);
    }

    const triggerFetchQueryResults = useRef(false);
    triggerFetchQueryResults.current = false;

    useEffect(() => {
        // cancel all fetch calls made by this useeffect or by fetchQueryResults()
        if (triggerFetchQueryResults.current) {
            fetchQueryResults();
        }
    }, [activeQuery, page, enteriesPerPage]);

    if (activeQuery) {
        const crewResultsForQuery = [];

        const startingCrewRankRequested = (page - 1) * enteriesPerPage + 1;
        const endingCrewRankRequested = page * enteriesPerPage;
        const lastRankNeeded = min(activeQuery.lastRank, endingCrewRankRequested);
        for (let i = startingCrewRankRequested; i <= lastRankNeeded; i++) {
            const crew = activeQuery.resultsByRank[i];

            if (crew === undefined) {
                if (hasFailed) {
                    return [null, fetchQueryResults];
                }
                triggerFetchQueryResults.current = true;
                return [undefined, undefined];
            } else {
                crewResultsForQuery.push(crew);
            }
        }

        return [crewResultsForQuery, undefined];
    } else {
        if (hasFailed) {
            return [null, fetchQueryResults];
        }
        triggerFetchQueryResults.current = true;
        return [undefined, undefined];
    }
}

export default useCrewQuery;
