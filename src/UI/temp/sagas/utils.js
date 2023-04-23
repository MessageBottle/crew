import { toast } from 'react-toastify';
import { call } from 'redux-saga/effects';

export function callIfPresent(...args) {
    const [callback, ...rest] = args[0];
    if (callback) {
        return call(callback, ...rest);
    }
    return undefined;
}

export function unexpectedError(error) {
    if (error.request) {
        toast.error('Connection failed, please retry');
    } else {
        toast.error(`Request failed: ${error.message}`);
    }
}
