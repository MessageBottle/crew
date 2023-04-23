import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { FAILED, NOT_FAILED } from './CREW_STATUS';
import { selectQuery } from '../store/query/slice';
import { deepCompareList } from '../utils/utils';

export function queryResultsComparator(l, r) {
    return l.total === r.total && deepCompareList(l.crewInfos, r.crewInfos);
}

function useCrewInfosForQuery(collection, search, sortBy, pageIndex, enteriesPerPage) {
    const startingCrewRankRequested = pageIndex * enteriesPerPage;
    const endingCrewRankRequested = (pageIndex + 1) * enteriesPerPage - 1;

    const queryResultsSelector = useCallback(
        store => {
            const activeQuery = selectQuery(store.query, collection, search, sortBy);
            if (activeQuery) {
                const total = getTotalCrewInfos(activeQuery);
                const crewInfos = [];

                const lastValidRankRequested = min(total - 1, endingCrewRankRequested);
                for (let i = startingCrewRankRequested; i <= lastValidRankRequested; i++) {
                    crewInfos.push(getInfoOfCrewAtRank(activeQuery, i));
                }
                return { total, crewInfos };
            } else {
                const crewInfos = [];
                for (let i = startingCrewRankRequested; i <= endingCrewRankRequested; i++) {
                    crewInfos.push(undefined);
                }
                return { total: endingCrewRankRequested + 1, crewInfos };
            }
        },
        [collection, search, sortBy, startingCrewRankRequested, endingCrewRankRequested]
    );

    const queryResults = useSelector(queryResultsSelector, queryResultsComparator);

    const [status, setStatus] = useState(NOT_FAILED);

    function fetchQuery() {
        setStatus(NOT_FAILED);

        const params = new URLSearchParams({ collection, search, sortBy });
        ranksToFetch.forEach(e => {
            params.append('ranks', e);
        });

        const baseUrl = 'https://8118cf8f-39ac-49a5-8ade-ed83dfd6e664.mock.pstmn.io';

        axios.get(`${baseUrl}/crew`, { params }).catch(() => {
            setStatus(FAILED);
        });
        // don't call if a similar request is already on going
        // cancel previous calls TODO: not cancelling will also do the job, but can cause refetching of same crews multiple times
        // what if a request issues later gets fulfilled first
        // will have to use redux thunk somehow
    }

    useEffect(() => {
        if (queryResults.crewInfos.includes(undefined)) {
            fetchQuery();
        }
    }, [queryResults]);

    if (status === FAILED) {
        return [status, queryResults, fetchQuery];
    }
    return [status, queryResults, fetchQuery];
}

export default useCrewInfosForQuery;
