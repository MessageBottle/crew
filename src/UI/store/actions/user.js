import * as labels from '../labels';

export const userSignedIn = payload => {
    return {
        type: labels.USER_SIGNED_IN,
        payload,
    };
};

export const userSignedOut = payload => {
    return {
        type: labels.USER_SIGNED_OUT,
        payload,
    };
};
