import { useSelector } from 'react-redux';

const Pagination = (pageIndex, setPageIndex, enteriesPerPage) => {
    const activeQuery = useSelector(store => selectQuery(store.query, collection, search, sortBy));

    const totalPages = getTotalCrewInfos(activeQuery) / enteriesPerPage;

    const pagesOverview = [];
    for (let p = 0; p < totalPages; p++) {
        const data = { available: true };

        const firstRankOnPage = p * enteriesPerPage;
        const lastRankOnPage = (p + 1) * enteriesPerPage - 1;
        const lastValidRankOnPage = min(getTotalCrewInfos(activeQuery) - 1, lastRankOnPage);

        for (let r = firstRankOnPage; r <= lastValidRankOnPage; r++) {
            const crewInfo = getInfoOfCrewAtRank(activeQuery, r);
            if (crewInfo) {
                pagesOverview[pageIndexOfRank] = { ...current, available: current ? current.available : true };
            } else {
                data.available = false;
                pagesOverview[pageIndexOfRank] = { ...current, available: false };
            }
        }

        pagesOverview.push(data);
    }
    crewInfosForEach(activeQuery, (crewInfo, rank) => {
        const pageIndexOfRank = (rank + 1) / enteriesPerPage - 1;
        const current = pagesOverview[pageIndexOfRank];
    });

    return (
        <div>
            <div>selected: {pageIndex + 1}</div>
            <div>total: {totalPages}</div>
        </div>
    );
};
