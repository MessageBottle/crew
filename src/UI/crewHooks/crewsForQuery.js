import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import useCrewInfosForQuery, { queryResultsComparator } from './crewInfosForQuery';
import { FAILED, NOT_FAILED } from './CREW_STATUS';
import { selectCrew } from '../store/crew/slice';
import { deepCompareList } from '../utils/utils';

export function crewResultsComparator(l, r) {
    return queryResultsComparator(l.crewInfoQueryResults, r.crewInfoQueryResults) && deepCompareList(l.crews, r.crews);
}

function useCrewsForQuery(collection, search, sortBy, pageIndex, enteriesPerPage) {
    const [crewInfoQueryStatus, crewInfoQueryResults, retry] = useCrewInfosForQuery(
        collection,
        search,
        sortBy,
        pageIndex,
        enteriesPerPage
    );

    const [status, setStatus] = useState(NOT_FAILED);

    const crewResultsSelector = useCallback(
        store => {
            const crews = [];
            crewInfoQueryResults.crewInfos.forEach(ci => {
                crews.push(ci === undefined ? undefined : selectCrew(store.crew, getCrewIdFromCrewInfo(ci)));
            });
            return { crewInfoQueryResults, crews };
        },
        [crewInfoQueryResults]
    );

    const crewResults = useSelector(crewResultsSelector, crewResultsComparator);

    function fetchCrews() {
        const idOfCrewsToFetch = [];

        crewInfoQueryResults.crewInfos.forEach((ci, i) => {
            if (ci !== undefined && crewResults.crews[i] === undefined) {
                idOfCrewsToFetch.push(getCrewIdFromCrewInfo(ci));
            }
        });

        if (idOfCrewsToFetch.length > 0) {
            setStatus(NOT_FAILED);

            const params = new URLSearchParams();
            idOfCrewsToFetch.forEach(e => {
                params.append('ids', e);
            });

            const baseUrl = 'https://8118cf8f-39ac-49a5-8ade-ed83dfd6e664.mock.pstmn.io';

            axios.get(`${baseUrl}/crew`, { params }).catch(() => {
                setStatus(FAILED);
            });
        }
    }

    useEffect(fetchCrews, [crewResults]);

    if (crewInfoQueryStatus === FAILED) {
        return [FAILED, crewResults, retry];
    }
    if (status === FAILED) {
        return [status, crewResults, fetchCrews];
    }
    return [status, crewResults, retry];
}

export default useCrewsForQuery;
