import { RequestOptions } from '../interfaces';

/**
 * Global request options.
 *
 * Compose order is `inline options -> local options -> global options`
 */
export const globalOptions: RequestOptions = {
    baseURL: '/',
    url: '',
    payload: {},
    method: 'get',
    headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    withCredentials: 'auto',
    autoTransformPayload: true,
    middlewares: [],
    body: null,
    responseType: 'json',
    onAbort: null,
    signal: null,
    timeout: 0,
    onDownloadProgress: null,
};
