/*
 * Sagas
 *
 * redux-saga 是一个用于管理 Redux 应用异步操作的中间件（又称异步 action）。
 * 可以用来代替 redux-thunk 
 * 
 */

import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_REPOS } from '../BasePage/actionTypes';
import { reposLoaded, repoLoadingError } from '../BasePage/actions';

import request from 'utils/request';
import { selectUsername } from './selectors';


export function* getRepos() {
    const username = yield select(selectUsername());
    const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

    const repos = yield call(request, requestURL);

    if (!repos.err) {
        yield put(reposLoaded(repos.data, username));
    } else {
        yield put(repoLoadingError(repos.err));
    }
}


export function* getReposWatcher() {
    while (yield take(LOAD_REPOS)) {
        yield call(getRepos);
    }
}


export function* githubData() {
    const watcher = yield fork(getReposWatcher);

    yield take(LOCATION_CHANGE);
    yield cancel(watcher);
}

export default [
    githubData,
];
