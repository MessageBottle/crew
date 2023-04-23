import { call, put } from 'redux-saga/effects';
import * as axios from 'axios';

import * as actions from '../actions';
import { unexpectedError, callIfPresent } from './utils';

const SERVICE_URL = 'https://www.google.com';

const postCrewAPI = payload => axios.post(SERVICE_URL, payload);

export function* postCrewWorker({ payload }) {
    yield callIfPresent(payload.beforeLaunch);

    try {
        const responseWrapper = yield call(postCrewAPI, payload);
        yield put(actions.postCrewSucceded({ response: responseWrapper.data }));

        yield callIfPresent(payload.onSuccess, responseWrapper.data);
    } catch (error) {
        if (error.response) {
            yield put(actions.postCrewFailed());

            yield callIfPresent(payload.onFailure, error.response);
        } else {
            yield call(unexpectedError, error);
        }
    }

    yield callIfPresent(payload.afterLanding);
}
