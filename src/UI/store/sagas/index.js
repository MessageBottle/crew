import { all, takeEvery, spawn } from 'redux-saga/effects';

import * as actions from '../actions';
import * as crewSaga from './crew';

function* watchCrew() {
    yield all([takeEvery(actions.postCrew, crewSaga.postCrewWorker)]);
}

export default function* rootSaga() {
    yield spawn(watchCrew);
}
