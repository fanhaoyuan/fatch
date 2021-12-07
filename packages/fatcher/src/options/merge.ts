import { merge } from 'utils-shared';

/**
 * Merge multi-options to one.
 *
 * A new object of request options.
 */
export function mergeOptions<T>(mergedOptions: T, ...options: Partial<T>[]): T {
    return merge({}, mergedOptions, ...options);
}
