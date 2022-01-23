import * as labels from '../labels';

export const getCrew = payload => ({
    type: labels.GET_CREW,
    payload,
});

export const postCrew = payload => ({
    type: labels.POST_CREW,
    payload,
});

export const postCrewSucceded = payload => ({
    type: labels.POST_CREW_SUCCEDED,
    payload,
});

export const postCrewFailed = payload => ({
    type: labels.POST_CREW_FAILED,
    payload,
});