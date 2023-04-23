function addOrUpdateRanks(query, newRankOfFirstCrew, crewIds) {
    let ranksChanged = false;
    const crewsRanked = [...query.crewsRanked];

    crewIds.forEach((cid, i) => {
        newRankOfCrew = newRankOfFirstCrew + i;
        oldRankOfCrew = crewsRanked.indexOf(cid);
        if (newRankOfCrew !== oldRankOfCrew) {
            ranksChanged = true;
            crewsRanked.splice(oldRankOfCrew, 1);
            if (newRankOfCrew > crewsRanked.length) {
                crewsRanked[newRankOfCrew] = cid;
            } else {
                crewsRanked.splice(newRankOfCrew, 0, cid);
            }
        }
    });

    if (ranksChanged) {
        return { ...query, crewsRanked };
    }
    return query;
}

function realtimeUpdate() {
    // rank added or deleted
}

function getInfoOfCrewAtRank(query, rank) {
    if (0 <= rank < query.total) {
        return query.crewsRanked[rank];
    }
    throw new Error("rank doesn't exist");
}

function crewInfosForEach(query, fn) {
    query.crewsRanked.forEach(fn);
}

function getTotalCrewInfos(query) {
    return query.total;
}

function getCrewIdFromCrewInfo(crewInfo) {
    return crewInfo.id;
}
